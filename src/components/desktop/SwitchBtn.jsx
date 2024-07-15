import React, { useState } from "react";
import useStore from "../../utils/store";

const Switch = () => {
  const { setTheme, theme } = useStore();

  const toggleSwitch = () => {

    setTheme(!theme);
  };

  return (
    <div
      onClick={toggleSwitch}
      className={`relative inline-flex items-center h-5 py-2 rounded-full w-11 cursor-pointer transition-colors duration-300 ${
        theme ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block w-4 h-3 transform bg-white rounded-full transition-transform duration-300 ${
            theme ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </div>
  );
};

export default Switch;
