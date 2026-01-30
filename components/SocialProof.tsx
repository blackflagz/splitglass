
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  'Acme', 'TechFlow', 'DataSync', 'CloudBase', 'MetricHub', 'Quantix', 'Streamline'
];

export const SocialProof = () => {
  return (
    <section className="relative mt-20 flex flex-col items-center">
      {/* The Luxury Line Effect */}
      <div className="w-full max-w-7xl px-6 relative">
        <div className="w-full border-t border-[#222222] relative flex flex-col items-center pt-20 pb-16">
          {/* Subtle Shimmer Line */}
          <div 
            aria-hidden="true" 
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(0, 0, 0, 0) 100%)'
            }} 
            className="left-1/2 top-0 w-[300px] pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
          ></div>
          
          {/* Soft Radial Glow */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 -top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px]" 
            style={{
              background: 'conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%), radial-gradient(rgba(255,255,255,0.05) 0%, transparent 70%)'
            }}
          ></div>

          <div className="text-center mb-12 relative z-10">
            <p className="text-base md:text-lg text-[#6C6C6C] font-normal max-w-lg mx-auto leading-relaxed">
              Companies of all sizes trust SPLITGLASS to power their most complex data decisions.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <div className="relative flex overflow-hidden">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-24 items-center whitespace-nowrap min-w-max"
              >
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                  <span
                    key={idx}
                    className="text-2xl md:text-3xl font-display font-bold text-[#1B1B1B] hover:text-[#464A4D] transition-colors cursor-default select-none tracking-tighter"
                  >
                    {logo}
                  </span>
                ))}
              </motion.div>
              
              {/* Fade edges for the carousel */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
