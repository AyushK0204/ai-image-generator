import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1 className=" text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-12">
        Magic happens here! Try Now
      </h1>

      <button
        onClick={onClickHandler}
        className="px-12 py-3 inline-flex gap-2 text-black font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white shadow-yellow-500/50 hover:scale-105 hover:border-black hover:shadow-white hover:shadow-2xl focus:outline-none hover:bg-white hover:text-black"
      >
        Generate Image
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
