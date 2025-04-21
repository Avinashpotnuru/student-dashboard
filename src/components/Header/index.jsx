/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { useEffect, useState } from "react";
  export default function Header({ title }) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userName = localStorage.getItem("userDetails");
    if (userName) {
      setUserName(JSON.parse(userName).username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <div
          onClick={() => navigate("/dashboard")}
          className="w-10 h-10 bg-gray-300 rounded-full"
        />
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
       
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">School Name</span>
        <span className="text-gray-600">{userName}</span>

        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-full hover:bg-red-200"
          title="Logout"
        >
          <AiOutlineLogout />
        </button>
      </div>
    </div>
  );
}
