import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/achievements", label: "Achievements" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>
          
          <div className="leading-tight">
  <div className="font-display text-lg font-bold text-primary-deep">
    Venkateshwara
  </div>

  <div className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground">
    Drip Irrigation{" "}
    <span className="font-bold font-serif">
      (Daida Surrender Reddy)
    </span>
  </div>
</div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-lg px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:9849519640"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary-deep sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            98495 19640
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground"
                activeProps={{ className: "rounded-lg px-3 py-3 text-sm font-semibold text-primary bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:9849519640"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call 98495 19640
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
