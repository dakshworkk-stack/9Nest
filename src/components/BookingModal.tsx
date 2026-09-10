import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, CheckCircle2, Loader2 } from 'lucide-react';
import { db, storage } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    companyName: '',
    designation: '',
    dataType: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let sampleDataSheetUrl = '';
      if (file) {
        const fileRef = ref(storage, `samples/${Date.now()}_${file.name}`);
        const uploadResult = await uploadBytes(fileRef, file);
        sampleDataSheetUrl = await getDownloadURL(uploadResult.ref);
      }

      await addDoc(collection(db, 'bookings'), {
        ...formData,
        sampleDataSheetUrl,
        createdAt: serverTimestamp(),
      });

      setStep('success');
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#090D16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 sm:top-5 right-4 sm:right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors z-10 border border-slate-200 dark:border-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {step === 'form' ? (
              <div className="p-5 sm:p-8 md:p-9">
                <div className="badge-outline rounded-full mb-3 sm:mb-4 text-[10px]">Executive Growth Consultation</div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 text-slate-900 dark:text-white">
                  Schedule Strategy Session & <span className="text-primary">Bottleneck Audit.</span>
                </h2>
                <p className="text-slate-600 dark:text-muted-foreground text-xs sm:text-sm mb-6 max-w-lg leading-relaxed">
                  We sit down with leadership to understand your business inside out, diagnose operational bottlenecks and revenue gaps, and construct an actionable roadmap as your transformation partner agency.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Phone Number</label>
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Company Name</label>
                      <input
                        required
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Designation</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="Founder / CEO / COO / Head of Growth"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Current Bottleneck / Challenge</label>
                      <input
                        required
                        type="text"
                        name="dataType"
                        value={formData.dataType}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400"
                        placeholder="e.g. Sales bottlenecks, siloed data, scaling limits"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-muted-foreground ml-1 font-semibold">Sample Data / Workflow Context (Optional)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-2 border-dashed border-slate-300 dark:border-white/10 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center gap-2 hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-all group bg-slate-50/50 dark:bg-white/[0.02]"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Upload className="w-5 h-5 text-slate-500 dark:text-muted-foreground group-hover:text-primary transition-colors" />
                      <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-slate-800 dark:text-white">
                          {file ? file.name : 'Drop business docs / flowcharts / data sheet'}
                        </p>
                        <p className="text-[10px] text-slate-500 dark:text-muted-foreground font-mono">XLS, CSV, PDF OR WORKFLOW EXPORT</p>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white font-bold uppercase tracking-wider text-xs shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 border-t border-white/30 border border-indigo-400/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 cursor-pointer dark:from-primary dark:via-indigo-500 dark:to-primary dark:shadow-primary/25 dark:border-white/15 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Transmitting Schedule Request...
                      </>
                    ) : (
                      'Confirm Strategic Discovery Session'
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 text-slate-900 dark:text-white">Discovery <span className="text-green-500">Requested.</span></h2>
                <p className="text-slate-600 dark:text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                  Your strategy mission has been received. Daksh (<span className="text-primary font-medium">dakshworkk@gmail.com</span>) will reach out within 24 hours to schedule your strategic discovery meeting and bottleneck audit.
                </p>
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-900 dark:text-white transition-all text-[11px] font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close Terminal
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
