"use client";

import React from "react";
import ThemeManager from "@/app/components/styles/themes/theme-manager"; 
import SunSvg from "@/app/components/styles/svg/sun-svg";
import MoonSvg from "@/app/components/styles/svg/moon-svg";

export default function SettingsAppearanceTheme() {
  const { manageTheme, currentTheme } = ThemeManager();

  const toggleTheme = (themeKey) => {
    console.log("Theme change toggled with:", themeKey);
    const newTheme = themeKey === "custom-dark" || themeKey === "(prefers-color-scheme: dark)" ? "custom-light" : "custom-dark";
    manageTheme(newTheme);
    console.log("Changed theme:", newTheme);
  };

  return (
      <div className="flex">
        <ThemeOption 
            className=""
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
        />
      </div>
  );
}

function ThemeOption({ className, currentTheme, toggleTheme }) {
  const handleClick = () => {
    toggleTheme(currentTheme);
  };

  return (
    <div
      onClick={handleClick}
      className={`
        ${className}
      `}
    >
        <button className="cursor-pointer">
          {currentTheme === "custom-dark" || currentTheme === "(prefers-color-scheme: dark)" ? (
            <SunSvg />
          ) : (
            <MoonSvg />
          )}
        </button>
    </div>
  );
}
