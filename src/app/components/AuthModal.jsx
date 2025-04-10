import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TiTimes } from "react-icons/ti";

const AuthModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState(null);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const clearForm = () => {
    setEmailOrPhone("");
    setPassword("");
    setName("");
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailOrPhone || !password || (activeTab === "signup" && !name)) {
      setError("Бүх талбарыг бөглөнө үү");
      return;
    }

      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrPhone);

    try {
      const url =
        activeTab === "signup"
          ? "http://localhost:4000/api/v1/auth/register"
          : "http://localhost:4000/api/v1/auth/login";

      const payload =
        activeTab === "signup"
          ? { name, emailOrPhone, password, isEmail: isEmail ? emailOrPhone : undefined, phone: !isEmail ? emailOrPhone : undefined  }
          : { emailOrPhone, password, isEmail: isEmail ? emailOrPhone : undefined, phone: !isEmail ? emailOrPhone : undefined };

      const response = await axios.post(url, payload, { withCredentials: true });
      localStorage.setItem('user' , JSON.stringify(response.data.user))
      localStorage.setItem('token' , response.data.token)
      toast.success(response.data.message);
      clearForm();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Алдаа гарлаа");
      console.log(err)
    }
  };

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
          <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">И-мэйл эсвэл утас</label>
            <input
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              type="text"
              placeholder="И-мэйл эсвэл утас"
              className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Нууц үг</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Нууц үг"
              className="shadow appearance-none border border-[#008ECC] rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="bg-[#008ECC] hover:bg-blue-600 duration-200 ease-in text-white w-full font-bold py-2 px-4 rounded"
          >
            Нэвтрэх
          </button>
          <p className="text-center mt-4 cursor-pointer" onClick={() => setActiveTab("signup")}>
            Бүртгүүлэх
          </p>
        </form>
        
          ) : (
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="signupUsername"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Хэрэглэгчийн нэр
                </label>
                <input
                  onChange={(e) => setName(e.target.value) }
                  name="name"
                  value={name}
                  type="text"
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
                  name="emailOrPhone"
                  onChange={(e) => setEmailOrPhone(e.target.value) }
                  value={emailOrPhone}
                  type="text"
                  placeholder="Утасны дугаар "
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
                  name="password"
                  onChange={(e) => setPassword(e.target.value) }
                  value={password}
                  type="password"
                  id="signupPassword"
                  placeholder="Нууц үг"
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;