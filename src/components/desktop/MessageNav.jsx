import { IoCall, IoSearch } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import getTwoLetterName from "../../utils/getTwoLetterName";
import randomColor from "../../utils/returnColor";
import useStore from "../../utils/store";

const MessageNav = () => {
  const { message } = useStore();
  const { theme } = useStore();

  const name = message?.sender?.[0]?.name || "Unknown";

  return (
    <div
      className={`flex items-center justify-between p-3`}
      style={{
        background: theme ? "#212121" : "white",
        color: theme ? "white" : "black",
      }}
    >
      <div className="flex gap-3 items-center">
        <div
          style={{
            backgroundColor: randomColor(0),
          }}
          className="w-10 h-10 rounded-full text-2xl font-semibold flex justify-center items-center"
        >
          <p>{getTwoLetterName(name)}</p>
        </div>
        <div className="font-semibold">
          <p>{name}</p>
          <p className="text-xs mt-1 font-thin">last seen Jun 23 at 1:34 AM</p>
        </div>
      </div>
      <div className="flex items-start gap-7">
        <IoCall className="w-6 h-6 text-[#aaaaaa]" />
        <IoSearch className="w-6 h-6 text-[#aaaaaa]" />
        <SlOptionsVertical className="w-6 h-6 text-[#aaaaaa]" />
      </div>
    </div>
  );
};

export default MessageNav;
