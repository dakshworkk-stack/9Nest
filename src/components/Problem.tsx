import { motion } from "motion/react";
import { AlertOctagon, Clock, ShieldAlert, FileQuestion } from "lucide-react";

const problems = [
  {
    icon: <Clock className="w-5 h-5 text-rose-400" />,
    tag: "DRAG // 70% WASTED EFFORT",
    title: "Manual Reporting Paralysis",
    description: "Your top operators spend 35+ hours every week stitching fragmented spreadsheets instead of driving revenue and executing strategy."
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    tag: "TAM DECAY // 0% ENGAGEMENT",
    title: "Dirty Siloed Data",
    description: "Scattered CRM records and stale contact pools kill domain reputation, driving critical emails straight into spam."
  },
  {
    icon: <FileQuestion className="w-5 h-5 text-red-400" />,
    tag: "BLIND SPOT // UNSTRUCTURED DRIFT",
    title: "Strategic Guesswork",
    description: "Multimillion-dollar enterprise bets made on 'gut feeling' because legacy databases remain an inaccessible graveyard."
  }
];

export default function Problem() {
  return (
    <section id="problem" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Problem Diagnostic Callout */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 md:p-9 rounded-2xl md:rounded-3xl flex flex-col justify-between border-rose-500/25 dark:border-rose-500/20 hover:border-rose-500/40 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="badge-outline rounded-full border-rose-500/30 text-rose-600 dark:text-rose-400 bg-rose-500/10 mb-4 sm:mb-5">
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>The Strategic Dilemma</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 sm:mb-5 leading-[1.05] text-slate-900 dark:text-white">
                The Cost of <br />
                <span className="text-rose-600 dark:text-rose-500">Data Chaos.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 sm:mb-8">
                Every enterprise generates massive volumes of operational data, yet <span className="text-slate-900 dark:text-white font-semibold">over 84% never reaches executive strategy</span>. This invisible "Data-to-Decision Gap" compounds weekly, silently bleeding margin and growth velocity.
              </p>
            </div>

            <div className="pt-5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400 font-mono text-[11px] sm:text-xs uppercase tracking-wider font-medium">
                <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping" />
                <span>Critical Vulnerability Detected</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500">SYS_AUDIT_FAIL</span>
            </div>
          </div>

          {/* Individual Pain Points */}
          <div className="lg:col-span-7 grid gap-3.5">
            {problems.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-primary/40 transition-all flex flex-col justify-center shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900 dark:text-white">{p.title}</h3>
                  </div>
                  <span className="text-[9px] font-mono tracking-wider uppercase text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] px-2.5 py-0.5 rounded-full font-medium">
                    {p.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed sm:pl-10.5">{p.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
