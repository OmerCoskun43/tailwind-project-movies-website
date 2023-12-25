/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div className="h-[20rem] md:h-[24rem] lg:h-[28rem]  group relative">
      <img
        src="https://images2.alphacoders.com/694/694042.jpg"
        alt=""
        className="h-full w-full object-fill"
      />
      <div className="absolute bottom-0 w-full  bg-gradient-to-b from-transparent to-black">
        <div className="container">
          <h3 className="text-yellow-500 tracking-wider group-hover:mb-1 duration-500  ">
            Thriller, Drama, Action
          </h3>
          <h1 className="text-kara text-4xl md:text-6xl group-hover:mb-1 duration-500 ">
            The Blood Diamond
          </h1>
          <p className="text-white text-sm lg:text-base group-hover:mb-2 duration-500 w-3/4  lg:w-2/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus illum distinctio at? Exercitationem, corrupti iure
            vitae atque autem possimus deserunt.
          </p>
          <div className="flex space-x-8 opacity-[0.01] group-hover:opacity-100   mb-10 lg:mb-20 transition duration-1000">
            <div className="flex space-x-2   items-center cursor-pointer ">
              <a
                to="#"
                className="navi  text-white transition duration-500 uppercase lg:text-lg"
              >
                watch trailer
              </a>
              <div className="flex h-8  w-8 text-center justify-center items-center rounded-full bg-yellow-500 hover:bg-red-700 ">
                {" "}
                <i className="fas fa-play"></i>{" "}
              </div>
            </div>
            <div className="flex space-x-2   items-center cursor-pointer ">
              <a
                href="#"
                className="navi   text-white transition duration-500 uppercase"
              >
                Full Detail
              </a>
              <div className="flex h-8 w-8 text-center justify-center items-center rounded-full bg-yellow-500  hover:bg-red-700">
                {" "}
                <i className="fas fa-arrow-right"></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-3 absolute bottom-5 lg:left-[7.7rem] left-[3.3rem] opacity-[0.01] group-hover:opacity-100">
        <div className="h-3 w-3   lg:w-4 lg:h-4 rounded-full bg-white"></div>
        <div className="h-3 w-3   lg:w-4 lg:h-4 rounded-full bg-red-700"></div>
        <div className="h-3 w-3   lg:w-4 lg:h-4 rounded-full bg-red-700"></div>
        <div className="h-3 w-3   lg:w-4 lg:h-4 rounded-full bg-red-700"></div>
      </div>
    </div>
  );
};

export default Main;
