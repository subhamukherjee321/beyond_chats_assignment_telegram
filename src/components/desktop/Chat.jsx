import PropTypes from "prop-types";
import formatDate from "../../utils/formatDate";
import getTwoLetterName from "../../utils/getTwoLetterName";
import randomColor from "../../utils/returnColor";
import useStore from "../../utils/store";

const Chat = ({ chat, index }) => {
  const { setChatId, theme } = useStore();
  

  return (
    <div
      onClick={() => setChatId(chat?.id)}
      className="hover:bg-[#2b2b2b] cursor-pointer px-2 py-2 flex gap-2 items-center rounded-md relative"
      style={{background: theme ? "#212121" : "white", color: theme ? "white" : "black"}}
    >
      <div
        style={{
          backgroundColor: randomColor(index),
        }}
        className="w-[60px] h-[50px] rounded-full text-2xl font-semibold flex justify-center items-center"
      >
        {getTwoLetterName(chat?.creator?.name)}
      </div>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="font-semibold">
            {chat?.creator?.name || "Unknown"}
          </p>
          <p className="text-xs">
            {formatDate(chat?.creator?.created_at)}
          </p>
        </div>
        <p className="text-[#a6a6a6]">User joined telegram</p>
      </div>
      <span className="absolute right-2 top-2"></span>
    </div>
  );
};

Chat.propTypes = {
  chat: PropTypes.object,
  index: PropTypes.number,
};

export default Chat;
