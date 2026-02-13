
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { UseCases } from '../components/UseCases';
import { Features } from '../components/Features';
import { WhatYouGet } from '../components/WhatYouGet';
import { WhoItsFor } from '../components/WhoItsFor';
import { HowItWorks } from '../components/HowItWorks';
import { Stats } from '../components/Stats';
import { Pricing } from '../components/Pricing';
import { TrustSection } from '../components/TrustSection';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { WaitlistCTA } from '../components/WaitlistCTA';
import { Footer } from '../components/Footer';
import { ThreeBackground } from '../components/ThreeBackground';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#050505] selection:bg-[#2979FF]/30 selection:text-white relative">
            <ThreeBackground />
            <Header />
            <main>
                <Hero />
                <UseCases />
                <Features />
                <WhatYouGet />
                <WhoItsFor />
                <HowItWorks />
                <Stats />
                <Pricing />
                <TrustSection />
                <FAQ />
                <Contact />
                <WaitlistCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
