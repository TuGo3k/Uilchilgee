import { FaTrash } from "react-icons/fa";
const adDetails = [
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    discount: "13%",
    price: "230",
    name: "Double Bed & Side Tables",
    img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
];

const MyAds = () => {
  return (
    <div className="w-full h-fit max-h-[666px] flex gap-[35px] flex-col p-[32px] sm:p-[64px] rounded-[10px] border border-[#e6ebf1]">
      <h1 className="font-semibold text-2xl text-[#1A3353]">Миний зарууд</h1>
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 overflow-scroll gap-2">
        {adDetails.map((ad, index) => (
          <div
            key={index}
            className="w-full h-fit flex flex-col gap-3 relative"
          >
            <span className="w-fit h-fit flex justify-center items-center absolute top-3 left-3 bg-[#3D3D3D] text-white rounded-[8px] font-normal text-[12px] py-1 px-3">
              <p>{ad.discount}</p>
            </span>
            <div className="w-full h-fit flex flex-col gap-3">
              <img
                src={ad.img}
                alt="image"
                className="w-full h-[150px] md:h-[200px] lg:h-[290px] object-cover rounded-[10px]"
              />
              <div className="w-full h-fit flex flex-col">
                <h1 className="font-normal text-[#404040] text-[16px] ">
                  {ad.name}
                </h1>

                <div className="w-full h-fit flex flex-row justify-between items-center">
                  <div className="w-fit h-fit flex flex-row gap-1">
                    <p className="text-[#404040] text-[12px] font-normal line-through">
                      {ad.price}₮
                    </p>
                    <p className="text-[#000] text-[12px] font-semibold ">
                      {Math.round(
                        Number(ad.price) -
                          (Number(ad.price) * parseFloat(ad.discount)) / 100
                      )}
                      ₮
                    </p>
                  </div>
                  <div className="group">
                    <span className="w-6 h-6 rounded-full group-hover:bg-red-600 border border-red-600 flex transition-all duration-300 ease-in-out justify-center items-center cursor-pointer">
                      <FaTrash
                        size={12}
                        className="text-red-600 group-hover:text-white transition-all duration-300 ease-in-out"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-fit flex justify-end items-center">
        <button className="w-fit h-fit py-3 px-12 bg-[#008ECC] text-white rounded-[4px] font-semibold ">
          Хадгалах
        </button>
      </div>
    </div>
  );
};

export default MyAds;
