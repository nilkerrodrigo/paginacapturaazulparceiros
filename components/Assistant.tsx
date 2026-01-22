import React from 'react';
import { MessageCircle, Clock, Users, ArrowDown } from 'lucide-react';

const Assistant: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: The Avatar/Visual */}
          <div className="lg:col-span-5 relative min-h-[400px]">
             <div className="bg-brand rounded-[2rem] p-6 text-center text-white relative z-10 h-full flex flex-col justify-end overflow-hidden shadow-2xl">
                {/* Simulated 3D Avatar Area */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-400 to-brand flex items-center justify-center">
                    <img src="https://picsum.photos/400/600?grayscale&blur=2" className="opacity-20 absolute w-full h-full object-cover" />
                    <div className="relative z-10 bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20">
                       <MessageCircle size={64} className="text-white" />
                    </div>
                </div>
                
                <div className="relative z-20 bg-black/20 backdrop-blur-md p-4 rounded-xl border border-white/10 mt-auto mb-8 mx-4">
                   <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold uppercase tracking-wider">Assistente Lua no WhatsApp</span>
                   </div>
                   <p className="text-sm text-left">
                     "Olá! Gostaria de confirmar sua sessão de amanhã às 14h?"
                   </p>
                </div>
                
                <div className="text-left p-4">
                   <h3 className="text-2xl font-bold leading-tight">Mais que uma assistente. <br/><span className="text-blue-200">Uma parceira no seu consultório.</span></h3>
                </div>
             </div>
          </div>

          {/* Right: The Grid of Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
             {/* Main Info */}
             <div className="bg-white p-8 rounded-3xl md:col-span-2">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Sobre a <span className="text-brand">Lua</span></h3>
                <p className="text-slate-600 mb-6">A Lua agenda, confirma e envia lembretes no WhatsApp.</p>
                <p className="text-sm text-slate-500">
                  Você foca no cuidado com seus pacientes; ela garante organização, pontualidade e uma experiência acolhedora.
                </p>
             </div>

             {/* Benefit 1 */}
             <div className="bg-white p-6 rounded-3xl hover:shadow-lg transition-shadow border border-slate-50">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                   <ArrowDown size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Menos faltas</h4>
                <p className="text-xs text-slate-500">Confirmações automáticas e lembretes inteligentes reduzem furos na agenda.</p>
             </div>

             {/* Benefit 2 */}
             <div className="bg-white p-6 rounded-3xl hover:shadow-lg transition-shadow border border-slate-50">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center mb-4 text-brand">
                   <Clock size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Disponível 24/7</h4>
                <p className="text-xs text-slate-500">Ela atende os seus pedidos com prontidão independente do dia ou hora.</p>
             </div>

             {/* Benefit 3 */}
             <div className="bg-white p-6 rounded-3xl hover:shadow-lg transition-shadow border border-slate-50 md:col-span-2">
                <div className="flex items-start gap-4">
                   <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                      <Users size={20} />
                   </div>
                   <div>
                      <h4 className="font-bold text-slate-800 mb-2">Pacientes</h4>
                      <p className="text-xs text-slate-500">Registre novos pacientes e acompanhe os dados de cada um de forma organizada, tudo através da conversa com a Lua.</p>
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