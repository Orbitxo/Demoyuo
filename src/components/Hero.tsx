import React from 'react';
import { Phone, Star, Shield, Clock, ArrowRight, CheckCircle2, MessageSquare, MapPin, Award } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import sridharanPortrait from '../assets/images/sridharan_profile_1788354717499.jpg';

interface HeroProps {
  onOpenCallback: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallback }) => {
  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-18 border-b border-slate-200/80 overflow-hidden"
    >
      {/* Subtle atmospheric background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B3B7D]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F15B4C]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Google 5.0★ Trust Badge Pill */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-slate-900">{FIRM_CONFIG.googleRating}★ Rating</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Google Verified Reviews</span>
            <span className="hidden xs:inline text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
              Bangalore
            </span>
          </div>
        </div>

        {/* Hero Grid: Content + Profile Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left / Main Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Main H1 Headline */}
            <h1
              id="hero-main-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3B7D] tracking-tight leading-[1.2] sm:leading-[1.15] mb-4 text-balance"
            >
              Going Through a Divorce or Custody Case?{' '}
              <span className="text-[#111C33] block sm:inline">
                You Don't Have to Face It Alone.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed mb-6 sm:mb-8 text-pretty max-w-2xl mx-auto lg:mx-0"
            >
              <strong className="font-semibold text-slate-800">Advocate Sridharan & Associates</strong> helps Bangalore families resolve divorce and custody matters with clarity, compassion, and speed — trusted by 5-star reviewed clients.
            </p>

            {/* CTA Group */}
            <div
              id="hero-cta-group"
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8"
            >
              {/* Primary CTA: Call Now */}
              <a
                href={`tel:${FIRM_CONFIG.phoneRaw}`}
                id="hero-primary-call-cta"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#F15B4C] hover:bg-[#D9483A] active:scale-[0.98] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all min-h-[52px] group text-center"
              >
                <Phone className="w-5 h-5 fill-white/20 text-white animate-pulse" />
                <span>Call Now for a Free Consultation</span>
              </a>

              {/* Secondary CTA: Request a Callback */}
              <button
                type="button"
                id="hero-secondary-callback-cta"
                onClick={onOpenCallback}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1B3B7D] font-bold text-sm sm:text-base rounded-xl border-2 border-[#1B3B7D]/20 hover:border-[#1B3B7D] shadow-xs transition-all min-h-[52px]"
              >
                <MessageSquare className="w-4 h-4 text-[#1B3B7D]" />
                <span>Request a Callback</span>
              </button>
            </div>

            {/* Direct reassurance tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-slate-200/70 text-xs text-slate-600 text-left">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-800">100% Confidential & Dispassionate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-800">Direct Lawyer Phone Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-800">No Jargon or Hidden Fees</span>
              </div>
            </div>

          </div>

          {/* Right / Hero Profile Card with Advocate Sridharan's image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md">
              
              {/* Profile Image with subtle badge */}
              <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 aspect-[3/4] max-h-[360px] flex items-center justify-center">
                <img
                  src={sridharanPortrait}
                  alt="Advocate Sridharan - Senior Family Law Advocate Bangalore"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Status Pill */}
                <div className="absolute top-3 left-3 bg-[#111C33]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 absolute"></span>
                  <span className="pl-2">Available for Phone Consultations</span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 text-white">
                  <h3 className="font-bold text-base sm:text-lg leading-tight text-white">
                    Advocate Sridharan
                  </h3>
                  <p className="text-xs text-blue-200">
                    Lead Counsel · Bangalore Family Law & Custody Practice
                  </p>
                </div>
              </div>

              {/* Card Meta Stats */}
              <div className="mt-3.5 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Experience</span>
                  <span className="font-bold text-slate-900">18+ Years Bar</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Google Rating</span>
                  <span className="font-bold text-amber-600 flex items-center justify-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400 inline" /> 5.0 / 5.0
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
