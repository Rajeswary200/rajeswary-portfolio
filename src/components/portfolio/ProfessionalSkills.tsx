import SectionHeader from "./SectionHeader";

const skills = [
  { name: "Problem Solving", level: 92 },
  { name: "Team Collaboration", level: 90 },
  { name: "Communication", level: 88 },
  { name: "Time Management", level: 85 },
  { name: "Adaptability", level: 93 },
  { name: "Leadership", level: 80 },
];

export default function ProfessionalSkills() {
  return (
    <section className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeader eyebrow="Professional Skills" title="Beyond the Code" subtitle="Soft skills that complement my technical expertise." />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {skills.map((s, i) => (
            <div key={s.name} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="flex justify-between mb-2 text-sm">
                <span className="font-medium text-foreground">{s.name}</span>
                <span className="text-primary font-semibold">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary/60 overflow-hidden border border-border">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-glow"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}