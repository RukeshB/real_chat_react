import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="fixed bg-[#0a192f] flex justify-between items-center w-screen px-10 py-2 h-14 text-white z-10">
      {/* logo */}
      <div className="text-xl">
        Real <span className="font-bold text-blue-700 font-2xl">Chat</span>
      </div>

      {user ? (
        <div
          className="text-xl cursor-pointer hover:text-red-700"
          onClick={handleSignOut}
        >
          LogOut
        </div>
      ) : (
        <div
          className="text-xl cursor-pointer hover:text-blue-700"
          onClick={handleSignIn}
        >
          Login
        </div>
      )}
    </div>
  );
};

export default Navbar;
