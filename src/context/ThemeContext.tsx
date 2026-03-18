"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeType = "dark" | "modern-blue" | "classic-red" | "light";

interface ThemeContextType {
  theme: ThemeType;
  accentColor: string;
  reduceMotion: boolean;
  setTheme: (theme: ThemeType) => void;
  setAccentColor: (color: string) => void;
  setReduceMotion: (reduce: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>("dark");
  const [accentColor, setAccentColorState] = useState("#3b82f6");
  const [reduceMotion, setReduceMotionState] = useState(false);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
    localStorage.setItem("app_theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const setAccentColor = (color: string) => {
    setAccentColorState(color);
    localStorage.setItem("app_accent", color);
    document.documentElement.style.setProperty("--accent", color);
  };

  const setReduceMotion = (reduce: boolean) => {
    setReduceMotionState(reduce);
    localStorage.setItem("app_motion", reduce.toString());
  };

  // Initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("app_theme") as ThemeType;
    const savedAccent = localStorage.getItem("app_accent");
    const savedMotion = localStorage.getItem("app_motion");

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      document.documentElement.className = "dark";
    }

    if (savedAccent) {
      setAccentColor(savedAccent);
    }
    
    if (savedMotion) {
      setReduceMotionState(savedMotion === "true");
    }
  }, []);

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
