import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className=" min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className=" text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>
      <div className=" flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className=" bg-gray-100 hover:bg-blue-100 drop-shadow-sm border rounded-[70px] rounded-bl-none rounded-tr-none py-12 px-8 text-gray-600 hover:text-black hover:scale-110 transition-all duration-500"
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className=" mt-3 mb-1 font-semibold">{item.id}</p>
            <p className=" text-sm">{item.desc}</p>
            <p className=" mt-6">
              <span className=" text-3xl font-medium">₹{item.price}</span> /{" "}
              {item.credits} credits
            </p>
            <button className=" w-full bg-gray-800 text-white hover:bg-gradient-to-r hover:text-black transition-all duration-200 hover:rounded-4xl hover:scale-120 rounded-4xl rounded-bl-none rounded-tr-none mt-8 text-sm py-2.5 max-w-52">
              {user ? "Purchased" : "Buy Now!"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
