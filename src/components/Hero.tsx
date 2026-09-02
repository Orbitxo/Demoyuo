import React from 'react';
import { Phone, Star, Shield, Clock, ArrowRight, CheckCircle2, MessageSquare, MapPin } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface HeroProps {
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallback }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-8 pb-12 sm:pt-14 sm:pb-18 lg:pt-16 lg:pb-20 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B7D]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F15B4C]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Google 5.0★ Trust Badge Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 text-xs sm:text-sm font-medium text-slate-700">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="font-bold text-slate-900">{FIRM_CONFIG.googleRating}★ Rating</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600 font-medium">Google Verified Client Reviews</span>
          <span className="hidden sm:inline text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
            Bangalore
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1
          id="hero-main-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3B7D] tracking-tight leading-[1.18] sm:leading-[1.15] max-w-3xl mx-auto mb-5 text-balance"
        >
          Going Through a Divorce or Custody Case?{' '}
          <span className="text-[#111C33] block sm:inline">
            You Don't Have to Face It Alone.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          id="hero-subheadline"
          className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8 text-pretty"
        >
          <strong className="font-semibold text-slate-800">Advocate Sridharan & Associates</strong> helps Bangalore families resolve divorce and custody matters with clarity, compassion, and speed — trusted by 5-star reviewed clients.
        </p>

        {/* Call to Action Container */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto mb-8"
        >
          {/* Primary CTA: Call Now */}
          <a
            href={`tel:${FIRM_CONFIG.phoneRaw}`}
            id="hero-primary-call-cta"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#F15B4C] hover:bg-[#D9483A] active:scale-[0.98] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all min-h-[52px] group text-center"
          >
            <Phone className="w-5 h-5 fill-white/20 text-white animate-pulse" />
            <span>Call Now for a Free Consultation</span>
          </a>

          {/* Secondary CTA: Request a Callback */}
          <button
            type="button"
            id="hero-secondary-callback-cta"
            onClick={onOpenCallback}
            className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1B3B7D] font-bold text-base rounded-xl border-2 border-[#1B3B7D]/20 hover:border-[#1B3B7D] shadow-sm transition-all min-h-[52px]"
          >
            <MessageSquare className="w-4 h-4 text-[#1B3B7D]" />
            <span>Request a Callback</span>
          </button>
        </div>

        {/* Direct reassurance tags */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-200/60 max-w-2xl mx-auto text-xs sm:text-sm text-slate-600">
          <div className="flex items-center justify-center gap-1.5 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-800">100% Confidential & Dispassionate</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-800">Direct Lawyer Phone Access</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium text-slate-800">No Jargon or Hidden Fees</span>
          </div>
        </div>

      </div>
    </section>
  );
};
