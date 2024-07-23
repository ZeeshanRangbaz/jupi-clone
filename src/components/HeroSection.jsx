import React from "react";
import Card from "./card";
import Testominal from "./Testominal";
import Features from "./Features";
import Hidden from "./Hidden";

export default function HeroSection() {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/src/photos/header-v3-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "100px",
        }}
      >
        <div className="text-center p-8 space-y-7 text-white h- flex flex-col justify-center">
          <h1 className=" font-bold text-5xl leading-[130%] tracking-wider">
            The best landing page <br className="lg:block hidden" />
            for your digital product
          </h1>

          <p className="">
            Our cloud computing platform was built with simplicity so managing{" "}
            <br />
            infrastructure is easy
          </p>
          <button className="bg-white w-[200px] mx-auto text-black rounded-lg px-8 py-4 text-center">
            Discover Now
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="src/photos/headphone-1-800x800.png"
            className="w-[62%]"
            alt=""
          />
        </div>
      </main>
      {/* Here is our  book section */}
      <div className="grid  max-w-6xl mx-auto gap-8">
        <img
          className="hidden md:block  h-15 lg:col-span-6 md:col-span-12"
          src="/src/photos/Middle-Section.png"
          alt="Middle section img "
        />
        <div className="mt-36 ">
          <h1 className=" font-bold text-5xl leading-[130%] tracking-wider">
            Book your flights from anywhere
          </h1>

          <p className="">
            Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue
            consequat. In posuere, nunc sit amet laoreet blandit, urna sapien
            imperdiet lectus, et molestie sem tortor quis dui. <br />
            infrastructure is easy
          </p>
          <button className="bg-purple-500 w-[180px]  mx-auto text-white rounded-lg px-8 py-4 text-center mt-4">
            Discover Now
          </button>
        </div>
      </div>
      {/* Here is our  watch section */}
      <div className="flex pl-10 pt-10 md:pt-0 md:pl-0 max-w-6xl mx-auto gap-2 ">
        <div className="md:flex md:flex-col  md:justify-center  gap-3">
          <h1 className=" font-bold text-5xl leading-[130%] ">
            World best water resistant watch.
          </h1>

          <p className="">
            Duis rhoncus dui venenatis consequat porttitor. Etiam aliquet congue
            consequat. In posuere, nunc sit amet laoreet blandit, urna sapien
            imperdiet lectus, et molestie sem tortor quis dui.
          </p>
          <button className="bg-purple-500 w-[200px] mx-auto text-white rounded-lg px-8 py-4 text-center">
            Discover Now
          </button>
        </div>

        <img
          className="w-10px hidden md:block"
          src="/src/photos/Middle-SectioN.png"
          alt="Middle section img "
        />
      </div>
      {/* its a center paragraph */}
      <h1 className="font-bold text-5xl leading-[130%] tracking-wider text-center p-5 md:p-20">
        Much more exclusive features
      </h1>
      {/* Here is image or sides cards */}
      {/*its first div of 2 cards */}
      <div className="flex max-w-6xl mx-auto gap-6">
        <img
          className="w-auto hidden md:block"
          src="/src/photos/Middle-Section.png"
          alt="Middle section img "
        />
        <img
          className="absolute md:block hidden left-96"
          src="/src/photos/headu.png"
          alt=""
        />
        <div className="flex  px-5 md:w-full  gap-3 mt-20">
          <div className="flex flex-col ">
            <div className="">
              <Card
                title="Pixel Perfect"
                icon="ri-timer-line"
                description=" In at iaculis lorem ipsum. raesent tempor dictum tellus ut
              molestie."
              />
            </div>
            <div></div>
            <div className="">
              <Card
                title="Cloud Service"
                icon="ri-cloud-line"
                description=" In at iaculis lorem ipsum. raesent tempor dictum tellus ut molestie. "
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="">
              <Card
                title="Vector Editing"
                icon="ri-crop-2-line"
                description=" In at iaculis lorem ipsum. raesent tempor dictum tellus ut molestie. "
              />
            </div>
            <div className="">
              <Card
                title="Export Presets"
                icon="ri-export-line"
                description=" In at iaculis lorem ipsum. raesent tempor dictum tellus ut molestie. "
              />
            </div>
          </div>
        </div>
      </div>
      <Testominal  />
      <Features />
      <div className="pt-40">
        <Hidden />
      </div>
    </>
  );
}
