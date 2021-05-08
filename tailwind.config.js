module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blackText: "#0c1d37",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
