import React from "react";
import { FaCrown } from "react-icons/fa";
import Link from "next/link";
const VIPads = () => {
  return (
    <div className="pl-20 bg-[#01b4ad] flex justify-between items-center rounded-md ">
      <h1 className="text-2xl text-white font-bold">VIP үйлчилгээ </h1>
      <FaCrown size={140} className="text-[#d0a425]" />
      <div className="flex flex-col gap-2 text-white">
        <h4>Илүү тав тухтай</h4>
        <h2 className="text-4xl font-bold">VIP зар-луу үсрэх</h2>
      </div>
      <Link href="/vip" className="pr-10">
        <span className="p-2 bg-white text-black rounded-md">Дэлгэрэнгүй</span>
      </Link>
    </div>
  );
};

export default VIPads;
