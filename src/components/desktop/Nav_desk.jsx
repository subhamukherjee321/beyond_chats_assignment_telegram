import React, { useState } from "react";
import {
  FaAddressBook,
  FaBookOpen,
  FaBug,
  FaCog,
  FaFilm,
  FaMoon,
  FaSave,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMenuSharp, IoSearch } from "react-icons/io5";
import useStore from "../../utils/store";
import Switch from "./SwitchBtn";

const Nav_desk = () => {
  const { theme } = useStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="sticky top-0 z-10"
      style={{
        background: theme ? "#212121" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <div className="flex items-center gap-3 px-5 py-4">
        <div
          className={`p-2 rounded-full ${
            theme ? "hover:bg-[#2b2b2b]" : "hover:bg-gray-200"
          } cursor-pointer`}
          onClick={toggleMenu}
        >
          <IoMenuSharp color="#aaaaaa" className="w-6 h-6" />
        </div>
        <div
          className="w-[90%] gap-3 items-center flex px-3 py-2 rounded-3xl"
          style={{ background: theme ? "#2C2C2C" : "#F4F4F5" }}
        >
          <IoSearch color="#707070" className="w-6 h-6" />
          <input
            className="text-white bg-inherit border-none outline-none w-full"
            placeholder="Search"
          />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="absolute top-16 left-5 w-60 z-30 rounded-lg shadow-lg md:shadow-gray-600"
          style={{
            color: theme ? "white" : "black",
            background: theme ? "#212121" : "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15p"
          }}
        >
          <ul className="p-4 space-y-2">
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaSave className="mr-2" />
              Saved Messages
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaAddressBook className="mr-2" />
              Contacts
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaBookOpen className="mr-2" />
              My Stories
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaCog className="mr-2" />
              Settings
            </li>
            <li className={`flex items-center justify-between py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <div className="flex items-center gap-1">
                <FaMoon className="mr-2" />
                Night Mode
              </div>
              <Switch />
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaFilm className="mr-2" />
              Animations
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaTelegramPlane className="mr-2" />
              Telegram Feature
            </li>
            <li className={`flex items-center py-2 px-4 ${theme ? "hover:bg-[#4f4e4e]" : "hover:bg-gray-200"} cursor-pointer rounded-lg`}>
              <FaBug className="mr-2" />
              Report a Bug
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav_desk;
