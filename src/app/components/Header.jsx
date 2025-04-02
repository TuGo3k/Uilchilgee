"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import headerdata from "@/data/headerdata";

// import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function Header() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // const [open, setOpen] = useState(false);
  // const [selectedMenu, setSelectedMenu] = useState("");
  const [hoveredMenu, setHoveredMenu] = useState("");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  // Function to toggle the dropdown menu
  // const expand = (menu) => {
  //   setSelectedMenu(selectedMenu === menu ? "" : menu);
  //   setOpen(selectedMenu !== menu);
  // };

  return (
    <div className="w-full  py-10 flex justify-between border-2 px-[10%]">
      <Link href="/" className="text-blue-600 text-5xl">
        Uilchilgee.mn
      </Link>
      <div className="flex gap-10 text-black relative items-center">
        {headerdata.map((el, index) => (
          <div
            key={index}
            className="relative px-2 "
            onMouseEnter={() => setHoveredMenu(el.title)} // Open on hover
            onMouseLeave={() => setHoveredMenu("")} // Close when mouse leaves
          >
            <button
              className={`rounded-full p-2 cursor-pointer flex items-center gap-1 
        ${index === 0 ? "bg-blue-400 text-white" : "text-black"}`}
            >
              {el.title}
              <IoIosArrowDown className={`${index === 0 && `text-white`}   `} />
            </button>

            {/* Dropdown Menu */}
            {hoveredMenu === el.title && el.items.length > 0 && (
              <div className=" absolute top-full left-0  shadow-md p-2 w-auto">
                {el.items.map((item, i) => (
                  <Link key={i} href={item.link}>
                    <button className="block text-nowrap w-full text-left p-2 hover:bg-gray-200">
                      {item.title || "Untitled"}{" "}
                      {/* Ensure empty titles don’t break */}
                    </button>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
