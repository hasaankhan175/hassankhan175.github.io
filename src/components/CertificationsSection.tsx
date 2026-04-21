import { Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certs = [
  {
    title: "Intro to Programming",
    desc: "Kaggle certification covering Python fundamentals and programming basics.",
    link: "https://drive.google.com/file/d/1vg4V4GYGoZyfqtSF5DBX-N-FEMPSASNO/view?usp=drive_link"
  },
  {
    title: "Intro to Machine Learning",
    desc: "Kaggle certification on core machine learning concepts and model building.",
    link: "https://drive.google.com/file/d/1LBi8xRWK7h_eI_kgweX-NUBP_7RaZZpC/view?usp=drive_link"
  },
  {
    title: "Data Cleaning",
    desc: "Kaggle certification for data preprocessing and handling missing values.",
    link: "https://drive.google.com/file/d/1IIZDVfzogaUGONJFc68UoWtDyzWB2qJG/view?usp=drive_link"
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          <span className="text-primary glow-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16">
          Professional certifications and achievements.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="glass rounded-2xl p-8 text-center transition-all duration-500 hover:glow-box hover:scale-105 hover:border-primary/30 cursor-pointer">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <Award className="text-primary transition-transform duration-300 group-hover:scale-110" size={28} />
                </div>
                <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">{cert.desc}</p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
