import Particle from "@/app/components/styles/animations/particle-themed";

export default function Closing() {
  return (
    <section className="relative text-center py-24 -mt-4 sm:mt-12">
      <Particle />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1
          className="
            max-w-3xl mx-auto
            text-4xl md:text-5xl font-bold leading-tight
            text-transparent bg-clip-text bg-gradient-to-r
            from-black via-gray-800 to-gray-600
            dark:from-white dark:via-gray-200 dark:to-gray-400
            drop-shadow-[0_0_8px_rgba(0,0,0,0.15)]
            dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]
            mb-6
          "
        >
          Still early. But already yours.
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-current/75 mb-8">
          Write it. Shape it. Share it. In every form.
        </p>

        <a
          href="https://opus.lumedot.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full border border-current/50 bg-current/5
            px-8 py-2 text-sm font-medium uppercase tracking-wide
            backdrop-blur-sm shadow-sm transition-all
            hover:scale-105 hover:bg-fuchsia-600/50 mb-36
          "
        >
          Publish your first book on lumedot →
        </a>
      </div>
    </section>
  );
}
