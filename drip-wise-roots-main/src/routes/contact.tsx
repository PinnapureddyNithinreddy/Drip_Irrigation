import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Venkateshwara Drip Irrigation, Nalgonda" },
      { name: "description", content: "Visit us at DVK Road, Nalgonda Main Road, Nalgonda - 508001 (Opp. Govt. High School). Call/WhatsApp 98495 19640. Open 9 AM – 9 PM, all days." },
      { property: "og:title", content: "Contact Venkateshwara Drip Irrigation" },
      { property: "og:description", content: "Call 98495 19640 or visit DVK Road, Nalgonda. Open all 7 days." },
    ],
  }),
  component: Contact,
});

const mapSrc =
  "https://www.google.com/maps?q=Nalgonda+Main+Road+Nalgonda+508001&output=embed";

function Contact() {
  return (
    <Layout>
      <section className="bg-gradient-leaf py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Get in Touch</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-primary-deep sm:text-5xl">
            We're open every day, ready to help.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Call, WhatsApp, or walk into our shop on Nalgonda Main Road — whichever works for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Phone, label: "Call Us", value: "98495 19640", href: "tel:9849519640", cta: "Tap to call" },
            { icon: MessageCircle, label: "WhatsApp", value: "98495 19640", href: "https://wa.me/919849519640", cta: "Chat now" },
            { icon: MapPin, label: "Visit", value: "DVK Road, Nalgonda Main Road, Nalgonda - 508001 (Opp. Govt. High School)" },
            { icon: Clock, label: "Hours", value: "Mon – Sun, 9:00 AM – 9:00 PM" },
          ].map((c) => (
            <div key={c.label} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-base font-medium text-foreground">{c.value}</div>
              {c.href && (
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary hover:text-primary-deep">
                  {c.cta} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
                <iframe
                  title="Venkateshwara Drip Irrigation location"
                  src={mapSrc}
                  width="100%"
                  height="480"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-gradient-hero p-8 text-primary-foreground shadow-elegant">
                <h2 className="font-display text-2xl font-bold">Venkateshwara Drip Irrigation System</h2>
                <p className="mt-2 text-sm text-primary-foreground/80">Proprietor: Diada Surrender Reddy</p>
                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> DVK Road, Nalgonda Main Road, Nalgonda - 508001 (Opposite Government High School)</div>
                  <div className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> 98495 19640 (Call & WhatsApp)</div>
                  <div className="flex gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> Monday – Sunday, 9:00 AM – 9:00 PM</div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="tel:9849519640" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:scale-105">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                  <a href="https://wa.me/919849519640" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:scale-105">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
