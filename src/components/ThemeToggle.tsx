import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={!theme ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {!theme ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-indigo-600" />
      )}
    </button>
  );
};

export default ThemeToggle;