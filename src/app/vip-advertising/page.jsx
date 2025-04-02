import React from "react";
import VipDetails from "../components/(vip-advertising)/VipDetail";
import MainVipAds from "../components/(vip-advertising)/MainVipAds";
import ProductIntro from "../components/(vip-advertising)/ProductIntro";
import VipSection from "../components/(vip-advertising)/VipSection";
import CommonQuestions from "../components/(vip-advertising)/CommonQuestions";

const page = () => {
  return (
    <VipSection>
      <VipDetails />
      <MainVipAds />
      <ProductIntro />
      <CommonQuestions />
    </VipSection>
  );
};

export default page;
