"use client";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";

import DescriptionSection from "../components/DescriptionSection";
import DetailSection from "../components/DetailSection";
const page = () => {
 
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <DetailSection />
      <DescriptionSection />
    </div>
  );
};

export default page;
