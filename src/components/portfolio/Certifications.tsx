import { Award, BadgeCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certs = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "Credential",
    href: "https://l1nk.dev/ah4r264",
  },
  {
    title: "IBM CE — Software Foundation Course with C Programming",
    issuer: "IBM Career Education",
    year: "2018",
    href: "https://l1nk.dev/ijsnwdp",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="Certifications" title="Credentials & Achievements" />
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-card border border-border rounded-xl p-6 flex items-start gap-4 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  {c.year === "Credential" ? "View Credential" : `Issued ${c.year}`}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}