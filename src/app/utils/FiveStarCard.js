import Image from "next/image";

export default function FiveStarCard({
  name,
  logo,
  image,
  bgColor,
  labelColor,
}) {
  const Star = () => (
    <div className="star-container1 w-full justify-center items-center flex   size-4 md:size-6 lg:size-12 overflow-hidden h-full ">
        <div className="star-shape1">

      
        {/*size-4 md:size-6 lg:size-12  */}
        <div className="star-container2 p-5 w-full overflow-hidden">
          <div className="star-shape2 p-2"></div>
        </div>
        </div>
    </div>
  );
  return (
    <div
      className={`rounded-md lg:rounded-xl cursor-pointer p-2 lg:p-6 flex justify-between w-full relative overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-between gap-2 w-1/2">
        <div
          className="md:text-xl text-[11px]  font-medium lg:px-4 px-1 z-21 py-1 rounded-md w-fit"
          style={{ backgroundColor: labelColor }}
        >
          {name.toUpperCase()}
        </div>

        <div className="flex flex-col justify-start z-21 h-8 lg:h-24 w-fit relative border-r-amber-300">
          <div className="w-full h-1/2 flex justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <Star key={index} />
          ))}
          
          </div>
          <div className="w-full h-1/2 flex justify-center px-[2vw]">
          {Array.from({ length: 2 }).map((_, index) => (
            <Star key={index} />
          ))}
          
          </div>
        </div>

        <div className="lg:text-3xl text-sm  font-medium z-20">
          UP to 80% OFF
        </div>
      </div>

      <div className="w-1/2 flex justify-center lg:mt-4 h-28  lg:h-52 z-22">
        <img src={image} alt={`${name} product`} className="object-cover " />
      </div>
      <div
        style={{ borderColor: labelColor }}
        className={`block absolute size-40 lg:size-72 border-4 p-2 lg:p-5 -top-10 lg:-top-20 -right-15 lg:-right-10 rounded-full z-10`}
      >
        <div
          style={{ background: labelColor }}
          className={`w-full h-full  p-10 rounded-full`}
        ></div>
      </div>
    </div>
  );
}
