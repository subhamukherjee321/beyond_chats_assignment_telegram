import PropTypes from "prop-types";
import { useEffect } from "react";
import createFormatedDate from "../utils/formatDate";
import useStore from "../utils/store";

export const ChatBubbleSender = ({
  message,
  name,
  date,
  observerRef,
  setDateData,
  isIntersecting,
}) => {
  const { theme } = useStore();

  useEffect(() => {
    if (isIntersecting) {
      console.log(isIntersecting, date);
      setDateData(date);
    }
    //eslint-disable-next-line
  }, [isIntersecting]);

  return (
    <div
      className="flex items-start gap-2.5 md:self-start w-[80%] md:min-w-[35%]"
      ref={observerRef}
    >
      <div
        className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200rounded-e-xl rounded-es-xl ${
          theme ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {createFormatedDate(date)}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5">{message}</p>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className={`inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 ${
          theme
            ? "bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
            : "bg-white hover:bg-gray-200"
        }`}
        type="button"
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ChatBubbleUser = ({ message, name, date }) => {
  const { theme } = useStore();
  return (
    <div className="flex items-start gap-2.5 self-end w-[80%] md:w-[45%]">
      <div
        className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200  rounded-e-xl rounded-es-xl ${
          theme ? "bg-[#8774e1] text-white" : "bg-[#EEFFED] text-black"
        }`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {createFormatedDate(date)}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5">{message}</p>
      </div>
      <button
        id="dropdownMenuIconButton"
        data-dropdown-toggle="dropdownDots"
        data-dropdown-placement="bottom-start"
        className={`inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 ${
          theme
            ? "bg-gray-800 hover:bg-gray-700 focus:ring-gray-600"
            : "bg-white hover:bg-gray-200"
        }`}
      >
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 4 15"
        >
          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      </button>
      <div
        id="dropdownDots"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Reply
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Forward
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Copy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

ChatBubbleSender.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  observerRef: PropTypes.object,
  setDateData: PropTypes.func,
  isIntersecting: PropTypes.bool,
};

ChatBubbleUser.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
};
