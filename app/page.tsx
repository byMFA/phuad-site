'use client';
// app/page.tsx (or pages/index.tsx)
// Minimal, premium landing for PHUΔD. Uses only Tailwind (no extra deps).
import type { ReactNode } from 'react';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0b0b0c] text-zinc-100 selection:bg-zinc-200 selection:text-black">
      {/* Top Bar */}
      <div className="w-full bg-[#111214] text-xs text-zinc-400 py-2 px-4 sm:px-6 lg:px-10 tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="hidden sm:block">Minimal gear for maximal minds.</p>
          <p className="uppercase">Δ = change</p>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0c]/70 bg-[#0b0b0c] border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group" aria-label="PHUΔD home">
            <Logo />
            <span className="font-semibold tracking-[0.18em] text-sm group-hover:opacity-90">PHUΔD</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a className="hover:text-white transition" href="#collections">Collections</a>
            <a className="hover:text-white transition" href="#philosophy">Philosophy</a>
            <a className="hover:text-white transition" href="#journal">Journal</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#newsletter" className="hidden sm:inline-block text-xs uppercase tracking-widest text-zinc-300 hover:text-white">Newsletter</a>
            <a href="#shop" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs uppercase tracking-widest">Shop</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,#1b1f1d,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl/-tight font-medium tracking-tight">
                Equation of <span className="inline-block bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Style</span>
              </h1>
              <p className="mt-5 text-zinc-300 max-w-xl">
                PHUΔD: minimalist silhouettes for those who engineer change. Premium fabrics, precise cuts, and subtle scientific cues.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#collections" className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90">Explore Collections</a>
                <a href="#shop" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10">Shop ΔT</a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400">
                <Badge>220–300g cotton</Badge>
                <Badge>Minimal branding</Badge>
                <Badge>Designed in TR</Badge>
              </div>
            </div>
            {/* Hero Visual */}
            <div className="relative aspect-[4/3] sm:aspect-[5/3] lg:aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1d1b] to-[#0f110f] overflow-hidden">
              {/* Subtle grid */}
              <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />
              {/* Mock tee */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[78%] max-w-[560px] aspect-[4/5] rounded-[28px] bg-[#0b0b0c] border border-white/15 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
                {/* Collar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 rounded-b-full bg-[#0d0e0f]/90 border-x border-b border-white/10" />
                {/* Chest tag (woven) */}
                <div className="absolute top-[26%] left-[22%] w-16 h-6 rounded-md bg-white text-black flex items-center justify-center text-xs tracking-widest font-semibold border border-black/10">
                  Δ
                </div>
                {/* Hem label */}
                <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.22em] text-zinc-400">PHUΔD</div>
              </div>
              {/* Accent ring */}
              <div className="absolute -right-24 -bottom-24 w-[380px] h-[380px] rounded-full border border-[#2d463b]" />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-6">
          <Pillar title="Minimal & Intentional" desc="Clean shapes, no noise. Details placed with purpose." />
          <Pillar title="Premium Fabrics" desc="220–300g combed cotton. Dense, soft, durable." />
          <Pillar title="Subtle Science" desc="Δ, T, V… symbols whisper, never shout." />
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-medium">Season Capsules</h2>
              <p className="mt-2 text-zinc-400">Formulas, reinterpreted for everyday wear.</p>
            </div>
            <a href="#shop" className="hidden sm:inline-block text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white">Shop All</a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card code="ΔT" title="Heat Δ" blurb="Summer capsule exploring temperature shift." tone="#2d463b"/>
            <Card code="ΔV" title="Velocity Δ" blurb="Spring drops inspired by momentum and motion." tone="#2d3e46"/>
            <Card code="ΔMental" title="Mind Δ" blurb="Winter calm meets resilient mindset." tone="#3a2d46"/>
          </div>
        </div>
      </section>

      {/* Product Grid (mock) */}
      <section id="shop" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <h3 className="text-xl font-medium">Core Tees</h3>
          <p className="mt-2 text-zinc-400">Left-chest woven Δ tag. Small logo at hem. Nothing extra.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {["Black","Off-White","Fume","Matte Green"].map((c, i) => (
              <Product key={i} color={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-xl font-medium">PHUΔD Philosophy</h3>
            <ul className="mt-6 space-y-4 text-zinc-300">
              <li>• We never shout “engineer brand”. We let design ask the question.</li>
              <li>• Logos stay quiet. Fabric and fit speak first.</li>
              <li>• Symbols with meaning: every Δ is intentional.</li>
              <li>• Timeless palette: black, white, fume, matte green.</li>
              <li>• Season = new Δ. Always evolving, never loud.</li>
            </ul>
          </div>
          <blockquote className="relative p-8 rounded-3xl border border-white/10 bg-white/5 text-zinc-100">
            <p className="text-lg">“Sadelik değişimin başlangıcıdır.”</p>
            <footer className="mt-4 text-sm text-zinc-400">— PHUΔD</footer>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-white/10"/>
          </blockquote>
        </div>
      </section>

      {/* Journal CTA */}
      <section id="journal" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="rounded-3xl border border-white/10 p-8 md:p-12 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-medium">Journal: Equation of Style</h3>
                <p className="mt-3 text-zinc-300">Short reads on design, science, and culture. How formulas translate to form.</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white">
                  Read latest entry <span aria-hidden>→</span>
                </a>
              </div>
              <div className="aspect-[3/2] rounded-2xl border border-white/10 bg-[#121314] overflow-hidden">
                <div className="h-full w-full grid grid-cols-6 grid-rows-6">
                  <div className="col-span-4 row-span-4 bg-[#1a1d1b]" />
                  <div className="col-span-2 row-span-2 bg-[#2d463b]" />
                  <div className="col-span-2 row-span-2 bg-[#0b0b0c]" />
                  <div className="col-span-3 row-span-2 bg-[#151618]" />
                  <div className="col-span-3 row-span-2 bg-[#0f110f]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
          <div className="rounded-3xl border border-white/10 p-8 md:p-12 text-center bg-[#101112]">
            <h3 className="text-2xl font-medium">Join the Δ-list</h3>
            <p className="mt-2 text-zinc-400">Drops, size restocks, and journal posts—no noise.</p>
            <form className="mt-6 mx-auto max-w-md flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@domain.com" className="flex-1 rounded-full bg-white/5 border border-white/10 px-5 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <button className="rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90" type="submit">Subscribe</button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">We respect your inbox. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 grid md:grid-cols-3 gap-8 text-zinc-400">
          <div>
            <div className="flex items-center gap-2">
              <Logo small />
              <span className="font-semibold tracking-[0.18em] text-sm">PHUΔD</span>
            </div>
            <p className="mt-4 max-w-xs">Minimalist apparel for those who build, think, and transform.</p>
            <p className="mt-3 text-sm">info@phuad.com</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-zinc-300 text-sm">Shop</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#collections" className="hover:text-white">Collections</a></li>
                <li><a href="#shop" className="hover:text-white">Core Tees</a></li>
                <li><a href="#journal" className="hover:text-white">Journal</a></li>
              </ul>
            </div>
            <div>
              <p className="text-zinc-300 text-sm">About</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#philosophy" className="hover:text-white">Philosophy</a></li>
                <li><a href="#" className="hover:text-white">Care & Sizing</a></li>
                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} PHUΔD. All rights reserved.</p>
            <div className="mt-4 inline-flex gap-3">
              <Social icon="insta" href="https://instagram.com"/>
              <Social icon="x" href="https://x.com"/>
              <Social icon="yt" href="https://youtube.com"/>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function Badge({ children }: { children: ReactNode }) {

  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1">{children}</span>
  )
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 bg-[#101112]">
      <h3 className="text-sm font-semibold tracking-wide">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{desc}</p>
    </div>
  )
}

function Card({ code, title, blurb, tone }: { code: string; title: string; blurb: string; tone: string }) {
  return (
    <a href="#shop" className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 block">
      <div className="aspect-[4/3] bg-[#121314] relative">
        <div className="absolute inset-0" style={{ background: `linear-gradient(145deg, ${tone}33, transparent)` }} />
        {/* Minimal tag */}
        <div className="absolute top-4 left-4 bg-white text-black text-xs font-semibold tracking-widest rounded-md px-2 py-1">{code}</div>
        <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.22em] text-zinc-400">PHUΔD</div>
      </div>
      <div className="p-5">
        <p className="text-sm text-zinc-400">{title}</p>
        <h4 className="mt-1 text-lg">{blurb}</h4>
        <span className="mt-3 inline-block text-sm underline underline-offset-4 decoration-white/20 group-hover:decoration-white">View</span>
      </div>
    </a>
  )
}

function Product({ color }: { color: string }) {
  const shades: Record<string, string> = {
    "Black": "#0b0b0c",
    "Off-White": "#e7e7e4",
    "Fume": "#3a3a3a",
    "Matte Green": "#2d463b",
  }
  const fg = color === "Off-White" ? "#0b0b0c" : "#e7e7e4"
  return (
    <a href="#" className="group rounded-2xl border border-white/10 overflow-hidden bg-white/5">
      <div className="aspect-[4/5] relative" style={{ backgroundColor: shades[color] }}>
        {/* Chest woven tag */}
        <div className="absolute top-[22%] left-[18%] w-12 h-5 rounded bg-white text-black text-[10px] font-bold tracking-widest grid place-items-center">Δ</div>
        {/* Hem */}
        <div className="absolute bottom-3 right-3 text-[10px] tracking-[0.22em]" style={{ color: fg }}>PHUΔD</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm">
          <p>{color} Core Tee</p>
          <p className="text-zinc-400">₺1.190</p>
        </div>
        <p className="mt-1 text-xs text-zinc-500">220–300g cotton · Minimal branding</p>
      </div>
    </a>
  )
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <div className={`relative ${small ? "h-5 w-5" : "h-7 w-7"}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="absolute inset-0">
        <circle cx="50" cy="50" r="48" fill="#0b0b0c" stroke="rgba(255,255,255,0.12)" strokeWidth="2"/>
        <path d="M20 70 L50 20 L80 70" fill="none" stroke="#e7e7e4" strokeWidth="6" strokeLinecap="round"/>
      </svg>
      <span className="sr-only">PHUΔD</span>
    </div>
  )
}

function Social({ icon, href }: { icon: 'insta'|'x'|'yt'; href: string }) {
  const paths: Record<string, string> = {
    insta: "M17 1H7A6 6 0 0 0 1 7v10a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6V7a6 6 0 0 0-6-6Zm0 3a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10Zm-2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 2a5 5 0 1 0 .001 10.001A5 5 0 0 0 10 10Z",
    x: "M3 2l7.3 9.1L3.2 22h2.8l5.9-7.1L16.6 22H22l-7.6-9.5L21.2 2h-2.8l-5.3 6.4L7.4 2H3z",
    yt: "M2.5 7.5A3.5 3.5 0 0 1 6 4h12a3.5 3.5 0 0 1 3.5 3.5v9a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16.5v-9ZM10 9.5v6l6-3-6-3Z",
  }
  return (
    <a href={href} className="size-9 rounded-full border border-white/10 grid place-items-center hover:bg-white/5" aria-label={icon}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-zinc-300">
        <path d={paths[icon]} />
      </svg>
    </a>
  )
}
