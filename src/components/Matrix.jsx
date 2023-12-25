import React from "react";

const Matrix = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-700 to-blue-500 h-60 ">
      <div className="container flex gap-5 items-center justify-center relative ">
        <div className="basis-1/2">
          <img
            className="absolute top-8 md:top-5 rounded-5 lg:w-[500px] lg:h-[200px] w-[200px] h-[150px] shadow-xl shadow-black"
            src="https://images6.alphacoders.com/112/1126390.jpg"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <div className="flex flex-col justify-center mt-4">
            <h3 className="text-yellow-500 sm:text-sm tracking-wider md:text-xl">
              {" "}
              ACTION DRAMA ROMANTIC
            </h3>
            <h2 className="sm:text-sm  text-red-700 font-bold md:text-lg ">
              {" "}
              No Country For Old Men{" "}
            </h2>
            <p className="text-[10px] text-white md:text-lg mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              omnis tenetur nulla nisi. Qui quae maiores aliquam modi impedit
              harum.
            </p>
            <h3 className="text-yellow-500 tracking-wider text-[12px] md:text-lg">
              {" "}
              10 wins 50 Nomination
            </h3>
          </div>
        </div>
        <div
          className="absolute lg:top-[-3rem] lg:left-[-5rem] lg:w-24 lg:h-24 
        h-14 w-14 lg:text-lg text-[10px] -top-8 left-1
        bg-gri rounded-full flex justify-center items-center text-center text-yellow-400 font-bold  -rotate-45"
        >
          {" "}
          Sooner or Later
        </div>
      </div>
    </div>
  );
};

export default Matrix;
