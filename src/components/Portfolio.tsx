import Navbar from "./portfolio/Navbar";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import Certifications from "./portfolio/Certifications";
import Experience from "./portfolio/Experience";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}