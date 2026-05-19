import { Mail, MapPin, Phone, Github, Linkedin, Send, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative mx-auto px-6 max-w-5xl">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build on the Cloud"
          subtitle="Open to AWS Cloud Engineer roles, internships and collaborations."
        />

        {/* Stylish chat / message card */}
        <div className="relative gradient-card border border-border rounded-3xl p-1 shadow-glow animate-fade-up">
          <div className="rounded-[calc(1.5rem-4px)] bg-background/80 backdrop-blur-xl p-6 md:p-10">
            {/* Chat header */}
            <div className="flex items-center justify-between pb-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-[Space_Grotesk] font-bold text-primary-foreground">
                    R
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Rajeswary D</div>
                  <div className="text-xs text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Online · Replies within 24h
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 rounded-full border border-border bg-secondary/40">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> AWS Cloud Engineer
              </div>
            </div>

            {/* Conversation bubbles */}
            <div className="py-6 space-y-3">
              <div className="flex">
                <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tl-sm bg-secondary/60 border border-border text-sm text-foreground">
                  Hi 👋 Thanks for stopping by my portfolio!
                </div>
              </div>
              <div className="flex">
                <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-tl-sm bg-secondary/60 border border-border text-sm text-foreground">
                  Have an AWS project, role, or question? Drop me a message and I'll get back to you soon.
                </div>
              </div>
            </div>

            {/* Contact rows */}
            <div className="grid sm:grid-cols-3 gap-3 mb-6">
              <ContactPill icon={Mail} label="Email" value="drajeswary.kalam345@gmail.com" href="mailto:drajeswary.kalam345@gmail.com" />
              <ContactPill icon={Phone} label="Phone" value="+91 88381 84749" href="tel:+918838184749" />
              <ContactPill icon={MapPin} label="Location" value="Madurai, India" />
            </div>

            {/* Message form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
                const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
                window.location.href = `mailto:drajeswary.kalam345@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-3"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Type your message…"
                  className="w-full px-4 py-3 pr-14 rounded-2xl bg-secondary/40 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Social actions */}
            <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border bg-secondary/40 hover:bg-secondary text-foreground transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPill({
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
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 hover:bg-secondary/50 transition-all h-full">
      <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-xs font-medium text-foreground truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
