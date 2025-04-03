"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
const DetailSection = () => {
  const [selectedTime, setSelectedTime] = useState("13:00 - 14:00");
  return (
    <div className=" px-[8%] w-full  h-full  flex ">
      <div className="left_contain w-1/2 flex gap-5 h-[35vw]">
        <div className="left w-1/3 gap-5 flex flex-col">
          <div className="1 w-full h-full bg-gray-500">
            {/* <img src="" className="w-full h-full object-cover" /> */}
          </div>
          <div className="2 w-full h-full bg-gray-500">
            {/* <img src="" className="w-full h-full object-cover" /> */}
          </div>
          <div className="3 w-full h-full bg-gray-500">
            {/* <img src="" className="w-full h-full object-cover" /> */}
          </div>
        </div>
        <div className="right- w-3/4 bg-gray-500">
          {/* <img
          src=""
          alt=""
          className="object-cover w-full h-full bg-gray-500"
        /> */}
        </div>
      </div>

      <div className="right_contain w-1/2 space-y-8  p-10 bg-white flex flex-col rounded-lg justify-between">
        {/* Service Title & Price */}
      <div className="space-y-8">
      <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Ус засах</h2>
          <div className="flex items-center text-gray-700 mt-2">
            <span className="text-2xl font-semibold">24,000₮</span>
            <span className="ml-2 text-gray-500">|</span>
            <div className="flex items-center ml-2 text-gray-400">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <FaStar key={index} className="w-4 h-4" />
                ))}
              <span className="ml-2 text-gray-500">( 32 review )</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t "></div>
        <div className="max-h-[30vh] border-amber-300 border">
          {/* Description */}
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magn.
          </p>

          {/* Bullet Points */}
          <ul className="mt-3 text-gray-600 space-y-1">
            <li>• Lorem ipsum dolor sit amet, adipi scing elit</li>
            <li>• Lorem ipsum dolor sit amet, consectetuer adipi scing elit</li>
            <li>• Lorem ipsum dolor sit amet, consectetuer adipi</li>
          </ul>
        </div>
      </div>


        {/* Time Selection */}
        <div>
          <div className="flex items-center space-x-3 mt-6">
            <button className="px-4 text-nowrap py-2 border rounded-full text-gray-700">
              {selectedTime}
            </button>
            <button className="w-full px-6 py-2 bg-black text-white font-semibold rounded-full">
              Цаг сонгох
            </button>
          </div>

          {/* Submit Button */}
          <button className="w-full mt-4 py-3 border rounded-full text-black font-bold">
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
