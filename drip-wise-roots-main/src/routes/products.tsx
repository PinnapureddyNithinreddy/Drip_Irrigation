import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Phone } from "lucide-react";
import drip from "@/assets/drip-system.jpg";
import pipes from "@/assets/pipes-fittings.jpg";
import sprinklers from "@/assets/sprinklers.jpg";
import tools from "@/assets/agri-tools.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Jain, Finolex & Kasta | Venkateshwara Drip Irrigation" },
      { name: "description", content: "Explore drip irrigation systems, Finolex & Kasta pipes & fittings, sprinklers and agricultural tools at Nalgonda's award-winning dealer." },
      { property: "og:title", content: "Products — Jain, Finolex, Kasta Dealer Nalgonda" },
      { property: "og:description", content: "Drip systems, pipes, sprinklers & agri tools from authorized brands." },
      { property: "og:image", content: drip },
    ],
  }),
  component: Products,
});

const brands = [
  { name: "JAIN", role: "Authorized Dealer", desc: "Industry-leading drip irrigation systems, drippers, emitters and micro-irrigation solutions." },
  { name: "FINOLEX", role: "Award-Winning Dealer", desc: "Premium quality PVC pipes, fittings and agricultural plumbing solutions trusted nationwide." },
  { name: "KASTA", role: "Award-Winning Dealer", desc: "Reliable irrigation pipes, fittings and accessories built for Indian farms." },
];

const catalog = [
  { img: drip, name: "Drip Irrigation Systems", brand: "Jain", desc: "Complete drip kits, inline laterals, drippers, filters and fertigation accessories." },
  { img: pipes, name: "Pipes & Fittings", brand: "Finolex · Kasta", desc: "Full range of PVC, HDPE and column pipes with all standard fittings in stock." },
  { img: sprinklers, name: "Sprinkler Systems", brand: "Jain · Kasta", desc: "Rain-pipe and impact sprinklers for uniform water distribution across larger fields." },
  { img: tools, name: "Agricultural Tools", brand: "Assorted", desc: "Hand tools and accessories for everyday farm work and irrigation maintenance." },
];

function Products() {
  return (
    <Layout>
      <section className="bg-gradient-leaf py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Products</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-deep sm:text-5xl">
            Genuine brands. Complete range.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Everything you need for modern, water-smart farming — sourced directly from the most
            trusted names in the industry.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {brands.map((b) => (
              <div key={b.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:shadow-elegant">
                <div className="font-display text-4xl font-bold tracking-wide text-primary-deep">{b.name}</div>
                <div className="mt-2 inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-deep">
                  {b.role}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section className="bg-gradient-leaf py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-primary-deep">Product Categories</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {catalog.map((p) => (
              <article key={p.name} className="overflow-hidden rounded-3xl bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{p.brand}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-primary-deep">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-primary-deep p-8 text-center text-primary-foreground sm:p-12">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Looking for a specific product?</h3>
            <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Call us — if it's available from Jain, Finolex or Kasta, we can get it for you.
            </p>
            <a href="tel:9849519640" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:scale-105">
              <Phone className="h-4 w-4" /> Call 98495 19640
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
