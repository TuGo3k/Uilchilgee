import React from "react";
import Header from "@/app/components/Header";
import CreateItem from "../components/add/CreateItem";
import Footer from "../components/Footer";
const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <CreateItem />
      <Footer />
    </div>
  );
};

export default page;
