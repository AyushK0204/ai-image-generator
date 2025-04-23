import React, { use, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
        <div class="flex flex-col bg-black w-64 p-1 mt-10 rounded-3xl gap-1 shadow-2xl shadow-black">
          <a
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-black text-white hover:bg-white hover:text-black hover:scale-104 hover:translate-y-[-7px] hover:rounded-[23px] hover:rounded-bl-none hover:rounded-br-none px-6 py-2 rounded-2xl rounded-bl-lg rounded-br-lg transition-all text-center font-medium cursor-pointer"
          >
            Generate Another
          </a>
          <a
            href={image}
            download
            class="bg-black text-white hover:bg-white hover:text-black hover:scale-104 hover:translate-y-[7px] hover:rounded-[23px] hover:rounded-tl-none hover:rounded-tr-none px-6 py-2 rounded-2xl rounded-tl-lg rounded-tr-lg transition-all text-center font-medium cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
