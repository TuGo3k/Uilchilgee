"use client"
import React, { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io"; // Fixed import
export default function Header() {
    const [open, setOpen] =useState(true) 
    const [selectedMenu, setSelectedMenu] = useState('');
  const categories = [
    { title: "Үйлчилгээ" },
    { title: "Байгууллага" },
    { title: "Ажлын зар" },
    { title: "Бэлгийн карт" },
    { title: "Дуудлагын" },
  ];
 const subItem = [{}]
  const expand = (e) => {
    useState(e)
  };

  return (
    <div className="w-full flex justify-between border-2 px-[15%]">
      <Link href="/" className="text-blue-600 text-5xl">Uilchilgee.mn</Link>
      <div className="flex gap-10 text-black">
        {categories.map((el, index) => (



          <button onClick={expand(key)} key={index} className="flex items-center gap-1">
            {el.title}
            <IoIosArrowDown className="text-gray-500" />
            {}
          </button>
        ))}
      </div>
    </div>
  );
}
