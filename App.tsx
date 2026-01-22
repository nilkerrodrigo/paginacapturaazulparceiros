import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison'; // Repurposed as Challenges
import Features from './components/Features'; // Repurposed as Solutions
import Pricing from './components/Pricing'; // Repurposed as Contact Form
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;