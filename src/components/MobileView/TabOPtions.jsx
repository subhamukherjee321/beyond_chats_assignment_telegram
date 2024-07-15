import React, { useState } from "react";
import useStore from "../../utils/store";

const TabOPtions = () => {
  const { theme } = useStore();
  const [activeTab, setActiveTab] = useState("All Chats");
  const tabs = ["All Chats", "Active", "Unread", "Regulars"];

  return (
    <div
      className="flex space-x-4 px-4 pl-12 md:pl-4 mb-1 overflow-x-auto"
      style={{
        color: theme ? "white" : "black",
        background: theme ? "#212121" : "#40a4c4",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 py-2 px-0 font-semibold whitespace-nowrap ${   
            activeTab === tab && theme
              ? "border-b-4 border-[#40a4c4] text-[#40a4c4]"
              : activeTab === tab && !theme
              ? "border-b-2 border-white text-white"
              : "border-b-2 border-transparent"
          } transition duration-300 ease-in-out`}
          style={{color: activeTab === tab && theme ? "#40a4c4" : "white"}}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabOPtions;
