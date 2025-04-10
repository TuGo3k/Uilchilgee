"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import headerdata from "@/data/headerdata";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading ,setIsLoading] = useState(false)
  const [datas , setDatas ] = useState([])

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://localhost:4000/api/v1/category')
    .then((e) => setDatas(e.data.data))
    .catch((err) => toast.error('Network Error'))
    .finally(() => {
      setIsLoading(false)
    })
  })

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="w-full border-b border-slate-300">
      <div className="flex justify-between items-center py-5 lg:py-10 px-[6vw]">
        <Link href="/" className="text-blue-600 text-xl lg:text-5xl font-bold">
          Uilchilgee.mn
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-black relative items-center">
          {datas.map((el, index) => (
            <div
              key={index}
              className="relative px-2"
              onMouseEnter={() => setHoveredMenu(el.title)}
              onMouseLeave={() => setHoveredMenu("")}
            >
              <button
                className={`rounded-full p-2 cursor-pointer flex items-center gap-1 
                ${index === 0 ? "bg-blue-400 text-white" : "text-black"}`}
              >
                {el.title}
                <IoIosArrowDown
                  className={`${index === 0 ? "text-white" : "text-black"}`}
                />
              </button>

              {/* Dropdown */}
              {hoveredMenu === el.title && el.length > 0 && (
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
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-[6vw] pb-4 space-y-4">
          {headerdata.map((el, index) => (
            <div key={index}>
              <button
                className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
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

              {/* Mobile Submenu */}
              {hoveredMenu === el.title && el.items.length > 0 && (
                <div className="pl-4 mt-1 space-y-1">
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
      )}
    </header>
  );
}
