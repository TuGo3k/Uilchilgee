import React, { useState } from "react";

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

  return (
    <div className="w-full text-center">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
        id="multiImageUpload"
      />
      <label
        htmlFor="multiImageUpload"
        className="p-3 bg-gray-100 rounded-md cursor-pointer inline-block"
      >
        Select Images
      </label>

      <div className="mt-4 grid grid-cols-3 gap-4 justify-items-center">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.preview}
              alt={`Preview ${index}`}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={() => handleRemoveImage(image.preview)}
              className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
              style={{ transform: "translate(50%, -50%)" }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImageUpload;
