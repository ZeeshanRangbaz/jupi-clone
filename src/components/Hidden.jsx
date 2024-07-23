import React from "react";
import Plans from "./Plans";
const Hidden = () => {
  return (
    <div id="pric">
      <div
        style={{
          backgroundImage: "url('/src/photos/price-bg-v3.png')",
          backgroundSize: "cover",
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}
      >
        <div className="text-center p-8 space-y-7 text-white h- flex flex-col justify-center items-center">
          <div className="bg-blue-700  h-8 w-8  rounded-full ">
            <i class=" ri-user-line"></i>
          </div>
          <h1 className=" font-bold text-5xl leading-[130%] tracking-wider">
            No Hidden charge
            <br className="lg:block hidden" />
            Choose yours plan
          </h1>
          {/* its come from plans.jsx */}
          <div className="flex flex-wrap gap-4 list-none ">
            <div className="">
              <Plans title="Free" price="$0" />
            </div>

            <div className="">
              <Plans title="Individual" price="$29" />
            </div>
            <div className="">
              <Plans title="Business" price="$59" />
            </div>
            <div className="">
              <Plans title="Premium" price="$89" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hidden;
