import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white w-full py-4 pb-16">
      {/* 
          Container "Card"
          - Layout: flex flex-col to allow pushing content to bottom.
          - Removed overflow-hidden from main container to allow the circle icon to protrude.
          - Added relative to position the circle.
      */}
      <div className="mx-auto w-[98%] max-w-[1920px] relative rounded-[2.5rem] shadow-2xl bg-[#1053f1] min-h-[850px] flex flex-col z-0">
        
        {/* Background Image Layer - Applied overflow-hidden here to clip the background image but not the icon */}
        <div className="absolute inset-0 w-full h-full z-[-1] rounded-[2.5rem] overflow-hidden">
           <img 
             src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/ChatGPT-Image-22-de-jan.png" 
             alt="Background"
             className="w-full h-full object-cover opacity-90"
           />
           {/* Gradient Overlay for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#1053f1]/40 via-[#1053f1]/10 to-[#082a7a]/90"></div>
        </div>

        {/* Content Layer - flex-1 ensures it fills the available space */}
        <div className="relative z-10 flex flex-col items-center text-center pt-16 px-4 md:pt-24 flex-1">
          
          {/* Text Content Wrapper */}
          <div className="max-w-5xl mx-auto mb-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-sm mb-8 shadow-xl cursor-default hover:bg-white/20 transition-colors">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span>Gestão, Segurança e Tecnologia</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight drop-shadow-lg font-heading">
              O sistema que entende<br className="hidden md:block" />
              a rotina de quem <span className="text-cyan-300">aprova</span>.
            </h1>
            
            {/* Paragraph */}
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md">
              A plataforma que profissionaliza sua operação de crédito. Mesa especializada, diagnóstico inteligente e serviços integrados em um só lugar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={scrollToForm}
                className="px-8 py-4 bg-white text-brand font-bold rounded-full text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:bg-blue-50 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                Solicitar Acesso
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 transition-colors hover:bg-black/30">
                 <div className="flex -space-x-3">
                    <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face-2.jpeg" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 1" />
                    <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face-1.jpeg" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 2" />
                    <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face.jpeg" className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 3" />
                 </div>
                 <div className="text-left">
                    <div className="flex text-yellow-400">
                       {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-xs text-white font-medium drop-shadow-sm">Aprovado por parceiros</p>
                 </div>
              </div>
            </div>
          </div>

          {/* 
             Large Dashboard Image
             - mt-auto: Pushes the image to the very bottom of the flex container.
             - translate-y-12: Increased vertical translation (approx 48px) to push the image further down.
          */}
          <div className="w-full max-w-[95%] md:max-w-[1400px] mx-auto mt-auto translate-y-12">
              <img 
                src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/imagem-1-azul-parceiros.png" 
                alt="Preview da Plataforma"
                className="w-full h-auto object-contain block"
              />
          </div>

        </div>

        {/* Section Break Icon */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white p-2.5 rounded-full shadow-lg">
             <div className="w-16 h-16 bg-[#1053f1] rounded-full flex items-center justify-center border-4 border-[#1053f1]">
                <img 
                  src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/icon-azul-parceiros.png" 
                  alt="Icon" 
                  className="w-8 h-8 object-contain"
                />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;