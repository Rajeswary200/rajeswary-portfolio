import { Github, Cloud, ShieldAlert, Server } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    icon: Cloud,
    title: "AWS Static Website Hosting",
    description:
      "Hosted a static website on Amazon S3 — configured bucket policies and static website hosting, and managed public access permissions securely for production-ready delivery.",
    tech: ["Amazon S3", "Bucket Policies", "Static Hosting", "IAM"],
  },
  {
    icon: ShieldAlert,
    title: "AWS Security Monitoring System",
    description:
      "Designed a security monitoring system using AWS CloudTrail, CloudWatch, SNS, Secrets Manager and S3. Configured metric filters and alarms to detect GetSecretValue API calls and trigger real-time email alerts via SNS.",
    tech: ["CloudTrail", "CloudWatch", "SNS", "Secrets Manager", "S3"],
  },
  {
    icon: Server,
    title: "EC2-Based Application Deployment",
    description:
      "Designed a VPC architecture with public/private subnets, route tables, internet gateway and security groups. Launched Linux EC2 instances and installed/configured the application on the server.",
    tech: ["EC2", "VPC", "Subnets", "Security Groups", "Linux"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="AWS Projects" title="Featured Cloud Projects" subtitle="A selection of hands-on AWS and DevOps projects." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group relative gradient-card border border-border rounded-2xl p-7 hover-lift overflow-hidden animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repo"
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="font-[Space_Grotesk] text-xl font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}