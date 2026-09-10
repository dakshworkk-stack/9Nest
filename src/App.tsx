/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MissionSection from "./components/MissionSection";
import Problem from "./components/Problem";
import CTASection from "./components/CTASection";
import Services from "./components/Services";
import Framework from "./components/Framework";
import CaseStudies from "./components/CaseStudies";
import PartnerSection from "./components/PartnerSection";
import TrustBanner from "./components/TrustBanner";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("9nest_theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("9nest_theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const openBookingModal = () => setIsBookingModalOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar 
        onBookClick={openBookingModal} 
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero onBookClick={openBookingModal} />
        <MissionSection />
        <Problem />
        <CTASection onBookClick={openBookingModal} />
        <Services onBookClick={openBookingModal} />
        <Framework />
        <CaseStudies />
        <PartnerSection onBookClick={openBookingModal} />
        <TrustBanner />
      </main>
      <Footer />

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}
