
import React from 'react';
import { motion } from 'framer-motion';
import { Server, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';
import { PremiumButton } from './ui/PremiumButton';
import { staggerContainer, fadeInUp } from '../lib/animations';

const specs = [
  {
    icon: Cpu,
    title: "Local Inference",
    desc: "We utilize optimized open-source models (Qwen 2.5 / Llama 3) running on isolated compute instances. Your proprietary pricing data is never used to train public models."
  },
  {
    icon: ShieldCheck,
    title: "Sandboxed Execution",
    desc: "All document processing occurs within secure, ephemeral E2B sandboxes. Malicious files or scripts are contained and neutralized immediately."
  },
  {
    icon: Server,
    title: "Hardware Acceleration",
    desc: "Our inference pipeline is optimized with NVIDIA TensorRT to process high-resolution engineering scans with minimal latency."
  }
];

export const DeveloperSection = () => {
  return (
    <section className="py-40 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <div className="text-[#2979FF] font-mono text-[10px] tracking-[0.5em] uppercase">Enterprise Grade</div>
          <h2 className="font-display text-[3.5rem] md:text-[6rem] tracking-tight leading-none text-white font-bold">
            Technical <span className="italic font-normal text-white/40">Specs.</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            Built for security-conscious engineering firms. <br className="hidden md:block" />
            No data training. No leaks.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
      >
        {specs.map((spec, i) => (
          <motion.div 
            key={i}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="bg-[#050505] border border-white/10 p-10 rounded-2xl group hover:border-[#2979FF]/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-8 text-white/40 group-hover:text-[#2979FF] group-hover:bg-[#2979FF]/10 transition-all">
              <spec.icon className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-display font-bold text-white mb-4 uppercase">{spec.title}</h4>
            <p className="text-white/40 leading-relaxed font-light">
              {spec.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="flex justify-center">
         <PremiumButton variant="primary" size="lg">
           Read Security Whitepaper <ArrowRight className="w-4 h-4 ml-2" />
         </PremiumButton>
      </div>
    </section>
  );
};
