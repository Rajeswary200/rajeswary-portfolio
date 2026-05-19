import { Award, BadgeCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";

const certs = [
  { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: "2024" },
  { title: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { title: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "2024" },
  { title: "Terraform Associate", issuer: "HashiCorp", year: "2024" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="Certifications" title="Credentials & Achievements" />
        <div className="grid sm:grid-cols-2 gap-5">
          {certs.map((c, i) => (
            <div
              key={c.title}
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
                  Issued {c.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}