import axios from "axios";
import { useEffect } from "react";
import useStore from "../utils/store";

const useMessage = (chatId) => {
  const { setMessage, message } = useStore();

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );

      const user = [];
      const sender = [];

      res.data.data.forEach((chat) => {
        if (chat.sender.email === "contact@beyondchat.com") {
          user.push({
            message: chat.message,
            name: chat.sender.name,
            date: chat.created_at,
          });
        } else {
          sender.push({
            message: chat.message,
            name: chat.sender.name,
            date: chat.created_at,
          });
        }
      });

      setMessage({ user, sender });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (chatId) {
      getMessages();
    }

    //eslint-disable-next-line
  }, [chatId]);

  return { message };
};

export default useMessage;
