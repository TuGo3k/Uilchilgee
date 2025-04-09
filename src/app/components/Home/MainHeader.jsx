"use client";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import headerdata from "@/data/headerdata";
import { IoIosArrowDown } from "react-icons/io";
const MainHeader = ({mobileMenuOpen, setMobileMenuOpen, hoveredMenu, setHoveredMenu}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  
  // const [hoveredMenu, setHoveredMenu] = useState("");

  return (
    <div className="flex flex-col relative">
      <div className="w-full flex justify-between">
        <h1 className="text-lg text-gray-400">Тавтай морил</h1>{" "}
        <div className="flex gap-2 ">
          <div className="flex gap-2 ">
            {" "}
            <a href="https://www.facebook.com/">
              <FaSquareFacebook className="text-[#008ECC]" size={20} />
            </a>
            <a
              href="https://www.facebook.com/"
              className="text-nowrap text-gray-400 lg:flex hidden hover:underline"
            >
              Facebook
            </a>
          </div>
          <div className="flex gap-2">
            {" "}
            <a href="https://www.instagram.com/">
              <IoLogoInstagram className="text-[#008ECC]" size={20} />
            </a>
            <a
              href="https://www.instagram.com/"
              className="text-nowrap text-gray-400 lg:flex hidden hover:underline "
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between relative py-2">
        <div className="flex items-center gap-2 lg:gap-5">
          {" "}
          <BiMenuAltLeft onClick={() => {setMobileMenuOpen(!mobileMenuOpen),setHoveredMenu("") }} className="lg:size-10 size-7 text-[#008ECC] lg:hidden flex" />
          <Link
            href="/"
            className="text-[#008ECC] text-xl lg:text-4xl font-lg lg:font-md"
          >
            Uilchilgee.mn
          </Link>
        </div>
        <div
          className={`mobile_search z-30 bg-[#f5f5f5] rounded-full items-center flex lg:hidden 
    transition-all duration-300 ease-in-out overflow-hidden 
    ${
      open
        ? "w-full  px-4 absolute top-0 right-0 transform "
        : "size-10 px-4 justify-center "
    }`}
        >
          <input
            type="text"
            placeholder="Search An Item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`bg-transparent transition-all duration-300 ease-in-out px-2 py-1 text-lg sm:text-xl outline-none 
      ${open ? "w-full opacity-100 py-2" : "hidden  opacity-0 "}`}
          />
          <div className="flex items-center justify-center">
            {open ? (
              <IoMdClose
                onClick={() => setOpen(false)}
                className="size-6 text-[#008ECC] cursor-pointer"
              />
            ) : (
              <FaSearch
                onClick={() => setOpen(true)}
                className="size-6 text-[#008ECC] cursor-pointer"
              />
            )}
          </div>
        </div>

        <div className="desktop_search lg:min-w-3xl bg-[#f5f5f5] rounded-full items-center  lg:flex hidden">
          <div className="pl-3">
            <FaSearch className=" flex items-center size-6  text-[#008ECC] " />
          </div>
          <input
            type="text"
            placeholder="Search An Item"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full  px-3 py-3 text-lg sm:text-xl  border-gray-300 focus:outline-none"
          />
        </div>

        <div className=" gap-10 lg:flex hidden">
          <div className="flex gap-2">
            {" "}
            <LuUser className="text-[#008ECC]" size={25} />
            <h2 className="text-nowrap">Sign Up/Sign In</h2>
          </div>
          {/* <div className="flex gap-2">
            {" "}
            <LuShoppingCart className="text-[#008ECC]" size={25} />
            <h2>Cart</h2>
          </div> */}
        </div>
      </div>
        {mobileMenuOpen && (
          <div
          className={`fixed left-0 top-0 h-full z-50 flex transform transition-transform duration-300 ease-in-out lg:hidden w-full bg-white ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-2/3 bg-white h-full">
            <div className="w-full p-4">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl"
              >
                <FiX />
              </button>
            </div>
            <div className="px-[3vw] space-y-4">
              {headerdata.map((el, index) => (
                <div key={index}>
                  <button
                    className="w-full flex justify-between items-center bg-white px-4 py-2"
                    onClick={() =>
                      setHoveredMenu(hoveredMenu === el.title ? "" : el.title)
                    }
                  >
                    <span>{el.title}</span>
                    <IoIosArrowDown
                      className={`transition-transform ${
                        hoveredMenu === el.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {hoveredMenu === el.title && el.items.length > 0 && (
                    <div className="pl-5 space-y-1">
                      {el.items.map((item, i) => (
                        <Link key={i} href={item.link}>
                          <span className="block text-sm text-gray-700 p-2 bg-white hover:bg-gray-100 rounded">
                            {item.title || "Untitled"}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="w-1/3 bg-black/70 h-full"
          ></div>
        </div>
        
            )}
    </div>
  );
};

export default MainHeader;
