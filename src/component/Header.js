import React, { useState } from "react";
import {FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../app/feature/AuthSlice";

const Header = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const { email, roll } = useSelector((state) => state.auth?.user);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-sky-400 text-white px-8 py-2 shadow-lg rounded-full  z-5 relative">
      <Link to="/">
        <div className=" max-h-full font-bold text-3xl p-2">logo</div>
      </Link>
      <div className="w-96  hidden md:flex items-center bg-white rounded-full px-2 py-1">
        <p className="text-black text-xl">search</p>
        <input
          className="w-full p-1 outline-none text-black text-xl"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between">
        <Link className="mx-2 font-semibold text-xl">About</Link>
        {roll !== "admin" && (
          <Link to="/cart" className="mx-2 font-semibold text-xl relative">
            <div className="absolute flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 top-[-14px] right-[-10px]">
              <span>{cart.length}</span>
            </div>

            <FaShoppingCart></FaShoppingCart>
          </Link>
        )}
        {email ? (
          <>
            {roll === "admin" && (
              <Link to="/deshbroad" className="mx-2 font-semibold text-xl">
                dashboard
              </Link>
            )}
            <Link
              className="mx-2 font-semibold text-xl"
              onClick={() => setOpenProfile(!openProfile)}
            >
              <FaUserCircle></FaUserCircle>
            </Link>
          </>
        ) : (
          <Link to="/login" className="m-2 font-semibold text-xl">
            Login
          </Link>
        )}
      </div>
      {openProfile && (
        <div className="absolute h-56 w-80 top-16 right-0 flex flex-col  bg-teal-500 gap-6 text-black z-10 rounded-xl p-6">
          <Link className="text-white font-semibold text-xl hover:bg-slate-600 p-2">
            {email}
          </Link>
          {roll !== "admin" && (
            <Link
              to="/order"
              className="text-white font-semibold text-xl hover:bg-slate-600 p-2"
            >
              Order
            </Link>
          )}
          <button
            onClick={() => {
              dispatch(logOut());
              setOpenProfile(false);
            }}
            className="text-white font-semibold text-xl text-left hover:bg-slate-600 p-2"
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
