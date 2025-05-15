"use client";

import { useEffect, useState } from "react";

export default function ThemeManager() {
  function getThemeCookie() {
    const match = document.cookie.match(/(?:^|; )theme=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setThemeCookie(theme) {
    document.cookie = `theme=${encodeURIComponent(theme)}; path=/; max-age=31536000`;
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }

  // Called by buttons to change theme
  function manageTheme(theme) {
    setThemeCookie(theme);
    applyTheme(theme);
    setCurrentTheme(theme);
  }

  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    // On mount, apply cookie-based theme or system theme    
    const savedTheme = getThemeCookie() === "dark" ? "dark" : "";
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);

    return () => {
    };
  }, []);

  return { manageTheme, currentTheme };
}
