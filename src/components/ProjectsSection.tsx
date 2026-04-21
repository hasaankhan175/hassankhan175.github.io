import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Shoe Price EDA",
    desc: "An exploratory data analysis project that investigates shoe pricing trends using data visualization and statistical techniques. Focuses on understanding price distributions, outliers, and key factors affecting shoe prices.",
    link: "https://github.com/hasaankhan175/Shoe-Price-EDA",
  },
  {
    title: "Taxi Fare Prediction",
    desc: "A regression-based machine learning project that predicts taxi fares using features like distance, time, and passenger count. Includes data cleaning, EDA, and model training to estimate fare prices.",
    link: "https://github.com/hasaankhan175/Taxi_Fare_Pred",
  },
  {
    title: "Bank Churn Prediction",
    desc: "A machine learning project that predicts whether bank customers are likely to churn based on behavioral and demographic data. Uses Random Forest, Decision Tree, and Logistic Regression for classification.",
    link: "https://github.com/hasaankhan175/Bank_Churn_Pred",
  },
  {
    title: "Obesity Prediction",
    desc: "A machine learning model that predicts obesity based on health and lifestyle factors like BMI, age, and activity level. Uses Random Forest and SVM for accurate prediction.",
    link: "https://github.com/hasaankhan175/Obesity_Prediction",
  },
  {
    title: "AI vs Human Content Detection",
    desc: "A machine learning-based NLP project that classifies text as AI-generated or human-written. Uses trained models and linguistic features to analyze writing patterns with high accuracy.",
    link: "https://github.com/hasaankhan175/AI-vs-Human-Content-Detection",
  },
  {
    title: "Bitcoin Price Forecasting",
    desc: "A time series forecasting project that predicts Bitcoin prices using historical market data. Applies ARIMA/SARIMA and LSTM to analyze trends and forecast future values.",
    link: "https://github.com/hasaankhan175/BTC-Price-Prediction",
  },
];

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            All <span className="text-primary glow-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A comprehensive collection of my data science and machine learning projects.
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
                  target="_blank"
                  rel="noopener noreferrer"
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
