import { motion } from "motion/react";
import { Compass, Users, CheckCircle2, Target, ArrowRight, Shield } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden bg-slate-50/50 dark:bg-black/50 border-y border-slate-200 dark:border-white/[0.08]">
      {/* Subtle brand watermarks */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 text-[24rem] font-black text-slate-900/[0.02] dark:text-white/[0.015] select-none pointer-events-none font-mono">
        09
      </div>
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Main Service: Strategic Consulting Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 sm:p-8 md:p-9 rounded-2xl md:rounded-3xl relative overflow-hidden flex flex-col justify-between border-primary/25 dark:border-primary/20 hover:border-primary/50 group shadow-sm"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 rounded-bl-full blur-xl group-hover:bg-primary/20 transition-all pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 text-primary font-mono text-[11px] uppercase tracking-[0.25em]">
                  <div className="w-6 h-px bg-primary/50" />
                  <span>Primary Engagement</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.02]">
                  MANDATE: OUTPUT-FOCUSED
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-5 text-slate-900 dark:text-white">
                Our Main Service: <br />
                <span className="accent-gradient bg-clip-text text-transparent">Strategic Growth Consulting.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 sm:mb-8">
                We sit down in strategic meetings with your executive and operating teams to <span className="text-slate-900 dark:text-white font-semibold">deeply understand your business from the inside out</span>. We identify operational bottlenecks, pinpoint hidden gaps, and architect actionable roadmaps focused squarely on commercial outputs and future growth opportunities.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 border border-primary/25 dark:border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Deep Discovery</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Understand your DNA</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 border border-primary/25 dark:border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Bottleneck Isolation</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Solve Root Roadblocks</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Partner Agency Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 sm:p-8 md:p-9 rounded-2xl md:rounded-3xl relative overflow-hidden flex flex-col justify-between border-cyan-500/25 dark:border-accent/20 hover:border-cyan-500/50 group shadow-sm"
          >
            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-bl-full blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="flex items-center gap-2.5 text-cyan-600 dark:text-accent font-mono text-[11px] uppercase tracking-[0.25em]">
                  <div className="w-6 h-px bg-cyan-500/50" />
                  <span>The Partnership</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.02]">
                  ROLE: EMBEDDED PARTNER
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.1] mb-4 sm:mb-5 text-slate-900 dark:text-white">
                The Positioning: <br />
                <span className="text-cyan-600 dark:text-cyan-400 italic">Your Growth Partner.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6 sm:mb-8">
                Traditional consultants drop off slide decks and disappear. <span className="text-slate-900 dark:text-white font-semibold">9Nest steps into your organization as your true growth partner</span> — taking full responsibility to engineer and deploy the intelligent systems that solve every bottleneck, and unlocking long-term scaling into the future.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-accent/15 border border-cyan-500/25 dark:border-accent/30 flex items-center justify-center text-cyan-600 dark:text-accent flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Complete Ownership</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">We solve all problems</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-accent/15 border border-cyan-500/25 dark:border-accent/30 flex items-center justify-center text-cyan-600 dark:text-accent flex-shrink-0">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Future Scalability</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Ongoing Stewardship</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
