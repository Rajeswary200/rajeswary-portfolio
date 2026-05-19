import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader eyebrow="Contact" title="Let's Build Something Together" subtitle="Open to opportunities, collaborations and conversations." />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="gradient-card border border-border rounded-2xl p-8 space-y-5">
            <h3 className="font-[Space_Grotesk] text-2xl font-bold text-foreground">Get in touch</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Whether you have a role to discuss, a project to build, or just want to talk cloud — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <ContactRow icon={Mail} label="Email" value="rajeswary@example.com" href="mailto:rajeswary@example.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 98765 43210" href="tel:+919876543210" />
              <ContactRow icon={MapPin} label="Location" value="India · Open to Remote" />
            </div>

            <div className="pt-4 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border bg-secondary/40 hover:bg-secondary text-foreground transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>

          <form
            className="gradient-card border border-border rounded-2xl p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I'll get back to you soon.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" placeholder="Your name" />
              <Field label="Email" id="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" id="subject" placeholder="Let's collaborate" />
            <div>
              <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-foreground font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">{inner}</a>
  ) : inner;
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}