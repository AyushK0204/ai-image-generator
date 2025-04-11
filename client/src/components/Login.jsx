import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    setTimeout(() => {
      setIsVisible(true);
    }, 5);

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowLogin(false);
    }, 500);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-10  backdrop-blur-sm bg-black/60 flex justify-center items-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <form
        className={` relative bg-gradient-to-tl from-gray-400 via-gray-100 to-gray-400 p-10  text-slate-500 rounded-[70px] rounded-bl-none rounded-tr-none border-4 border-t-0 border-b-0  border-black transition-transform duration-500 ${
          isVisible ? "scale-100" : "scale-80"
        }`}
      >
        <h1 className=" text-center text-2xl text-neutral-700 font-medium">
          {state}
        </h1>
        <p className=" text-sm text-center">
          Welcome! Please sign in to continue.
        </p>
        {state !== "Login" && (
          <div className=" border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-l-0 border-t-0 border-r-0 shadow-2xl bg-white/50 hover:translate-y-[-5%] transition-all duration-300 hover:bg-white">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className=" outline-none text-sm"
            />
          </div>
        )}
        <div className=" border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-4 border-l-0 border-t-0 border-r-0 shadow-2xl bg-white/50 hover:translate-y-[-5%] transition-all duration-300 hover:bg-white">
          <img src={assets.email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            required
            className=" outline-none text-sm"
          />
        </div>
        <div className=" border-2 px-6 py-2 flex items-center gap-2 rounded-full mt-4 border-l-0 border-t-0 border-r-0 shadow-2xl bg-white/50 hover:translate-y-[-5%] transition-all duration-300 hover:bg-white">
          <img src={assets.lock_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            required
            className=" outline-none text-sm"
          />
        </div>
        <p className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-all duration-300 my-4 cursor-pointer inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:translate-x-1">
          Forgot password?
        </p>

        <button className=" bg-blue-100 border-2 border-l-0 border-t-0 border-r-0 text-blue-500 border-blue-500  w-full py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-2xl hover:scale-105">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="text-sm text-center font-medium text-gray-500 transition-all duration-300 mt-5 my-4 block hover:translate-y-0.5">
            Don't have an account?{" "}
            <p
              onClick={() => setState("Sign Up")}
              className=" inline-block cursor-pointer text-blue-400 hover:scale-102 transition-all duration-300 hover:text-blue-500"
            >
              Sign Up!
            </p>
          </p>
        ) : (
          <p className="text-sm text-center font-medium text-gray-500 transition-all duration-300 mt-5 my-4 block hover:translate-y-0.5">
            Already have an account?{" "}
            <p
              onClick={() => setState("Login")}
              className=" inline-block cursor-pointer text-blue-400 hover:scale-102 transition-all duration-300 hover:text-blue-500"
            >
              Login!
            </p>
          </p>
        )}
        <img
          onClick={handleClose}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer transition-transform duration-500 hover:rotate-[90deg] hover:scale-150"
        />
      </form>
    </div>
  );
};

export default Login;
