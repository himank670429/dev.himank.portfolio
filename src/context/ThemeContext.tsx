// context for Theme
import {
  useState,
  createContext,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

export type ThemeContextType = {
  theme: boolean;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: false,
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: Readonly<{children: ReactNode}>) {
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

  const toggleTheme = useCallback(() => {
    setTheme(!theme);
  }, [theme])

  const providerValues = useMemo(() => ({
    theme,
    toggleTheme,
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider
      value={providerValues}
    >
      {children}
    </ThemeContext.Provider>
  );
}

