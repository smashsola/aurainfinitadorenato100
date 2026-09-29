"use client";

import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

const links = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#historia", label: "Nossa história" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav aria-label="Navegação principal" className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-ink/90 px-4 py-3 text-cream shadow-xl backdrop-blur-md md:rounded-full md:px-6">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label="Renato 100% Lanches, início" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 rotate-[-5deg] place-items-center rounded-full bg-mustard font-display text-xl text-ink">R</span>
            <span className="font-display text-lg uppercase leading-none tracking-wide">Renato <b className="text-mustard">100%</b><span className="block text-[10px] font-sans font-bold tracking-[.25em]">Lanches</span></span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-bold md:flex">
            {links.map((link) => <a key={link.href} className="hover:text-mustard" href={link.href}>{link.label}</a>)}
          </div>
          <a href="#cardapio" className="hidden items-center gap-2 rounded-full bg-pepper px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 md:flex"><ShoppingBag size={17}/> Ver lanches</a>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-mustard text-ink md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
        </div>
        {open && <div id="menu-mobile" className="mt-4 flex flex-col gap-1 border-t border-white/15 pt-3 md:hidden">{links.map((link) => <a key={link.href} className="rounded-xl px-3 py-3 text-sm font-bold hover:bg-white/10" href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</div>}
      </nav>
    </header>
  );
}
