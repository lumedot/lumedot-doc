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

  function updateStatusBarColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;

    if (theme === "custom-light") {
      meta.setAttribute("content", "#ffffff");
    } else if (theme === "custom-dark") {
      meta.setAttribute("content", "#000000");
    } else {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      meta.setAttribute("content", systemPrefersDark ? "#000000" : "#ffffff");
    }
  }

  function applyTheme(theme) {
    updateStatusBarColor(theme);

    if (theme === "custom-light") {
      document.documentElement.setAttribute("data-theme", "custom-light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "custom-dark") {
      document.documentElement.setAttribute("data-theme", "custom-dark");
      document.documentElement.classList.remove("dark");
    } else if (theme === "custom-starlight") {
      document.documentElement.setAttribute("data-theme", "custom-starlight");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", systemPrefersDark);
    }
  }

  function manageTheme(theme) {
    setThemeCookie(theme);
    applyTheme(theme);
    setCurrentTheme(theme);
  }

  function handleSystemThemeChange() {
    const savedTheme = getThemeCookie();
    if (!savedTheme || savedTheme === "system") {
      applyTheme("system");
      setCurrentTheme("system");
    }
  }

  const [currentTheme, setCurrentTheme] = useState("system");

  useEffect(() => {
    const savedTheme = getThemeCookie() || "system";
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  return { manageTheme, currentTheme };
}
