import React from "react";
import "./style.css";

const Testominal = () => {
  return (
    <>
      <div className="flex " id="test">
        <div className="testimonial_L -mr-96 ml-8  md:block  hidden "></div>
        <div className=" -mr-96    ">
          <div className="     flex flex-col items-center justify-around mt-24 ">
            <div className="">
              {/* this is the div of card icon */}
              <div className="flex justify-center items-center">
                <div className="bg-blue-700  h-8 w-8 text-center rounded-full ">
                  <i class=" ri-user-line"></i>
                </div>
              </div>
              {/* This is the heading without div */}
              <div className="">
                <h1 className=" font-bold text-3xl   leading-[130%] tracking-wider text-center">
                  Peoples always loves
                  <br />
                  our products
                </h1>
              </div>
            </div>
            {/* this is the parent div of whole testominal */}
            <div className="bg-slate-200 md:w-full w-[340px] mx-4  ">
              {/* this the main div of testimonial card */}
              <div className="flex justify-between items-center p-6">
                {/* this the div of testimonial card stars */}
                <div className="flex gap-1 ">
                  <i class="text-yellow-400 ri-star-fill"></i>
                  <i class="text-yellow-400 ri-star-fill"></i>
                  <i class="text-yellow-400 ri-star-fill"></i>
                  <i class="text-yellow-400 ri-star-fill"></i>
                  <i class="text-yellow-400 ri-star-fill"></i>
                </div>
                <div className="">
                  <h1 className="ml-16 font-bold">"Design Quality"</h1>
                </div>
              </div>

              {/* Card paragraph */}
              <div className=" justify-between pl-6 pr-2 pb-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magnam vel corrupti consequuntur magnition deleniti nam
                  reprehenderit! Veniam voluptatem opti id itaque quidem
                  repellendus ex nesciunt labore, fugiat inventore, tempore
                  natus.
                </p>
                <h1 className="font-bold">Carolina Monntoya</h1>
                <h1 className="font-bold text-blue-500">Founder,Uithemes</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial_R mr-8 md:block hidden"></div>
      </div>
    </>
  );
};
// added comment
export default Testominal;
