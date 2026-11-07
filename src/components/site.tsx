/* eslint-disable @next/next/no-img-element -- static export: plain img with the base path */
import { ArrowRight, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { asset, BETA_MAIL } from "@/lib/site";

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#simulation", label: "Simulation" },
  { href: "/privacy.html", label: "Privacy" },
];

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const look =
    variant === "primary"
      ? "bg-cream text-navy hover:bg-white"
      : "border border-white/15 text-ink hover:border-white/30 hover:bg-white/5";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${look} ${className}`}
    >
      {children}
    </a>
  );
}

export function BetaButton({ className = "" }: { className?: string }) {
  return (
    <Button href={BETA_MAIL} className={className}>
      Join the beta <ArrowRight aria-hidden className="size-4" />
    </Button>
  );
}

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <img src={asset("/logo-256.png")} alt="" width={size} height={size} className="shrink-0" />
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-navy/80 backdrop-blur-md">
      <nav aria-label="Main" className={`${container} flex h-16 items-center gap-6`}>
        <a href={asset("/")} className="flex items-center gap-2.5 font-semibold tracking-tight whitespace-nowrap">
          <Logo />
          Board Pilot
        </a>
        <ul className="ml-auto hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={asset(l.href)} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="ml-auto hidden sm:block md:ml-0">
          <BetaButton className="py-2" />
        </span>
        <details className="group relative ml-auto sm:ml-0 md:hidden">
          <summary
            aria-label="Menu"
            className="flex size-10 cursor-pointer list-none items-center justify-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden className="size-5" />
          </summary>
          <ul className="absolute right-0 mt-2 w-56 rounded-2xl border border-line bg-navy-2 p-2 text-sm shadow-2xl">
            {links.map((l) => (
              <li key={l.href}>
                <a href={asset(l.href)} className="block rounded-xl px-3 py-2.5 hover:bg-white/5">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="sm:hidden">
              <a href={BETA_MAIL} className="mt-1 block rounded-xl bg-cream px-3 py-2.5 font-medium text-navy">
                Join the beta
              </a>
            </li>
          </ul>
        </details>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${container} flex flex-col gap-6 py-10 text-sm text-muted sm:flex-row sm:items-center`}>
        <a href={asset("/")} className="flex items-center gap-2.5 font-semibold text-ink">
          <Logo size={28} />
          Board Pilot
        </a>
        <ul className="flex gap-6 sm:ml-auto">
          <li>
            <a href={asset("/support.html")} className="hover:text-ink">
              Support
            </a>
          </li>
          <li>
            <a href={asset("/privacy.html")} className="hover:text-ink">
              Privacy
            </a>
          </li>
        </ul>
        <p>© 2026 Board Pilot</p>
      </div>
    </footer>
  );
}

/** A simple CSS iPhone frame around an app screenshot (1170 x 2532). */
export function Phone({ shot, alt, className = "" }: { shot: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-[2.75rem] border border-white/15 bg-[#05080f] p-2 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)] ${className}`}
    >
      <img
        src={asset(`/shots/${shot}.webp`)}
        alt={alt}
        width={600}
        height={1298}
        loading="lazy"
        className="block aspect-[1170/2532] w-full rounded-[2.2rem] object-cover"
      />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-medium tracking-[0.18em] text-copper uppercase">{children}</p>;
}

export function Title({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal tracking-normal text-cream italic">{children}</em>;
}
