import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedProjectsSection from "@/components/FeaturedProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import ThankYouSection from "@/components/ThankYouSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <FeaturedProjectsSection />
    <ProjectsSection />
    <EducationSection />
    <CertificationsSection />
    <ContactSection />
    <ThankYouSection />
  </div>
);

export default Index;
