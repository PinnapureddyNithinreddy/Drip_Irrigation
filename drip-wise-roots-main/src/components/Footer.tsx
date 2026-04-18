import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Droplets } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display text-xl font-bold">Venkateshwara Drip Irrigation</div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Trusted by Farmers since years
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
            Authorized dealer of Netafim, Finolex & Kasta. Award-winning supplier of drip irrigation
            systems, pipes, sprinklers and agricultural tools across Nalgonda.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-primary-foreground">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/achievements" className="hover:text-accent">Achievements</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold">Visit / Call</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> DVK Road, Nalgonda Main Road, Nalgonda - 508001 (Opp. Govt. High School)</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> <a href="tel:9849519640" className="hover:text-accent">98495 19640</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> Mon – Sun, 9:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Venkateshwara Drip Irrigation System. Proprietor: Diada Surrender Reddy.
        </div>
      </div>
    </footer>
  );
}
