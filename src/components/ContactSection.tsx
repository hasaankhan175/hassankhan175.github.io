import { Github, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.075.312z" />
  </svg>
);

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/hasaankhan175", color: "hover:text-primary" },
  { icon: KaggleIcon, label: "Kaggle", href: "https://www.kaggle.com/hasaankhan175", color: "hover:text-primary", isCustom: true },
  { icon: Mail, label: "Email", href: "mailto:hasaankhan175@gmail.com", color: "hover:text-primary" },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get In <span className="text-primary glow-text">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Feel free to reach out for collaborations, projects, or just a chat about data science!
        </p>
      </ScrollReveal>

      <div className="flex justify-center gap-8">
        {links.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 150}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all duration-300 group-hover:glow-box-strong group-hover:scale-110 group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary">
                {link.isCustom ? <KaggleIcon /> : <link.icon size={28} />}
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">
                {link.label}
              </span>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
