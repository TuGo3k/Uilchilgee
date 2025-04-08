"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import phoneadsdata from "@/data/phoneadsdata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FiveStarCard from "@/app/utils/FiveStarCard";

const CARD_WIDTH = 28; // vw
const GAP_PX = 48; // Tailwind gap-12 = 3rem

const FiveStarSection = () => {
  const [page, setPage] = useState(0);
  const [instant, setInstant] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);

  // Clone эхний 3 картыг төгсгөлд нэмнэ
  const extendedData = [...phoneadsdata, ...phoneadsdata.slice(0, 3)];

  const nextSlide = () => {
    setPage((prev) => prev + 1);
  };

  const prevSlide = () => {
    setPage((prev) => (prev === 0 ? phoneadsdata.length - 1 : prev - 1));
  };

  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    if (swipe < -100) {
      nextSlide();
    } else if (swipe > 100) {
      prevSlide();
    }
  };

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     nextSlide();
  //   }, 3000);

  //   return () => clearInterval(intervalRef.current);
  // }, []);

  // useEffect(() => {
  //   if (page === phoneadsdata.length) {
  //     setTimeout(() => {
  //       setInstant(true);
  //       setPage(0);
  //       setTimeout(() => setInstant(false), 50);
  //     }, 300);
  //   }
  // }, [page]);

  return (
    <div className="flex flex-col gap-10 py-[1vw]">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-3xl w-[20vw] border-b-2 border-[#008ecc] pb-4">
          5 одтой <span className="text-3xl text-[#008ecc]">Байгууллага</span>
        </h1>
        <div className="relative flex gap-10">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="bg-white shadow-md rounded-full px-4 hover:bg-gray-100"
            >
              <ChevronLeft size={20} className="text-black z-50" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white shadow-md rounded-full px-4 hover:bg-gray-100"
            >
              <ChevronRight size={20} className="text-black z-50" />
            </button>
          </div>
          <p className="flex items-center text-xl gap-2 bg-white rounded-full shadow-md hover:bg-gray-100 pl-4 pr-3 cursor-pointer">
            view all{" "}
            <MdKeyboardArrowRight size={20} className="text-[#008ecc]" />
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex w-full gap-12"
          animate={{
            x: `calc(-${page * CARD_WIDTH}vw - ${page * GAP_PX}px)`,
          }}
          transition={
            instant
              ? { duration: 0 }
              : { type: "spring", stiffness: 100, damping: 15 }
          }
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          {extendedData.map((el, index) => (
            <motion.div key={index} className="w-[28vw] flex-shrink-0">
              <FiveStarCard
                name={el.name}
                logo={el.logo}
                image={el.image}
                bgColor={el.bgColor}
                labelColor={el.labelColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {phoneadsdata.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              index === page % phoneadsdata.length
                ? "w-6 bg-[#008ecc]"
                : "w-2 bg-[#f5f5f5]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FiveStarSection;
