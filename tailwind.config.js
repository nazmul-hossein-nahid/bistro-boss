/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bannerBg: "url(https://i.ibb.co/NSfDx0G/04.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
