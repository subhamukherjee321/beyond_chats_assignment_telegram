import React from "react";
import { NavLink } from "react-router-dom";
import useChat from "../../hooks/useChat";
import useStore from "../../utils/store";
import Chat from "./Chat";

const ChatBox = () => {
  const { chats } = useChat();

  return (
    <div
      className="flex flex-col p-0 md:px-2 mt-17"
    >
      {chats.map((chat, idx) => (
        <>
          <NavLink to={`/message/${chat?.id}`} className="block md:hidden">
            <Chat key={idx} index={idx} chat={chat} />
          </NavLink>

          <div className="md:block hidden">
            <Chat key={idx} index={idx} chat={chat} />
          </div>
        </>
      ))}
    </div>
  );
};

export default ChatBox;
