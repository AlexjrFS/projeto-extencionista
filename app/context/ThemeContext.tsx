"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Verifica se estamos no cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Carrega preferência do localStorage ao iniciar
  useEffect(() => {
    if (isClient) {
      const saved = localStorage.getItem("darkMode");
      if (saved === "true") setIsDarkMode(true);
    }
  }, [isClient]);

  // Aplica classe no body e salva preferência
  useEffect(() => {
    if (isClient) {
      if (isDarkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
    }
  }, [isDarkMode, isClient]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 