import React from "react";
import VipSection from "./VipSection";
import VipDetails from "./VipDetail";
import MainVipAds from "./MainVipAds";
import ProductIntro from "./ProductIntro";
import CommonQuestions from "./CommonQuestions";

const VipMainSection = () => {
  return (
    <VipSection>
      <VipDetails />
      <MainVipAds />
      <ProductIntro />
      <CommonQuestions />
    </VipSection>
  );
};

export default VipMainSection;
