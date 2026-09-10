import { motion } from "motion/react";
import { Shield, Sparkles, Terminal, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 glass border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden bg-slate-50/80 dark:bg-black/40">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12">
          
          <div className="md:col-span-6 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              <span className="accent-gradient bg-clip-text text-transparent">9</span>NEST
              <span className="text-[10px] font-mono tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full uppercase ml-2">
                ENTERPRISE INTELLIGENCE
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed font-normal">
              9Nest is an elite Data Intelligence & Automation Engineering firm. We build self-healing pipelines, custom AI ecosystems, and real-time executive control towers that transform data chaos into verified enterprise valuation.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                <Shield className="w-3.5 h-3.5" />
                <span>SOC2 COMPLIANT ENCLAVE</span>
              </span>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-medium">
                <Terminal className="w-3.5 h-3.5" />
                <span>SELF-HEALING PIPELINES</span>
              </span>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary font-bold">Capabilities</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li><a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Custom AI Ecosystems</a></li>
              <li><a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Strategic Consulting</a></li>
              <li><a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Executive Control Towers</a></li>
              <li><a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">Clean CRM Pipelines</a></li>
              <li><a href="#framework" className="hover:text-slate-900 dark:hover:text-white transition-colors">9-Stage Methodology</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-600 dark:text-accent font-bold">Direct Channels</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <a href="mailto:dakshworkk@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>dakshworkk@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  <span>LinkedIn Architecture</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  <span>Executive Insights (X)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-6 border-t border-slate-200 dark:border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-3 md:gap-6 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            <span className="text-slate-500 dark:text-slate-400 font-semibold">CORE ARTIFACTS:</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">n8n ORCHESTRATION</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">PYTHON ETL</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">POWER BI</span>
            <span className="text-slate-700 dark:text-slate-300 font-medium">FINE-TUNED LLMS</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
            &copy; {new Date().getFullYear()} 9NEST DATA INTELLIGENCE // ALL ARCHITECTURES SECURED
          </div>
        </div>
      </div>
    </footer>
  );
}
