// components/CategoryCards.tsx

import Image from "next/image";

export default function CategoryCards({ name, image }) {
  return (
    <div className="w-full  flex flex-col items-center justify-center">
      <div className="size-20 lg:size-48 rounded-full bg-[#f5f5f5] hover:border hover:border-blue-500 transform-all shadow-sm flex items-center justify-center overflow-hidden p-4 lg:p-7 ">
        <img src={image} alt={name} className="object-contain w-full h-full" />
      </div>
      <p className="mt-2 text-center text-sm lg:text-xl">{name}</p>
    </div>
  );
}

