import { motion } from "motion/react";
import { Zap, GitBranch, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const stages = [
  { 
    id: "01", 
    title: "Silo Discovery & Ingestion Audit", 
    tag: "AUDIT LAYER",
    tech: "Postgres / REST / Snowflake",
    content: "Comprehensive diagnostic audit across CRMs, legacy SQL, unstructured PDFs, and API endpoints to surface dormant revenue leaks and dark data reserves." 
  },
  { 
    id: "02", 
    title: "Pipeline & Orchestration Architecture", 
    tag: "INFRASTRUCTURE",
    tech: "n8n / Python / Docker",
    content: "Engineering fault-tolerant data pipelines with auto-retry mechanisms, ensuring unified data flow with zero manual ingestion lag." 
  },
  { 
    id: "03", 
    title: "Unstructured Document Extraction", 
    tag: "PARSING ENGINE",
    tech: "OCR / Vision AI / Vector Embeddings",
    content: "Transforming 1,000+ static PDFs, vendor contracts, and pitch decks into dynamic, semantically queryable corporate memory." 
  },
  { 
    id: "04", 
    title: "Integrity Cleansing & Deduplication", 
    tag: "DATA HYGIENE",
    tech: "Deterministic Fuzzy Matching",
    content: "Filtering duplicates, scrubbing decay, and establishing an unambiguous single source of truth across all revenue touchpoints." 
  },
  { 
    id: "05", 
    title: "Intent Enrichment & Persona Tagging", 
    tag: "MARKET INTEL",
    tech: "Behavioral Signal Apis / TAM Scopes",
    content: "Appending verified firmographics, executive funding markers, and real-time hiring triggers to cold profiles for surgical ICP targeting." 
  },
  { 
    id: "06", 
    title: "Humanization Synthesis & Outreach", 
    tag: "CONVERSION",
    tech: "Custom LLM Fine-tunes / DKIM Guard",
    content: "Synthesizing ultra-personalized, non-templated outreach copy that bypasses spam filters and generates authentic executive conversations." 
  },
  { 
    id: "07", 
    title: "Executive Control Tower Launch", 
    tag: "VISIBILITY",
    tech: "Power BI / Zoho Analytics / Real-time Webhooks",
    content: "Deploying high-density visual telemetry cockpits so founders and executives monitor pipeline velocity, TAM penetration, and conversion in real-time." 
  },
  { 
    id: "08", 
    title: "Algorithmic ROI Attribution", 
    tag: "FINANCIAL PROOF",
    tech: "Multi-Touch Revenue Modeling",
    content: "Tying every data point and outreach campaign directly to closed ARR, ensuring total clarity on which channels produce the highest yield." 
  },
  { 
    id: "09", 
    title: "Autonomous Growth Loop Scaling", 
    tag: "SCALE LOOP",
    tech: "Self-Healing Workflows",
    content: "Continuously tuning automation thresholds and prompt weights to compound growth and secure permanent operational advantage." 
  }
];

export default function Framework() {
  return (
    <section id="framework" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden bg-slate-50/50 dark:bg-black/30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/15 to-transparent" />
      
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div>
                <div className="badge-outline border-primary/30 text-primary bg-primary/10 mb-4 text-[10px]">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>Proprietary 9-Stage Protocol</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 leading-[1.05] text-slate-900 dark:text-white">
                  The Data-to-Decision <br /> 
                  <span className="accent-gradient bg-clip-text text-transparent">Accelerator.</span>
                </h2>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our 9-stage engineering framework transitions corporate organizations from fragmented chaos to deterministic market intelligence at enterprise scale.
                </p>
              </div>
              
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 shadow-sm bg-white dark:bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-tight text-slate-900 dark:text-white">Efficiency Guarantee</div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">90% DECISION LATENCY REDUCTION</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  By replacing manual spreadsheet wrangling with self-healing Python and n8n orchestration pipelines, your strategic team acts in hours, not weeks.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">DEPLOYMENT TIMELINE</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">End-to-End in 14-21 Days</div>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              </div>

            </div>
          </div>
          
          <div className="lg:col-span-7">
            <Accordion defaultValue={["01"]} className="w-full space-y-2.5">
              {stages.map((s) => (
                <AccordionItem 
                  key={s.id} 
                  value={s.id} 
                  className="glass-card rounded-2xl border border-slate-200 dark:border-white/[0.07] hover:border-primary/40 transition-all px-4 sm:px-6 overflow-hidden group shadow-sm bg-white dark:bg-white/[0.02]"
                >
                  <AccordionTrigger className="py-4 hover:no-underline text-left">
                    <div className="flex items-center justify-between w-full pr-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="font-mono text-primary font-bold text-xs sm:text-sm bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md">
                          {s.id}
                        </span>
                        <div>
                          <span className="text-sm sm:text-base font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors block">
                            {s.title}
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            {s.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-5 pl-10 sm:pl-12 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-200 dark:border-white/[0.05]">
                    <p className="mb-3">{s.content}</p>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                      <span className="text-primary font-semibold">CORE TECH:</span>
                      <span className="text-slate-900 dark:text-white bg-slate-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 font-medium">{s.tech}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
