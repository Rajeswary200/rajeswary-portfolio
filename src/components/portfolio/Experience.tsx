import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Briefcase,
    role: "AWS Cloud Application Developer",
    org: "Scopetech Software Solution",
    period: "Jan 2026 — Jun 2026",
    points: [
      "Worked hands-on with core AWS services including EC2, S3 and IAM.",
      "Gained experience in cloud deployment and infrastructure management.",
      "Built understanding of cloud security concepts including IAM roles and access control.",
      "Delivered projects to strengthen practical AWS and DevOps skills.",
    ],
  },
  {
    icon: GraduationCap,
    role: "M.Sc Computer Science",
    org: "Sri GVG Visalakshi College — 76%",
    period: "2020 — 2022",
    points: [
      "Advanced studies in computer science fundamentals and cloud computing.",
      "Built foundation in networking, operating systems and programming.",
    ],
  },
  {
    icon: GraduationCap,
    role: "B.Sc Computer Science",
    org: "Sri GVG Visalakshi College — 74.5%",
    period: "2017 — 2020",
    points: [
      "Core coursework across programming, databases and systems.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader eyebrow="Training & Experience" title="My Journey" />

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <div
                key={it.role}
                className={`relative md:flex md:items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-5 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-glow md:-translate-x-1/2 mt-6" />

                <div className="md:w-1/2" />
                <div className="md:w-1/2 pl-14 md:px-8">
                  <div className="gradient-card border border-border rounded-2xl p-6 hover-lift">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                        <it.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                        {it.period}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">{it.role}</h3>
                    <p className="text-sm text-primary mb-3">{it.org}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {it.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-primary mt-1.5">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}