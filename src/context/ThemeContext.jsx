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

	function toggleTheme(){
		setTheme(prev => !prev)
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return [ theme, toggleTheme ];
}
