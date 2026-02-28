export default function Partners() {
    return (
        <section className="relative w-full bg-soft pt-16 pb-20 px-6 border-b border-slate-200 overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
                <h3 className="font-syne font-bold text-xl md:text-2xl text-navy/70 mb-12 text-center tracking-tight">
                    Quem confia na nossa <span className="text-navy">precisão</span>
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {/* Parceiro: RE/MAX */}
                    <div className="relative group cursor-pointer flex justify-center items-center">
                        <img
                            src="/partner-remax.png"
                            alt="RE/MAX Companhia de Imóveis"
                            className="h-16 md:h-20 max-w-[200px] object-contain grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-xl"
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                            <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase bg-white/90 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-slate-200 block scale-90 group-hover:scale-100 transition-transform">
                                Parceiro Oficial
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
