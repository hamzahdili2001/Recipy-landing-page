/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.js", "./src/*.css", "./src/*.html"],
	theme: {
		extend: {}
	},
	plugins: []
};
