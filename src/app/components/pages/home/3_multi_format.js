"use client";

import Image from "next/image";

export default function MultiFormat() {
  return (
    <section className="pt-24 px-4 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-y-4 gap-x-8">
          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
              3. <span className="animate-lumedot">Multi-Format</span>
            </h2>

            <p 
              className="text-lg font-bold md:text-xl leading-relaxed mb-4"
              style={{
                backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                opacity: 0.9,
                textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
              }}
            >
              Write once. Publish anywhere.
            </p>
              
            <p className="text-base md:text-lg leading-relaxed">
              • Beyond the bookshelf-and still yours.
              <br />
              • Text, audio, interactive, visual, or immersive.
              <br />
              • We support the versions of your book that don't fit on a shelf.
            </p>
          </div>

          <div className="relative flex-shrink-0 w-full md:w-[400px] lg:w-[500px]">
            <Image
              src="/page-media/welcome/3.png"
              alt="Multi-formatting Illustration"
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
