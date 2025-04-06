import React, { use, useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {};

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div className="flex flex-col items-center">
        <div className=" relative">
          <img src={image} alt="" className=" max-w-sm rounded-2xl" />
          <div
            className={
              !loading
                ? "hidden"
                : "flex space-x-1 mt-5 justify-center items-center"
            }
          >
            <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-150"></span>
            <span className="w-3 h-3 bg-blue-700 rounded-full animate-bounce delay-300"></span>
          </div>
        </div>
      </div>
      {!isImageLoaded ? (
        <div className="flex w-full max-w-lg bg-gradient-to-r from-gray-800 to-gray-900 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe your idea, and watch it come to life!"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-8 sm:px-16 py-3 rounded-full transition-all duration-300 shadow-md transform hover:scale-102 active:scale-95 cursor-pointer"
          >
            Generate
          </button>
        </div>
      ) : (
        <div class="flex flex-col bg-blue-500 w-64 p-1 mt-10 rounded-3xl gap-1 shadow-2xl shadow-blue-500/50">
          <a
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-blue-500 hover:bg-blue-600 hover:scale-103 hover:translate-y-[-7px] hover:rounded-[23px] hover:rounded-bl-none hover:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center text-white font-medium cursor-pointer"
          >
            Generate Another
          </a>
          <a
            href={image}
            download
            class="bg-blue-500 hover:bg-blue-600 hover:scale-103 hover:translate-y-[7px] hover:rounded-[23px] hover:rounded-tl-none hover:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center text-white font-medium cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
