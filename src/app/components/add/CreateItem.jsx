"use client";
import { useState } from "react";
import MultiImageUpload from "../create-ads/UploadImage";
// import LocationSelector from "@/app/utils/LocationSelector";

export default function CreateItem({ setOpenLocation, open }) {
  const [selected, setSelected] = useState("энгийн");
  return (
    <div className="flex flex-col md:flex-row gap-6 pt-4 pb-10 bg-gray-50 h-full px-[8vw] relative">
      {/* Left Section */}
      <div className="bg-white rounded-lg shadow border border-gray-200 w-full md:w-2/3">
        <div className="bg-gray-400 text-lg md:text-2xl text-white px-4 py-4 rounded-t-md font-semibold">
          Personal
        </div>
        <div className="p-4 md:p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Зарын Нэр
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Үнэ</label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Тайлбар
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Байршил Оруулах
                </label>
                <input
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Хаяг</label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Сонголт хийнэ үү

              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
              >
             
                <option value="энгийн">энгийн</option>
                <option value="онцгой">онцгой</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            {/* <div>
              <label className="block text-sm text-gray-700 mb-1">
                Postcode / Zip*
              </label>
              <input className="w-full border rounded px-3 py-2" type="text" />
            </div> */}

            <div className="flex flex-col items-start gap-2">
              <button
                onClick={() => setOpenLocation(true)}
                className="bg-blue-500 text-white  py-2 px-4 rounded-full"
              >
                Байршил оруулах
              </button>
              <p></p>
              <p></p>
              <button
                // type="submit"
                className="w-full md:w-auto mt-4 bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Proceed to Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="bg-gray-100 border border-gray-300 rounded-lg w-full md:w-1/3 h-48 md:h-[240px]"> */}

      <MultiImageUpload />
      {/* </div> */}
    </div>
  );
}
