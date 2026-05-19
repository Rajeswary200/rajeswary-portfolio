import { Cloud, Server, Database, Network, Code2, GitBranch, Terminal, Box, Shield, Activity } from "lucide-react";
import SectionHeader from "./SectionHeader";

const groups = [
  {
    title: "AWS Services",
    icon: Cloud,
    items: ["EC2", "S3", "Lambda", "VPC", "IAM", "RDS", "CloudFormation", "CloudWatch", "Route 53", "ELB"],
  },
  {
    title: "DevOps & IaC",
    icon: GitBranch,
    items: ["Terraform", "Ansible", "Jenkins", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    title: "Containers",
    icon: Box,
    items: ["Docker", "Kubernetes", "ECS", "EKS", "Helm"],
  },
  {
    title: "Scripting & Tools",
    icon: Terminal,
    items: ["Python", "Bash", "Shell", "Linux", "YAML", "JSON"],
  },
  {
    title: "Monitoring",
    icon: Activity,
    items: ["CloudWatch", "Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "Security",
    icon: Shield,
    items: ["IAM Policies", "KMS", "Security Groups", "WAF", "Secrets Manager"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="Technical Skills" title="Cloud & DevOps Stack" subtitle="The tools and technologies I work with daily." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="gradient-card border border-border rounded-2xl p-6 hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <g.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}