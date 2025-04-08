import MainContainer from "./utils/MainContainer";
import MainHeader from "./components/Home/MainHeader";
import CustomSwiper from "./utils/CustomSwiper";
import CategoryTitles from "./components/Home/CategoryTitles";
import VIPSection from "./components/Home/VIPSection";
import VipAds from "./components/Home/VIPads";
import CategorySection from "./components/Home/CategorySection";
export default function Home() {
  return (
    <MainContainer>
      <MainHeader />
      <CategoryTitles />
      <CustomSwiper />
      <VipAds />
      <VIPSection />
      <CategorySection />
    </MainContainer>
  );
}
