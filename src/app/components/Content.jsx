"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "@/data/data"
import ProductCard from "../utils/ProductCard";
export const Content = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1 className="text-5xl  ">Үйлчилгээ</h1>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search An Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full p-4 pl-6 text-xl border border-gray-300 focus:outline-none"
        />
        <FaSearch size={40} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full  bg-gray-500 text-white" />
      </div>
      <div className="w-full grid grid-cols-3 gap-10">
      {data.map((el, index)=> 
        <ProductCard key={index} product={el}/>
        )}
      </div>

    </div>
  );
};
