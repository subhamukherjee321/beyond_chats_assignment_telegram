/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "darkChatBg": "url('./src/assets/telegram-bg.png')",
        "lightChatBg": "url('./src/assets/chat-light-bg.png')",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
