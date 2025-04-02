"use client";
import React, { useState } from "react";
import navbarCategories from "@/data/navbarCategories";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("");

  const expand = (menu) => {
    setSelectedMenu((prevMenu) => (prevMenu === menu ? "" : menu));
    setOpen(selectedMenu !== menu);
  };

  return (
    <div className="w-full py- flex flex-col shadow-xl shadow-slate-500 p-6">
      <h1 className="text-3xl text-left w-full p-4">Categories</h1>
      {navbarCategories.map((el, index) => (
        <div key={index}>
          <div
            onClick={() => expand(el.title)}
            className="flex justify-between flex-col cursor-pointer p-4 "
          >
            <div className="w-full flex justify-between ">
              {" "}
              <Link href="#">{el.title}</Link>
              <IoIosArrowDown className={`${index === 0 && `text-white`}   `} />
            </div>
          </div>
          {selectedMenu === el.title && (
            <div className="p-4 text-gray-500"> {el.title}</div>
          )}{" "}
        </div>
      ))}
    </div>
  );
};
