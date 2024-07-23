import React from "react";
// here it can coonect with hidden its a  function card
const Plans = ({ title, price }) => {
  return (
    <div className=" h-70 w-60  flex flex-col text-center justify-center  bg-white mt-2 rounded-xl text-black">
      <h1 className="font-[700] lg:text-xl md:text-sm  pt-6 pb-3">{title}</h1>
      <h1 className="font-[1000] text-2xl text-black">{price}</h1>

      <p className="p-5">
        <div className="text-indigo-800">
          <li>15 users</li>
          <li>Features 2</li>
          <li>Features 3</li>
          <li>Features 4</li>
        </div>
      </p>
      <div className=" flex justify-center items-center ">
        {" "}
        <button className="lg:bg-blue-500 md:bg-red-500 w-[96px] mx-auto text-white mb-6 rounded-lg px-4 py-2 text-center">
          Get Plan
        </button>
      </div>
    </div>
  );
};

export default Plans;
