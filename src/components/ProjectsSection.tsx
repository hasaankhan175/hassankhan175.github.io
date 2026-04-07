import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Customer Churn Prediction",
    desc: "Built a classification model to predict customer churn using ensemble methods with 94% accuracy.",
    link: "#",
  },
  {
    title: "Sentiment Analysis Pipeline",
    desc: "End-to-end NLP pipeline for real-time sentiment analysis of social media data using transformers.",
    link: "#",
  },
  {
    title: "Sales Forecasting Dashboard",
    desc: "Interactive time series forecasting dashboard using Prophet and Streamlit for retail analytics.",
    link: "#",
  },
  {
    title: "Image Classification CNN",
    desc: "Deep learning model for medical image classification using convolutional neural networks.",
    link: "#",
  },
  {
    title: "Recommendation Engine",
    desc: "Collaborative filtering recommendation system for an e-commerce platform using matrix factorization.",
    link: "#",
  },
  {
    title: "Data Warehouse ETL",
    desc: "Designed a scalable ETL pipeline using Python and SQL for processing 10M+ records daily.",
    link: "#",
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            My <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A selection of data science and machine learning projects I've worked on.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`glass rounded-2xl p-6 h-full flex flex-col transition-all duration-500 cursor-pointer border border-transparent hover:border-primary/30 ${
                  hovered !== null && hovered !== i
                    ? "opacity-40 scale-[0.97] blur-[1px]"
                    : hovered === i
                    ? "glow-box scale-[1.03]"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ExternalLink className="text-primary shrink-0 ml-2 transition-transform group-hover:rotate-12" size={18} />
                </div>
                <p className="text-muted-foreground text-sm flex-1 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  className="font-mono text-xs text-primary hover:underline inline-flex items-center gap-1 transition-all hover:gap-2"
                >
                  View Project <span>→</span>
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
