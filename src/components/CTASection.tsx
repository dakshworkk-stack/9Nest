import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTASection({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[260px] bg-primary/20 blur-[150px] pointer-events-none -z-10" />
      
      <div className="max-w-[1320px] mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl p-1 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 shadow-2xl shadow-primary/20">
          <div className="glass rounded-[1.35rem] sm:rounded-[1.4rem] p-6 sm:p-10 md:p-12 lg:p-14 relative overflow-hidden">
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] sm:text-[11px] font-mono uppercase tracking-wider mb-4 sm:mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Acceleration Guarantee</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] mb-4 sm:mb-5 text-slate-900 dark:text-white">
                  Don't let fragmented data <br />
                  <span className="accent-gradient bg-clip-text text-transparent">cap your enterprise valuation.</span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                  We transform institutional data chaos into executive leverage — designing self-healing intelligence loops that permanently bridge your data-to-decision gap.
                </p>
                
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <button 
                    onClick={onBookClick}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white dark:from-white dark:via-slate-100 dark:to-white dark:text-black dark:hover:bg-slate-200 transition-all px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full shadow-md shadow-indigo-500/20 dark:shadow-white/20 hover:shadow-lg hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 dark:border-transparent hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>Schedule Strategic Architecture Call</span>
                    <ArrowUpRight className="w-4 h-4 text-white dark:text-black" />
                  </button>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span>Direct founder-led architecture session</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 hidden lg:block">
                <div className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-white/10 space-y-4 shadow-sm">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">AUDIT_PROTOCOL_PIPELINE</div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
                      <span>Legacy CRM Cleansing</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">READY</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[100%] h-full bg-emerald-500 dark:bg-emerald-400 rounded-full" />
                    </div>

                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
                      <span>Unstructured Document Index</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">1,000+ PDFs</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-cyan-500 dark:bg-cyan-400 rounded-full" />
                    </div>

                    <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300">
                      <span>Autonomous Decision Engine</span>
                      <span className="text-primary font-mono font-semibold">LIVE</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[94%] h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-slate-200 dark:border-white/[0.08] text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                    <span>9NEST DEPLOYMENT LATENCY:</span>
                    <span className="text-slate-900 dark:text-white font-bold">&lt; 14 DAYS</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
