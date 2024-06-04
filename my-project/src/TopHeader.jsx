// eslint-disable-next-line no-unused-vars
import React from "react";

export default function TopHeader() {
  return (
    <div className=" w-full  bg-[#222222] flex justify-center pr-10 pl-10">
      <div className=" w-11/12  h-10  flex justify-between items-center text-sm font-medium     text-[#B2B2B2]   overflow-hidden">
        <div>Free shipping for standard order over $100</div>

        <div className="flex justify-end  items-center ">
          <div className=" border-l   border-r border-gray-300 p-7 hover:text-blue-500 ">
            <a href="#">Help & FAQS</a>
          </div>

          <div className="  border-r  border-gray-300 p-7 hover:text-blue-500">
            <a href="#">My Account</a>
          </div>

          <div className="  border-r  border-gray-300 p-7 hover:text-blue-500">
            <a href="#">EN</a>
          </div>

          <div className="    border-r  border-gray-300 p-7 hover:text-blue-500">
            <a href="#">USD</a>
          </div>
        </div>
      </div>
    </div>
  );
}
