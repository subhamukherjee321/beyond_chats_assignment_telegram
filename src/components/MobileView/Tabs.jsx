import React, { useState } from "react";
import ChatBox from "../desktop/ChatBox";
import TabOPtions from "./TabOPtions";
import useStore from "../../utils/store";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All Chats");

  const { theme } = useStore();

  return (
    <div
      className={`w-full max-w-md mx-auto`}
      style={{
        background: theme ? "#212121" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <TabOPtions />
      <div>
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            activeTab === "All Chats" ? "translate-x-0" : ""
          } ${activeTab === "Active" ? "translate-x-full" : ""} ${
            activeTab === "Unread" ? "translate-x-0" : ""
          } ${activeTab === "Regulars" ? "translate-x-3xl" : ""}`}
        >
          {activeTab === "All Chats" && <ChatBox />}
          {activeTab === "Active" && (
            <div className="text-2xl bg-red-600">Active Content</div>
          )}
          {activeTab === "Unread" && (
            <div className="text-2xl">Unread Content</div>
          )}
          {activeTab === "Regulars" && (
            <div className="text-2xl">Regulars Content</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
