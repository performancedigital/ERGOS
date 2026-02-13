
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { COLORS, GRADIENTS } from '../constants';

const ThankYou: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-between">
            <Navbar />

            <div
                className="flex-grow flex items-center justify-center px-4 py-32"
                style={{
                    background: GRADIENTS.primary
                }}
            >
                <div className="bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/20 max-w-2xl w-full text-center relative overflow-hidden group">
                    {/* Shape decorativo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

                    <span className="text-6xl md:text-7xl mb-6 block animate-bounce">✅</span>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Recebemos seu contato!
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-medium">
                        Obrigado por escolher a economia inteligente. <br />
                        Nossa equipe de engenheiros entrará em contato em breve para apresentar seu projeto personalizado.
                    </p>

                    <a
                        href="/"
                        className="inline-block px-10 py-5 bg-[#FFF200] text-[#0c4acd] font-black text-lg rounded-full hover:scale-105 transition-all shadow-xl hover:shadow-2xl hover:bg-white"
                    >
                        VOLTAR AO INÍCIO
                    </a>
                </div>
            </div>

            <Footer />
            <FloatingWhatsApp />
        </div>
    );
};

export default ThankYou;
