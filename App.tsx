
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UseCases } from './components/UseCases'; // Problem
import { Features } from './components/Features'; // Solution
import { HowItWorks } from './components/HowItWorks'; // New
import { Stats } from './components/Stats'; // New (Social Proof)
import { Pricing } from './components/Pricing'; // New
import { FAQ } from './components/FAQ'; // New
import { Contact } from './components/Contact'; // New
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';
import { LanguageProvider } from './lib/i18n';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050505] selection:bg-[#2979FF]/30 selection:text-white relative">
        <ThreeBackground />
        <Header />
        <main>
          <Hero />
          <UseCases />
          <Features />
          <HowItWorks />
          <Stats />
          <Pricing />
          <FAQ />
          <Contact />
          <WaitlistCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
