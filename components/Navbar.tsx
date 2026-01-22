import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contato');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="http://azul360parceiros.com.br/wp-content/uploads/2025/12/cropped-logo-2-scaled-1.png" 
              alt="Azul 360º Parceiros" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-brand text-white hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
            >
              Seja um Parceiro
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4">
          <button 
            onClick={() => {
              scrollToForm();
              setIsMobileMenuOpen(false);
            }}
            className="w-full px-5 py-3 rounded-xl bg-brand text-white font-bold shadow-lg shadow-brand/30"
          >
            Seja um Parceiro
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;