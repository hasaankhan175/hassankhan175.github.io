import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.08 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 grid-bg animate-grid-move opacity-30 z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <p className="font-mono text-primary text-sm md:text-base mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          {">"} Hello, World!
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s" }}>
          I'm <span className="text-primary glow-text">Hasaan</span>
        </h1>
        <p className="text-lg md:text-2xl text-muted-foreground mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "0.7s" }}>
          ML Engineer · Data Scientist · Analytics Expert
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: "1s" }}>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:glow-box-strong hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-full border border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
