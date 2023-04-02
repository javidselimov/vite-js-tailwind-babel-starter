module.exports = {
  mode: "jit",
  // purge: ["./index.html", "./src/**/*.js"], // this command is obselete
   content: ["./index.html", "./src/**/*.js"],
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",   // newer version i implement here
  // ],
 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
