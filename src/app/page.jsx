import MainContainer from "./utils/MainContainer";
import MainHeader from "./components/Home/MainHeader";
import CustomSwiper from "./utils/CustomSwiper";
import CategoryTitles from "./components/Home/CategoryTitles";
import VIPSection from "./components/Home/VIPSection";
import VipAds from "./components/Home/VIPads";
import CategorySection from "./components/Home/CategorySection";
import FiveStarSection from "./components/Home/FiveStarSection";
import TotalServices from "./components/Home/TotalServices";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <MainContainer>
        <MainHeader />
        <CategoryTitles />
        <CustomSwiper />
        <VipAds />
        <VIPSection />
        <CategorySection />
        <FiveStarSection />
        <TotalServices />
        {/* <CategorySection /> */}
      </MainContainer>
      <Footer />
    </>
  );
}
