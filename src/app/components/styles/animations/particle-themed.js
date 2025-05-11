"use client";

import { useEffect, useRef } from "react";

export default function Particle() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    const LIGHT = "0, 175, 255";
    const DARK  = "255, 255, 255";
    let baseRGB = LIGHT;

    const updateBaseColor = () => {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      baseRGB = isDark ? DARK : LIGHT;
    };

    updateBaseColor();

    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.addEventListener("change", updateBaseColor);
    const observer = new MutationObserver(updateBaseColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const COUNT = 25;
    let particles = [];
    let resizing  = false;

    const resizeCanvas = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const handleResize = () => {
      resizing = true;
      fadeOut().then(() => {
        resizeCanvas();
        particles = [];
        initParticles();
        resizing = false;
      });
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.opacity = 0;
        this.dim = Math.random() < 0.5;
        this.twinkle = Math.random() * 0.005 + 0.005;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${baseRGB}, ${this.opacity})`;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0)  this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;

        if (resizing) {
          this.opacity = Math.max(0, this.opacity - 0.05);
        } else if (!this.dim) {
          this.opacity = Math.min(1, this.opacity + 0.05);
        }

        if (this.dim) {
          this.opacity -= this.twinkle;
          if (this.opacity <= 0.2) this.dim = false;
        } else if (!resizing) {
          this.opacity += this.twinkle;
          if (this.opacity >= 1) this.dim = true;
        }
        this.draw();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < COUNT; i++) {
        const s  = Math.random() * 2;
        const x  = Math.random() * (canvas.width  - s * 2) + s;
        const y  = Math.random() * (canvas.height - s * 2) + s;
        const dx = Math.random() * 0.4 - 0.2;
        const dy = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, dx, dy, s));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      updateBaseColor(); // live theme sync
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
    };

    const fadeOut = () =>
      new Promise((resolve) => {
        const id = setInterval(() => {
          let done = true;
          particles.forEach((p) => {
            if (p.opacity > 0) {
              p.opacity -= 0.05;
              done = false;
            }
          });
          if (done) {
            clearInterval(id);
            resolve();
          }
        }, 1000 / 60);
      });

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      mql.removeEventListener("change", updateBaseColor);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full"
    />
  );
}
