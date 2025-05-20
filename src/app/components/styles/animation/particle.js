"use client";
import { useEffect, useRef, useState } from "react";
import "./components/particle.css";

function Particle() {
  const canvasRef = useRef(null);
  const [particleColor, setParticleColor] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 25;
    let isResizing = false;

    const getParticleColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-base")
        .trim();
      return color;
    };

    const updateParticleColor = () => {
      setParticleColor(getParticleColor());
    };

    const observer = new MutationObserver(updateParticleColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resizeCanvas = () => {
      isResizing = true;
      fadeOutParticles().then(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particlesArray = [];
        initParticles();
        isResizing = false;
      });
    };

    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.opacity = 0;
        this.dimming = Math.random() < 0.5;
        this.twinkleSpeed = Math.random() * 0.005 + 0.005;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        if (isResizing) {
          this.opacity -= 0.05;
          if (this.opacity < 0) this.opacity = 0;
        } else if (!this.dimming) {
          this.opacity += 0.05;
          if (this.opacity > 1) this.opacity = 1;
        }

        if (this.dimming) {
          this.opacity -= this.twinkleSpeed;
          if (this.opacity <= 0.2) {
            this.dimming = false;
          }
        } else if (!isResizing) {
          this.opacity += this.twinkleSpeed;
          if (this.opacity >= 1) {
            this.dimming = true;
          }
        }

        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = particleColor || getParticleColor();

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animateParticles = () => {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => particle.update());
    };

    const fadeOutParticles = () => {
      return new Promise((resolve) => {
        const fadeOutInterval = setInterval(() => {
          let allFadedOut = true;
          particlesArray.forEach((particle) => {
            if (particle.opacity > 0) {
              particle.opacity -= 0.05;
              allFadedOut = false;
            }
          });
          if (allFadedOut) {
            clearInterval(fadeOutInterval);
            resolve();
          }
        }, 1000 / 60);
      });
    };

    initParticles();
    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      observer.disconnect();
    };
  }, [particleColor]);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
}

export default Particle;
