/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        


"primary": "#8be550",
        


"secondary": "#3be2b0",
        


"accent": "#bff2fc",
        


"neutral": "#1D2235",
        


"base-100": "#FAFAFA",
        


"info": "#4FA4CF",
        


"success": "#1A8957",
        


"warning": "#A17D12",
        


"error": "#FA0A32",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
