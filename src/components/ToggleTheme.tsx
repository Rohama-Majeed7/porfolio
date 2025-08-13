import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer p-2 rounded-full dark:text-white dark:bg-[#000000c0] text-2xl absolute top-2 right-2"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ToggleTheme;
