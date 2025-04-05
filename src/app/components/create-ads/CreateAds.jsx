"use client";
import React from "react";
import CreateForm from "./CreateForm";
import MultiImageUpload from "./example";

const CreateAds = () => {
  return (
    <div className="w-full h-fit gap-[43px] lg:flex-row px-[10vw] gap flex flex-col">
      <CreateForm />
      <MultiImageUpload />
    </div>
  );
};

export default CreateAds;
