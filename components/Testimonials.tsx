
import React from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle2 } from 'lucide-react';

const formats = [
  "Bordereau des Prix Unitaires (BPU)",
  "Détail Quantitatif Estimatif (DQE)",
  "Cahier des Prescriptions Spéciales (CPS)",
  "Scanned Legacy Archives",
  "Blueprints & Schematics (Beta)",
  "Complex Nested Tables"
];

export const Testimonials = () => {
  return (
    <section className="py-32 px-6 border-y border-white/5 bg-[#030303]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-2xl font-display font-semibold mb-4 text-white uppercase tracking-widest">Compatible Documentation</h2>
           <div className="h-0.5 w-20 bg-[#2979FF] mx-auto opacity-50" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formats.map((format, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-center gap-4 p-6 border border-white/5 rounded-2xl bg-[#080808] hover:border-white/10 transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-[#2979FF]/10 flex items-center justify-center flex-shrink-0">
                 <Check className="w-3 h-3 text-[#2979FF]" />
              </div>
              <span className="text-white/60 font-mono text-sm group-hover:text-white transition-colors">{format}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
