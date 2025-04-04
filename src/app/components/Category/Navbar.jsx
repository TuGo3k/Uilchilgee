"use client";
import React, { useState } from "react";
import navbarCategories from "@/data/navbarCategories";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
export const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("");

  const expand = (menu) => {
    setSelectedMenu((prevMenu) => (prevMenu === menu ? "" : menu));
    setOpen(selectedMenu !== menu);
  };

  return (
    <div className="w-full py-4 flex flex-col shadow-sm shadow-slate-500 p-4 sm:p-6 rounded-lg">
      <h1 className="text-2xl sm:text-3xl text-left w-full mb-4">Categories</h1>
      {navbarCategories.map((el, index) => (
        <div key={index}>
          <div
            onClick={() => expand(el.title)}
            className="flex justify-between flex-col cursor-pointer p-4 hover:bg-slate-300"
          >
            <div className="w-full flex justify-between">
              <Link href="#">{el.title}</Link>
              <IoIosArrowDown />
            </div>
          </div>
          {selectedMenu === el.title && (
            <motion.div
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, color: "#000" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="p-4 text-black cursor-pointer z-30"
            >
              {el.title}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};