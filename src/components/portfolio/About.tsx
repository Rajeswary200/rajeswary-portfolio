import { Cloud, Rocket, ShieldCheck, Zap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: Cloud, label: "Cloud Native", value: "AWS Architectures" },
  { icon: Rocket, label: "Automation", value: "CI/CD & IaC" },
  { icon: ShieldCheck, label: "Security", value: "IAM & Compliance" },
  { icon: Zap, label: "Performance", value: "Cost & Scale" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="About Me" title="Engineering the Cloud" subtitle="Cloud engineer passionate about building reliable, scalable infrastructure." />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I'm <span className="text-foreground font-semibold">Rajeswary D</span>, an AWS Cloud Engineer
              focused on designing resilient cloud architectures and automating modern DevOps workflows.
              I love taking ideas from prototype to production with confidence.
            </p>
            <p>
              My toolkit includes <span className="text-primary">EC2, S3, Lambda, VPC, IAM, CloudFormation,
              Terraform, Docker, Kubernetes</span> and modern CI/CD pipelines. I care deeply about
              observability, security, and cost optimization.
            </p>
            <p>
              When I'm not architecting cloud systems, I'm exploring new AWS services, contributing to
              automation projects, and sharpening my DevOps skills.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="gradient-card border border-border rounded-xl p-5 hover-lift"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{h.label}</div>
                <div className="mt-1 font-semibold text-foreground">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}