"use client";

import { useState } from 'react';
import Particle from "../styles/animations/particle";

export default function Closing() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="relative text-center py-24 -mt-4 sm:-mt-0 sm:mt-12">
      {/* Particle Background */}
      <Particle />

      <div className="max-w-4xl mx-auto px-4 relative z-8">

        <h1
          className="text-4xl md:text-5xl font-bold mb-4 pb-2"
          style={{
            backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
          }}
        >
          Ready to Share
          <br></br> 
          your Story with the World?
        </h1>

        {/* Subtitle */}
        <h2 className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Write it. Shape it. Share it. In every form.
        </h2> 

        {/* Logo */}
        <div className="flex justify-center -mb-4 md:-mb-4">
          <img
            src="/brand-logo/lumedot-logo-glow.png"
            alt="Lumedot Logo"
            style={{ height: '15rem' }}
            className="w-auto"
          />
        </div>

      </div>
    </section>
  );
}
