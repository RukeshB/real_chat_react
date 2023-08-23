import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  return (
    <main className="chat-box">
      <div className="mb-[60px] p-[30px]">
        <Message />
      </div>
      <SendMessage />
    </main>
  );
};

export default ChatBox;