/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors: {
      // },
    },
    screens: {
      // heights
      laptop: { raw: '(max-height:900px)' },
      // => @media (max-height: 900px) { ...
      //widths
      xm: '500px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }
      mdxl: '901px',
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1xl': '1361px',
      '2xl': '1536px',

      // => @media (min-width: 1536px) { ... }

      max_xl: { max: '1287px' },
      max_xml: { max: '1270px' },
      // => @media (max-width: 1279px) { ... }
      max_x: { max: '1150px' },

      max_lg: { max: '1050px' },
      // => @media (max-width: 1050px) { ... }
      max_850: { max: '850px' },
      max_md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      max_sm: { max: '640px' },

      // => @media (max-width: 639px) { ... }

      max_smm: { max: '500px' },
      // => @media (max-width:500px) { ... }
    },
  },
  plugins: [],
}
