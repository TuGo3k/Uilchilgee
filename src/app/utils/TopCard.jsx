// components/TopCard.js
"use client";
import React from "react";

const TopCard = ({title, price, originalPrice, savings}) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
    <div className="absolute top-0 right-0 bg-[#008ecc] text-white text-s font-semibold px-5 py-6  rounded-bl-xl">
      TOP
    </div>
  
    <div className="bg-gray-100 h-80 w-full"></div>
  
    <div className="p-4">
      <h3 className="text-md font-medium text-black">{title}</h3>
  
      <div className="flex items-center gap-2 mt-1">
        <p className="text-black font-semibold">₹{price}</p>
        <p className="text-gray-500 line-through">₹{originalPrice}</p>
      </div>
  
      <hr className="my-2 border-gray-200" />
  
      <p className="text-green-600 font-medium">Save - ₹{savings}</p>
    </div>
  </div>
  
  );
};

export default TopCard;
