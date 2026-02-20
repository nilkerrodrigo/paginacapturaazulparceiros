
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`mb-4 overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-brand shadow-lg' : 'bg-white border-slate-100'}`}>
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className={`text-lg font-bold ${isOpen ? 'text-brand' : 'text-slate-700'}`}>{question}</span>
        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-0">
           <div className="w-full h-px bg-slate-100 mb-4" />
           <p className="text-base text-slate-500 leading-relaxed pr-8 font-medium">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const questions = [
    {
      q: "Como faço para ser um parceiro Azul 360º?",
      a: "Basta preencher o formulário de solicitação nesta página. Nossa equipe fará uma análise rápida do seu perfil e entrará em contato via WhatsApp para liberar suas credenciais de acesso."
    },
    {
      q: "Preciso pagar alguma mensalidade para usar o sistema?",
      a: "Não trabalhamos com modelo de mensalidade fixa obrigatória para acesso básico à plataforma. Nosso foco é no ganho compartilhado através do volume de operações realizadas."
    },
    {
      q: "Quais produtos bancários estão disponíveis?",
      a: "Oferecemos um portfólio completo: Crédito Consignado (INSS, Siape, Forças Armadas), Crédito com Garantia de Imóvel (Home Equity), Garantia de Veículo, Capital de Giro para Empresas e Antecipação de FGTS."
    },
    {
      q: "Como recebo minhas comissões?",
      a: "Toda a gestão financeira é feita pelo sistema. Você acompanha o status das propostas em tempo real e as comissões são pagas diretamente na sua conta cadastrada conforme o fluxo de cada banco."
    },
    {
      q: "Tenho suporte para propostas complexas?",
      a: "Com certeza! Esse é o nosso forte. Nossa mesa de crédito especializada analisa casos críticos e ajuda você a estruturar a operação para aumentar as chances de aprovação bancária."
    },
    {
      q: "A plataforma funciona no celular?",
      a: "Sim. A Azul 360º é totalmente responsiva e foi otimizada para smartphones. Você pode cadastrar clientes e anexar documentos diretamente da câmera do seu celular onde quer que esteja."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-brand text-white shadow-xl shadow-brand/20 mb-6 transform rotate-12">
              <HelpCircle size={32} />
           </div>
           <h2 className="text-4xl font-black text-slate-900 mb-4">Dúvidas <span className="text-brand">Frequentes</span></h2>
           <p className="text-slate-500 font-medium">Tudo o que você precisa saber para começar a operar hoje.</p>
        </div>

        <div className="space-y-4">
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
        <div className="mt-20 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden border border-slate-800 group">
             {/* Background glow */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-brand rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000"></div>
             </div>

             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand/20 border border-brand/30 text-brand-light text-sm font-black mb-8">
                   <div className="w-2 h-2 bg-brand rounded-full animate-ping" />
                   Vagas para parceiros abertas
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">Chegou a hora de ser<br/><span className="text-brand">referência</span> no mercado.</h2>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg md:text-xl font-medium">
                   Não perca mais tempo com processos manuais. Transforme sua operação de crédito com a tecnologia que mais cresce no Brasil.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button 
                     onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                     className="px-10 py-5 bg-brand text-white font-black rounded-2xl hover:bg-brand-dark transition-all shadow-2xl shadow-brand/40 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                   >
                      Quero meu acesso agora
                      <MessageCircle size={20} />
                   </button>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
