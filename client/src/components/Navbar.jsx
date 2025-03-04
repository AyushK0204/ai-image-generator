import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-start justify-between py-3">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-18 sm:w-22 lg:w-28" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-gradient-to-br from-yellow-300 to-green-300 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-300"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits: 50
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, Ayush</p>
            <div className="relative group">
              <img
                className="w-10 drop-shadow-md"
                src={assets.profile_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded-md pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md text-sm">
                  <li className="py-1 px-2 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5 py-2">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button className="cursor-pointer bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
