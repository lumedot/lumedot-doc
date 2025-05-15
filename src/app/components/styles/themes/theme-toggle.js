"use client";

import React from "react";
import ThemeManager from "@/app/components/styles/themes/theme-manager"; 
import SunSvg from "@/app/components/styles/svg/sun-svg";
import MoonSvg from "@/app/components/styles/svg/moon-svg";

export default function SettingsAppearanceTheme() {
  const { manageTheme, currentTheme } = ThemeManager();

  const toggleTheme = (themeKey) => {
    const newTheme = themeKey === "dark"? "light" : "dark";
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
        <button className="cursor-pointer mt-1.5">
          {currentTheme === "dark" ? (
            <SunSvg />
          ) : (
            <MoonSvg />
          )}
        </button>
    </div>
  );
}
