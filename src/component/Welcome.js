import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../assets/image/btn_google_signin_dark_pressed_web.png'
import { auth } from '../firebase';

const Welcome = () => {
    const handleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    };

  return (
    <main className="flex flex-col justify-center items-center text-[#7cc5d9] mt-10 p-[30px] w-full h-[80vh]">
      <h2 className="mb-5 text-4xl font-semibold">Welcome to Real Chat</h2>
      {/* <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} /> */}
      <p className="mb-5 text-gray-400">Sign in with Google to chat with with your fellow friends</p>
      <button className="bg-transparent border-[none]">
        <img
          onClick={handleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
          className='h-[30px] w-auto'
        />
      </button>
    </main>
  );
};

export default Welcome;