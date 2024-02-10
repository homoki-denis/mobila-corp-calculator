/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      minHeight: {
        10: "10vh",
        90: "90vh",
      },
      backgroundImage: {
        main: "url('~/assets/images/background.jpg')",
      },
    },
  },
  plugins: [],
};
