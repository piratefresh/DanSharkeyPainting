const plugin = require("tailwindcss/plugin");
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
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant("label-checked", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          const eClassName = e(`label-checked${separator}${className}`); // escape class
          const yourSelector = 'input[type="radio"]'; // your input selector. Could be any
          return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
        });
      });
    }),
  ],
};
