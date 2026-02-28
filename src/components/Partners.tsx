import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Partners() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const magneticRef = useRef<HTMLAnchorElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // --- 1. ENTRANCE ANIMATION (ScrollTrigger) ---
        let ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                y: 50,
                opacity: 0,
                scale: 0.95,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        // --- 2. MAGNETIC HOVER EFFECT ---
        const magneticElement = magneticRef.current;
        if (!magneticElement) return () => ctx.revert();

        // Setup GSAP QuickTo for smooth tracking
        const xTo = gsap.quickTo(magneticElement, "x", { duration: 0.8, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magneticElement, "y", { duration: 0.8, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticElement.getBoundingClientRect();
            // Calculate center of element
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            // Calculate distance from center (dampened)
            const distanceX = (clientX - centerX) * 0.2;
            const distanceY = (clientY - centerY) * 0.2;

            xTo(distanceX);
            yTo(distanceY);
        };

        const handleMouseLeave = () => {
            // Reset to origin when mouse leaves
            xTo(0);
            yTo(0);
        };

        magneticElement.addEventListener('mousemove', handleMouseMove);
        magneticElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            ctx.revert();
            magneticElement.removeEventListener('mousemove', handleMouseMove);
            magneticElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full bg-soft pt-16 pb-24 md:pb-32 px-6 border-b border-slate-200 overflow-hidden">
            {/* Grid background for technical feel */}
            <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                <h3 className="font-syne font-bold text-xl md:text-2xl text-navy/70 mb-16 text-center tracking-tight">
                    Quem confia na nossa <span className="text-navy">precisão</span>
                </h3>

                <div ref={contentRef} className="flex justify-center items-center w-full">
                    {/* The Magnetic Container + WhatsApp Link */}
                    <a
                        ref={magneticRef}
                        href="https://wa.me/5519991607587"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group block p-8 cursor-pointer z-20"
                        aria-label="Fale conosco no WhatsApp sobre nossa parceria com a RE/MAX"
                    >
                        {/* Target Reticles (Corners) */}
                        {/* Top Left */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-slate-300 group-hover:border-vistoria transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" />
                        {/* Top Right */}
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-slate-300 group-hover:border-vistoria transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" />
                        {/* Bottom Left */}
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-slate-300 group-hover:border-vistoria transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" />
                        {/* Bottom Right */}
                        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-slate-300 group-hover:border-vistoria transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(132,204,22,0.8)]" />

                        {/* Background subtle highlight on hover */}
                        <div className="absolute inset-0 bg-vistoria/0 group-hover:bg-vistoria/5 transition-colors duration-500 rounded-sm pointer-events-none" />

                        {/* Partner Seal Image */}
                        <div className="relative z-10 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105">
                            <img
                                src="/selo-remax-verificado.png.png"
                                alt="Selo de Verificação Check Vistorias - Parceiro RE/MAX"
                                className="h-24 md:h-32 object-contain drop-shadow-md group-hover:drop-shadow-2xl transition-all duration-500"
                            />

                            {/* Verified Status Tag */}
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center">
                                <span className="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs tracking-widest text-vistoria uppercase bg-navy px-4 py-2 rounded-full shadow-lg border border-vistoria/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-vistoria animate-pulse shadow-[0_0_5px_rgba(132,204,22,1)]" />
                                    Status: Verificado
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
