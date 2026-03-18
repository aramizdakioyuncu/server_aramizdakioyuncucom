"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  accentColor: string;
  reduceMotion: boolean;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: string) => void;
  setReduceMotion: (reduce: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [accentColor, setAccentColorState] = useState("#3b82f6");
  const [reduceMotion, setReduceMotionState] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme") as Theme;
    const savedAccent = localStorage.getItem("app_accent");
    const savedMotion = localStorage.getItem("app_motion");

    if (savedTheme) setThemeState(savedTheme);
    if (savedAccent) setAccentColorState(savedAccent);
    if (savedMotion) setReduceMotionState(savedMotion === "true");
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("app_theme", newTheme);
    // Apply class to document if needed
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setAccentColor = (color: string) => {
    setAccentColorState(color);
    localStorage.setItem("app_accent", color);
    document.documentElement.style.setProperty("--primary", color);
  };

  const setReduceMotion = (reduce: boolean) => {
    setReduceMotionState(reduce);
    localStorage.setItem("app_motion", reduce.toString());
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      accentColor, 
      reduceMotion, 
      setTheme, 
      setAccentColor, 
      setReduceMotion 
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
