import React, { useState } from "react";
import { TiTimes } from "react-icons/ti";

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center">
      <div
        className="absolute inset-0 z-1000 bg-black opacity-50"
        onClick={() => {
          onClose();
          setActiveTab("login");
        }}
      ></div>

      <div className="relative bg-white rounded-lg z-1001 shadow-xl mx-[10vw] w-full sm:max-w-[500px] sm:mx-auto">
        <div className="p-6 w-full">
          <div className="text-2xl mb-4 w-full flex items-center justify-between font-semibold text-[#1A3353]">
            {activeTab === "login" ? <h1>Нэвтрэх</h1> : <h1>Бүртгүүлэх</h1>}
            <TiTimes
              className="cursor-pointer"
              onClick={() => {
                onClose();
                setActiveTab("login");
              }}
            />
          </div>
          {activeTab === "login" ? (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="loginPhone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Утасны дугаар
                </label>
                <input
                  type="email"
                  id="loginPhone"
                  placeholder="Утасны дугаар"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="">
                <label
                  htmlFor="loginPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Нууц үг
                </label>
                <input
                  type="password"
                  placeholder="Нууц үг"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full flex underline items-center text-[#008ECC] hover:text-blue-600 duration-200 ease-in cursor-pointer mb-4 justify-end">
                <a>Нууц үг мартсан?</a>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#008ECC] hover:bg-blue-600 duration-200 ease-in text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Нэвтрэх
                </button>
              </div>
              <p
                className="text-center mt-4 cursor-pointer"
                onClick={() => setActiveTab("signup")}
              >
                Бүртгүүлэх
              </p>
            </div>
          ) : (
            <div className="w-full">
              <div className="mb-4">
                <label
                  htmlFor="signupUsername"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Хэрэглэгчийн нэр
                </label>
                <input
                  type="text"
                  id="signupUsername"
                  placeholder="Хэрэглэгчийн нэр"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="signupPhoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Утасны дугаар
                </label>
                <input
                  type="email"
                  id="signupPhoneNumber"
                  placeholder="Утасны дугаар"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="signupPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Нууц үг
                </label>
                <input
                  type="password"
                  id="signupPassword"
                  placeholder="Нууц үг"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="signupConfirmPassword"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Нууц үг давтах
                </label>
                <input
                  type="password"
                  id="signupConfirmPassword"
                  placeholder="Нууц үг давтах"
                  className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
              </div>

              <div className="flex items-center mb-2 w-full justify-between">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 duration-200 ease-in text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
