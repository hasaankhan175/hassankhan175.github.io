import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const education = [
  { period: "2025 – Ongoing", title: "Bachelor in Data Science", institution: "Dawood University", highlight: true },
  { period: "Completed", title: "Inter in Computer Science", institution: "Board of Intermediate Education" },
  { period: "Completed", title: "Matric in Computer Science", institution: "Board of Secondary Education" },
  { period: "6 Months Course", title: "Data Science Bootcamp", institution: "Codanics" },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="text-primary glow-text">Education</span>
        </h2>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

        <div className="space-y-12">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.title} delay={i * 120}>
              <div className={`relative flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 border-primary ${edu.highlight ? "bg-primary animate-pulse-glow" : "bg-background"}`} />
                </div>

                {/* Card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className={`glass rounded-2xl p-6 transition-all duration-500 hover:glow-box hover:scale-[1.02] ${edu.highlight ? "border-primary/30" : ""}`}>
                    <span className="font-mono text-xs text-primary">{edu.period}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{edu.title}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-2 mt-1">
                      <GraduationCap size={14} /> {edu.institution}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
