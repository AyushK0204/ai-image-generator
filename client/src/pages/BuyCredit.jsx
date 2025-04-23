import React, { useContext } from "react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            {
              headers: { token },
            }
          );
          if (data.success) {
            loadCreditData();
            navigate("/");
            toast.success("Credits Added!");
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        {
          headers: { token },
        }
      );
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className=" min-h-[80vh] text-center pt-5 mb-10"
    >
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
            <button
              onClick={() => {
                paymentRazorpay(item.id);
              }}
              className=" w-full bg-gray-800 text-white hover:bg-blue-500 transition-all duration-200 hover:rounded-4xl hover:scale-120 rounded-4xl rounded-bl-none rounded-tr-none mt-8 text-sm py-2.5 max-w-52 hover:[animation:pulseCustom_1s_ease-in-out_infinite]"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
