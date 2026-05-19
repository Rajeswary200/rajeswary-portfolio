import { Cloud, ShieldCheck, Network, Server } from "lucide-react";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: Cloud, label: "AWS Core", value: "EC2 · S3 · Lambda" },
  { icon: Network, label: "Networking", value: "VPC · Subnets · NACL" },
  { icon: ShieldCheck, label: "Security", value: "IAM · CloudTrail" },
  { icon: Server, label: "Linux", value: "Server Administration" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        <SectionHeader eyebrow="About Me" title="Engineering the AWS Cloud" subtitle="Building secure, scalable cloud projects on Amazon Web Services." />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              I'm <span className="text-foreground font-semibold">Rajeswary D</span>, an AWS Cloud Engineer
              with strong knowledge of Amazon Web Services including
              <span className="text-primary"> EC2, S3, IAM, VPC, and Lambda</span>. I focus on
              cloud deployment, scalability, automation, and security.
            </p>
            <p>
              I'm skilled in <span className="text-primary">Linux administration, networking
              concepts, and Python</span>, and have built hands-on AWS projects including static
              website hosting on S3, an AWS security monitoring system, and EC2-based application
              deployment inside custom VPC architectures.
            </p>
            <p>
              Based in Madurai, India — passionate about exploring more AWS services and
              contributing to real-world cloud solutions.
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