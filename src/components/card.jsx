import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div className=" h-60 w-54  flex flex-col text-center justify-center  bg-slate-200 mt-2 hover:scale-110 shadow-md shadow-gray-300">
      <div className=" flex justify-center items-center ">
        {" "}
        <div className="bg-blue-700  h-8 w-8 text-center rounded-full ">
          <i class={`${icon}`}></i>
        </div>
      </div>
      <h1 className="font-[700]">{title}</h1>
      <p className="p-5">{description}</p>
    </div>
  );
};

export default Card;
