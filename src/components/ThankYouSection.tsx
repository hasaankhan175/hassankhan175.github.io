import { ArrowUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ThankYouSection = () => (
  <section className="py-24 px-4 text-center">
    <ScrollReveal>
      <p className="font-mono text-primary text-sm mb-4">{"// end of file"}</p>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Thank <span className="text-primary glow-text">You</span>
      </h2>
      <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
        Thanks for visiting my portfolio. Let's build something amazing with data together!
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-box hover:scale-105"
      >
        <ArrowUp size={18} /> Back to Top
      </button>
    </ScrollReveal>
  </section>
);

export default ThankYouSection;
