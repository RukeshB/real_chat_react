import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = (props) => {
    const [user] = useAuthState(auth);
  return (
    <div  className={`chat-bubble ${props.message.uid === user.uid ? "right" : ""}`}>
      <img className="chat-bubble__left" src={props.message.avatar} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">{props.message.name}</p>
        <p className="user-message">{props.message.text}</p>
      </div>
    </div>
  );
};

export default Message;
