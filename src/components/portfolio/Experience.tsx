import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Briefcase,
    role: "AWS Cloud Engineer Intern",
    org: "Cloud Solutions Pvt Ltd",
    period: "2024 — Present",
    points: [
      "Designed and deployed VPC architectures with public/private subnets and NAT gateways.",
      "Automated infrastructure provisioning using Terraform and CloudFormation.",
      "Implemented CI/CD workflows with Jenkins and GitHub Actions.",
    ],
  },
  {
    icon: GraduationCap,
    role: "AWS Cloud Training Program",
    org: "Certified Training Institute",
    period: "2023 — 2024",
    points: [
      "Hands-on training across EC2, S3, IAM, RDS, Lambda and CloudFormation.",
      "Built capstone projects deploying production-grade workloads on AWS.",
      "Mastered Linux administration, networking and cloud security fundamentals.",
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