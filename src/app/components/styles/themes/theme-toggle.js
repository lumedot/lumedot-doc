"use client";
import React, { useState, useRef, useEffect } from "react";
import ThemeManager from "./theme-manager";

export default function ThemeToggle() {
  const { manageTheme } = ThemeManager();
  const [current, setCurrent] = useState("system");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectTheme = (key) => {
    manageTheme(key);
    setCurrent(key);
    setOpen(false);
  };

  const icons = {
    "custom-light": {
      title: "Light",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.25"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591
               M21 12h-2.25m-.386 6.364-1.591-1.591
               M12 18.75V21m-4.773-4.227-1.591 1.591
               M5.25 12H3m4.227-4.773L5.636 5.636
               M15.75 12a3.75 3.75 0 1 1-7.5 0
               3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ),
    },
    system: {
      title: "System",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122
               L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25
               m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25
               A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0
               18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12
               a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0
               0 1 3 12V5.25"
          />
        </svg>
      ),
    },
    "custom-dark": {
      title: "Dark",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75
               c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597
               .748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635
               7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ),
    },
  };

  return (
    <div className="flex items-center" ref={toggleRef}>
      <div
        className={`
          flex items-center gap-2
          overflow-hidden
          transition-all duration-200
          ${open ? "w-auto px-2 py-[2.5px] bg-current/15 rounded-full" : "w-8 justify-center"}
        `}
      >
        {Object.entries(icons).map(([key, { title, svg }]) => {
          // always render the current one; others only when open
          if (key === current || open) {
            const isActive = key === current;
            return (
              <button
                key={key}
                onClick={() =>
                  isActive
                    ? setOpen((o) => !o)
                    : selectTheme(key)
                }
                title={title}
                className={`
                  inline-flex items-center justify-center
                  p-[2.5px] rounded-full
                  ${isActive ? "opacity-100" : "opacity-75"}
                  hover:text-teal-400
                `}
              >
                {svg}
              </button>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}