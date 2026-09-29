import { Menu, ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-ink/80 px-4 py-3 text-cream shadow-xl backdrop-blur-md md:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Renato 100% Lanches, início">
          <span className="grid h-10 w-10 rotate-[-5deg] place-items-center rounded-full bg-mustard font-display text-xl text-ink">R</span>
          <span className="font-display text-lg uppercase leading-none tracking-wide">Renato <b className="text-mustard">100%</b><span className="block text-[10px] font-sans font-bold tracking-[.25em]">Lanches</span></span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-bold md:flex">
          <a className="hover:text-mustard" href="#cardapio">Cardápio</a>
          <a className="hover:text-mustard" href="#historia">Nossa história</a>
          <a className="hover:text-mustard" href="#contato">Contato</a>
        </div>
        <a href="#cardapio" className="hidden items-center gap-2 rounded-full bg-pepper px-5 py-3 text-sm font-extrabold transition hover:-translate-y-0.5 md:flex"><ShoppingBag size={17}/> Pedir agora</a>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-mustard text-ink md:hidden" aria-label="Abrir menu"><Menu size={22}/></button>
      </nav>
    </header>
  );
}
