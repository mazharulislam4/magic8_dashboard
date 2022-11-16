module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#ffffff",
      primary: "#8646EE",
      midnight: "#121063",
      metal: "#565584",
      secondary: "#162849",
      softDark: "#F8F8F8",
      dark: "#83879A",
      cyan: "#4BBDEE",
      green: " #00AF27",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },

    extend: {
      backgroundImage: {
        navbg: "url('./assets/image/navbg.svg')",
        sidebarBg: "url('./assets/image/sidebarbg.svg')",
        cardBg: "url('./assets/image/hiddenProductBg.png')",
       
      },
    },
  },
  plugins: [],
};
