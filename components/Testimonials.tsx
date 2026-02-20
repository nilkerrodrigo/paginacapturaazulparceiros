
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "A Azul 360º mudou o patamar da minha consultoria. Antes eu sofria para aprovar casos complexos, hoje tenho uma mesa técnica que joga junto comigo e as aprovações dispararam.",
      author: "Ricardo Mendes",
      role: "Correspondente Bancário - SP",
      image: "https://i.pravatar.cc/150?u=ricardo",
      featured: true,
    },
    {
      text: "O diagnóstico de IA é simplesmente surreal. Consigo dar uma resposta profissional para o meu cliente em minutos, com base em dados reais. É tecnologia de banco grande na mão do parceiro.",
      author: "Juliana Santos",
      role: "Consultora Financeira - RJ",
      image: "https://i.pravatar.cc/150?u=juliana",
      featured: false,
    },
    {
      text: "O suporte é o grande diferencial. Sempre que tenho dúvida em algum produto ou processo, a equipe da Azul me atende com uma agilidade que nunca vi em outra plataforma.",
      author: "Marcos Oliveira",
      role: "Escritório de Crédito - BH",
      image: "https://i.pravatar.cc/150?u=marcos",
      featured: true,
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand font-bold text-sm tracking-[0.2em] uppercase bg-brand-50 px-4 py-1.5 rounded-full">Sucesso Compartilhado</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
            Quem usa, <span className="text-brand">aprova</span> e cresce.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">Junte-se a centenas de profissionais que transformaram suas operações com a Azul 360º.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 ${
                t.featured ? 'bg-brand text-white shadow-2xl shadow-brand/30' : 'bg-slate-50 text-slate-700 border border-slate-100'
              }`}
            >
              <Quote size={40} className={`mb-6 opacity-20 ${t.featured ? 'text-white' : 'text-brand'}`} />
              
              <div className="flex text-yellow-400 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className={`text-lg leading-relaxed mb-8 flex-1 italic ${t.featured ? 'font-medium' : 'font-normal'}`}>
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 border-t pt-8 border-white/10">
                 <img 
                   src={t.image} 
                   alt={t.author} 
                   className={`w-14 h-14 rounded-2xl object-cover border-2 ${t.featured ? 'border-brand-light' : 'border-white'}`} 
                 />
                 <div>
                    <h4 className="font-bold text-base">{t.author}</h4>
                    <span className={`text-xs uppercase tracking-wider font-bold ${t.featured ? 'text-blue-100' : 'text-slate-400'}`}>{t.role}</span>
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
