"use client"

import React from "react";
// import "/My-Portfolio/src/App.css"; // Assuming animation keyframes go here or in global CSS

const MovingText = () => {
  return (
    <div className="overflow-hidden py-4 my-8  rounded-lg">
      <div className="whitespace-nowrap animate-marquee hover:[animation-play-state:paused] flex gap-6 items-center">
        <span   style={{ textShadow: "4px 4px 0px #f97316" }} className="mx-4 text-white text-3xl md:text-[50px] font-bold drop-shadow-sm">
          I am Rohama Majeed,
        </span>
        <span style={{ textShadow: "2px 2px 2px #ffffff" }}  className="text-3xl  md:text-[50px] font-bold text-orange-600 p-3">
          a Frontend Developer , Mern Developer and Designer
        </span>
      </div>
    </div>
  );
};

export default MovingText;
