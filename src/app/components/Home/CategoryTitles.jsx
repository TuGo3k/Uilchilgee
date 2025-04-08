"use client";
import React from "react";
import headerdata from "@/data/headerdata";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

const CategoryTitles = () => {
  const [hoveredMenu, setHoveredMenu] = useState("");
  return (
    <div className="hidden md:flex gap-10 text-black relative items-center ">
      {headerdata.map((el, index) => (
        <div
          key={index}
          className="relative px-2"
          onMouseEnter={() => setHoveredMenu(el.title)}
          onMouseLeave={() => setHoveredMenu("")}
        >
          <button
            className={`rounded-full p-2 cursor-pointer flex items-center gap-1 
          ${index === 0 ? "bg-[#008ecc] text-white" : "text-black"}`}
          >
            {el.title}
            <IoIosArrowDown
              className={`${index === 0 ? "text-white" : "text-black"}`}
            />
          </button>

          {/* Dropdown */}
          {hoveredMenu === el.title && el.items.length > 0 && (
            <div className="absolute top-full left-0 shadow-md p-2 w-auto bg-white z-10">
              {el.items.map((item, i) => (
                <Link key={i} href={item.link}>
                  <button className="block text-nowrap w-full min-w-30 text-left p-2 hover:bg-gray-200 bg-white">
                    {item.title || "Untitled"}
                  </button>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryTitles;
