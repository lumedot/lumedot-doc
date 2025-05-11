"use client";
import React, { useState, useEffect } from "react";
import LumedotSvg from "@/app/components/styles/svg/lumedot-svg";

export default function HeaderBase() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base = "sticky top-2 mx-4 md:mr-6 z-50 transition-all duration-300";
  const frosted =
    "bg-white/25 border border-current/25 shadow-sm rounded-2xl";

  return (
    <header className={`${base} ${scrolled ? frosted : "border border-transparent bg-transparent"}`}>
      <div className="py-[10px] md:py-[15px] px-[10px] md:px-[17.5px] flex items-center justify-betwee backdrop-blur-md rounded-2xl">
        <a href="/" className="flex items-center">
          <LumedotSvg
            variant="icon"
            className="block md:hidden"
            style={{ width: "28px", height: "28px" }}
          />

          <LumedotSvg
            variant="logo"
            className="hidden md:block -mt-[7.5px]"
            style={{ width: "105px", height: "35px" }}
          />
        </a>
      </div>
    </header>
  );
}
