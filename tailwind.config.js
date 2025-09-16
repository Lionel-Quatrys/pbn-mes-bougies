/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#383f51",
          100: "#0b0d10",
          200: "#171920",
          300: "#222631",
          400: "#2d3341",
          500: "#383f51",
          600: "#57627d",
          700: "#7b87a3",
          800: "#a7afc2",
          900: "#d3d7e0",
        },
        lavender: {
          DEFAULT: "#dddbf1",
          100: "#1d1a42",
          200: "#3a3384",
          300: "#5f56bd",
          400: "#9d98d7",
          500: "#dddbf1",
          600: "#e3e2f4",
          700: "#eae9f6",
          800: "#f1f0f9",
          900: "#f8f8fc",
        },
        yinmn: {
          DEFAULT: "#3c4f76",
          100: "#0c1018",
          200: "#18202f",
          300: "#243047",
          400: "#30405f",
          500: "#3c4f76",
          600: "#526da3",
          700: "#7b91bc",
          800: "#a7b5d3",
          900: "#d3dae9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    appearance: true,
  },
};
