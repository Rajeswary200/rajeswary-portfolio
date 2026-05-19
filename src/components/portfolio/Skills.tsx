import { Cloud, Network, Terminal, Shield, Code2, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const groups = [
  {
    title: "AWS Services",
    icon: Cloud,
    items: ["EC2", "S3", "Lambda", "IAM", "VPC", "CloudTrail", "CloudWatch", "SNS", "Secrets Manager", "Static Website Hosting"],
  },
  {
    title: "Networking",
    icon: Network,
    items: ["VPC", "Public & Private Subnets", "Internet Gateway", "Route Tables", "Security Groups", "NACL", "TCP/IP", "DNS", "HTTP/HTTPS"],
  },
  {
    title: "Programming",
    icon: Code2,
    items: ["Python", "Java", "C++", "PHP", "C"],
  },
  {
    title: "Operating Systems",
    icon: Terminal,
    items: ["Linux", "Ubuntu", "Windows"],
  },
  {
    title: "Cloud Security",
    icon: Shield,
    items: ["IAM Roles", "Security Groups", "NACL", "CloudTrail Auditing", "Secrets Manager"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["VS Code", "Git", "GitHub", "AWS Management Console"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="AWS Technical Skills" title="My AWS Cloud Stack" subtitle="Services, networking and tools I work with on Amazon Web Services." />

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