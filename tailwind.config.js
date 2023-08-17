/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#e3e3e3",
        mediumspringgreen: "#00ffa7",
        gray: {
          "100": "#01041d",
          "200": "#01020a",
        },
        darkslategray: "#3e3e3e",
        whitesmoke: "#e9ecef",
        silver: {
          "100": "#b9b9b9",
          "200": "rgba(200, 200, 200, 0.23)",
        },
        secondary: "#42daa6",
        "common-white": "#fff",
        "text-light-primary": "#212b36",
        "grey-600": "#637381",
        "components-input-outlined": "rgba(145, 158, 171, 0.32)",
        "text-light-disabled": "#919eab",
        "error-main": "#ff5630",
        primary: "#9571ff",
      },
      fontFamily: {
        "h1-headline": "'Public Sans'",
        futura: "Futura",
      },
      borderRadius: {
        "31xl": "50px",
        "9980xl": "9999px",
        "101xl": "120px",
        "3xl": "22px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      xs: "0.75rem",
      sm: "0.88rem",
      base: "1rem",
      lg: "1.13rem",
      "13xl": "2rem",
      "45xl": "4rem",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
