import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface FinalCTASectionProps {
  onOpenCallback: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenCallback }) => {
  return (
    <section
      id="final-cta-section"
      className="relative bg-[#1B3B7D] text-white py-14 sm:py-20 overflow-hidden"
    >
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#F15B4C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-blue-100 mb-6">
          <Clock className="w-3.5 h-3.5 text-[#F15B4C]" />
          <span>Immediate Phone Consultations Available Today</span>
        </div>

        {/* Required Headline */}
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-white"
        >
          Take the First Step Today
        </h2>

        {/* Required Body Text */}
        <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          A short call now can bring clarity to a confusing situation. Reach out for a free, no-obligation consultation.
        </p>

        {/* Large Coral CTA Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-lg mx-auto mb-8">
          <a
            href={`tel:${FIRM_CONFIG.phoneRaw}`}
            id="final-primary-call-cta-button"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F15B4C] hover:bg-[#D9483A] active:scale-[0.98] text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-lg hover:shadow-xl transition-all min-h-[54px] text-center"
          >
            <Phone className="w-6 h-6 fill-white/20" />
            <span>Call Now: {FIRM_CONFIG.phoneDisplay}</span>
          </a>

          <button
            type="button"
            id="final-secondary-callback-button"
            onClick={onOpenCallback}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-xl border border-white/30 backdrop-blur-xs transition-all min-h-[54px]"
          >
            <MessageSquare className="w-4 h-4 text-blue-200" />
            <span>Request a Callback</span>
          </button>
        </div>

        {/* Reassurance points below CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-blue-200">
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
            Zero Pressure or Sales Tactics
          </span>
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
            100% Confidential
          </span>
          <span className="flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
            Local Bangalore Family Law Specialists
          </span>
        </div>

      </div>
    </section>
  );
};
