import vipdata from "@/data/vipdata";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const VipAds = () => {
  return (
    <div className="grid grid-cols-3 gap-7 w-full h-fit pb-[109px]">
      {vipdata.map((data, index) => (
        <div className="gap-8 flex flex-col" key={index}>
          {/* Container for the image with a fixed height */}
          <div className="relative w-full h-48 rounded-[20px] overflow-hidden">
            <Image
              src={data.image}
              fill
              alt="image"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Your text content below the image */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src={data.profile}
                alt="avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <p>{data.author}</p>
              <GoDotFill />
              <p>{data.date}</p>
            </div>
            <p>Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VipAds;
