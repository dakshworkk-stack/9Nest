import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, ArrowUpRight, ShieldCheck } from "lucide-react";

const cases = [
  {
    company: "Global Logistics Operator",
    sector: "CROSS-BORDER FREIGHT & SUPPLY CHAIN",
    result: "70% Effort Cut",
    metricBadge: "35+ HRS/WK SAVED",
    challenge: "40+ hours per week squandered manually transcribing and reconciling fragmented Bill-of-Lading PDFs and spreadsheets.",
    solution: "9Nest built a self-healing ingestion pipeline parsing 1,000+ unstructured carrier docs into automated SQL telemetry.",
    outcome: "70% reduction in back-office operational overhead, pivoting senior personnel straight into high-margin broker acquisition."
  },
  {
    company: "Series-A B2B SaaS",
    sector: "REVENUE ACCELERATION & ICP OUTREACH",
    result: "37% Reply Rate",
    metricBadge: "4.8X REVENUE PIPELINE",
    challenge: "Generic cold outbound hitting spam traps with under 1.2% open rates, causing domain decay and burnt addressable TAM.",
    solution: "Deployed autonomous enrichment loops scanning hiring, tech stack, and executive funding triggers for dynamic personalization.",
    outcome: "Sustained 37% executive reply rate and $1.4M in qualified pipeline generated within 90 days of system deployment."
  },
  {
    company: "Enterprise CRM & Advisory",
    sector: "DATA HYGIENE & CONTROL TOWER",
    result: "100k+ Records",
    metricBadge: "100% DATA FIDELITY",
    challenge: "Over 100,000 stale, duplicate CRM records paralyzing sales development and blinding executive revenue forecasting.",
    solution: "Algorithmic deduplication, automated firmographic enrichment, and real-time Power BI & Zoho Control Tower integration.",
    outcome: "Unified single source of truth across 3 enterprise divisions, reducing quarterly reporting cycles from 18 hours to 25 minutes."
  }
];

export default function CaseStudies() {
  return (
    <section id="results" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 sm:mb-12 gap-6 sm:gap-8">
          <div>
            <div className="badge-outline border-primary/30 text-primary bg-primary/10 mb-3 sm:mb-4 text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Deployment Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
              Deterministic <span className="accent-gradient bg-clip-text text-transparent">Outcomes.</span>
            </h2>
          </div>
          
          <div className="md:max-w-md text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed border-l-2 border-primary/25 pl-4 sm:pl-6">
            We don't deliver speculative PowerPoint decks. We build functional intelligence engines that convert institutional data into defensible enterprise value.
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass-card p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-white/[0.08] hover:border-primary/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-sm bg-white dark:bg-white/[0.02]"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-primary/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />
              
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400 font-medium">
                    {c.sector}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 px-2 py-0.5 rounded-full font-semibold">
                    {c.metricBadge}
                  </span>
                </div>

                <div className="mb-4 sm:mb-5">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors tracking-tight">
                    {c.result}
                  </div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
                    {c.company}
                  </h3>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-white/[0.07] text-xs">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-rose-600 dark:text-rose-400/90 block mb-1 font-bold">
                      CHALLENGE
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">
                      {c.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-1 font-bold">
                      9NEST ARCHITECTURE
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                      {c.solution}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1 font-bold">
                      ENTERPRISE OUTCOME
                    </span>
                    <p className="text-slate-900 dark:text-slate-200 font-medium leading-relaxed text-xs">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>VERIFIED_AUDIT_PASS</span>
                </span>
                <span>PRODUCTION_LIVE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
