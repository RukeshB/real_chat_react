const Navbar = () => {

  return (
    <div className="fixed bg-[#0a192f] flex justify-between items-center w-screen px-10 py-2 h-14 text-white z-10">
      {/* logo */}
      <div className="text-xl">
        Real <span className="font-bold font-2xl text-blue-700">Chat</span>
      </div>

      <div className="text-xl hover:text-blue-700 cursor-pointer">
        Login
      </div>

     
    </div>
  );
};

export default Navbar;
