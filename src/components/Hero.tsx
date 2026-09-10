import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Compass, ArrowRight, Zap, Target } from "lucide-react";

export default function Hero({ onBookClick }: { onBookClick: () => void }) {
  return (
    <section className="relative min-h-[calc(100vh-2rem)] lg:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-16 pb-6 sm:pb-8 lg:pb-6 overflow-hidden hero-canvas border-b border-slate-200/60 dark:border-white/[0.06]">
      {/* Precision Blueprint Grid with Smooth Radial Vignette Mask */}
      <div 
        className="absolute inset-0 blueprint-grid pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_25%,transparent_85%)] opacity-85" 
      />

      {/* Top Luminous Horizon Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/35 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-16 bg-primary/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Volumetric Dual-Tone Ambient Glow Fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-gradient-to-tr from-indigo-500/12 via-primary/10 to-transparent dark:from-indigo-500/22 dark:via-primary/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[10%] w-[420px] h-[320px] bg-gradient-to-bl from-cyan-500/8 via-cyan-400/5 to-transparent dark:from-cyan-500/15 dark:via-cyan-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Micro Technical Corner Coordinates (Subtle Enterprise Aesthetic) */}
      <div className="absolute top-6 left-6 font-mono text-[9px] text-slate-400/50 dark:text-slate-600/50 select-none hidden xl:flex items-center gap-1.5">
        <span className="text-primary/50">+</span>
        <span>SYS.CORE // 37.7749° N</span>
      </div>
      <div className="absolute top-6 right-6 font-mono text-[9px] text-slate-400/50 dark:text-slate-600/50 select-none hidden xl:flex items-center gap-1.5">
        <span>ENCLAVE: SECURE</span>
        <span className="text-primary/50">+</span>
      </div>

      <div className="max-w-[1320px] w-full grid lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-14 items-center relative z-10">
        
        {/* Left Column: Bold, Arrogant, Clean Vision & Positioning */}
        <motion.div 
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          {/* Tag / Badge */}
          <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/25 px-3 py-1 rounded-full mb-3 sm:mb-4">
            <ShieldCheck className="w-3 h-3 text-primary" />
            <span>100% TRUSTED // FULL DATA INTEGRITY & ENTERPRISE PARTNERSHIP</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] font-black uppercase tracking-tight leading-[1.06] text-slate-900 dark:text-white mb-3 sm:mb-4">
            We Don't Just Consult. <br />
            <span className="accent-gradient bg-clip-text text-transparent">
              We Become Your Growth Partner.
            </span>
          </h1>
          
          {/* Clear, Understandable, Uncompromising Body Text */}
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5 sm:mb-6 max-w-xl">
            Traditional consultants drop off static slide decks with zero execution. Typical agencies take one-off tasks without understanding the business. <span className="text-slate-900 dark:text-white font-semibold">9Nest is your embedded strategic partner</span>: We deeply understand your business, identify the bottlenecks, engineer the new strategy, and take the place by building and operating the solutions that power your future.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
            <button 
              onClick={onBookClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white font-bold text-xs sm:text-xs tracking-wider uppercase py-2.5 sm:py-3 px-5 sm:px-6 rounded-full shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer dark:from-primary dark:via-indigo-500 dark:to-primary dark:shadow-primary/25 dark:border-white/15"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            
            <a 
              href="#services"
              className="inline-flex items-center gap-1.5 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-full border border-slate-200 hover:border-primary/40 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-800 hover:text-slate-950 transition-all shadow-xs dark:border-white/15 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] dark:text-slate-200 dark:hover:text-white"
            >
              <span>Explore All 9 Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary" />
            </a>
          </div>

          {/* Arrogant Brand Posture Indicators */}
          <div className="pt-3.5 border-t border-slate-200 dark:border-white/[0.08] flex flex-wrap items-center gap-2.5 sm:gap-4 text-slate-500 dark:text-slate-400 text-[10px] sm:text-[11px] font-mono">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-primary font-bold">CORE DISCIPLINE:</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">Environmental Analysis</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20 hidden sm:inline-block" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Operational Diagnostics</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20 hidden sm:inline-block" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Enterprise Data Integrity</span>
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-white/20 hidden sm:inline-block" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Future-Proof Architecture</span>
          </div>
        </motion.div>
        
        {/* Right Column: Clean, Authoritative Partner Cockpit */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl p-0.5 bg-gradient-to-b from-primary/25 via-slate-200/60 to-transparent dark:from-primary/30 dark:via-white/10 dark:to-transparent shadow-lg dark:shadow-xl shadow-slate-200/50 dark:shadow-primary/10">
            <div className="glass rounded-[0.95rem] sm:rounded-[1rem] p-3.5 sm:p-4 lg:p-4.5 space-y-2 sm:space-y-2.5 relative overflow-hidden backdrop-blur-2xl border border-slate-200/80 dark:border-white/10">
              
              {/* Cockpit Header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/[0.08] pb-2 sm:pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-md shadow-emerald-500/50" />
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white tracking-wider font-mono uppercase">
                      STRATEGIC PARTNER PROTOCOL
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-slate-500 dark:text-slate-400">STATUS: ACTIVE EXECUTION</div>
                  </div>
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono text-primary bg-primary/10 border border-primary/25 px-2 py-0.5 rounded-full font-bold">
                  OUTPUT-DRIVEN
                </span>
              </div>

              {/* 4-Step Strategic Engine Cards */}
              <div className="space-y-2">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-primary/40 transition-all flex items-start gap-2.5 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Compass className="w-3 h-3" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">01. In-Depth Strategic Discovery</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-primary font-bold px-1.5 py-0.2 rounded bg-primary/10 flex-shrink-0">1-ON-1</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                      We work closely with leadership to deeply understand your business, revenue mechanics, and operational workflow.
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-primary/40 transition-all flex items-start gap-2.5 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Target className="w-3 h-3" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">02. Bottleneck & Gap Diagnosis</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-amber-500 dark:text-amber-400 font-bold px-1.5 py-0.2 rounded bg-amber-500/10 flex-shrink-0">DIAGNOSTIC</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                      We uncover the exact operational bottlenecks, leaking pipelines, and manual drag choking your output.
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] hover:border-primary/40 transition-all flex items-start gap-2.5 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <Zap className="w-3 h-3" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">03. Output-Driven Growth Strategy</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 flex-shrink-0">ROADMAP</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                      We engineer high-ROI strategies custom-tailored to solve your problems and capture future opportunities.
                    </p>
                  </div>
                </div>

                <div className="p-2 sm:p-2.5 rounded-xl bg-primary/10 dark:bg-primary/10 border border-primary/30 flex items-start gap-2.5 shadow-xs">
                  <div className="w-6 h-6 rounded-md bg-primary/20 border border-primary/40 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate">04. Dedicated Transformation Partner</span>
                      <span className="text-[8px] sm:text-[9px] font-mono text-cyan-600 dark:text-cyan-300 font-bold px-1.5 py-0.2 rounded bg-cyan-500/10 flex-shrink-0">EMBEDDED</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300 mt-0.5 leading-snug">
                      We take the place of your transformation team to design high-growth, future-proof strategies and scalable systems for the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Result Anchor */}
              <div className="pt-2 sm:pt-2.5 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-700 dark:text-slate-300 font-medium">Complete Problem Ownership</span>
                </div>
                <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-primary font-bold">
                  FUTURE-PROOF SCALE
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
