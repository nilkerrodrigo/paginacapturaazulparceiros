
import React from 'react';
import { MessageCircle, Clock, Users, Zap, Bot } from 'lucide-react';

const Assistant: React.FC = () => {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: The Visual Card */}
          <div className="lg:col-span-5">
             <div className="bg-brand rounded-[3rem] p-8 text-white relative h-[500px] flex flex-col justify-between overflow-hidden shadow-2xl group border border-white/20">
                {/* Visual Header */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand to-brand-900 opacity-90"></div>
                
                <div className="relative z-10 flex flex-col items-center justify-center flex-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                        <div className="relative bg-white/10 p-8 rounded-full backdrop-blur-xl border border-white/20">
                           <Bot size={80} className="text-white" />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-black rounded-full uppercase tracking-tighter animate-bounce inline-block mb-2">IA Ativa</span>
                        <h4 className="text-3xl font-black">Conheça a Lua</h4>
                    </div>
                </div>
                
                <div className="relative z-20 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 mb-4 mx-2 transform group-hover:translate-y-[-5px] transition-transform">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center">
                         <MessageCircle size={20} className="text-brand" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-blue-100">Inteligência Artificial</span>
                   </div>
                   <p className="text-base font-medium italic leading-relaxed">
                     "Parceiro, identifiquei um cliente com alto potencial de aprovação. Deseja que eu envie o diagnóstico completo agora?"
                   </p>
                </div>
             </div>
          </div>

          {/* Right: Benefits Grid */}
          <div className="lg:col-span-7 space-y-8">
             <div>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">A primeira IA <span className="text-brand underline decoration-cyan-400 underline-offset-8">especialista</span> em crédito.</h3>
                <p className="text-xl text-slate-600 font-medium">A Lua não é apenas um chat, é o cérebro da sua operação rodando 24 horas por dia.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                   <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 text-brand">
                      <Zap size={28} />
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3">Velocidade Máxima</h4>
                   <p className="text-slate-600 leading-relaxed">Respostas instantâneas e diagnósticos automatizados que economizam horas do seu dia.</p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                      <Clock size={28} />
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 mb-3">Sempre Online</h4>
                   <p className="text-slate-600 leading-relaxed">Sua mesa de crédito nunca fecha. A Lua atende seus clientes mesmo quando você está descansando.</p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
                   <div className="w-20 h-20 bg-cyan-50 rounded-3xl flex items-center justify-center text-cyan-600 shrink-0">
                      <Users size={36} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">Conversão Inteligente</h4>
                      <p className="text-slate-600 leading-relaxed">A Lua qualifica cada lead, identificando quem tem real potencial de fechar negócio, evitando que você perca tempo com perfis inválidos.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Assistant;
