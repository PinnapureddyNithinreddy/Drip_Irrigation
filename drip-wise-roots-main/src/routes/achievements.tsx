import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Star, Trophy } from "lucide-react";
import awardKastaTrophy from "@/assets/WhatsApp Image 2026-04-18 at 2.43.05 PM.jpeg";
import awardTeam from "@/assets/award-team.jpg";
import awardRiseEvent from "@/assets/award-rise-event.jpg";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements & Awards — Venkateshwara Drip Irrigation" },
      { name: "description", content: "3× highest-turnover dealer for Kasta & Finolex. See the recognition and awards earned by Venkateshwara Drip Irrigation, Nalgonda." },
      { property: "og:title", content: "Awards & Recognition — Venkateshwara Drip Irrigation" },
      { property: "og:description", content: "Three consecutive years of top-dealer recognition from Kasta & Finolex." },
      { property: "og:image", content: awardKastaTrophy },
    ],
  }),
  component: Achievements,
});

const awards = [
  { year: "2023-24", title: "1st Position — Best Sales Acheivement", brand: "Kasta (Kriti Industries)", desc: "Awarded by Nithin Drip Irrigation System.For attaining 1st position in highest turnover across the Telangana region.", img: awardKastaTrophy },
  { year: "RISE 2019", title: "Top Dealer Recognition", brand: "Kasta — RISE Event", desc: "Honoured at the Kasta RISE dealer summit alongside national leadership for outstanding regional performance.", img: awardRiseEvent },
  { year: "Three Years Running", title: "Highest Turnover Dealer", brand: "Kasta & Finolex", desc: "Recognised on stage with the Kasta & Finolex teams — three consecutive years of top-dealer performance.", img: awardTeam },
];

function Achievements() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
            <Trophy className="h-3.5 w-3.5 text-accent" /> Awards & Recognition
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
            Three years. Two brands. One trusted dealer.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">
            Recognized as the highest-turnover dealer for Kasta and Finolex for three consecutive
            years — a milestone earned through farmer trust and consistent service.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {awards.map((a) => (
              <article key={a.year} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-leaf">
                  <img src={a.img} alt={`${a.title} — ${a.brand}`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary-deep/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
                    <Star className="h-3 w-3 text-accent" /> {a.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">{a.brand}</div>
                  <h3 className="mt-2 font-display text-xl font-bold text-primary-deep">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-leaf py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { v: "3×", k: "Top Dealer Award" },
              { v: "2", k: "Award-Winning Brands" },
              { v: "1000+", k: "Happy Farmers" },
            ].map((s) => (
              <div key={s.k} className="rounded-3xl bg-card p-8 text-center shadow-soft">
                <Award className="mx-auto h-8 w-8 text-primary" />
                <div className="mt-4 font-display text-4xl font-bold text-primary-deep">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Every award belongs to the farmers who chose us — and to the team that shows up at
            the shop every single day, ready to help.
          </p>
        </div>
      </section>
    </Layout>
  );
}
