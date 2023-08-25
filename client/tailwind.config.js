/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    button: {
      base: "py-2 px-4 rounded",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },

    extend: {
      colors: {
        green: colors.green,
        white: colors.white,
        gray: colors.gray,
        black: colors.black,
        slate: colors.slate,
        blue: colors.blue,
        light: {
          primary: colors.red[100],
          secondary: colors.slate[900],
          text: colors.green[900],
        },
        dark: {
          primary: colors.slate[800],
          secondary: colors.gray[800],
          text: colors.slate[400],
        },
      },
    },

    variants: {
      extend: {
        // backgroundColor: ["dark"],
        textColor: ["dark"],
      },
    },

    screens: {
      // Define custom screen breakpoints
      // Heights
      laptop: { raw: "(max-height:900px)" },
      // => @media (max-height: 900px) { ...

      // Widths
      xm: "500px",
      sm: "640px",
      md: "768px",
      mdxl: "901px",
      lg: "1024px",
      xl: "1280px",
      "1xl": "1361px",
      "2xl": "1536px",
      max_xl1500: { max: "1500px" },
      max_xl: { max: "1287px" },
      max_xml: { max: "1270px" },
      max_x: { max: "1150px" },
      max_lg: { max: "1050px" },
      max_850: { max: "850px" },
      max_md: { max: "767px" },
      max_sm: { max: "640px" },
      max_smm: { max: "500px" },
    },
  },
  plugins: ["macros"], // Enable the "macros" plugin for Tailwind CSS
};
