/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px', // Adjust the size as needed
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light", // eto
      "dark", // eto
      "cupcake", // eto
      "bumblebee", // eto
      "emerald",
      "corporate",
      "synthwave", // eto
      "retro", // eto
      "cyberpunk",
      "valentine",
      "halloween", // eto
      "garden",
      "forest", // eto
      "aqua",
      "lofi",  // eto
      "pastel",
      "fantasy", // eto
      "wireframe", // eto
      "black", // eto
      "luxury", // eto
      "dracula", // eto
      "cmyk", // eto
      "autumn", // eto
      "business",
      "acid",
      "lemonade",
      "night", // eto
      "coffee", // eto
      "winter",
      "dim", // eto
      "nord", // eto
      "sunset", // eto
    ],
  },
}

