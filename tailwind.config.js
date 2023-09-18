module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        warmstory: "#fffaf5",
      },
    },
  },
  plugins: [require("daisyui")],
};
