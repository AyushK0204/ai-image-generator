import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Generate AI Visuals
      </h1>
      <p className="text-gray-500 mb-8">
        Express your mind's eye in visual form
      </p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt=""
        />
        <div>
          <h2 className=" text-3xl font-medium max-w-lg mb-4">
            Showcasing AI that visualizes written descriptions
          </h2>
          <p className=" text-gray-600 mb-4">
            Effortlessly turn your ideas into stunning visuals with our free AI
            image generator. From unique artwork to eye-catching graphics,
            simply describe what you envision, and watch it come to life in
            seconds!
          </p>
          <p className=" text-gray-600 mb-4">
            Enter a text prompt, and our powerful AI will create stunning images
            in seconds. Whether it's product visuals, character designs, or
            entirely new concepts, bring your ideas to life effortlessly. With
            cutting-edge AI technology, your creativity knows no bounds!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
