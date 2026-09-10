import { motion } from "motion/react";
import { Sparkles, Users, Search, ArrowRight, ShieldCheck, Zap, Compass, CheckCircle2 } from "lucide-react";

interface PartnerSectionProps {
  onBookClick?: () => void;
}

export default function PartnerSection({ onBookClick }: PartnerSectionProps) {
  const pillars = [
    {
      num: "01",
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "In-Depth Meeting Discovery",
      subtitle: "We Understand Your Business First",
      description: "We don't make assumptions from afar. We sit in direct, focused meetings with your founders and leadership team to deeply understand how your business actually runs, your team dynamics, and your commercial ambitions."
    },
    {
      num: "02",
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Bottleneck & Gap Diagnosis",
      subtitle: "Uncovering Hidden Drag & Leaks",
      description: "We identify the exact operational bottlenecks, data silos, broken lead flows, and manual tasks throttling your revenue. We uncover what is holding your company back from its next order of magnitude."
    },
    {
      num: "03",
      icon: <Compass className="w-6 h-6 text-primary" />,
      title: "Output-Driven Growth Strategy",
      subtitle: "Custom Architecture For Scale",
      description: "We formulate high-yield, customized strategies designed around tangible business outputs: increased margins, accelerated sales cycles, eliminated manual waste, and new future market opportunities."
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: "Embedded Partner Agency",
      subtitle: "We Build, Solve, & Stay Beside You",
      description: "We don't hand off a slide deck and disappear. We step in as your dedicated long-term business partner agency: building the intelligent automations, deploying the pipelines, and helping you capture future opportunities."
    }
  ];

  return (
    <section id="partnership" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden bg-slate-100/60 dark:bg-black/50 border-y border-slate-200/80 dark:border-white/[0.08]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-primary/10 blur-[140px] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>LONG-TERM EMBEDDED MODEL // ZERO FLUFF</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-slate-900 dark:text-white uppercase">
            From First Strategic Discovery <br />
            <span className="accent-gradient bg-clip-text text-transparent">To Full Business Transformation Partner.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Most agencies disappear once an invoice is paid. Most consultants sell you theoretical advice they never have to execute. <span className="text-slate-900 dark:text-white font-semibold">9Nest is built differently</span>: we take the place of your dedicated transformation partner—taking complete operational accountability to solve every bottleneck and engineer your continuous future growth.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-5 sm:p-6 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/[0.08] hover:border-primary/40 bg-white/90 dark:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all">
                    {p.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-primary transition-colors">
                    {p.num}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-primary block mb-1.5 font-semibold">
                  {p.subtitle}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/[0.06] flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                <span>Verified Execution</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Partnership Charter Box */}
        <div className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-slate-50 dark:via-white/[0.02] to-accent/10 border border-slate-200 dark:border-white/15 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl text-center lg:text-left">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold block">
              READY FOR OUTPUT-DRIVEN GROWTH?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Let's Meet & Diagnose Your Business Bottlenecks
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Book a direct strategy session with Daksh. We'll examine your operations, map the bottlenecks holding you back, and outline the exact roadmap to solve them.
            </p>
          </div>

          {onBookClick && (
            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 sm:px-7 rounded-full shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex-shrink-0 dark:from-primary dark:via-indigo-500 dark:to-primary dark:shadow-primary/25 dark:border-white/15"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
