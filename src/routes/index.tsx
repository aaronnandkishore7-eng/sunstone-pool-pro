import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatBot } from "@/components/ChatBot";
import heroPool from "@/assets/hero-pool.jpg";
import aboutPool from "@/assets/about-pool.jpg";
import logo from "@/assets/logo.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pool Specialists Marbella | Pool Maintenance, Heating & Repair Costa del Sol" },
      { name: "description", content: "25+ years experience in pool installation, upgrades, repairs and maintenance across Marbella, Estepona, San Pedro, Benahavís & Nueva Andalucía. Call now for a fast quote." },
      { name: "keywords", content: "pool maintenance Marbella, pool repair Estepona, pool heating Costa del Sol, salt chlorination, pool specialists Marbella" },
      { property: "og:title", content: "Pool Specialists Marbella — 25+ Years on the Costa del Sol" },
      { property: "og:description", content: "Installation • Upgrades • Repairs • Maintenance. Community & private pool experts." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: "🔥", title: "Pool Heating Systems", desc: "Extend your swimming season with efficient heating solutions tailored to your pool." },
  { icon: "🧂", title: "Salt Chlorination Systems", desc: "Upgrade to softer, low-maintenance water with modern salt systems." },
  { icon: "💡", title: "UV Disinfection Systems", desc: "Advanced water treatment for cleaner, safer swimming with fewer chemicals." },
  { icon: "⚗️", title: "Automatic Dosing Systems", desc: "Keep your water perfectly balanced automatically — pH & chlorine, hands-free." },
  { icon: "⚙️", title: "Pump & Motor Replacement", desc: "Efficient circulation upgrades that significantly reduce running costs." },
  { icon: "🌀", title: "Filters & Filtration", desc: "Clean, clear, compliant water with reliable, long-lasting filtration systems." },
  { icon: "💎", title: "Pool Lighting", desc: "Modern LED upgrades for safety and a premium night-time aesthetic." },
  { icon: "🛠️", title: "Fixtures & Fittings", desc: "Showers, handrails, ladders and essential fittings installed or replaced." },
];

const trust = [
  { icon: "🏆", text: "25+ Years Experience" },
  { icon: "🏘️", text: "Community & Residential Specialists" },
  { icon: "⚡", text: "Fast Response Costa del Sol" },
  { icon: "🤝", text: "Reliable, No-Nonsense Service" },
];

const areas = ["Marbella", "Estepona", "San Pedro", "Benahavís", "Nueva Andalucía"];

const testimonials = [
  { quote: "Reliable, knowledgeable and always solves the problem properly. The team I trust with our community pool.", author: "Carlos M.", role: "Property Manager, Marbella" },
  { quote: "Upgraded our entire system — huge difference in running costs and the water has never looked better.", author: "Sarah & James", role: "Villa Owners, Estepona" },
  { quote: "Quick response, fair pricing, and they actually know what they're doing. Rare to find on the coast.", author: "Diego R.", role: "Nueva Andalucía" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <img src={heroPool} alt="Luxury Marbella pool at sunset" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Costa del Sol · Since 1999
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Pool Specialists in <span className="text-gold">Marbella</span> & Estepona
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 sm:text-xl">
              Over 25 years' experience in community & private pool systems.
              <br className="hidden sm:block" />
              <span className="font-semibold text-gold">Installation · Upgrades · Repairs · Maintenance</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+34600000000"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--gradient-gold)] px-8 py-4 text-base font-bold text-navy-deep shadow-[var(--shadow-gold)] transition-all hover:scale-105"
              >
                ✆ Call Now
              </a>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/80 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-navy"
              >
                💬 WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-sand">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.text} className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy/5 text-2xl">{t.icon}</div>
              <p className="text-sm font-semibold text-navy">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: "var(--gradient-water)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">What We Do</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Our Pool Services</h2>
            <p className="mt-4 text-muted-foreground">From full installations to system upgrades — we handle every part of your pool, properly.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--gradient-gold)] text-2xl shadow-[var(--shadow-gold)]">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--gradient-gold)] transition-transform group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-navy py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img src={aboutPool} alt="Modern pool heating equipment" loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)]" />
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-[var(--gradient-gold)] px-8 py-6 text-navy-deep shadow-[var(--shadow-gold)] sm:block">
              <div className="font-display text-5xl font-bold">25+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years on the coast</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">About Us</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Not general cleaners — <span className="text-gold">pool system specialists.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80">
              With over 25 years of hands-on experience on the Costa del Sol, we focus on doing the job right
              first time, using reliable equipment that lasts.
            </p>
            <ul className="mt-8 space-y-4">
              {["Private villas across Marbella & Estepona", "Community pools & urbanizations", "Property managers & rental owners"].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy-deep">✓</span>
                  <span className="text-white/90">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Service Area</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Areas We Cover</h2>
          <p className="mt-4 text-muted-foreground">Fast response across the Costa del Sol.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {areas.map((a) => (
              <div
                key={a}
                className="rounded-full border-2 border-navy/10 bg-card px-8 py-4 font-display text-lg font-semibold text-navy transition-all hover:border-gold hover:bg-gold hover:text-navy-deep hover:shadow-[var(--shadow-gold)]"
              >
                📍 {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">What Clients Say</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.author} className="relative rounded-2xl bg-card p-8 shadow-sm">
                <div className="text-5xl leading-none text-gold">"</div>
                <blockquote className="mt-2 text-foreground/80">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-navy">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Need your pool <span className="text-gold">sorted?</span>
          </h2>
          <p className="mt-5 text-lg text-white/85">
            We'll assess your system and recommend the right solution — no guesswork, no upselling.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="tel:+34600000000" className="inline-flex items-center gap-3 rounded-full bg-[var(--gradient-gold)] px-8 py-4 font-bold text-navy-deep shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
              ✆ Call Now
            </a>
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-navy">
              💬 WhatsApp Quote
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">Get In Touch</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">Call, WhatsApp or email — we reply fast.</p>

              <div className="mt-10 space-y-5">
                <a href="tel:+34600000000" className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-all hover:border-gold hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-xl">✆</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</div>
                    <div className="font-semibold text-navy">+34 600 000 000</div>
                  </div>
                </a>
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-all hover:border-gold hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white">💬</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold text-navy">Fast quote in minutes</div>
                  </div>
                </a>
                <a href="mailto:info@poolspecialistsmarbella.com" className="flex items-center gap-4 rounded-2xl border border-border p-5 transition-all hover:border-gold hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-xl text-white">✉</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</div>
                    <div className="font-semibold text-navy">info@poolspecialistsmarbella.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <iframe
                title="Marbella service area"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51303.40978!2d-4.91!3d36.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1700000000000"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-9 w-9 rounded-full" />
            <span className="font-display text-sm">Pool Specialists Marbella</span>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Pool Specialists Marbella · Costa del Sol</p>
        </div>
      </footer>

      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
