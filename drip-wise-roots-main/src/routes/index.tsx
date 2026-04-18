import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, CheckCircle2, Droplets, Phone, Sprout, Wrench, ArrowRight, Star } from "lucide-react";
import hero from "@/assets/hero-irrigation.jpg";
import drip from "@/assets/drip-system.jpg";
import award from "@/assets/award.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Venkateshwara Drip Irrigation System — Nalgonda | Netafim, Finolex, Kasta Dealer" },
      { name: "description", content: "Authorized Netafim drip irrigation dealer in Nalgonda. Award-winning Finolex & Kasta dealer for pipes, sprinklers and agricultural tools. Call 98495 19640." },
      { property: "og:title", content: "Venkateshwara Drip Irrigation — Trusted Nalgonda Dealer" },
      { property: "og:description", content: "Netafim, Finolex & Kasta authorized dealer. Drip systems, pipes, sprinklers, installation & support." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const brands = ["NETAFIM", "FINOLEX", "KASTA"];

const features = [
  { icon: Droplets, title: "Authorized Netafim Dealer", text: "Genuine Netafim drip irrigation systems direct from the manufacturer." },
  { icon: Award, title: "Award-Winning", text: "Highest-turnover Kasta & Finolex dealer for 3 consecutive years." },
  { icon: Wrench, title: "Installation & Support", text: "End-to-end design, on-field installation and after-sales service." },
  { icon: Sprout, title: "Farmer First", text: "Honest advice, fair pricing and products that protect your harvest." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Drip irrigation in lush green field" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary-deep/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
              <Star className="h-3.5 w-3.5 text-accent" /> 3× Top Dealer Award
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Smarter water. <br />Stronger harvests.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Venkateshwara Drip Irrigation System — Nalgonda's trusted authorized dealer for{" "}
              <span className="font-semibold text-accent">Netafim, Finolex and Kasta</span>. Quality
              products, expert installation, and lifelong farmer support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:9849519640" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition hover:scale-105">
                <Phone className="h-4 w-4" /> Call 98495 19640
              </a>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/20">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
              {brands.map((b) => (
                <span key={b} className="font-display text-2xl font-bold tracking-wide text-primary-foreground/85">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-leaf py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Farmers Choose Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
              Built on trust. Backed by brands you know.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/60 bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-primary-deep">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT — DRIP SYSTEM */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img src={drip} alt="Drip irrigation pipes" loading="lazy" width={1024} height={768} className="rounded-3xl object-cover shadow-elegant" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 shadow-elegant sm:block">
              <div className="text-3xl font-display font-bold text-primary">60%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Water Saved</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Precision Irrigation</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary-deep sm:text-4xl">
              Every drop reaches the root.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Drip irrigation delivers water and nutrients straight to the plant — saving water,
              reducing weeds and dramatically improving yield. As an authorized Netafim dealer, we
              design systems specific to your crop, soil and field layout.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Free on-site assessment & system design",
                "Genuine Netafim components with full warranty",
                "Trained team for installation & training",
                "Maintenance plans available year-round",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-deep">
              See our services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AWARD HIGHLIGHT */}
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-2">
            <img src={award} alt="Dealer recognition award" loading="lazy" width={1024} height={768} className="rounded-3xl shadow-glow" />
          </div>
          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              <Award className="h-3.5 w-3.5" /> Recognition
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Highest-turnover dealer for Kasta &amp; Finolex — three years running.
            </h2>
            <p className="mt-5 text-primary-foreground/80">
              A reflection of the trust thousands of farmers and contractors place in us every
              season. Every award is a promise: genuine products, fair prices, and service that
              shows up when you need it.
            </p>
            <Link to="/achievements" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:scale-105">
              View Achievements <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-hero px-8 py-14 text-center text-primary-foreground shadow-elegant sm:px-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to upgrade your field?</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Talk to us about a custom drip system, a fresh stock of Finolex pipes, or simply
            advice from someone who's been doing this for years.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:9849519640" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:scale-105">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">
              Visit Our Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Credit */}
      <div className="border-t border-border/60 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          A product by <span className="font-semibold text-foreground">VDefine Software Solutions. Contact: 7386100970</span>
        </p>
      </div>
    </Layout>
  );
}
