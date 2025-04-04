import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const MultiImageUpload = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (preview) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image.preview !== preview)
    );
  };
  const triggerFileInput = () => {
    document.getElementById("multiImageUpload").click();
  };
  return (
    <div className="w-full h-[500px] text-center rounded-[10px] bg-[#F9F9F9] overflow-hidden border border-[#DEDFE1]">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="multiImageUpload"
      />
      <div
        className="h-[40px] w-full bg-[#a6a6a6] flex items-center justify-center cursor-pointer"
        onClick={triggerFileInput}
      >
        Add Images
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center relative p-4 w-full h-full ">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={() => handleRemoveImage(image.preview)}
              className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
              style={{ transform: "translate(50%, -50%)" }}
            >
              <FaTimes />
            </button>
          </div>
        ))}
        {images.length === 0 && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <FaCloudUploadAlt size={90} color="#A6A6A6" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiImageUpload;
