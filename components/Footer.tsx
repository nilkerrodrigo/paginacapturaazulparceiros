import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
           
           <div className="flex items-center mb-2">
              <img 
                src="http://azul360parceiros.com.br/wp-content/uploads/2025/12/cropped-logo-2-scaled-1.png" 
                alt="Azul 360º Parceiros" 
                className="h-10 w-auto object-contain bg-white px-2 py-1 rounded-lg opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
           </div>

           <div className="text-slate-400 text-sm text-center font-medium">
              <p>Seus dados estão protegidos e serão utilizados apenas para contato comercial.</p>
              <p className="mt-2 opacity-60">© 2025 Azul 360º Parceiros. Todos os direitos reservados.</p>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;