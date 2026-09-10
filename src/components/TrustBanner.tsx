import { motion } from "motion/react";
import { ShieldCheck, Zap } from "lucide-react";

export default function TrustBanner() {
  const items = [
    "100% VERIFIED INTELLIGENCE",
    "ENTERPRISE-GRADE PROTOCOL",
    "SELF-HEALING PIPELINES",
    "ZERO-LATENCY EXECUTIVE VISIBILITY",
    "DEFENSIBLE DATA SOVEREIGNTY",
    "SOC2 COMPLIANT ENCLAVES",
    "DETERMINISTIC TAM ENRICHMENT"
  ];

  return (
    <section className="py-5 bg-slate-50/70 dark:bg-black/40 border-y border-slate-200/80 dark:border-white/[0.08] overflow-hidden whitespace-nowrap relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 dark:from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 dark:from-[#030712] to-transparent z-10 pointer-events-none" />
      
      <motion.div 
        animate={{ x: [0, -1200] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center text-[10px] font-mono tracking-[0.3em] uppercase text-slate-500 dark:text-slate-400 font-medium"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
