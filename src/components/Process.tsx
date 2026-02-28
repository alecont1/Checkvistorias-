import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const steps = [
    {
        title: "VISTORIA DE ENTRADA (M²)",
        description: "Mapeamento completo antes da entrega das chaves. Cobrança justa por metro quadrado.",
        number: "01",
    },
    {
        title: "LAUDO INTELIGENTE",
        description: "Fotos integradas a descritivos detalhados via App. Tudo na nuvem, acessível instantaneamente.",
        number: "02",
    },
    {
        title: "INTERMEDIÁRIA",
        description: "Vistorias de acompanhamento para contratos de longa duração.",
        number: "03",
    },
    {
        title: "VISTORIA DE SAÍDA (VALOR FIXO)",
        description: "Confronto rigoroso com o laudo inicial. Identificamos o que mudou e protegemos seu patrimônio.",
        number: "04",
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>('.process-card');

            cards.forEach((card, i) => {
                // Stack effect: scale and fade previous cards
                if (i !== cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.94,
                        opacity: 0.4,
                        filter: 'blur(2px)',
                        scrollTrigger: {
                            trigger: cards[i + 1],
                            start: "top center",
                            end: "top top",
                            scrub: true,
                        }
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-soft py-24 md:py-40 px-6">
            <div className="max-w-4xl mx-auto relative decoration-slate-200">
                <div className="mb-24 md:mb-32 text-center">
                    <h2 className="font-syne font-bold text-4xl md:text-5xl text-navy tracking-tight mb-6">
                        A Anatomia da <span className="font-serif-display font-normal text-check italic pr-2">Segurança</span>
                    </h2>
                    <p className="font-instrument text-slate-500 text-lg md:text-xl max-w-xl mx-auto">
                        Quatro etapas que transformam vistorias comuns em provas irrefutáveis.
                    </p>
                </div>

                {/* The relative container needs enough padding to allow scrolling */}
                <div className="flex flex-col gap-10 md:gap-24 pb-32">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="process-card sticky w-full bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 origin-top"
                            style={{ top: `calc(120px + ${index * 24}px)`, zIndex: index }}
                        >
                            <div className="font-mono text-6xl md:text-8xl font-light text-slate-100 shrink-0 leading-none">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="font-syne font-bold text-2xl md:text-3xl text-navy mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="font-instrument text-slate-500 md:text-xl leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
