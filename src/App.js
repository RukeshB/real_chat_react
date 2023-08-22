import { useAuthState } from "react-firebase-hooks/auth";
import ChatBox from "./component/ChatBox";
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Navbar/>
      {user ? <ChatBox/> : <Welcome/>}
    </div>
  );
}

export default App;
