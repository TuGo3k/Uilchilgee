import React from "react";
import CreateForm from "./CreateForm";
import CreateImage from "./CreateImage";

const CreateAds = () => {
  return (
    <div className="w-full h-fit gap-[43px] px-[10vw] gap flex flex-row">
      <CreateForm />
      <CreateImage />
    </div>
  );
};

export default CreateAds;
