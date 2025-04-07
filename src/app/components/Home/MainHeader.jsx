"use client";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
const MainHeader = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        {" "}
        <BiMenuAltLeft size={40} className="text-[#008ECC]" />
        <Link
          href="/"
          className="text-[#008ECC] text-lg lg:text-4xl font-md"
        >
          Uilchilgee.mn
        </Link>
      </div>

      <div className="  lg:flex max-w-4xl rounded-full items-center flex">
        <div>
          <FaSearch
            size={30}
            className=" flex items-center p-2 text-[#008ECC] "
          />
        </div>
        <input
          type="text"
          placeholder="Search An Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full  p-2 text-lg sm:text-xl  border-gray-300 focus:outline-none"
        />
      </div>

      <div className="flex gap-10 ">
        <IoMenuSharp className="text-[#008ECC]" size={30} />
        <div className="flex gap-2">
          {" "}
          <LuUser className="text-[#008ECC]" size={25}/>
          <h2 className="text-nowrap">Sign Up/Sign In</h2>
        </div>
        <div className="flex gap-2">
          {" "}
          <LuShoppingCart className="text-[#008ECC]" size={25}/>
          <h2>Cart</h2>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
