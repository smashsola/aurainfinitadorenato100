"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ScrollMediaExpansionHero() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setProgress(Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * .45))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const inset = 7 * (1 - progress);
  return (
    <section ref={ref} id="historia" className="relative overflow-hidden bg-cream py-20 text-ink md:py-28">
      <div className="mx-auto mb-10 max-w-7xl px-5 md:flex md:items-end md:justify-between md:px-8">
        <p className="mb-4 text-xs font-black uppercase tracking-[.24em] text-pepper">Da nossa chapa pra sua mesa</p>
        <h2 className="max-w-4xl font-display text-5xl uppercase leading-[.9] md:text-8xl">Aqui o sabor<br/>fala <span className="text-pepper">mais alto.</span></h2>
        <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/60 md:mt-0">Receita honesta, chapa quente e capricho em cada camada. Porque 100% não é só nome — é compromisso.</p>
      </div>
      <div className="relative mx-auto h-[55vh] min-h-[430px] max-w-[1500px] transition-[clip-path] duration-100 ease-out md:h-[75vh]" style={{ clipPath: `inset(${inset}% ${inset}% ${inset}% ${inset}% round ${1.5 + inset / 3}rem)` }}>
        <Image src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1800&q=90" alt="Preparo de hambúrguer artesanal na cozinha" fill className="object-cover" sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"/>
        <p className="absolute bottom-8 left-8 max-w-xl font-display text-4xl uppercase leading-none text-white md:bottom-12 md:left-12 md:text-7xl">Feito na hora.<br/><span className="text-mustard">Do nosso jeito.</span></p>
      </div>
      <p className="mx-auto mt-5 max-w-7xl px-5 text-center text-xs font-bold uppercase tracking-[.18em] text-ink/45">Role para explorar — sem travas, no seu ritmo</p>
    </section>
  );
}
