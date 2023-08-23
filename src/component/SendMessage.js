import { Button, Input } from "@material-tailwind/react";

const SendMessage = () => {
  return (
    <form className="fixed w-full bg-[#0a192f] px-[30px] py-5 bottom-0 rounded-md">
      <div className="relative flex w-full">
        <Input
          id="messageInput"
          name="messageInput"
          type="text"
          label="Enter Message"
          color="blue"
        />
        <Button
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
