import React from "react";
import { Route, Routes } from "react-router-dom";
import Message from "../components/desktop/Message";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message/:id" element={<Message />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
