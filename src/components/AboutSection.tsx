import { Brain, Code, Database, BarChart3, Cpu, GitBranch } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { icon: Brain, label: "Machine Learning & Deep Learning" },
  { icon: Code, label: "Python, R & SQL Programming" },
  { icon: Database, label: "Data Engineering & ETL Pipelines" },
  { icon: BarChart3, label: "Data Visualization & Storytelling" },
  { icon: Cpu, label: "Natural Language Processing" },
  { icon: GitBranch, label: "Version Control & MLOps" },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-primary glow-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A passionate Data Scientist focused on transforming raw data into actionable insights using cutting-edge AI and ML techniques.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <ScrollReveal key={skill.label} delay={i * 100}>
            <div className="group glass rounded-2xl p-6 transition-all duration-500 hover:glow-box hover:scale-105 hover:border-primary/40 cursor-default">
              <skill.icon className="text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(145_80%_42%/0.6)]" size={32} />
              <p className="text-foreground font-medium">{skill.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
