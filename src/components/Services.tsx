import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, 
  Compass, 
  LayoutDashboard, 
  Zap, 
  TrendingUp, 
  Database, 
  BookOpen, 
  Users, 
  ShieldCheck,
  Sparkles,
  X,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Service {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
  coreFocus: string;
  whatItDoes: string;
  howItsDifferent: string;
  framework: string[];
  caseStudy: string;
  outcome: string;
  accent: string;
  isMainFace?: boolean;
  isTransformationPartner?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Compass className="w-8 h-8" />,
    title: "Strategic Growth Consulting & Bottleneck Diagnosis",
    description: "Our first and main face of service: We meet directly with your leadership team to deeply understand your business, identify operational bottlenecks and revenue gaps, craft actionable growth strategies, and blueprint the exact systems needed for future scale.",
    coreFocus: "FIRST & MAIN FACE // EXECUTIVE ENTRY POINT",
    whatItDoes: "Conducts deep executive discovery meetings, diagnoses structural bottlenecks, identifies operational & revenue gaps, and engineers custom growth strategies geared towards measurable commercial outputs.",
    howItsDifferent: "This is our primary identity. Unlike conventional consultancies that drop off static slide decks with zero execution, we sit in meetings with you to understand your real mechanics, architect the strategy, and build the intelligent systems that solve every problem.",
    framework: ["Executive Discovery Sessions", "Bottleneck & Gap Audit", "Output-Driven Growth Strategy", "Execution Blueprint"],
    caseStudy: "An enterprise leadership team identified 3 critical operational bottlenecks during our discovery sessions; we engineered a targeted strategy and automated data pipeline that lifted profitability by 31.4% and cut decision cycle times by 80%.",
    outcome: "Clear strategic trajectory, eliminated bottlenecks, and an actionable roadmap for compound growth.",
    accent: "from-primary/40 via-indigo-600/25 to-transparent shadow-primary/25",
    isMainFace: true
  },
  {
    id: 2,
    icon: <Bot className="w-8 h-8" />,
    title: "Custom AI Ecosystem",
    description: "We build custom GPTs and AI ecosystems trained on your company's internal knowledge, operations, and workflows.",
    coreFocus: "Company-specific AI intelligence",
    whatItDoes: "Builds custom GPTs and AI assistants trained on company data, SOPs, teams, workflows, and internal systems",
    howItsDifferent: "This is the brain layer of the company. Unlike dashboards or pipelines, this creates an intelligence that can think, answer, assist, and automate decisions.",
    framework: ["Business Data", "AI Training", "Intelligent Knowledge System", "Faster Decisions"],
    caseStudy: "A SaaS company reduced internal response time by 68% using a custom GPT trained on sales, HR, and operations data.",
    outcome: "Businesses operate with centralized intelligence and scalable AI systems.",
    accent: "from-blue-500/20 to-transparent shadow-blue-500/10"
  },
  {
    id: 3,
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Intelligence Dashboards",
    description: "Transform scattered business data into real-time executive intelligence dashboards.",
    coreFocus: "Real-time visibility",
    whatItDoes: "Converts raw data into executive dashboards with KPIs, reporting, tracking, and monitoring",
    howItsDifferent: "This is the visual intelligence layer. Unlike AI ecosystems, dashboards show insights visually rather than through AI interaction.",
    framework: ["Data Collection", "Structuring", "Visualization", "Executive Intelligence"],
    caseStudy: "A B2B sales company reduced reporting time from 18 hours to 30 minutes weekly.",
    outcome: "Businesses make faster and more accurate decisions.",
    accent: "from-cyan-500/20 to-transparent shadow-cyan-500/10"
  },
  {
    id: 4,
    icon: <Zap className="w-8 h-8" />,
    title: "AI Automation Systems",
    description: "Automate repetitive workflows using AI-powered systems and no-code infrastructure.",
    coreFocus: "Workflow automation",
    whatItDoes: "Automates repetitive tasks using AI, APIs, Zapier, Google Sheets, CRMs, workflows, and internal systems",
    howItsDifferent: "This is the execution layer. It reduces manual work and operational costs through automation.",
    framework: ["Manual Process", "Workflow Design", "Automation", "Scalable Operations"],
    caseStudy: "An e-commerce company automated order workflows and reduced operational workload by 70%.",
    outcome: "Lower costs, faster execution, and operational efficiency.",
    accent: "from-orange-500/20 to-transparent shadow-orange-500/10"
  },
  {
    id: 5,
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Predictive Analytics",
    description: "Use historical data and AI models to forecast trends, opportunities, and business risks.",
    coreFocus: "Future forecasting",
    whatItDoes: "Uses AI and historical data to predict trends, customer behavior, revenue opportunities, risks, and outcomes",
    howItsDifferent: "This is the future intelligence layer. Instead of showing current performance, it forecasts future success.",
    framework: ["Historical Data", "AI Modeling", "Forecasting", "Strategic Actions"],
    caseStudy: "A retail business improved inventory planning and reduced stock waste by 26%.",
    outcome: "Businesses become proactive instead of reactive.",
    accent: "from-rose-500/20 to-transparent shadow-rose-500/10"
  },
  {
    id: 6,
    icon: <Database className="w-8 h-8" />,
    title: "Data Engineering Pipelines",
    description: "Build secure and scalable data pipelines for intelligent business infrastructure.",
    coreFocus: "Data infrastructure",
    whatItDoes: "Builds ETL pipelines, cloud integrations, databases, and structured data movement systems",
    howItsDifferent: "This is the backbone layer. It powers all dashboards, AI systems, and analytics infrastructure behind the scenes.",
    framework: ["Raw Data", "ETL", "Structured Storage", "Intelligence Layer"],
    caseStudy: "A logistics company unified fragmented systems into one scalable reporting infrastructure.",
    outcome: "Reliable and scalable business intelligence foundations.",
    accent: "from-emerald-500/20 to-transparent shadow-emerald-500/10"
  },
  {
    id: 7,
    icon: <BookOpen className="w-8 h-8" />,
    title: "Knowledge Base Engineering",
    description: "Create centralized business intelligence systems for instant information access.",
    coreFocus: "Centralized company intelligence",
    whatItDoes: "Organizes company documents, SOPs, internal processes, training material, and operational knowledge into structured systems",
    howItsDifferent: "This is the memory layer. Unlike Custom AI Ecosystems, it structures knowledge first before AI layers are added.",
    framework: ["Documentation", "Structuring", "AI Indexing", "Instant Access"],
    caseStudy: "A consulting firm reduced onboarding time by 45% using centralized AI-powered knowledge systems.",
    outcome: "Teams access critical information instantly and efficiently.",
    accent: "from-violet-500/20 to-transparent shadow-violet-500/10"
  },
  {
    id: 8,
    icon: <Users className="w-8 h-8" />,
    title: "Lead & Marketing Intelligence",
    description: "Use data intelligence to improve lead generation, audience targeting, and campaign performance.",
    coreFocus: "Revenue growth intelligence",
    whatItDoes: "Generates qualified leads, audience insights, segmentation, outreach intelligence, and campaign optimization",
    howItsDifferent: "This is the growth layer. Purely focused on marketing, revenue, customer acquisition, and conversion optimization.",
    framework: ["Market Data", "Audience Mapping", "Lead Intelligence", "Revenue Growth"],
    caseStudy: "A B2B startup increased qualified leads by 52% after implementing data-driven lead intelligence.",
    outcome: "Higher quality leads and better conversion rates.",
    accent: "from-amber-500/20 to-transparent shadow-amber-500/10"
  },
  {
    id: 9,
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Full Business Transformation Partner",
    description: "The ultimate culmination: We become your dedicated, long-term business transformation partner—assuming complete operational ownership to solve all identified bottlenecks, deploy the systems, and steer your future growth.",
    coreFocus: "THE CULMINATION // FULL STRATEGIC PARTNER",
    whatItDoes: "Embeds into your organization as your permanent transformation partner. We take full ownership of your data, AI, and workflow architecture—eliminating every operational bottleneck and unlocking continuous future opportunities.",
    howItsDifferent: "You don't manage multiple vendors or deal with unmaintained tools. We take full responsibility for your business intelligence and automation, actively driving commercial growth alongside your leadership.",
    framework: ["Systemic Diagnostic", "Custom Infrastructure Build", "Operational Deployment", "Continuous Future Scaling"],
    caseStudy: "A scaling enterprise transitioned from 5 disjointed external software vendors to 9Nest as their full transformation partner, lowering software spend by $340k and accelerating market speed by 65%.",
    outcome: "Permanent resolution of operational bottlenecks, compound scaling, and dedicated strategic partner stewardship.",
    accent: "from-cyan-500/30 via-primary/30 to-transparent shadow-cyan-500/20",
    isTransformationPartner: true
  }
];

