/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "oklch(84.42% 0.19 202.24)",
        accent: "oklch(84.42% 0.19 202.24)",
        "background-light": "oklch(96.12% 0 0)",
        "background-dark": "oklch(17.76% 0 0)",
        "text-light": "oklch(0% 0 0)", // Black for light mode text
        "text-dark": "oklch(100% 0 0)", // White for dark mode text
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

