"use client";

import { useState } from 'react';
import Particle from "../styles/animations/particle";

export default function Opening() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="relative text-center py-12 -mt-4 sm:mt-4 sm:mt-12">
      {/* Particle Background */}
      <Particle />

      <div className="max-w-4xl mx-auto px-4 relative z-8">
        {/* Logo */}
        <div className="flex justify-center -mb-4 md:-mb-4">
          <img
            src="/brand-logo/lumedot-logo-glow.png"
            alt="Lumedot Logo"
            style={{ height: '15rem' }}
            className="w-auto"
          />
        </div>

        <h1
          className="text-4xl md:text-5xl font-bold mb-4 pb-2"
          style={{
            backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
          }}
        >
          Where your story finds its people.
        </h1>

        {/* Subtitle */}
        <h2 className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          {/* At <span className="animate-lumedot">lumedot</span>, Creativity flows free. Connection stays real. */}
          At <span className="animate-lumedot">lumedot</span>, your words become worlds — in limitless forms.
        </h2> {/* TODO: animate-lumedot */}


        {/* Buttons */}
        <div className="flex flex-col px-4 sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://lumedot.com/dot"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-sm font-medium text-white px-6 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-700 hover:border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Publish your story
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 ml-1">
              →
            </span>
          </a>

          <button
            onClick={openModal}
            className="text-sm font-medium text-white px-6 py-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 hover:border-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Email Support
          </button>
          {/* TODO: email link */}

        </div>
      </div>
    </section>
  );
}
