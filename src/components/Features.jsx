import React from 'react'

const Features = () => {
  return (
    <div>
        <div className="">
        {/* this is the div of card icon */}
        <div className="flex justify-center items-center">
          <div className="bg-blue-700  h-8 w-8 text-center rounded-full ">
            <i class=" ri-user-line"></i>
          </div>
        </div>
        {/* This is the heading without div */}
        <div>
          
          <h1 className=" font-bold text-3xl leading-[130%] tracking-wider text-center">
            Peoples always loves
            <br />
             our products
          </h1>
          <div className="flex max-w-6xl mx-auto gap-6">
        <img
          className="w-auto"
          src="/src/photos/Middle-Section.png"
          alt="Middle section img "
        />
        <img className="w-auto hidden md:block absolute left-96"  src="/src/photos/headphone-2.png" alt="" />
        </div>
      </div>
      </div>
          
    </div>
  )
}

export default Features
