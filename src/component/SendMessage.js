import { Button, Input } from "@material-tailwind/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebase";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { uid, displayName, photoURL } = auth.currentUser;

    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed w-full bg-[#0a192f] px-[30px] py-5 bottom-0 rounded-md"
    >
      <div className="relative flex w-full">
        <Input
          id="messageInput"
          name="messageInput"
          type="text"
          label="Enter Message"
          color="blue"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
            type="submit"
          size="sm"
          color="blue"
          className="!absolute right-1 top-1 rounded"
        >
          Send
        </Button>
      </div>
    </form>
  );
};

export default SendMessage;
