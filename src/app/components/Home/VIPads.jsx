import React from "react";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";

const VIPads = () => {
  return (
    <div className="bg-[#01b4ad] flex flex-col md:flex-row justify-between items-center rounded-md p-6 lg:p-0 md:pl-20 gap-6 md:gap-0">
      <h1 className="text-2xl md:text-3xl text-white font-bold text-center md:text-left">
        VIP үйлчилгээ
      </h1>

      <FaCrown
        
        className="size-60 text-[#d0a425] hidden md:block" // Hide crown on mobile
      />

      <div className="flex flex-col gap-1 text-white text-center md:text-left">
        <h4 className="text-sm md:text-base">Илүү тав тухтай</h4>
        <h2 className="text-2xl md:text-4xl font-bold">VIP зар-луу үсрэх</h2>
      </div>

      <Link href="/vip" className="mt-4 md:mt-0">
        <span className="px-4 py-2 bg-white text-black rounded-md text-sm md:text-base">
          Дэлгэрэнгүй
        </span>
      </Link>
    </div>
  );
};

export default VIPads;
