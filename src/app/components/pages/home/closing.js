import './components/text.css';
import Particle from "@/app/components/styles/animation/particle";

export default function Closing() {
  return (
    <section className="relative text-center py-24 mt-12 sm:mt-24">
      <Particle />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1
          className="gradient-heading max-w-4xl mx-auto text-4xl md:text-5xl font-bold leading-tight mb-4"
        >
          Still early. But already yours.
        </h1>

        <p className="max-w-xl mx-auto text-base md:text-lg text-current/75 mb-12">
          Write it. Shape it. Share it. In every form.
        </p>

        <a
          href="https://opus.lumedot.com"
          target="_blank"
          rel="noopener noreferrer"
          data-cta="upload"
          className="
            inline-flex items-center justify-center
            rounded-full border border-current/50 bg-current/5
            px-8 py-2 text-sm font-medium uppercase tracking-wide
            backdrop-blur-sm shadow-sm transition-all
            hover:scale-105 hover:bg-fuchsia-600/50 mb-24
          "
        >
          Publish your first book on lumedot →
        </a>
      </div>
    </section>
  );
}
