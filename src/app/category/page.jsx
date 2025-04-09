"use client";
import React from "react";
import Header from ".././components/Header"; // Adjust path if necessary
import { Navbar } from "../components/Category/Navbar";
import { Content } from "../components/Category/Content";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";
export default function CategoryPage() {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(true);
  return (
    <div className="w-full h-full bg-white">
      <Header />
      <div className="px-[5vw] lg:px-[8vw] py-8 w-full h-full flex flex-col lg:flex-row">
        <div className="navbar w-full lg:w-1/4 flex h-full mb-6 lg:mb-0">
          <Navbar />
        </div>
        <div className="content w-full lg:w-3/4 px-4 sm:px-6 lg:px-10 pt-5">
          <Content />
        </div>
      </div>
      <Footer />
    </div>
  );
}
