"use client";

import { useEffect, useRef } from "react";

function Particlelite() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    const numberOfParticles = 30;
    const canvasWidth = 900; // Set a fixed width for the canvas
    const canvasHeight = 1200; // Set a fixed height for the canvas

    // Set canvas size to fixed dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Particle class
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
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }

      update() {
        // Check if particle is within the canvas
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;

        if (!this.dimming) {
          this.opacity += 0.05;
          if (this.opacity > 1) this.opacity = 1;
        }

        if (this.dimming) {
          this.opacity -= this.twinkleSpeed;
          if (this.opacity <= 0.2) {
            this.dimming = false;
          }
        } else {
          this.opacity += this.twinkleSpeed;
          if (this.opacity >= 1) {
            this.dimming = true;
          }
        }

        // Draw particle
        this.draw();
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        const color = "#FFFFFF";

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    // Animate particles
    const animateParticles = () => {
      requestAnimationFrame(animateParticles);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => particle.update());
    };

    // Initialize and start animation
    initParticles();
    animateParticles();

    // Cleanup on unmount
    return () => {
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0" />;
}

export default Particlelite;