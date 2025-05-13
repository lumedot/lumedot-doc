"use client";

import Image from "next/image";

export default function MultiFormat() {
  return (
    <section className="py-4 mt-16 mb-16">
      <div className="max-w-6xl mx-auto px-6 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
              5. <span className="animate-lumedot">Community</span>
            </h2>

            <p 
              className="text-base font-bold md:text-lg leading-relaxed mb-6"
              style={{
                backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                opacity: 0.9,
                textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
              }}
            >
              Every book is a story waiting to be shared.
            </p>
              
            <p className="text-base md:text-lg leading-relaxed mb-6">
              A vibrant ecosystem where readers engage, interact, and connect.
              <br></br>
              Living shelves built together by authors and readers.
              <br></br>
              Comments & Reactions • Book Clubs • Creator-Led Communities
            </p>
          </div>

          <div className="flex-shrink-0 mb-8 w-full md:w-[400px] lg:w-[500px] -mt-12 relative h-[250px] md:h-[300px] lg:h-[350px]">
            <Image
              src="/page-media/welcome/5.png"
              alt="Community Illustration"
              width={500} 
              height={500} 
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes colorShift {
          0% {
            color: #ff69b4;
            text-shadow: 0 0 4px rgba(255, 105, 180, 0.4);
          }
          50% {
            color: #9f7aea;
            text-shadow: 0 0 4px rgba(159, 122, 234, 0.4);
          }
          100% {
            color: #ff69b4;
            text-shadow: 0 0 4px rgba(255, 105, 180, 0.4);
          }
        }

        .animate-lumedot {
          display: inline-block;
          animation: colorShift 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}