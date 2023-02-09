const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "basic-dark": "#222222",
        "basic-light": "#E9E9E9",
        "special-red": "#E60023",
      },
    },
  },
  plugins: [],
};
