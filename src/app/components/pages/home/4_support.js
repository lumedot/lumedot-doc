"use client";

import Image from "next/image";

export default function Support() {
  return (
    <section className="pt-24 px-4 md:mt-8">
      <div className="max-w-6xl mx-auto px-4 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-y-4 gap-x-8">
          <div className="relative flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
              <Image
                src="/page-media/welcome/4.png"
                alt="Support Illustration"
                width={400} 
                height={400} 
                className="object-contain"
                priority
              />
          </div>
                    
          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
              4. <span className="animate-lumedot">Writer Support</span>
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
              Help you finish strong.
            </p>
              
            <p className="text-base md:text-lg leading-relaxed">
              • From manuscript to a fully published, pro-quality book-free EPUB conversion, audio post, and format design.
              <br></br>
              • No fees. No agencies. Just help from people who've done it before.
            </p>
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
