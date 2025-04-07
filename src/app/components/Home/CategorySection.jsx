"use client"
import CategoryCards from '@/app/utils/CategoryCards';
import React from 'react'
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import categoriesdata from "@/data/categoriesdata";
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
    const CARD_WIDTH = 40; // Must match w-[16vw]
    const GAP_PX = 4; // Tailwind's gap-10 = 2.5rem = 40px
  
  return (
    <div>
         <div className="flex justify-between">
                {" "}
                <h1 className="text-3xl w-[20vw] border-b-2 border-[#008ecc] pb-4">
                  Онцгой зар
                </h1>
                <p className="flex items-center text-xl gap-2  cursor-pointer">
                  view all <MdKeyboardArrowRight size={20} className="text-[#008ecc]" />
                </p>
              </div>
              <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-10"
          animate={{ x: `calc(-${page * CARD_WIDTH}vw - ${page * GAP_PX}px)` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {categoriesdata.map((el, index) => (
            <motion.div key={index} className={` w-[${CARD_WIDTH}] flex-shrink-0`}>
              <CategoryCards
                name={el.name}
                image={el.image}
                width={CARD_WIDTH}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default CategorySection