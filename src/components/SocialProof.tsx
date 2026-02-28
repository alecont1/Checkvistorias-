import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SocialProof() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (counterRef.current) {
                gsap.to(counterRef.current, {
                    innerHTML: 100,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: counterRef.current,
                        start: "top 85%",
                    },
                    onUpdate: function () {
                        if (counterRef.current) {
                            counterRef.current.innerHTML = Math.ceil(Number(this.targets()[0].innerHTML)) + '%';
                        }
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-soft py-24 md:py-32 border-t border-slate-200 overflow-hidden px-6">
            <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">

                    <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0 group">
                        <div
                            ref={counterRef}
                            className="font-syne font-bold text-6xl md:text-7xl lg:text-8xl text-navy mb-4 tracking-tighter transition-transform group-hover:scale-105"
                        >
                            0%
                        </div>
                        <h3 className="font-mono text-sm tracking-widest text-vistoria uppercase font-bold mb-3">
                            Georreferenciamento
                        </h3>
                        <p className="font-instrument text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                            Cada imagem carrega metadados de localização e hora, garantindo validade jurídica irrefutável.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0 group">
                        <div
                            className="font-syne font-bold text-6xl md:text-7xl lg:text-8xl text-navy mb-4 tracking-tighter transition-transform group-hover:scale-105"
                        >
                            Zero
                        </div>
                        <h3 className="font-mono text-sm tracking-widest text-alert uppercase font-bold mb-3">
                            Subjetividade
                        </h3>
                        <p className="font-instrument text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                            Eliminamos o "eu acho". Trabalhamos apenas com fatos exaustivamente documentados em alta definição.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center px-4 pt-12 md:pt-0 group">
                        <div className="font-syne font-bold text-6xl md:text-7xl lg:text-8xl text-navy mb-4 tracking-tighter transition-transform group-hover:scale-105">
                            Pleno
                        </div>
                        <h3 className="font-mono text-sm tracking-widest text-check uppercase font-bold mb-3">
                            Atendimento Integrado
                        </h3>
                        <p className="font-instrument text-slate-500 text-sm md:text-base leading-relaxed max-w-xs">
                            Casas, Apartamentos, Prédios e Pontos Comerciais. Cobertura metodológica para qualquer contrato.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
