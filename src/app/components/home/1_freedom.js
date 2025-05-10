"use client";

export default function Freedom() {
  return (
    <section className="py-4 mt-16 mb-16">      
      <div className="max-w-6xl mx-auto px-6 md:pr-12 lg:pr-16 xl:pr-24">
        <div className="flex md:justify-start">
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
          <div className="flex">
            <img
              src="/img/1.png"
              alt="Illustration of Ownership"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              width="300"
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
