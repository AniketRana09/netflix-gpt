import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black aspect-video  z-10 ">
      <h1 className="text-2xl md:text-6xl font-semibold">{title}</h1>
      <p className="hidden md:inline-block  w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className=" px-1 py-1 md:py-4 md:px-14 md:m-2 mt-1 bg-white text-lg text-black rounded-lg hover:bg-white/60">
          ▶ Play
        </button>
        <button className=" hidden md:inline-block py-4 px-14 m-2 bg-gray-500/40  text-lg rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
