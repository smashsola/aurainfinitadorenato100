import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";

export function SplitHero() {
  return (
    <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-ink text-cream md:min-h-screen">
      <div className="mx-auto grid min-h-[760px] max-w-[1440px] md:min-h-screen md:grid-cols-[.92fr_1.08fr]">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-36 md:justify-center md:px-12 lg:px-20">
          <div className="mb-6 flex w-fit items-center gap-2 rounded-full border border-mustard/40 bg-mustard/10 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-mustard"><Star size={14} fill="currentColor"/> O lanche que é 100%</div>
          <h1 className="font-display text-[clamp(4.8rem,12vw,10rem)] uppercase leading-[.8] tracking-[-.035em]">Fome<br/><span className="text-mustard">não se</span><br/>discute.</h1>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-cream/70">Se resolve com hambúrguer artesanal, ingredientes frescos e muito molho. Sem frescura. Com sabor.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-full bg-pepper px-7 py-4 text-sm font-black uppercase tracking-wide shadow-[0_8px_0_#8d1712] transition hover:translate-y-1 hover:shadow-[0_4px_0_#8d1712]" href="#cardapio">Ver cardápio</a>
            <a className="flex items-center gap-2 rounded-full border border-cream/25 px-6 py-4 text-sm font-bold" href="#historia">Conheça o Renato <ArrowDown size={17}/></a>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-[44%] md:relative md:h-auto">
          <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=90" alt="Hambúrguer artesanal com queijo e salada" fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 55vw"/>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink md:bg-gradient-to-r md:from-ink md:via-transparent md:to-transparent"/>
          <div className="absolute bottom-8 right-6 rotate-3 rounded-2xl bg-mustard px-5 py-4 text-ink shadow-2xl md:bottom-12 md:right-10">
            <p className="text-xs font-black uppercase tracking-wider">A partir de</p><p className="font-display text-5xl leading-none">R$ 22</p>
          </div>
        </div>
      </div>
    </section>
  );
}
