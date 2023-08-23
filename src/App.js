import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./component/ChatBox";
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="w-full min-h-screen bg-[#1c2c4c] text-[#4c768d] pt-[60px]">
      <Navbar/>
      {user ? <ChatBox/> : <Welcome/>}
    </div>
  );
}

export default App;
