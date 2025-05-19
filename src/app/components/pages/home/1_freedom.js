"use client";

import Image from "next/image";

export default function Freedom() {
  return (
    <section className="py-4 px-5 mt-12 mb-16">      
      <div className="max-w-6xl mx-auto px-6 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
              1. <span className="animate-lumedot">Ownership</span>
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
              Your work stays yours. Always.
            </p>
              
            <p className="text-base md:text-lg font-medium leading-relaxed mb-6">
              • No exclusivity, no fine print.
              <br />
              • We give you tools, not terms.
              <br />
              • You decide how your book is published, priced, and promoted.
            </p>
          </div>

          <div className="flex-shrink-0 mt-4 w-full md:w-[400px] lg:w-[450px] -mt-12 relative h-[250px] md:h-[300px] lg:h-[350px]">
            <Image
              src="/page-media/welcome/1.png"
              alt="Ownership Illustration"
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
