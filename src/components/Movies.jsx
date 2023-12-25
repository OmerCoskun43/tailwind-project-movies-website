/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Movies = () => {
  return (
    <div className="lg:py-[7rem] py-4  dark:bg-black bg-slate-300">
      <div className="container">
        <div className="flex container flex-col md:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
          <div className="basis-2/3 ">
            <div className="flex space-x-2 divide-x divide-red-700 divide-opacity-50 mb-8   text-lg dark:text-white  text-red-700    ">
              <h2 className="hover:text-red-700 transition duration-500">
                {" "}
                <a href="#">Latest</a>
              </h2>
              <h2 className="hover:text-red-700 pl-2  transition duration-500">
                {" "}
                <a href="#">Popular</a>
              </h2>
              <h2 className="hover:text-red-700 pl-2 transition duration-500">
                {" "}
                <a href="#">Best</a>
              </h2>
            </div>
            <div className="flex flex-wrap   ">
              <div className="group cursor-pointer    relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-1.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01] group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-2.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01]  group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-3.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01] group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-4.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01] group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-5.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01] group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer relative overflow-hidden basis-1/3">
                <img
                  src="./images/mv-6.jpg"
                  alt="mv-1"
                  className=" group-hover:scale-110 group-hover:opacity-50 duration-500 h-full"
                />
                <div className="absolute text-[10px] md:text-base lg:text-lg px-1 lg:px-3   bottom-8 text-white">
                  <h3 className="text-red-700 hover:text-yellow-500 group-hover:mb-2 duration-500 font-bold">
                    TITANIC
                  </h3>
                  <p className=" opacity-[0.01] group-hover:opacity-100 lg:group-hover:mb-10 group-hover:mb-1 duration-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, nesciunt.
                  </p>
                  <div className="absolute flex lg:space-x-8 ml-4 space-x-4 opacity-[0.01] group-hover:opacity-100 duration-500">
                    <a href="#">
                      <i className="fa-solid fa-play hover:text-red-700"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-arrow-right hover:text-red-700"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3  dark:text-red-700 text-black pl-10  ">
            <h2 className="lg:text-lg mb-[25px]">HOT NEWS</h2>
            <div className="flex flex-col h-full pb-[42px]  gap-2  md:gap-0 justify-between items-center  ">
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new1.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3 dark:text-white  text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2  mt-1 font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new2.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3 dark:text-white text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2  mt-1 font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new3.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3  dark:text-white  text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2  mt-1 font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new4.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3  dark:text-white  text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2  mt-1 font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new5.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3  dark:text-white  text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2  mt-1 font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
              <div className="flex items-center group ">
                <div className="basis-1/3 h-full">
                  <img src="./images/new6.jpg " alt="" className=" " />
                </div>
                <div className="pl-2 basis-2/3  dark:text-white  text-red-700 hover:text-yellow-500 cursor-pointer duration-500 ">
                  <p className="lg:text-sm  text-[10px] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam
                  </p>
                  <p className="lg:text-sm  text-[10px] lg:mt-2   font-bold">
                    ON DECEMBER 01 01 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
