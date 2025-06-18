import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-24">
      <h1 className="text-6xl font-semibold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className="py-4 px-14 m-2 bg-gray-500 text-lg rounded-sm">
          Play
        </button>
        <button className="py-4 px-14 m-2 bg-gray-500  text-lg rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
