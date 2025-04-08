"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CustomSwiper = ({ darkmode = false }) => {
  const [page, setPage] = useState(0);

  const items = [
    {
      id: 1,
      title: "Slide 1",
      content: "Content 1",
      role: "Role A",
      cover: "1.jpg",
    },
    {
      id: 2,
      title: "Slide 2",
      content: "Content 2",
      role: "Role B",
      cover: "2.jpg",
    },
    {
      id: 3,
      title: "Slide 3",
      content: "Content 3",
      role: "Role C",
      cover: "3.jpg",
    },
    {
      id: 4,
      title: "Slide 4",
      content: "Content 4",
      role: "Role D",
      cover: "4.jpg",
    },
    {
      id: 5,
      title: "Slide 5",
      content: "Content 5",
      role: "Role E",
      cover: "5.jpg",
    },
  ];

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute -left-5 lg:-left-10 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 lg:p-7 hover:bg-gray-100 "
      >
        <ChevronLeft size={25} className="text-black z-50" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-5 lg:-right-10 top-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-full p-2 lg:p-7 hover:bg-gray-100"
      >
        <ChevronRight size={25} className="text-black z-50" />
      </button>

      <div className=" lg:w-full overflow-hidden ">
        {/* Arrows */}

        <motion.div
          className="flex w-full relative"
          animate={{ x: `-${page * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          
        >
          {items.map((testimonial, idx) => (
            <motion.div key={idx} className="w-full flex-shrink-0 ">
              <div
                className={`p-6 rounded-lg text-center transition-all duration-500 min-h-100 ${
                  darkmode
                    ? "bg-[#170f2f] text-white"
                    : "bg-slate-400 text-black"
                } hover:bg-gradient-to-r hover:from-[#141f9d] hover:to-[#ec0295] hover:text-black`}
              >
                <p className="text-lg italic text-left">
                  "{testimonial.content}"
                </p>
              </div>
            </motion.div>
          ))}
         
        </motion.div>
      </div>
      <div className="flex justify-center  gap-2 z-50 absolute bottom-5 lg:bottom-20 left-1/2 lg:left-1/10 transform  -translate-x-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`h-2 rounded-full transition-all cursor-pointer duration-300 ${
              index === page ? "w-6 bg-white" : "w-2 bg-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
