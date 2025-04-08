"use client";
import { useState } from "react";
import MultiImageUpload from "../create-ads/UploadImage";
import axios from "axios";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";

export default function CreateItem({ setOpenLocation, open }) {
  const [datas , setDatas] = useState([]);
  const [isLoading , setIsLoading ] = useState(false);
  const [images, setImages] = useState([]);
  const [content , setContent] = useState({
    title: "",
    description: "",
    type: "",
    file: "",
    price: "",
    location: "",
    maptolocation: "",
    address: ""
  })
  
  const handleUpload = async () => {
      const e = new FormData()
      e.append('title' , content.title);
      e.append('description' , content.description);
      e.append('type' , content.type || 'normal' );
      e.append('price' , content.price );
      e.append('location' , content.location);
      e.append('maptolocation' , content.maptolocation);
      e.append('address' , content.address);

      images.forEach((img, index) => {
        e.append("file", img.file); 
      })
      setIsLoading(true)
      try{
        const response = await axios.post('http://localhost:4000/api/v1/product' , e,{
            headers: { 'Content-Type': 'multipart/form-data' }  
        })
        setDatas((prevDatas) => [response.data.data , ...prevDatas]);
        toast.success('Амжилттай');
        setIsLoading(false);
      }catch(error){
        toast.error("Алдаа гарлаа")
        setIsLoading(false)
      }finally{
        setIsLoading(false)
      }
  }
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

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
                <label className="block text-sm text-gray-700 mb-1">Зарын Нэр </label>
                <input name="title" onChange={handleChange} value={content.title} className="w-full border rounded px-3 py-2"  type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Үнэ</label>
                <input name="price" onChange={handleChange} value={content.price} className="w-full border rounded px-3 py-2" type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">  Тайлбар </label>
                <input  name="description" onChange={handleChange} value={content.description} className="w-full border rounded px-3 py-2" type="text" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Байршил Оруулах
                </label>
                <input
                  name="location"
                  onChange={handleChange}
                  value={content.location}
                  className="w-full border rounded px-3 py-2"
                  type="text"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Хаяг</label>
              <input name="address" onChange={handleChange} value={content.address} className="w-full border rounded px-3 py-2" type="text" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
              Сонголт хийнэ үү
              </label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={content.type}
                name="type"
                onChange={handleChange}
              >
             
                <option  value="normal">энгийн</option>
                <option value="special">онцгой</option>
                <option value="vip">VIP</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-2">
              <button
                value={content.maptolocation}
                onClick={() => setOpenLocation(true)}
                className="bg-blue-500 text-white  py-2 px-4 rounded-full"
              >
                Байршил оруулах
              </button>
              <p></p>
              <p></p>
              <button
                onClick={handleUpload}
                type="submit"
                className="w-full md:w-auto mt-4 bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
              {isLoading ?  <BiLoaderCircle /> : 'Proceed to Next Step' }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      {/* <div className="bg-gray-100 border border-gray-300 rounded-lg w-full md:w-1/3 h-48 md:h-[240px]"> */}

      <MultiImageUpload images={images} setImages={setImages}/>
      {/* </div> */}
    </div>
  );
}
