/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				basegreen: {
					50: "#E3EFEC",
					100: "#B1D2CA",
					200: "#70B1A1",
					300: "#188168",
				},
				darkbasegreen: {
					100: "#223C3D",
					200: "#0F5348",
					300: "#1C9C7D",
				},
				darkblue: {
					100: "#000715",
					200: "#1C222F",
					300: "#283145",
				},
				light: "#C9D1D9",
				gray: {
					light: "#F4F4F4",
					extralight: "#E7E7E7",
					dakr: "#6D6D6D",
				},
			},
		},
	},
	plugins: [],
};
