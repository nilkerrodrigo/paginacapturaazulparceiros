import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-slate-100 last:border-0`}>
      <button 
        className="w-full py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-base font-medium ${isOpen ? 'text-brand' : 'text-slate-700'}`}>{question}</span>
        {isOpen ? <Minus size={20} className="text-brand" /> : <Plus size={20} className="text-slate-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-sm text-slate-500 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "O plano Essencial é realmente gratuito?",
      a: "Sim! O plano Essencial é 100% gratuito e sempre será. Você pode usar todas as funcionalidades básicas sem pagar nada, incluindo agenda inteligente, controle financeiro e suporte para até 5 pacientes."
    },
    {
      q: "Meus dados estão seguros?",
      a: "Absolutamente. Utilizamos criptografia de ponta a ponta e seguimos rigorosamente as normas da LGPD e do CFP para garantir a confidencialidade e segurança dos seus dados e dos seus pacientes."
    },
    {
      q: "Posso mudar de plano a qualquer momento?",
      a: "Sim, você tem total liberdade para fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de configurações."
    },
    {
      q: "Como funciona o suporte?",
      a: "Nos planos pagos, oferecemos suporte prioritário via WhatsApp. No plano gratuito, o suporte é realizado por e-mail com tempo de resposta de até 24h úteis."
    },
    {
      q: "Posso usar em vários dispositivos?",
      a: "Sim! O ProntuPsi é uma aplicação web responsiva, o que significa que você pode acessar de computadores, tablets e smartphones de qualquer lugar."
    },
    {
      q: "Existe alguma limitação no plano gratuito?",
      a: "O plano gratuito é limitado a 5 pacientes ativos. Para atender mais pacientes e desbloquear a assistente Lua, recomendamos os planos Profissional ou Premium."
    },
    {
      q: "Como faço para cancelar minha conta?",
      a: "Você pode cancelar sua assinatura ou excluir sua conta a qualquer momento diretamente nas configurações do sistema, sem burocracia."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand mb-4">
              <HelpCircle size={24} />
           </div>
           <h2 className="text-3xl font-bold text-slate-900">Perguntas <span className="text-brand">Frequentes</span></h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
            {questions.map((item, idx) => (
              <FAQItem 
                key={idx}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
        </div>
        
        {/* Footer CTA Box */}
        <div className="mt-16 bg-[#1e293b] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             {/* Background curves */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-brand rounded-full blur-[100px]"></div>
             </div>

             <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white text-brand text-xs font-bold mb-6">
                   Experimente grátis sem compromisso
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pare de perder tempo<br/>com planilhas e papelada.</h2>
                <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm">
                   Comece agora com o plano gratuito. Sem cartão de crédito, sem burocracia. 
                   Apenas você, seus pacientes e a organização que sua rotina merece.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <button className="px-8 py-3 bg-brand text-white font-bold rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20">
                      Testar ProntuPsi grátis
                   </button>
                   <button className="px-8 py-3 bg-transparent border border-slate-600 text-white font-bold rounded-xl hover:bg-white/5 transition-colors">
                      Ver planos
                   </button>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;