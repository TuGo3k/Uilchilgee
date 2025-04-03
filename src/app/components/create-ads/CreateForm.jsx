import React from "react";
const personal_data_title = [
  "Зарын Нэр",
  "Үнэ",
  "Тайлбар",
  "Байршил оруулах",
  "Хаяг",
  "VIP Зар Болгох",
  "Онцгой Зар Болгох",
  "Postcode / ZIP*",
];

const CreateForm = () => {
  return (
    <form className="w-[100vw] h-fit rounded-[10px] overflow-hidden border border-[#DEDFE1]">
      <div className="bg-[#A6A6A6] px-[50px] py-[25px] text-white">
        <h1 className="font-semibold text-[20px]">Personal</h1>
      </div>
      <div className="w-full h-fit grid grid-cols-2 gap-x-[46px] gap-y-[25px] p-[25px]">
        {personal_data_title.map((data, index) => (
          <div
            className="col-span-2 gap-2.5 flex flex-col"
            key={index}
            style={{ gridColumn: index < 4 ? "span 1/span 1" : "" }}
          >
            <p className="vip_description !text-[#3D3D3D]">{data}</p>
            <input
              type="text"
              className="border border-[#DEDFE1] rounded-[10px] w-full h-[43px] p-2"
            />
          </div>
        ))}
        <button className="w-fit h-fit px-4 py-2 rounded-full bg-[#282828] text-white col-span-2 font-medium text-[20px] flex items-center gap-4">
          Proceed to Next Step
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
