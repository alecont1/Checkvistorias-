import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Staggered text reveal
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.2,
            });
        }, textRef);

        // Cursor tracking with gsap.quickTo
        const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.4, ease: "power3", xPercent: -50 });
        const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.4, ease: "power3", yPercent: -50 });

        const handleMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <section ref={heroRef} className="relative w-full h-screen min-h-[100svh] overflow-hidden bg-navy flex flex-col">

            {/* PASSO 1: Header Estruturado - Fixado no topo, z-50 */}
            <header className="fixed top-0 left-0 w-full z-50 bg-navy/40 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-4 py-4 md:py-6 flex items-center">
                    <img
                        src="/brand-logo-transparent.png"
                        alt="Check Vistorias Logo"
                        className="h-12 md:h-14 lg:h-16 object-contain drop-shadow-2xl"
                    />
                </div>
            </header>

            {/* PASSO 2: Fundo Cinemático - O "Sanduíche" de Camadas */}

            {/* Camada 1: Fundo de Imagem (z-0) */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Vistoria Background Cinemático"
                    className="w-full h-full object-cover grayscale-[0.2]"
                />
            </div>

            {/* Camada 2: Overlay de Cor (z-10) */}
            <div className="absolute inset-0 bg-navy/80 z-10 pointer-events-none" />

            {/* Camada 3: Textura e Noise (z-20) */}
            <div className="absolute inset-0 grid-lines opacity-20 z-20 pointer-events-none" />

            {/* Camera Viewfinder Crosshairs (UI extra) */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-32 h-32 z-50 pointer-events-none mix-blend-difference hidden md:block"
            >
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/30" />
                <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/30" />
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-vistoria" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-vistoria" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-vistoria" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-vistoria" />
            </div>

            {/* PASSO 3: Layout do Conteúdo de Texto (z-30) */}
            <div ref={textRef} className="relative z-30 container mx-auto px-4 pt-40 md:pt-48 pb-24 flex-grow flex flex-col justify-center pointer-events-none">
                <div className="max-w-4xl">
                    <div className="overflow-hidden mb-2 md:mb-4">
                        <h1 className="reveal-text font-syne font-bold text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tighter leading-none drop-shadow-lg">
                            Sua tranquilidade
                        </h1>
                    </div>
                    <div className="overflow-hidden mb-8 md:mb-12">
                        <h2 className="reveal-text font-serif-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-vistoria italic leading-none drop-shadow-[0_0_15px_rgba(132,204,22,0.3)]">
                            documentada.
                        </h2>
                    </div>
                    <div className="overflow-hidden mb-10 md:mb-16">
                        <p className="reveal-text font-instrument text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed text-balance drop-shadow-md">
                            Laudos periciais que eliminam conflitos e garantem a integridade do seu imóvel.
                        </p>
                    </div>

                    <div className="overflow-hidden pointer-events-auto w-max">
                        <a
                            href="https://wa.me/5519991607587"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-text group relative inline-flex items-center justify-center px-8 py-5 md:px-10 md:py-6 bg-check text-white overflow-hidden transition-transform hover:scale-105 active:scale-95 border border-white/10 hover:border-vistoria/50 shadow-2xl rounded-sm"
                        >
                            <span className="relative z-10 font-mono font-medium tracking-wider uppercase text-sm md:text-base flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-vistoria animate-pulse shadow-[0_0_10px_rgba(132,204,22,0.8)]" />
                                Iniciar Perícia
                            </span>
                            <div className="absolute inset-0 h-full w-full opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] duration-1000 ease-in-out" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
