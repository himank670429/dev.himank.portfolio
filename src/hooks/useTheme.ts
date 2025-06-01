import { ThemeContextType, ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  return useContext<ThemeContextType>(ThemeContext);
}
