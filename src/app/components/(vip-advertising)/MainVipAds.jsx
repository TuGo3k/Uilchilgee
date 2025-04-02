import { IoIosArrowDown } from "react-icons/io";
import VipAds from "./VipAds";
const MainVipAds = () => {
  return (
    <section className="w-full h-fit flex flex-col gap-[60px]">
      <div className="flex justify-between items-center">
        <div className="max-w-[90vw] h-fit flex flex-col gap-5">
          <h1 className="font-bold text-4xl">VIP зар</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina.
          </p>
        </div>
        <div className="w-fit h-fit">
          <button className="min-w-[245px] text-[20px] font-semibold w-fit rounded-full h-fit px-6 py-4 bg-[#000000] flex items-center gap-3 text-white">
            Ангилал сонгох
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <VipAds />
    </section>
  );
};

export default MainVipAds;
