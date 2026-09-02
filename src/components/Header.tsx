import React, { useState, useEffect } from 'react';
import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface HeaderProps {
  onOpenCallback: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallback }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-sticky-header"
      className={`sticky top-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-slate-200 shadow-sm py-2.5' : 'border-slate-100 py-3.5'
      }`}
    >
      {/* Top micro-bar for local Bangalore & confidentiality reassurance */}
      <div className="hidden md:block bg-[#111C33] text-slate-300 text-xs py-1 px-4 -mt-3.5 mb-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-200 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#F15B4C] mr-1.5 inline" />
              Bangalore Family Court & High Court Advocates
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1.5 inline" />
              100% Strict Legal Confidentiality
            </span>
          </div>
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />
              Immediate Phone Consultations Mon–Sat
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left: Wordmark */}
        <a href="#" className="flex flex-col group text-left" id="header-brand-logo">
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1B3B7D] leading-tight group-hover:text-[#111C33] transition-colors">
            Advocate Sridharan & Associates
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide flex items-center mt-0.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
            Family Law & Custody · Bangalore
          </span>
        </a>

        {/* Right: Phone CTA button & Callback trigger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Secondary CTA (Visible on tablets and desktop) */}
          <button
            type="button"
            id="header-callback-button"
            onClick={onOpenCallback}
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1B3B7D] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors min-h-[44px]"
          >
            Request Callback
          </button>

          {/* Primary CTA: Large Tap-to-Call Phone Button (Always visible on all screens) */}
          <a
            href={`tel:${FIRM_CONFIG.phoneRaw}`}
            id="header-phone-cta-button"
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-[#F15B4C] hover:bg-[#D9483A] active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-lg shadow-sm transition-all min-h-[48px] touch-manipulation group"
            aria-label="Call Advocate Sridharan now"
          >
            <div className="p-1 bg-white/20 rounded-md mr-2 flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
            </div>
            <div className="text-left flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-semibold opacity-90 leading-none hidden xs:block">
                Free Call
              </span>
              <span className="leading-tight font-extrabold whitespace-nowrap">
                {FIRM_CONFIG.phoneDisplay}
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
