import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "O que mais me chamou atenção no ProntuPsi foi a praticidade. Em poucos cliques já consigo acessar todo o histórico dos meus pacientes. É nítido que foi desenvolvido pensando no psicólogo.",
      author: "Gabriella Cabral",
      role: "Psicóloga - CRP 01/25997",
      image: "https://picsum.photos/100/100?random=20",
      featured: true,
    },
    {
      text: "Sempre me preocupei com a segurança dos prontuários. Saber que o ProntuPsi segue todas as normas de proteção de dados me dá tranquilidade. Além disso, a plataforma é muito intuitiva.",
      author: "Sara Heloiza",
      role: "Psicóloga - CRP 01/29701",
      image: "https://picsum.photos/100/100?random=21",
      featured: false,
    },
    {
      text: "Sempre tive dificuldade em manter meus atendimentos organizados. Desde que comecei a usar o ProntuPsi, consigo centralizar tudo em um só lugar. Minha agenda, meus pacientes e até a parte financeira.",
      author: "Ester Muniz",
      role: "Psicóloga - CRP 01/28951",
      image: "https://picsum.photos/100/100?random=22",
      featured: true,
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand font-semibold text-sm tracking-wide uppercase">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Seja o próximo psicólogo<br/>a otimizar sua rotina!
          </h2>
        </div>

        <div className="space-y-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl transition-transform hover:-translate-y-1 duration-300 ${
                t.featured ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'bg-slate-50 text-slate-700 border border-slate-100'
              }`}
            >
              <div className="shrink-0">
                 <img 
                   src={t.image} 
                   alt={t.author} 
                   className={`w-20 h-20 rounded-full object-cover border-4 ${t.featured ? 'border-brand-dark' : 'border-white'}`} 
                 />
              </div>
              <div className="flex-1">
                 <Quote size={24} className={`mb-3 ${t.featured ? 'text-brand-100' : 'text-brand'}`} />
                 <p className={`text-sm md:text-base leading-relaxed mb-4 ${t.featured ? 'font-medium' : 'font-normal'}`}>"{t.text}"</p>
                 <div>
                    <h4 className="font-bold text-sm">{t.author}</h4>
                    <span className={`text-xs ${t.featured ? 'text-brand-100' : 'text-slate-500'}`}>{t.role}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;