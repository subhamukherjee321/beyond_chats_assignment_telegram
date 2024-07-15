import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  FaAddressBook,
  FaCog,
  FaPeopleArrows,
  FaPhone,
  FaRegBookmark,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { IoPersonAdd, IoSunny } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";
import useStore from "../../utils/store";

const MobileNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { setTheme, theme } = useStore();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={`sticky top-0 z-10`}
      style={{
        color: theme ? "white" : "black",
        background: theme ? "#212121" : "#40a4c4",
      }}
    >
      <nav className="flex items-center justify-between p-4 text-white">
        <div className="flex items-center w-[50%] justify-between">
          <div
            className="w-[25px] h-[25px] flex justify-center items-center cursor-pointer"
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className="w-full h-full font-bold" />
          </div>
          <h1 className="text-[27px] font-[500]">Telegram</h1>
        </div>

        <div className="h-[30px] w-[30px] flex justify-center items-center">
          <IoMdSearch className="w-full h-full font-bold" />
        </div>
      </nav>

      <div
        className={`text-lg font-semibold fixed inset-y-0 left-0 w-64 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
        style={{ background: theme ? "#212121" : "white" }}
      >
        <div
          className="p-4"
          style={{ background: theme ? "#233404" : "#5c8cbc" }}
        >
          <div className="flex justify-between">
            <img
              src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg"
              alt="User Avatar"
              className="rounded-full h-[60px] w-[60px]"
            />

            {!theme ? (
              <BsFillMoonStarsFill
                style={{
                  color: "white",
                  height: "20px",
                  width: "20px",
                  transform: "rotate(360deg)",
                  marginTop: "0.3rem",
                }}
                onClick={toggleTheme}
              />
            ) : (
              <IoSunny
                style={{
                  color: "white",
                  height: "25px",
                  width: "25px",
                  transform: "rotate(360deg)",
                  marginTop: "0.3rem",
                }}
                onClick={toggleTheme}
              />
            )}
          </div>

          <div className="flex justify-between items-center text-sm mt-6 text-white">
            <div>
              Subha Mukherjee
              <br />
              +91 9876543210
            </div>

            <MdKeyboardArrowDown
              style={{ width: "30px", height: "30px", font: "bold" }}
            />
          </div>
        </div>
        <ul>
          <li className="flex items-center hover:bg-gray-800 px-4 py-2">
            <FaUserAlt className="mr-2" /> My Profile
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaUsers className="mr-2" /> New Group
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaAddressBook className="mr-2" /> Contacts
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaPhone className="mr-2" /> Calls
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaPeopleArrows className="mr-2" /> People Nearby
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaRegBookmark className="mr-2 font-bold" /> Saved Messaages
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <FaCog className="mr-2" /> Settings
          </li>
        </ul>

        <hr />

        <ul className="mt-1.5">
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <IoPersonAdd className="mr-2" /> Invite Friends
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-800">
            <RxQuestionMarkCircled className="mr-2 font-bold" /> Telegram
            Features
          </li>
        </ul>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-[#212121] opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;
