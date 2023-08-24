import Message from "./Message";
import SendMessage from "./SendMessage";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { db } from "../firebase";

const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    // onSnapshot function which listens to changes in the document
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });

      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );

      setMessage(sortedMessages);
    });

    return () => unsubscribe;
  }, []);

  const messageComponents = message?.map((element) => {
    return <Message key={element.id} message={element} />;
  });
  return (
    <main className="chat-box">
      <div className="mb-[60px] p-[30px]">
        {messageComponents}
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
