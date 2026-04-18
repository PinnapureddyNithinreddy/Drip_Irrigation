import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Sprout, Users, Calendar, ArrowRight } from "lucide-react";
import owner from "@/assets/owner.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Venkateshwara Drip Irrigation, Nalgonda" },
      { name: "description", content: "Founded by Diada Surrender Reddy. Award-winning authorized dealer of Jain, Finolex and Kasta in Nalgonda, serving farmers with quality and trust." },
      { property: "og:title", content: "About Venkateshwara Drip Irrigation" },
      { property: "og:description", content: "Trusted Nalgonda dealer led by Diada Surrender Reddy. Award-winning service to farmers." },
      { property: "og:image", content: owner },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="bg-gradient-leaf py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">About Us</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-deep sm:text-5xl">
            Rooted in Nalgonda. Trusted by farmers.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Venkateshwara Drip Irrigation System is a family-run agricultural equipment business
            built on a simple promise — honest products, fair prices, and the kind of service that
            keeps your fields green season after season.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img src={owner} alt="Diada Surrender Reddy, Owner" loading="lazy" width={900} height={1100} className="rounded-3xl object-cover shadow-elegant" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-5 py-4 shadow-elegant">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Proprietor</div>
              <div className="font-display text-lg font-bold text-primary-deep">Diada Surrender Reddy</div>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-primary-deep">A message from the owner</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              "I started Venkateshwara Drip Irrigation with one belief — a farmer's investment
              should grow with the harvest, not vanish into faulty equipment. Every pipe, every
              dripper we sell carries that responsibility."
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Over the years, we've earned the trust of thousands of farmers across Nalgonda by
              becoming an authorized dealer of <span className="font-semibold text-foreground">Jain</span>,
              <span className="font-semibold text-foreground"> Finolex</span> and{" "}
              <span className="font-semibold text-foreground">Kasta</span> — and by being recognized
              as the highest-turnover dealer for Kasta and Finolex three years in a row.
            </p>
            <p className="mt-4 font-display text-lg italic text-primary-deep">
              — Diada Surrender Reddy, Proprietor
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, k: "Years", v: "Decade+" },
                { icon: Users, k: "Farmers Served", v: "Thousands" },
                { icon: Award, k: "Top Dealer", v: "3× Award" },
                { icon: Sprout, k: "Brands", v: "Jain · Finolex · Kasta" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
                  <div className="font-display text-base font-bold text-primary-deep">{s.v}</div>
                </div>
              ))}
            </div>

            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-deep">
              Visit our shop <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-leaf py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { t: "Our Mission", d: "Help every farmer in Nalgonda grow more with less water through proven irrigation technology." },
              { t: "Our Promise", d: "Only genuine, branded products — no shortcuts, no compromises." },
              { t: "Our Practice", d: "Open every day, 9 AM – 9 PM, with friendly advice whether you buy or not." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="font-display text-lg font-bold text-primary-deep">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
