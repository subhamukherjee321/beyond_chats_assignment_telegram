import React from "react";
import ChatList from "../components/desktop/ChatList";
import Message from "../components/desktop/Message";
import MobileHomePage from "./MobileHomePage";

const HomePage = () => {
  return (
    <main>
      <div className="md:flex overflow-hidden hidden h-[100vh]">
        <ChatList />
        <Message />
      </div>

      <MobileHomePage />
    </main>
  );
};

export default HomePage;
