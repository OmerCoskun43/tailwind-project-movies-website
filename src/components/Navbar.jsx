import { useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  const [mode, setMode] = useState("dark");
  console.log(mode);

  if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <header className="dark:bg-gradient-to-r from-slate-800 to-slate-300  bg- py-3 lg:py-4 font-font1 text-kara uppercase relative ">
      <div className="fixed top-2 flex flex-col  gap-2 left-2 lg:top-3 lg:left-10">
        <i
          onClick={() => setMode("dark")}
          className="fa-solid hover:text-yellow-400 cursor-pointer fa-sun md:text-[25px] text-[20px]  text-red-500 "
        ></i>
        <i
          onClick={() => setMode("light")}
          className="fa-solid fa-moon hover:text-yellow-400 cursor-pointer  md:text-[25px] text-[20px]  pl-[2px] text-red-500 "
        ></i>
      </div>
      <div className=" lg:container  lg:mx-auto px-5 lg:p-x-0 flex items-center justify-between space-x-8 lg:space-x-16  ">
        <a
          // to="/"
          href="#"
          className="text-3xl lg:text-5xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-yellow-500 "
        >
          FICO
        </a>

        <div className="block md:hidden">
          <div className="space-y-1 cursor-pointer">
            <div className="bg-kara w-8 h-1 rounded-full"></div>
            <div className="bg-kara w-8 h-1 rounded-full"></div>
            <div className="bg-kara w-8 h-1 rounded-full"></div>
          </div>
        </div>
        <nav className="hidden md:flex justify-between flex-1">
          <div className="flex items-center lg:space-x-6 space-x-4  lg:text-xl font-bold ">
            <a href="#" className="hover:text-red-700 transition duration-500">
              {" "}
              CELEBRITIES
            </a>
            <a href="#" className="hover:text-red-700 transition duration-500">
              {" "}
              BLOG
            </a>
            <a href="#" className="hover:text-red-700 transition duration-500">
              NEWS
            </a>
            <a href="#" className="hover:text-red-700 transition duration-500">
              ABOUT
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-8 ">
            <form>
              <div
                className="p-x-4 mx-4 py-1 
              border-b border-r border-gri
              hover:border-b-hidden hover:border-b hover:border-r hover:border-yellow-500
              transition duration-500
              rounded-3 group   flex 
              "
              >
                <input
                  type="text"
                  className="text-red-700 font-bold  bg-transparent w-11 lg:w-44   focus:outline-none"
                />
                <button className=" ">
                  <i className="fas fa-search px-2 group-hover:text-red-700 "></i>
                </button>
              </div>
            </form>
            <div className="flex items-center space-x-4 lg:space-x-8 text-sm lg:text-lg">
              <a href="#"> Login</a>
              <a
                className="text-white bg-red-700 p-[12px] rounded-3 hover:bg-red-600  transition duration-500 whitespace-nowrap"
                href="#"
              >
                {" "}
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
