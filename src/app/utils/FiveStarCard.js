import Image from "next/image";

export default function FiveStarCard({
  name,
  logo,
  image,
  bgColor,
  labelColor,
}) {
  return (
    <div
      className={`rounded-md lg:rounded-xl p-2 lg:p-6 flex justify-between w-full relative overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col justify-between gap-2 w-1/2">
        <div
          className="lg:text-xl text-[10px] font-medium px-2 lg:px-4 py-1 rounded-md w-fit"
          style={{ backgroundColor: labelColor }}
        >
          {name.toUpperCase()}
        </div>

        <div className="flex justify-start h-8 lg:h-20 w-2/3 ">
          <img
            src={logo}
            alt={`${name} logo`}
            className="object-contain h-full "
          />
        </div>

        <div className="lg:text-3xl text-md  font-medium z-20">UP to 80% OFF</div>
      </div>

      <div className="w-1/2  lg:mt-4 h-20 lg:h-52 z-20">
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
