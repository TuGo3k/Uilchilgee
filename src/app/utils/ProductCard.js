import React from "react";
import { FiPlusCircle } from "react-icons/fi"; // Importing the plus icon

const ProductCard = ({ product }) => {
  return (
    <div className=" rounded-lg shadow-md  bg-white hover:scale-105 duration-150">
      {/* Product Image Section */}
      <div className="relative bg-gray-300 w-full h-[20vh] lg:h-[45vh] rounded-lg">
        {/* Discount Badge */}
        <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
          {product.discount}
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-3 w-full h-fit flex flex-col items-start justify-start px-4">
        <h2 className="text-md font-medium text-gray-800">{product.name}</h2>

        {/* Pricing */}
        <div className="flex w-full h-fit items-center justify-between space-x-2 mt-1">
          <div className="w-full flex h-fit gap-[1px] sm:gap-1 items-center font-normal">
            <span className="text-gray-400 line-through text-[11px] sm:text-sm">
              ${product.original_price.toFixed(2)}
            </span>
            <span className="text-black font-semibold text-[11px] sm:text-sm">
              ${product.discounted_price.toFixed(2)}
            </span>
          </div>
          <FiPlusCircle className="text-gray-500 text-2xl cursor-pointer hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
