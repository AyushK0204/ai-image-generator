import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>High-fidelity text-to-visual engine</p>
        <img src={assets.star_icon} alt="" />
      </div>

      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center  ">
        Watch your words become{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 [animation:pulseCustom_1s_ease-in-out_infinite]">
          images
        </span>{" "}
        instantly!
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds - just type and watch the magic happen.
      </p>
      <button
        className="sm:text-lg bg-black w-auto mt-8 flex items-center gap-2 px-12 py-3 rounded-full 
          bg-gradient-to-r from-pink-800 via-purple-800 to-blue-800 text-white text-lg font-semibold 
          transition-all duration-600 m-auto hover:scale-105
          hover:bg-gradient-to-r hover:from-red-800 hover:via-yellow-800 hover:to-blue-800
          [animation:zoomInOut_2s_ease-in-out_infinite]"
      >
        Generate Images
        <img className="h-6" src={assets.star_group} alt="" />
      </button>
      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generated images from picolo</p>
    </div>
  );
};

export default Header;
