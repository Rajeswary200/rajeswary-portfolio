import { ExternalLink, Github, Cloud, Server, GitBranch, Database } from "lucide-react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    icon: Cloud,
    title: "Serverless Web Application",
    description: "Built a fully serverless web app using AWS Lambda, API Gateway, DynamoDB and S3 static hosting with CloudFront CDN.",
    tech: ["Lambda", "API Gateway", "DynamoDB", "S3", "CloudFront"],
  },
  {
    icon: Server,
    title: "Highly Available 3-Tier Architecture",
    description: "Designed a multi-AZ 3-tier architecture on AWS with auto scaling, ELB, RDS Multi-AZ and bastion host for secure access.",
    tech: ["EC2", "ELB", "RDS", "VPC", "Auto Scaling"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline with Jenkins",
    description: "Automated build, test and deploy pipeline using Jenkins, Docker and AWS ECS for containerized microservices.",
    tech: ["Jenkins", "Docker", "ECS", "GitHub", "Terraform"],
  },
  {
    icon: Database,
    title: "Infrastructure as Code with Terraform",
    description: "Provisioned an entire AWS environment using Terraform modules — VPC, EKS, RDS — with reusable, version-controlled code.",
    tech: ["Terraform", "EKS", "VPC", "RDS", "IAM"],
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
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repo"
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Live demo"
                      className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
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