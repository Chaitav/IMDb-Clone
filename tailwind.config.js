/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
  darkMode: "class", // NOTE: Required to configure Tailwind CSS dark mode feature
};
