/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /.*/, // 🔥 include ALL classes (temporary fix)
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}