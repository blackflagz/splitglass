
import React from 'react';
import { motion } from 'framer-motion';

export const Marquee = ({ text, speed = 20 }: { text: string; speed?: number }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex py-4 border-y border-white/5 bg-white/[0.02]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center min-w-max"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="text-sm font-mono uppercase tracking-[0.4em] text-white/20 italic">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
