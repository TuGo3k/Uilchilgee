"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TopCard from "@/app/utils/TopCard";
import data from "@/data/services";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";
const VIPSection = () => {
  const [page, setPage] = useState(0);

  const nextSlide = () => {
    setPage((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setPage((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };
  const CARD_WIDTH = 16; // Must match w-[16vw]
  const GAP_PX = 40; // Tailwind's gap-10 = 2.5rem = 40px

  return (
    <div className="flex flex-col gap-10 py-[1vw]">
      <div className="flex justify-between">
        {" "}
        <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
          Онцгой зар
        </h1>

     <div className="relative flex gap-10">
    <div className="lg:flex hidden gap-4 ">
    <button
        onClick={prevSlide}
        className="  bg-white shadow-md rounded-full px-4 hover:bg-gray-100 "
      >
        <ChevronLeft size={20} className="text-black z-50" />
      </button>
      <button
        onClick={nextSlide}
        className=" bg-white shadow-md rounded-full px-4 hover:bg-gray-100"
      >
        <ChevronRight size={20} className="text-black z-50" />
      </button>
    </div>



        <p className="flex items-center text-xl gap-2 bg-white rounded-full shadow-md hover:bg-gray-100  pl-4 pr-3 cursor-pointer">
          view all <MdKeyboardArrowRight  className="lg:size-5 text-[#008ecc]" />
        </p>
     </div>
      </div>
      <div className="overflow-hidden w-full relative">
  <motion.div
    className="flex gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 "
    animate={{ x: `calc(-${page * CARD_WIDTH}vw - ${page * GAP_PX}px)` }}
    transition={{ type: "spring", stiffness: 100, damping: 15 }}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    onDragEnd={handleDragEnd}
  >
    {data.map((el, index) => (
      <motion.div
        key={index}
        className="  lg:w-[16vw] flex-shrink-0"
      >
        <TopCard
          title={el.title}
          price={el.price}
          originalPrice={el.originalPrice}
          savings={el.savings}
        />
      </motion.div>
    ))}



  </motion.div>
  <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-5 lg:hidden  bg-white shadow-md rounded-full p-4 hover:bg-gray-100 "
      >
        <ChevronLeft size={20} className="text-black z-50" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-5 lg:hidden bg-white shadow-md rounded-full p-4 hover:bg-gray-100"
      >
        <ChevronRight size={20} className="text-black z-50" />
      </button>


</div>


      <div className="bg-red-100 rounded-xl p-4 flex items-center justify-evenly ">
        <div className="size-48 relative">
          <img
            src="/assets/Home/location.png" 
            alt="Service Map"
            fill="true"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative">
          <p className="text-s text-red-700 mb-1">Илүү тав тухтай</p>
          <h2 className="text-4xl font-bold text-red-900 leading-tight">
            Үйлчилгээ газрын
            <br />
            зурагаас
          </h2>
          <p className="text-s mt-1 text-black absolute bottom-0 right-0 cursor-pointer">
            дэлгэрэнгүй
          </p>
        </div>
      </div>
    </div>
  );
};

export default VIPSection;
