import React from 'react';
import { Building2, BrainCircuit, Layers, Laptop, GraduationCap, HeadphonesIcon, CheckCircle2, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const benefits = [
    "Sua operação inteligente, organizada e automatizada",
    "Todas as informações do cliente estão a um clique",
    "Mesa de crédito atualizada e pronta em segundos",
    "Relatórios financeiros claros para você crescer"
  ];

  const gridFeatures = [
    {
      icon: <Building2 size={24} />,
      title: "Mesa Especializada",
      desc: "Acesso a múltiplas instituições financeiras com análise estratégica."
    },
    {
      icon: <BrainCircuit size={24} />,
      title: "Diagnóstico IA",
      desc: "Análise completa de perfil e capacidade creditícia com tecnologia exclusiva."
    },
    {
      icon: <Layers size={24} />,
      title: "Serviços Integrados",
      desc: "Limpa nome, rating bancário, seguros e contabilidade em um só lugar."
    },
    {
      icon: <Laptop size={24} />,
      title: "Plataforma Digital",
      desc: "Gestão centralizada com CRM e acompanhamento em tempo real."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Universidade Azul",
      desc: "Treinamentos sobre produtos, técnicas de vendas e marketing."
    },
    {
      icon: <HeadphonesIcon size={24} />,
      title: "Suporte Dedicado",
      desc: "Equipe especializada disponível para suporte técnico e operacional."
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-slate-50 relative">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Big Blue Card (Solution) */}
        <div className="bg-brand rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl text-white mb-24 overflow-hidden relative">
           {/* Background Gradient & Texture */}
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-400/20 to-transparent pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-900/50 to-transparent pointer-events-none"></div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Image Side */}
              <div className="order-2 lg:order-1 relative">
                 <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="http://azul360parceiros.com.br/wp-content/uploads/2026/01/Captura-de-tela-2026-01-22-134225.png" 
                      alt="Dashboard Azul 360º Parceiros" 
                      className="w-full h-auto"
                    />
                 </div>
                 {/* Floating Badge */}
                 <div className="absolute -bottom-6 -right-4 bg-white text-slate-900 px-6 py-3 rounded-xl shadow-xl font-bold flex items-center gap-2 animate-bounce">
                    <span className="text-green-500 text-lg">+ R$ 12.000</span>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Em comissões</span>
                 </div>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2">
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                    Com a <span className="text-cyan-300">Azul 360º Parceiros</span>
                 </h2>
                 
                 <div className="space-y-4 mb-10">
                    {benefits.map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="text-cyan-300 flex-shrink-0" size={24} />
                          <span className="text-lg font-medium text-blue-50">{item}</span>
                       </div>
                    ))}
                 </div>

                 <div className="p-4 bg-white/10 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
                    <p className="text-blue-100">
                       <span className="text-green-400 font-bold">Resultado:</span> mais tempo para atender, mais foco nos clientes e mais confiança na sua operação.
                    </p>
                 </div>

                 <button 
                   onClick={scrollToForm}
                   className="w-full sm:w-auto px-8 py-4 bg-white text-brand font-bold rounded-xl text-lg hover:bg-cyan-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                 >
                    Começar Agora
                    <ArrowRight size={20} />
                 </button>
              </div>
           </div>
        </div>

        {/* Features Grid Headline */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tudo que você precisa em <span className="text-brand">um só lugar</span>
           </h2>
           <p className="text-slate-600 text-lg">
              Ferramentas desenvolvidas especificamente para potencializar seus resultados.
           </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {gridFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                 <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                    {feat.icon}
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                 <p className="text-slate-600 leading-relaxed">
                    {feat.desc}
                 </p>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Features;