"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const DetailSection = ({ setPayOpen }) => {
  const [selectedTime, setSelectedTime] = useState("13:00 - 14:00");

  return (
    <div className="px-4 md:px-[8vw] w-full h-full flex flex-col lg:flex-row py-10 gap-8">
      {/* Left Side (Images) */}
      <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4 h-auto lg:h-[35vw]">
        <div className="flex lg:flex-col gap-4 w-full lg:w-1/3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 bg-gray-500">
              <img
                src="/assets/category-detail/1.jpg"
                className="w-full h-full object-cover rounded-lg"
                alt={`thumb-${i}`}
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-3/4">
          <img
            src="/assets/category-detail/1.jpg"
            alt="main"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>

      {/* Right Side (Details) */}
      <div className="w-full lg:w-1/2 space-y-6 p-6 bg-white flex flex-col rounded-lg justify-between">
        {/* Title and Price */}
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Үс засах</h2>
            <div className="flex items-center text-gray-700">
              <span className="text-2xl font-semibold">24,000₮</span>
              <span className="mx-2 text-gray-500">|</span>
              <div className="flex items-center text-gray-400">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className="w-4 h-4" />
                  ))}
                <span className="ml-2 text-gray-500">(32 review)</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-h-[30vh] border border-amber-300 rounded p-3 overflow-y-scroll">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna.
            </p>
            <ul className="mt-3 text-gray-600 space-y-1">
              <li>• Lorem ipsum dolor sit amet, adipiscing elit</li>
              <li>• Lorem ipsum dolor sit amet, consectetuer adipiscing elit</li>
              <li>• Lorem ipsum dolor sit amet, consectetuer adipi</li>
            </ul>
          </div>
        </div>

        {/* Time and Booking Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-3 space-y-3 sm:space-y-0">
            <button className="w-full sm:w-auto px-4 py-2 border rounded-full text-gray-700">
              {selectedTime}
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-black text-white font-semibold rounded-full">
              Цаг сонгох
            </button>
          </div>
          <button
            onClick={() => setPayOpen(true)}
            className="w-full py-3 border rounded-full text-black font-bold"
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
