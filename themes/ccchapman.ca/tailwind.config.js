const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./layouts/**/*.html"],
  safelist: ["prose"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        "sans-alt": ["Syne", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

