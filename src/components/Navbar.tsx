import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
  theme?: "light" | "dark";
  onToggleTheme?: () => void;
}

export default function Navbar({ onBookClick, theme = "light", onToggleTheme }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3.5 sm:px-5 py-1.5 sm:py-2 glass rounded-full w-[calc(100%-1.25rem)] sm:w-[calc(100%-2rem)] max-w-[1140px] border border-slate-200/90 dark:border-white/10 shadow-md dark:shadow-xl shadow-slate-200/50 dark:shadow-black/40 backdrop-blur-xl"
    >
      <a href="#" className="flex items-baseline tracking-tighter group select-none py-0.5 pl-1">
        <span className="accent-gradient bg-clip-text text-transparent text-lg sm:text-xl font-black">9</span>
        <span className="text-slate-900 dark:text-white font-black tracking-[0.2em] text-sm sm:text-base transition-colors ml-0.5">NEST</span>
      </a>
      
      <div className="hidden md:flex items-center gap-5 xl:gap-7 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 border border-primary/25 bg-primary/5 dark:bg-primary/10 rounded-full">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
          <span className="text-[9px] font-semibold text-primary dark:text-accent tracking-wider flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 inline" /> ENTERPRISE CERTIFIED
          </span>
        </div>
        <a href="#services" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Capabilities</a>
        <a href="#framework" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Framework</a>
        <a href="#results" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Outcomes</a>
      </div>

      <div className="flex items-center gap-2">
        {onToggleTheme && (
          <button
            onClick={onToggleTheme}
            aria-label="Toggle light/dark theme"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] hover:bg-slate-100 dark:hover:bg-white/10 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-xs"
          >
            {theme === "light" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            )}
          </button>
        )}

        <button 
          onClick={onBookClick}
          className="relative inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white hover:brightness-105 transition-all shadow-sm shadow-indigo-500/20 hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 hover:scale-[1.01] active:scale-[0.99] cursor-pointer dark:from-primary dark:via-indigo-500 dark:to-primary dark:shadow-primary/25 dark:border-white/15 whitespace-nowrap"
        >
          <span>Book Strategy</span>
          <ArrowUpRight className="w-3 h-3 opacity-80" />
        </button>
      </div>
    </motion.nav>
  );
}
