/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      md: "750px",
      lg: "940px",
      xl: "1180px",
      "2xl": "1400px",
    },
    extend: {},
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        md: "3rem",
        xl:"4rem",
        "2xl":"4rem",
        "3xl":"7rem",
      },
    },
  },
  plugins: [require("daisyui")],
};

