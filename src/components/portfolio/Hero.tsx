import { Github, Linkedin, Mail, Download, Cloud, Server, Database, Cpu } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-hero" />
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      {/* Floating icons */}
      <Cloud className="hidden md:block absolute top-32 right-20 w-12 h-12 text-primary/40 animate-float" />
      <Server className="hidden md:block absolute bottom-32 left-16 w-10 h-10 text-accent/40 animate-float" style={{ animationDelay: "1.5s" }} />
      <Database className="hidden md:block absolute top-1/2 right-40 w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: "3s" }} />
      <Cpu className="hidden md:block absolute bottom-40 right-1/4 w-9 h-9 text-accent/30 animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Available for opportunities</span>
          </div>

          <h1 className="font-[Space_Grotesk] text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Hi, I'm <span className="gradient-text">Rajeswary D</span>
          </h1>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-muted-foreground">
            AWS Cloud Engineer
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I design and deploy secure, scalable cloud infrastructure on AWS — automating
            deployments, optimizing costs, and building resilient cloud-native systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border border-border bg-secondary/40 text-foreground hover:bg-secondary transition-all"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <SocialBtn href="https://github.com/" label="GitHub"><Github className="w-5 h-5" /></SocialBtn>
            <SocialBtn href="https://linkedin.com/" label="LinkedIn"><Linkedin className="w-5 h-5" /></SocialBtn>
            <SocialBtn href="mailto:drajeswary.kalam345@gmail.com" label="Email"><Mail className="w-5 h-5" /></SocialBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 inline-flex items-center justify-center rounded-lg border border-border bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow transition-all"
    >
      {children}
    </a>
  );
}