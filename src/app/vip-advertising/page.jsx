import Footer from "../components/Footer";
import Header from "../components/Header";
import VipMainSection from "../components/vip-advertising/VipMainSection";

const page = () => {
  return (
    <section className="w-full h-fit flex flex-col bg-white">
      <Header />
      <VipMainSection />
      <Footer />
    </section>
  );
};

export default page;
