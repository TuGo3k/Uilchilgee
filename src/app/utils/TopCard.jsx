"use client";
import React from "react";

const TopCard = ({ title, price, originalPrice, savings }) => {
  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
      {/* TOP Label */}
      <div className="absolute top-0 right-0 bg-[#008ecc] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-4 sm:py-6 rounded-bl-xl">
        TOP
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-100 h-48 sm:h-64 md:h-72 lg:h-80 w-full"></div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="text-sm sm:text-md md:text-lg font-medium text-black line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-black font-semibold text-base sm:text-lg">
            ₹{price}
          </p>
          <p className="text-gray-500 line-through text-sm sm:text-base">
            ₹{originalPrice}
          </p>
        </div>

        <hr className="my-2 border-gray-200" />

        <p className="text-green-600 font-medium text-sm sm:text-base">
          Save - ₹{savings}
        </p>
      </div>
    </div>
  );
};

export default TopCard;
