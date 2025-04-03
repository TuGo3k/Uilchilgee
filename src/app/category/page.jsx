import React from "react";
import Header from ".././components/Header"; // Adjust path if necessary
import { Navbar } from "../components/Navbar";
import { Content } from "../components/Content";
export default function CategoryPage() {
  return (
    <div className="w-full h-full bg-white">
      <Header />

      <div className=" px-[8%] w-full  h-full   flex flex-1 ">
        <div className="navbar w-1/4 flex h-full ">
          <Navbar />
        </div>
        <div className="content w-3/4 px-10 pt-5">
          <Content />
        </div>
      </div>
    </div>
  );
}