export default function Services({ onBookClick }: { onBookClick: () => void }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeDetail = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-8 sm:mb-10 gap-6 lg:gap-10">
          <div className="max-w-2xl">
            <div className="badge-outline rounded-full mb-3 sm:mb-4">Strategic Map</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.04] text-slate-900 dark:text-white">
              Strategic <br /> <span className="text-primary italic">Capabilities.</span>
            </h2>
          </div>
          <div className="lg:max-w-lg">
            <p className="text-slate-600 dark:text-muted-foreground text-sm sm:text-base leading-relaxed border-l-2 border-primary/25 pl-4 sm:pl-6">
              We engineer commercial outputs. Through <span className="text-slate-900 dark:text-foreground font-semibold">executive strategic consulting</span> and <span className="text-slate-900 dark:text-foreground font-semibold">intelligent system execution</span>, we partner with companies to eliminate bottlenecks, build scalable infrastructure, and capture future opportunities.
            </p>
          </div>
        </div>

        {/* The 4-Stage Strategic Partnership Process Banner */}
        <div className="mb-10 sm:mb-12 p-5 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-slate-100/70 dark:via-white/[0.02] to-accent/10 border border-slate-200 dark:border-white/[0.1] relative overflow-hidden shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold mb-1.5">
                <span>OUR CORE ENGAGEMENT MODEL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary hidden sm:inline-block" />
                <span className="text-slate-500 dark:text-slate-400">MEETINGS TO MEASURABLE OUTPUTS</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                How We Consult & Partner For Future Growth
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full bg-white/80 dark:bg-white/[0.03] shadow-sm whitespace-nowrap">
              PHASED PROTOCOL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] relative shadow-sm">
              <div className="text-[11px] font-mono text-primary font-bold mb-1">01 // DISCOVERY</div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">Executive Discovery Sessions</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We sit down in structured meetings with your leadership to deeply understand your operations, revenue streams, and long-term vision.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] relative shadow-sm">
              <div className="text-[11px] font-mono text-primary font-bold mb-1">02 // DIAGNOSTIC</div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">Bottleneck & Gap Audit</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We pinpoint operational drag, data silos, leaking pipelines, and broken handoffs holding your growth back.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] relative shadow-sm">
              <div className="text-[11px] font-mono text-primary font-bold mb-1">03 // STRATEGY</div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">Output-Driven Strategy</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We engineer a bespoke growth roadmap focused specifically on commercial outputs, unit economics, and new market opportunities.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.06] relative shadow-sm">
              <div className="text-[11px] font-mono text-accent font-bold mb-1">04 // EXECUTION</div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1.5">Embedded Partner Agency</h4>
              <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We take the place of your transformation partner agency—building and operating the data & AI engines that solve these problems for the long haul.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              viewport={{ once: true }}
              onClick={() => handleServiceClick(s)}
              className={`glass-card p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl relative overflow-hidden group flex flex-col justify-between cursor-pointer border transition-all duration-300 ${
                s.isMainFace 
                  ? 'border-primary/60 bg-primary/[0.04] shadow-lg dark:shadow-2xl shadow-primary/10 hover:border-primary' 
                  : s.isTransformationPartner
                  ? 'border-cyan-500/60 bg-cyan-500/[0.04] shadow-lg dark:shadow-2xl shadow-cyan-500/10 hover:border-cyan-500'
                  : 'border-slate-200 dark:border-white/[0.07] hover:border-primary/50 bg-white/90 dark:bg-white/[0.02]'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-105 ${
                    s.isMainFace 
                      ? 'bg-primary/20 border-primary/40 text-primary'
                      : s.isTransformationPartner
                      ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-600 dark:text-cyan-300'
                      : 'bg-slate-100 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-primary group-hover:bg-primary/20 group-hover:border-primary/40'
                  }`}>
                    {s.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {s.isMainFace && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold bg-primary/20 border border-primary/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        MAIN FACE
                      </span>
                    )}
                    {s.isTransformationPartner && (
                      <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-500/20 border border-cyan-400/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        FULL PARTNER
                      </span>
                    )}
                    <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-primary transition-colors">
                      0{s.id}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <span className={`inline-block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full mb-2.5 border ${
                    s.isMainFace 
                      ? 'text-primary bg-primary/10 border-primary/30'
                      : s.isTransformationPartner
                      ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border-cyan-400/30'
                      : 'text-primary bg-primary/10 border-primary/25'
                  }`}>
                    {s.coreFocus}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {s.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-primary font-semibold group-hover:gap-2.5 transition-all">
                  <span>Explore Architecture</span>
                  <span>&rarr;</span>
                </div>
                <div className={`w-2 h-2 rounded-full transition-all ${
                  s.isMainFace ? 'bg-primary' : s.isTransformationPartner ? 'bg-cyan-500 dark:bg-cyan-400' : 'bg-primary/40 group-hover:bg-primary group-hover:scale-125'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetail}
              className="absolute inset-0 bg-slate-900/60 dark:bg-black/85 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-[1100px] bg-white dark:bg-[#08080C] rounded-2xl sm:rounded-3xl overflow-hidden max-h-[88vh] overflow-y-auto border border-slate-200 dark:border-white/15 shadow-2xl"
            >
              <button 
                onClick={closeDetail}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2.5 rounded-full bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all z-20 border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="p-5 sm:p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3.5 sm:gap-4 mb-5 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                        {selectedService.icon}
                      </div>
                      <div>
                        {selectedService.isMainFace && (
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-primary font-bold bg-primary/20 border border-primary/40 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 mb-1">
                            <Sparkles className="w-3 h-3" /> FIRST & MAIN SERVICE // EXECUTIVE DISCOVERY
                          </div>
                        )}
                        {selectedService.isTransformationPartner && (
                          <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-300 font-bold bg-cyan-500/20 border border-cyan-400/40 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5 mb-1">
                            <ShieldCheck className="w-3 h-3" /> THE CULMINATION // FULL PARTNER AGENCY
                          </div>
                        )}
                        <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                          ARCHITECTURE SPECIFICATION // 0{selectedService.id}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white mt-0.5">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {selectedService.description}
                    </p>

                    <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                      <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                        <span className="text-[10px] uppercase tracking-wider text-primary font-mono block mb-1.5 font-bold">Core Mandate</span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{selectedService.coreFocus}</p>
                      </div>
                      <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                        <span className="text-[10px] uppercase tracking-wider text-cyan-600 dark:text-accent font-mono block mb-1.5 font-bold">Capabilities</span>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{selectedService.whatItDoes}</p>
                      </div>
                      <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08]">
                        <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono block mb-1.5 font-bold">The Unfair Edge</span>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{selectedService.howItsDifferent}</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h4 className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3 flex items-center gap-2">
                          <span>EXECUTION SEQUENCE</span>
                          <div className="flex-1 h-px bg-slate-200 dark:bg-white/10" />
                        </h4>
                        <div className="flex flex-wrap items-center gap-2.5">
                          {selectedService.framework.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-lg sm:rounded-xl text-xs font-mono text-slate-800 dark:text-slate-200 font-medium">
                                <span className="text-primary font-bold mr-1.5">0{idx + 1}.</span>
                                {step}
                              </div>
                              {idx < selectedService.framework.length - 1 && (
                                <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-600" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08]">
                        <div className="flex gap-3 items-start mb-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-1">Verified Case Outcome</h5>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                              "{selectedService.caseStudy}"
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-baseline justify-between">
                          <span className="text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono font-bold">Business Outcome</span>
                          <span className="text-xs text-slate-900 dark:text-white font-medium">
                            {selectedService.outcome}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-72 bg-gradient-to-b from-primary/10 via-slate-50 dark:via-white/[0.02] to-transparent rounded-2xl sm:rounded-3xl p-6 flex flex-col justify-between border border-primary/20 self-start shadow-sm">
                    <div>
                      <div className="badge-outline border-primary/30 text-primary bg-primary/10 mb-3 text-[10px]">
                        DEPLOYMENT
                      </div>
                      <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 tracking-tight">Deploy This Module</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                        Schedule a targeted architecture consultation with Daksh to blueprint implementation timelines and ROI attribution.
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        closeDetail();
                        onBookClick();
                      }}
                      className="w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer dark:from-primary dark:via-indigo-500 dark:to-primary dark:shadow-primary/25 dark:border-white/15"
                    >
                      Book Strategy Call
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
