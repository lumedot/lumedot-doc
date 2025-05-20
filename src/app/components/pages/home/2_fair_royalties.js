"use client";

import Image from "next/image";

export default function FairRoyalties() {
  return (
    <section className="pt-24 px-4 mt-28 sm:mt-36 md:mt-12 lg:mt-8">
      <div className="max-w-6xl mx-auto px-4 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-y-4 gap-x-8">
          <div className="relative flex-shrink-0 w-full md:w-[350px] lg:w-[400px]">
            <Image
              src="/page-media/welcome/2.png"
              alt="Fair Royalties Illustration"
              width={400} 
              height={400} 
              className="object-contain"
              priority
            />
          </div>

          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-4">
              2. <span className="animate-lumedot">Fair Royalties</span>
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
              You earn first. Not lumedot.
            </p>
              
            <p className="text-base md:text-lg leading-relaxed">
              • Writers receive up to 100% on early sales, then 80% ongoing.
              <br />
              • No hidden fees, no percentages lost to middle layers.
              <br />
              • Payments are direct, transparent, and on your schedule.
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
