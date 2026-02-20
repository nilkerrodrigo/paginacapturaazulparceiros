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
    <section className="bg-white w-full py-4 pb-12 md:pb-16">
      <div className="mx-auto w-[96%] md:w-[98%] max-w-[1920px] relative z-0">
        
        <div className="relative w-full rounded-[2rem] md:rounded-[2.5rem] shadow-2xl bg-[#1053f1] min-h-[600px] md:min-h-[750px] overflow-hidden flex flex-col">
            
            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full z-0">
               <img 
                 src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/ChatGPT-Image-22-de-jan.png" 
                 alt="Background"
                 className="w-full h-full object-cover opacity-40 mix-blend-overlay"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-[#1053f1]/90 via-[#1053f1]/50 to-[#082a7a]/90"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center text-center pt-24 md:pt-32 pb-0 px-4 justify-end flex-1 h-full">
              
              <div className="max-w-5xl mx-auto flex flex-col items-center z-20">
                
                {/* Badge requested by user - Made more visible */}
                <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-blue-600 border border-blue-400/50 text-white font-bold rounded-full text-xs md:text-sm mb-6 shadow-lg cursor-default hover:bg-blue-500 transition-colors">
                  <Star size={14} className="text-yellow-400 fill-yellow-400 md:w-4 md:h-4" />
                  <span>Gestão, Segurança e Tecnologia</span>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight drop-shadow-lg font-heading">
                  O sistema que entende <br className="hidden md:block" />
                  a rotina de quem <span className="text-cyan-300">aprova</span>.
                </h1>
                
                <p className="text-base md:text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-md px-2">
                  A plataforma que profissionaliza sua operação de crédito. Mesa especializada, diagnóstico inteligente e serviços integrados em um só lugar.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full mb-8">
                  <button 
                    onClick={scrollToForm}
                    className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white text-[#1053f1] font-bold rounded-full text-base md:text-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:bg-blue-50 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                  >
                    Solicitar Acesso
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 transition-colors hover:bg-black/30">
                     <div className="flex -space-x-3">
                        <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face-2.jpeg" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 1" />
                        <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face-1.jpeg" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 2" />
                        <img src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Face.jpeg" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover" alt="Parceiro 3" />
                     </div>
                     <div className="text-left">
                        <div className="flex text-yellow-400">
                           {[1,2,3,4,5].map(i => <Star key={i} size={10} className="md:w-3 md:h-3" fill="currentColor" />)}
                        </div>
                        <p className="text-[10px] md:text-xs text-white font-medium drop-shadow-sm">Aprovado por parceiros</p>
                     </div>
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[95%] md:max-w-[1200px] mx-auto translate-y-6 md:translate-y-12 transition-transform duration-700 hover:translate-y-4">
                  <img 
                    src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/imagem-1-azul-parceiros.png" 
                    alt="Preview da Plataforma"
                    className="w-full h-auto object-contain block drop-shadow-2xl"
                  />
              </div>

            </div>
        </div>

        <div className="absolute -bottom-6 md:-bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white p-2 md:p-2.5 rounded-full shadow-lg">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-[#1053f1] rounded-full flex items-center justify-center border-2 md:border-4 border-[#1053f1]">
                <img 
                  src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/icon-azul-parceiros.png" 
                  alt="Icon" 
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;