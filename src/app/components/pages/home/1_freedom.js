"use client";

export default function Freedom() {
  return (
    <section className="py-4 mt-20 mb-8">      
      <div className="max-w-6xl mx-auto px-6 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-prose text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-6">
              1. <span className="animate-lumedot">Ownership</span>
            </h2>

            <p 
              className="text-base font-bold md:text-lg leading-relaxed mb-6"
              style={{
                backgroundImage: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
              }}
            >
              Your story, your rules.
            </p>
              
            <p className="text-base md:text-lg leading-relaxed mb-6">
              Maintain complete control of your rights.
              <br></br>
              Your work is 100% yours.
              <br></br>
              You decide how, when, and where it lives.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[500px] -mt-12">
            <img
              src="/page-media/welcome/1.png"
              alt="Ownership Illustration"
              className="w-full object-cover"
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