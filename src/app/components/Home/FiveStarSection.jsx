"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import phoneadsdata from "@/data/phoneadsdata";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FiveStarCard from "@/app/utils/FiveStarCard";
import Link from "next/link";

// const CARD_WIDTH = 28; // vw
// const GAP_PX = 48; // Tailwind gap-12 = 3rem

const FiveStarSection = () => {
  const [page, setPage] = useState(0);
  const [instant, setInstant] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(28); // default for base
  const [gapPx, setGapPx] = useState(48);

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

  useEffect(() => {
    const updateSizes = () => {
      if (window.innerWidth >= 1024) {
        // Tailwind 'lg' is 1024px+
        setCardWidth(28);
        setGapPx(48);
      } else {
        setCardWidth(42);
        setGapPx(16);
      }
    };
    updateSizes(); // Set initially
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

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
    <div className="flex flex-col gap-5 lg:gap-10 py-[1vw]">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="lg:text-3xl text-xl lg:w-[20vw] border-b-2 border-[#008ecc] lg:pb-4">
          5 одтой{" "}
          <span className="lg:text-3xl text-[#008ecc]">Байгууллага</span>
        </h1>
        {/* <div id="realstar">
          <div class="star-container1">
            <div class="star-shape1">
              <div class="star-container2">
                <div class="star-shape2"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="relative flex gap-10">
          <div className="hidden lg:flex gap-4">
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
          <Link
            href={"/business-category"}
            className="flex items-center lg:text-xl gap-1 lg:gap-2 bg-white rounded-full shadow-md hover:bg-gray-100 pl-2 lg:pl-4 lg:pr-3 cursor-pointer"
          >
            view all
            <MdKeyboardArrowRight className="lg:size-5 text-[#008ecc]" />
          </Link>
        </div>
      </div>

      {/* <div id="star">
        <div className="card ">
          <div className="inner">
            <h1>Animate Border</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae accusamus provident, iste quam cum laudantium quaerat?
              In vero mollitia quos!
            </p>
          </div>
        </div>
      </div> */}
      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex w-full gap-4 lg:gap-12"
            animate={{
              x: `calc(-${page * cardWidth}vw - ${page * gapPx}px)`,
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
              <motion.div
                key={index}
                className="w-[42vw] lg:w-[28vw] h-35 lg:h-auto flex-shrink-0"
              >
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
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-5 lg:hidden  bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100 "
        >
          <ChevronLeft size={20} className="text-black z-50" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-5 lg:hidden bg-white shadow-md rounded-full p-2 lg:p-4 hover:bg-gray-100"
        >
          <ChevronRight size={20} className="text-black z-50" />
        </button>
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
