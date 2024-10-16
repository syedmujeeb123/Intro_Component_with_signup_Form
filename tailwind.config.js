module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "custom-red": "rgb(246, 120, 120)", // Using only RGB, since alpha is 1
        "custom-purple": "rgb(93, 84, 163)", // Custom color defined here
        "custom-light-gray": "rgb(211, 211, 211)", // Light gray color
        "custom-green": "#42b989", // Custom green color using hex code
      },
      boxShadow: {
        "fat-bottom": "0 10px 0px rgba(0, 0, 0, 0.1)", // "Fat line" shadow at the bottom
      },
    },
  },
  plugins: [],
};
