// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "./images/logo-02.png";
import { IoIosSearch } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Header() {
  const logoStyle = {
    width: "200px", // Adjust width as desired
    height: "50px", // Adjust height as desired
  };
  return (
    <div className="w-full  h-16 bg-slate-200 flex  justify-center items-center">
      <div className=" w-11/12  flex  justify-between  bg-slate-500 pl-7 pr-7">
        <div className=" flex justify-between  bg-green-500 " style={{width:"50%"}}>
          <img src={{ logo }} style={{ logoStyle }} />

          <nav className=" flex gap-2 ">
            <a href="#">Home</a>

            <a href="#">Shop</a>

            <a href="#">Features</a>

            <a href="#">Blog</a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </nav>
        </div>

        <div className="flex gap-3 ">
          <IoIosSearch size={25} />
          <IoMdCart size={25} />
          <FaRegHeart size={25} />
        </div>
      </div>
    </div>
  );
}
