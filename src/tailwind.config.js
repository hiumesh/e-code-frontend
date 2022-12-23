/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
      },
      boxShadow: {
        "1": 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        "2": 'rgba(0, 0, 0, 0.2) 0px 20px 30px'
      }
    },
  },
  plugins: [],
}
