/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "darkChatBg": "url('./public/telegram-bg.png')",
        "lightChatBg": "url('./public/chat-light-bg.png')",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
