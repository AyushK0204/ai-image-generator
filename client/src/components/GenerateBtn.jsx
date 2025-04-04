import React from "react";
import { assets } from "../assets/assets";

const GenerateBtn = () => {
  return (
    <div className="pb-16 text-center">
      <h1 className=" text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-12">
        Magic happens here! Try Now
      </h1>

      <button className="px-12 py-3 inline-flex gap-2 text-black font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white shadow-yellow-500/50 hover:scale-105 hover:border-green-600 hover:shadow-green-500/50 hover:shadow-2xl focus:outline-none hover:bg-black hover:text-white">
        Generate Image
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </div>
  );
};

export default GenerateBtn;
