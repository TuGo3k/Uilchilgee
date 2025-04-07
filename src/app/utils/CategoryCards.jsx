// components/CategoryCards.tsx

import Image from "next/image";

export default function CategoryCards({ name, image, width }) {
  return (
    <div className="w-full flex flex-col items-center justify-center  ">
      <div className={`circle bg-[#f5f5f5] relative   rounded-full  shadow-sm size-full`}>
      <div className="w-full h-full flex justify-center items-center">
      <img src={image} className=" object-cover " />
      </div>
      </div>
      <p>{name}</p>
    </div>
  );
}
