import { useState, createContext, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(true);
	// false -> light
	// true -> dark
	useEffect(() => {
		if (theme) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const { theme, setTheme } = useContext(ThemeContext);
	return { theme, setTheme };
}
