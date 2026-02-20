
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Features from './components/Features';
// import Assistant from './components/Assistant';
// import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
// import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Features />
        {/* <Assistant /> */}
        {/* <Testimonials /> */}
        {/* <FAQ /> */}
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
