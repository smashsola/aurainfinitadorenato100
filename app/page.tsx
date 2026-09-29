import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { SplitHero } from "@/components/ui/hero-08";
import { ScrollMediaExpansionHero } from "@/components/ui/scroll-expansion-hero";

const items = [
  { name: "Renato 100%", desc: "Pão brioche, carne 180g, cheddar duplo, bacon crocante, cebola caramelizada e molho da casa.", price: "32", tag: "Mais pedido", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85" },
  { name: "Brabo Bacon", desc: "Pão australiano, carne 180g, queijo prato, bacon, picles e maionese defumada.", price: "29", tag: "É brabo", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85" },
  { name: "Frango Crocante", desc: "Frango empanado, queijo, alface, tomate e molho levemente picante no pão brioche.", price: "27", tag: "Crocante", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85" },
];

export default function Home() {
  return <main><Navbar/><SplitHero/>
    <section id="cardapio" className="bg-mustard px-5 py-20 text-ink md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="mb-3 text-xs font-black uppercase tracking-[.25em] text-pepper">Escolha o seu</p><h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Os favoritos<br/>da galera.</h2></div>
          <p className="max-w-sm font-medium">Hambúrgueres grandes, suculentos e montados na hora. A foto é bonita, mas ao vivo é ainda melhor.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">{items.map((item, i) => <article key={item.name} className={`group overflow-hidden rounded-3xl bg-cream ${i === 0 ? "md:-rotate-1" : i === 2 ? "md:rotate-1" : ""}`}>
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw"/><span className="absolute left-4 top-4 rounded-full bg-pepper px-4 py-2 text-xs font-black uppercase text-white">{item.tag}</span></div>
          <div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-3xl uppercase">{item.name}</h3><p className="whitespace-nowrap font-display text-3xl text-pepper"><small className="text-base">R$</small> {item.price}</p></div><p className="mt-3 min-h-16 text-sm leading-relaxed text-ink/65">{item.desc}</p><a href="#contato" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-ink py-4 text-sm font-black uppercase text-cream transition hover:bg-pepper">Saiba mais <ArrowRight size={17}/></a></div>
        </article>)}</div>
        <div className="mt-9 text-center"><a href="#contato" className="inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-black uppercase">Como pedir <ArrowRight size={17}/></a></div>
      </div>
    </section>
    <ScrollMediaExpansionHero/>
    <section className="overflow-hidden bg-pepper py-5 text-cream"><div className="marquee flex whitespace-nowrap font-display text-4xl uppercase md:text-6xl"><span>É grande • É suculento • É 100% • Feito na chapa • &nbsp;</span><span>É grande • É suculento • É 100% • Feito na chapa • &nbsp;</span></div></section>
    <section id="contato" className="bg-ink px-5 py-20 text-cream md:px-8 md:py-28"><div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
      <div><div className="flex gap-1 text-mustard">{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor" size={20}/>)}</div><p className="mt-7 font-display text-5xl uppercase leading-[.95] md:text-7xl">Lanche feito na hora, com capricho em cada camada.</p></div>
      <div className="rounded-3xl bg-cream p-7 text-ink md:p-10"><p className="text-xs font-black uppercase tracking-[.2em] text-pepper">Bateu a fome?</p><h2 className="mt-3 font-display text-5xl uppercase md:text-6xl">Chama o Renato.</h2><p className="my-8 border-y border-ink/15 py-7 leading-relaxed">Contato, endereço e horário de funcionamento serão divulgados em breve.</p></div>
    </div></section>
    <footer className="border-t border-cream/10 bg-ink px-5 py-8 text-cream/60"><div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between"><p className="font-display text-xl uppercase text-cream">Renato <span className="text-mustard">100%</span> Lanches</p><p>© 2026. Sabor de verdade, sem enrolação.</p></div></footer>
  </main>;
}

