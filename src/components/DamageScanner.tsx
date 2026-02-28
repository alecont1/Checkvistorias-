import { useState } from 'react';

export default function DamageScanner() {
    const [position, setPosition] = useState(50);

    // Hotspot location
    const hotspotX = 72; // %
    const hotspotY = 45; // %

    return (
        <section className="relative w-full bg-check py-24 md:py-40 px-6 overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 z-0 grid-lines opacity-[0.05]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
                    <div className="inline-block border border-vistoria/30 bg-vistoria/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="font-mono text-vistoria text-sm tracking-wider uppercase">
                            Inteligência de Confronto
                        </span>
                    </div>
                    <h2 className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                        Enxergamos o que o <br />
                        <span className="text-slate-400">olho humano perde.</span>
                    </h2>
                </div>

                <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-navy border border-white/10 select-none group shadow-2xl">

                    {/* SAÍDA (Background, com a avaria) */}
                    <div className="absolute inset-0 z-0">
                        {/* Using a darker edit to simulate damage visibility */}
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                            alt="Vistoria Saída com Dano"
                            className="w-full h-full object-cover opacity-90 grayscale-[0.5] contrast-125 brightness-75"
                        />

                        {/* Simulando a marca de dano com um overlay */}
                        <div
                            className="absolute w-64 h-64 bg-black/60 blur-[30px] rounded-full mix-blend-multiply"
                            style={{ top: `calc(${hotspotY}% - 128px)`, left: `calc(${hotspotX}% - 128px)` }}
                        />

                        {/* Hotspot Pulsante na Avaria */}
                        <div
                            className="absolute z-10"
                            style={{ top: `${hotspotY}%`, left: `${hotspotX}%` }}
                        >
                            <div className="relative group/hotspot cursor-crosshair">
                                <div className="absolute -inset-3 rounded-full bg-alert/30 animate-ping" />
                                <div className="relative w-5 h-5 rounded-full bg-alert border-2 border-white shadow-[0_0_20px_rgba(239,68,68,0.8)]" />

                                {/* Tooltip */}
                                <div className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none w-max z-50">
                                    <div className="bg-navy border border-alert/50 px-5 py-4 rounded text-white shadow-2xl">
                                        <p className="font-mono text-sm tracking-widest text-alert mb-2">
                                            [ AVARIA DETECTADA: PAREDE 03 ]
                                        </p>
                                        <div className="flex items-center gap-4 border-t border-white/10 pt-2">
                                            <p className="font-mono text-[11px] text-slate-400">
                                                GRAVIDADE: <span className="text-alert font-bold">ALTA</span>
                                            </p>
                                            <div className="flex gap-1">
                                                <span className="w-1.5 h-3 bg-alert" />
                                                <span className="w-1.5 h-3 bg-alert" />
                                                <span className="w-1.5 h-3 bg-alert" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Line connection */}
                                    <div className="absolute top-1/2 -left-3 md:-left-6 w-3 md:w-6 h-[1px] bg-alert/50 -translate-y-1/2" />
                                </div>
                            </div>
                        </div>

                        {/* Label Saída */}
                        <div className="absolute top-6 right-6 bg-alert/10 text-alert border border-alert/30 backdrop-blur-md font-mono text-xs px-4 py-2 rounded tracking-widest z-0">
                            LAUDO SAÍDA
                        </div>
                    </div>

                    {/* ENTRADA (Sobreposição clipada) */}
                    <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                            alt="Vistoria Entrada Limpa"
                            className="w-full h-full object-cover"
                        />
                        {/* Label Entrada */}
                        <div className="absolute top-6 left-6 bg-navy/80 text-white border border-white/20 backdrop-blur-md font-mono text-xs px-4 py-2 rounded tracking-widest">
                            LAUDO ENTRADA
                        </div>
                    </div>

                    {/* Barra do Slider */}
                    <div
                        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white cursor-ew-resize touch-none pointer-events-none"
                        style={{ left: `calc(${position}% - 1px)` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-white border-opacity-50 flex items-center justify-center transition-transform group-hover:scale-110">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="m9 18-6-6 6-6" />
                                <path d="m15 18 6-6-6-6" />
                            </svg>
                        </div>
                    </div>

                    {/* Mouse/Touch Interaction Area */}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={position}
                        onChange={(e) => setPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0"
                        aria-label="Comparador de imagens Antes e Depois"
                    />
                </div>
            </div>
        </section>
    );
}
