import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cnpj: '',
    atuacao: '',
    experiencia: '',
    faturamento: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "5579991483823";
    
    const message = `*Nova Solicitação do Site Azul 360º*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Email:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Tem CNPJ?:* ${formData.cnpj === 'sim' ? 'Sim' : 'Não'}\n` +
      `*Área de Atuação:* ${formData.atuacao}\n` +
      `*Já trabalha com crédito?:* ${formData.experiencia === 'sim' ? 'Sim' : 'Não'}\n` +
      `*Faturamento Mensal:* ${formData.faturamento}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white" id="contato">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-800 to-transparent opacity-50 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand rounded-full blur-[80px] opacity-40"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600 rounded-full blur-[80px] opacity-30"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
             
             {/* Text Side */}
             <div className="lg:col-span-2 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para transformar sua operação?</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Preencha o formulário e nossa equipe entrará em contato para liberar seu acesso à Azul 360º Parceiros.
                </p>
                <ul className="space-y-4">
                   {[
                      "Acesso imediato à plataforma",
                      "Treinamento inicial gratuito",
                      "Suporte via WhatsApp",
                      "Sem mensalidade fixa"
                   ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-200">
                         <CheckCircle2 size={18} className="text-brand-light" />
                         {item}
                      </li>
                   ))}
                </ul>
             </div>

             {/* Form Side */}
             <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
                  
                  {/* Nome e Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Nome completo</label>
                    <input 
                      required
                      type="text" 
                      name="nome"
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">E-mail</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Telefone e CNPJ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Telefone</label>
                      <input 
                        required
                        type="tel" 
                        name="telefone"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                        placeholder="(00) 00000-0000"
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Tem CNPJ?</label>
                      <div className="flex gap-4 mt-2 h-[46px] items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="cnpj" value="sim" className="accent-brand w-4 h-4" onChange={handleChange} required />
                          <span className="text-sm text-slate-600 font-medium">Sim</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="cnpj" value="nao" className="accent-brand w-4 h-4" onChange={handleChange} required />
                          <span className="text-sm text-slate-600 font-medium">Não</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Atuação */}
                  <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Atuação</label>
                      <select 
                        name="atuacao" 
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                        onChange={handleChange}
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Selecione sua atuação...</option>
                        <option value="Correspondente Bancário">Correspondente Bancário</option>
                        <option value="Consultor de Crédito">Consultor de Crédito</option>
                        <option value="Contador / Escritório Contábil">Contador / Escritório Contábil</option>
                        <option value="Corretor de Imóveis">Corretor de Imóveis</option>
                        <option value="Corretor de Seguros">Corretor de Seguros</option>
                        <option value="Limpa Nome / Rating">Limpa Nome / Rating</option>
                        <option value="Outros Serviços Financeiros">Outros Serviços Financeiros</option>
                      </select>
                  </div>

                  {/* Experiencia e Faturamento */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Já trabalha com crédito?</label>
                      <div className="flex gap-4 mt-2 h-[46px] items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="experiencia" value="sim" className="accent-brand w-4 h-4" onChange={handleChange} required />
                          <span className="text-sm text-slate-600 font-medium">Sim</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="experiencia" value="nao" className="accent-brand w-4 h-4" onChange={handleChange} required />
                          <span className="text-sm text-slate-600 font-medium">Não</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Faturamento mensal?</label>
                      <input 
                        required
                        type="text" 
                        name="faturamento"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all"
                        placeholder="R$ 0,00"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button type="submit" className="w-full py-4 bg-brand text-white font-bold rounded-xl text-lg shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all mt-2 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                    Solicitar Contato
                    <Send size={20} />
                  </button>
                  
                  <p className="text-center text-[10px] text-slate-400 mt-4">
                    Seus dados estão protegidos e serão utilizados apenas para contato comercial.
                  </p>
                </form>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;