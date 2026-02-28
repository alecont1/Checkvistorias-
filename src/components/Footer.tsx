import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full bg-navy rounded-t-[4rem] px-6 pt-24 pb-32 md:pb-24 mt-[-2rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Background Texture Detail */}
            <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

                {/* Left Side: Logo & Status */}
                <div className="flex flex-col gap-8">
                    {/* Brand Logo */}
                    <div className="flex items-center">
                        <img
                            src="/brand-logo-transparent.png"
                            alt="Check Vistorias Logo"
                            className="h-10 md:h-12 object-contain drop-shadow-lg"
                        />
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max backdrop-blur-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-vistoria relative flex">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vistoria opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-vistoria"></span>
                        </span>
                        <span className="font-mono text-xs text-slate-300 tracking-widest">
                            [ SISTEMA DE VISTORIA: OPERACIONAL ]
                        </span>
                    </div>
                </div>

                {/* Right Side: Links & Contact */}
                <div className="flex flex-col gap-6 w-full md:w-auto">
                    <h4 className="font-mono text-sm tracking-widest text-slate-400 uppercase border-b border-white/10 pb-4">
                        Contatos Diretos
                    </h4>

                    <div className="flex flex-col gap-4">
                        <a
                            href="https://instagram.com/check.vistoriass"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <span className="font-instrument text-lg tracking-wide">
                                @check.vistoriass
                            </span>
                        </a>

                        <a
                            href="https://wa.me/5519991607587"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vistoria/20 group-hover:text-vistoria transition-colors border border-white/5">
                                <MessageCircle className="w-4 h-4" />
                            </div>
                            <span className="font-instrument text-lg tracking-wide">
                                Atendimento Rápido
                            </span>
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright Line */}
            <div className="relative z-10 max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-instrument text-slate-500 text-sm">
                    © {new Date().getFullYear()} Check Vistorias. Todos os direitos reservados.
                </p>
                <p className="font-mono text-xs text-slate-600">
                    Baseado na Lei do Inquilinato (8.245/91)
                </p>
            </div>
        </footer>
    );
}
