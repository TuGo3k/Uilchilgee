import vipdata from "@/app/data/vipdata";
import Image from "next/image";
import React from "react";

const VipAds = () => {
  return (
    <div className="w-full h-fit grid grid-cols-3 gap-7">
      {vipdata.map((data, index) => (
        <div className="w-full h-fit rounded-[20px] overflow-hidden">
            <Image src={data.image} width={'full'} height={'full'}>
        </div>
      ))}
    </div>
  );
};

export default VipAds;
