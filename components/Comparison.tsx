import React from 'react';
import { X, FileSpreadsheet } from 'lucide-react';

const Comparison: React.FC = () => {
  const painPoints = [
    "Você gasta horas organizando processos manuais",
    "Se perde em papéis e anotações soltas de clientes",
    "Sente insegurança ao analisar o risco de crédito",
    "Trabalha com acesso limitado a poucas instituições",
    "Vive no estresse de controlar pendências e documentos"
  ];

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left: Text Content (Order 2 on Mobile, 1 on Desktop) */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 [text-wrap:balance]">
              Sem a <span className="text-red-500">Azul 360º Parceiros</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              {painPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                    <X size={14} strokeWidth={3} />
                  </div>
                  <p className="text-slate-600 leading-relaxed [text-wrap:balance]">{point}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-red-50 rounded-xl border border-red-100 inline-block w-full md:w-auto">
              <p className="text-sm text-red-800 font-medium [text-wrap:balance]">
                <span className="font-bold">Resultado:</span> menos aprovações, mais estresse e perda de negócios.
              </p>
            </div>
          </div>

          {/* Right: Visual (Spreadsheet simulation) (Order 1 on Mobile, 2 on Desktop) */}
          <div className="relative order-1 lg:order-2">
             <div className="absolute -inset-4 bg-slate-100 rounded-3xl transform rotate-2"></div>
             <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Header of fake app */}
                <div className="bg-slate-50 border-b border-slate-200 p-3 flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Fake Spreadsheet */}
                <div className="p-4 overflow-x-auto">
                   <div className="flex items-center gap-2 mb-4 text-slate-400">
                      <FileSpreadsheet size={20} />
                      <span className="text-sm font-mono">controle_financeiro_vfinal_2.xlsx</span>
                   </div>
                   <table className="w-full text-xs text-left text-slate-500">
                      <thead className="text-slate-400 uppercase bg-slate-50">
                         <tr>
                            <th className="px-2 py-2">Cliente</th>
                            <th className="px-2 py-2">Status</th>
                            <th className="px-2 py-2">Valor</th>
                            <th className="px-2 py-2">Doc</th>
                         </tr>
                      </thead>
                      <tbody>
                         {[1,2,3,4,5,6].map((i) => (
                            <tr key={i} className="border-b border-slate-100">
                               <td className="px-2 py-3 font-medium text-slate-700">Cliente 0{i}</td>
                               <td className="px-2 py-3">
                                  <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">Pendente</span>
                               </td>
                               <td className="px-2 py-3">R$ --,--</td>
                               <td className="px-2 py-3 text-red-400">Faltando</td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                   <div className="mt-4 h-2 bg-slate-100 rounded w-3/4 animate-pulse"></div>
                   <div className="mt-2 h-2 bg-slate-100 rounded w-1/2 animate-pulse"></div>
                </div>
                
                {/* Overlay Alert */}
                <div className="absolute bottom-4 right-4 bg-white shadow-lg border border-red-100 p-3 rounded-lg flex items-center gap-3 animate-bounce max-w-[80%] md:max-w-none">
                   <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">
                      <X size={16} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-800">Documento Expirado</p>
                      <p className="text-[10px] text-slate-500">Atualize para continuar</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;