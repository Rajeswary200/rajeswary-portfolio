export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
        {eyebrow}
      </span>
      <h2 className="font-[Space_Grotesk] text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-primary to-accent" />
    </div>
  );
}