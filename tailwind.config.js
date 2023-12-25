/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        "2xl": "1140px",
      },
    },
    extend: {
      fontFamily: {
        font1: ["Grandstander", "sans-serif"],
        font2: ["Russo One", "sans-serif"],
      },
      colors: {
        mor: "#832561",
        gri: "#848a8c",
        mavi: "#007fdb",
        acik: "#dbebfa",
        kara: "#000000",
        lila: "#a626aa",
      },
    },
  },
  plugins: [],
};
