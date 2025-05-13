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
    if (theme === "custom-light") {
      document.documentElement.setAttribute("data-theme", "custom-light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "custom-dark") {
      document.documentElement.setAttribute("data-theme", "custom-dark");
      document.documentElement.classList.add("dark");
    } else {
      // system or no preference
      document.documentElement.removeAttribute("data-theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }

  // Called by buttons to change theme
  function manageTheme(theme) {
    setThemeCookie(theme);
    applyTheme(theme);
    setCurrentTheme(theme);
  }

  // If system changes and user has "system" theme
  function handleSystemThemeChange() {
    const savedTheme = getThemeCookie();
    if (!savedTheme || savedTheme === "system") {
      applyTheme("system");
      setCurrentTheme("system");
    }
  }

  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    // On mount, apply cookie-based theme or default to system
    const savedTheme = getThemeCookie() || "system";
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);

    // Monitor system changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return { manageTheme, currentTheme };
}
