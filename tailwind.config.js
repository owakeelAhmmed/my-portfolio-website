module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFFFFF",
          secondary: "#FFC107",
          neutral: "#2B2B36",
          accent: "#272735",
         
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}