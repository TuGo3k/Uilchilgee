"use client"
import CategoryCards from '@/app/utils/CategoryCards';
import React from 'react'
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import categoriesdata from "@/data/categoriesdata";
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
const CategorySection = () => {
    const [page, setPage] = useState(0);

    const nextSlide = () => {
      setPage((prev) => (prev + 1) % categoriesdata.length);
    };
  
    const prevSlide = () => {
      setPage((prev) => (prev - 1 + categoriesdata.length) % categoriesdata.length);
    };
  
    const handleDragEnd = (event, info) => {
      const swipe = info.offset.x;
  
      if (swipe < -100) {
        nextSlide();
      } else if (swipe > 100) {
        prevSlide();
      }
    };

    const CARD_WIDTH = 12; // Must match w-[16vw]
    const GAP_PX = 20; // Tailwind's gap-10 = 2.5rem = 40px
   useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) =>
        prev === categoriesdata.length - 1 ? 0 : prev + 1
      );
    }, 3000); // scroll every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, [categoriesdata.length]);

  return (
    <div className="flex flex-col gap-10 py-[1vw]">
         <div className="flex justify-between">
        {" "}
        <h1 className="text-3xl w-[20vw] border-b-2 border-[#008ecc] pb-4">
          Ангилал
        </h1>

     <div className="relative flex gap-10">
    <div className="flex gap-4">
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
          view all <MdKeyboardArrowRight size={20} className="text-[#008ecc]" />
        </p>
     </div>
      </div>
              <div className="overflow-hidden w-full">
        <motion.div
          className="flex  w-full  justify-between"
          animate={{ x: `calc(-${page * CARD_WIDTH}vw - ${page * GAP_PX}px)` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {categoriesdata.map((el, index) => (
            <motion.div key={index} className={` w- flex-shrink-0 `}>
              <CategoryCards
                name={el.name}
                image={el.image}
                // width={CARD_WIDTH}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default CategorySection