import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((n) => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-2 py-2 transition-all duration-500 ${
        scrolled ? "glow-box shadow-lg" : ""
      }`}
    >
      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => handleClick(item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === item.href.slice(1)
                  ? "bg-primary text-primary-foreground glow-box"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden px-4 py-2 text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <div className="flex flex-col gap-1">
          <span className={`block w-5 h-0.5 bg-primary transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-primary transition-all ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-3 flex flex-col gap-1 animate-fade-in">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === item.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
