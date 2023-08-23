import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import GoogleSignin from '../assets/image/btn_google_signin_dark_pressed_web.png'

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
    <nav className="flex items-center justify-between bg-[#0a192f] text-gray-400 h-[60px] fixed w-full z-[1] px-[30px] py-2.5 left-0 top-0">
      <h1 className="text-xl">
        Real <span className="font-bold text-blue-700 font-2xl">Chat</span>
      </h1>
      {user ? (
        <button
          onClick={handleSignOut}
          className="text-[#88dded] border bg-[#1c2c4c] font-semibold px-2.5 py-[5px] rounded-[5px] border-solid border-[#1c2c4c]"
          type="button"
        >
          Sign Out
        </button>
      ) : (
        <button className="bg-transparent border-[none]">
          <img
            className="h-[30px] w-auto"
            onClick={handleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
