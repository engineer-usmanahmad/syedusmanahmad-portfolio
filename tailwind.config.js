/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        accent: "#FF6B35",
        aws: "#FF9900",
        cloud: "#F7F9FC",
      },
      fontFamily: {
        heading: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
