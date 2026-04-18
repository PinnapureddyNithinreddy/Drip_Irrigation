import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ClipboardList, Hammer, HeartHandshake, Phone, Wrench } from "lucide-react";
import installation from "@/assets/installation.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Drip Installation & Maintenance | Venkateshwara" },
      { name: "description", content: "Professional drip irrigation installation, on-site assessment and ongoing maintenance & support across Nalgonda." },
      { property: "og:title", content: "Drip Irrigation Services — Installation & Support" },
      { property: "og:description", content: "On-site design, installation and maintenance for farmers in Nalgonda." },
      { property: "og:image", content: installation },
    ],
  }),
  component: Services,
});

const steps = [
  { n: "01", icon: ClipboardList, t: "Field Assessment", d: "We visit your land, study soil & crop, and design a system that fits your needs and budget." },
  { n: "02", icon: Hammer, t: "Professional Installation", d: "Our trained team installs your drip or sprinkler system using genuine Jain & Finolex components." },
  { n: "03", icon: Wrench, t: "Maintenance & Repairs", d: "Quick response for clogged drippers, leaks, or seasonal servicing — we keep your system running." },
  { n: "04", icon: HeartHandshake, t: "Ongoing Support", d: "Free advice anytime, plus priority service for our long-term customers." },
];

function Services() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <img src={installation} alt="Installing drip system" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 to-primary-deep/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Our Services</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            From design to long-term care.
          </h1>
          <p className="mt-5 max-w-xl text-primary-foreground/85">
            We don't just sell pipes and drippers — we make sure your irrigation system works
            exactly as it should, every season.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:shadow-elegant">
                <div className="absolute right-6 top-6 font-display text-6xl font-bold text-primary/10">{s.n}</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary-deep">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-leaf py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary-deep sm:text-4xl">
            What you can expect from us
          </h2>
          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 text-left">
            {[
              "Free on-site visit and system design",
              "Genuine, brand-warranty backed components",
              "Skilled installation team familiar with Nalgonda soils",
              "Transparent pricing — no hidden costs",
              "Quick maintenance response, especially during sowing season",
              "Patient guidance for first-time drip system users",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft">
                <span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a href="tel:9849519640" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:bg-primary-deep">
            <Phone className="h-4 w-4" /> Talk to us — 98495 19640
          </a>
        </div>
      </section>
    </Layout>
  );
}
