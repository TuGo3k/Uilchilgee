import React from "react";

const VipSection = ({ children }) => {
  return (
    <section className="w-full h-fit px-[10vw] flex flex-col">
      {children}
    </section>
  );
};

export default VipSection;
