import React from 'react';
import { Star, ShieldCheck, MapPin, Award, Check, Phone, MessageSquare, Scale } from 'lucide-react';
import { FIRM_CONFIG, TRUST_POINTS } from '../data/firmData';

interface AboutTrustSectionProps {
  onOpenCallback: () => void;
}

export const AboutTrustSection: React.FC<AboutTrustSectionProps> = ({ onOpenCallback }) => {
  return (
    <section id="about-section" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headshot Card & Trust Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
              
              {/* Professional Headshot Placeholder */}
              <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-slate-100 to-slate-200 border-4 border-white shadow-md flex items-center justify-center overflow-hidden mb-4">
                {/* SVG Portrait graphic representing a dignified, compassionate advocate */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#1B3B7D]/10 text-[#1B3B7D]">
                  <div className="w-14 h-14 rounded-full bg-[#1B3B7D] text-white flex items-center justify-center text-xl font-bold mb-1 shadow-sm">
                    AS
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#1B3B7D]">
                    Adv. Sridharan
                  </span>
                </div>
              </div>

              {/* Advocate Title */}
              <h3 className="text-lg font-bold text-slate-900">
                Advocate Sridharan & Associates
              </h3>
              <p className="text-xs font-semibold text-slate-500 mb-3">
                Senior Family Law Advocates · Bangalore Bar
              </p>

              {/* 5.0★ · X+ Google Reviews Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-bold text-amber-900 mb-4 shadow-2xs">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>5.0★ · {FIRM_CONFIG.totalReviewsCount} Google Reviews</span>
              </div>

              {/* Jurisdiction highlight */}
              <div className="text-xs text-slate-600 bg-slate-50 rounded-xl p-3 border border-slate-200/80 text-left space-y-1.5">
                <div className="flex items-start text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#F15B4C] mr-1.5 shrink-0 mt-0.5" />
                  <span>Bangalore Principal Family Court (Nyaya Degula) & High Court of Karnataka</span>
                </div>
                <div className="flex items-start text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0 mt-0.5" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="pt-1.5 border-t border-slate-200 text-center">
                  <a
                    href="#location-map-section"
                    className="text-[#1B3B7D] font-bold text-[11px] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Bangalore Office Map & Location →</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Narrative & Trust Pillars */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[#F15B4C] uppercase tracking-wider mb-2 block">
              About The Firm
            </span>
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#1B3B7D] tracking-tight mb-4"
            >
              Steady, Compassionate Legal Support for Bangalore Families
            </h2>

            {/* Prompt required paragraph */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Advocate Sridharan & Associates is a dedicated Bangalore law practice that has guided hundreds of families through divorce, settlement, and child custody matters with steady, compassionate legal support, backed by a 5.0-star Google rating. We know that legal disputes within families are deeply emotional and exhausting. Our entire approach centers on clear answers, absolute discretion, and resolving matters as swiftly and amicably as the law allows.
            </p>

            {/* Key Trust Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {TRUST_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-emerald-700" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {point.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${FIRM_CONFIG.phoneRaw}`}
                id="about-call-cta-button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-sm sm:text-base rounded-xl min-h-[48px] shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now for a Confidential Talk</span>
              </a>

              <button
                type="button"
                onClick={onOpenCallback}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-100 text-[#1B3B7D] font-bold text-sm rounded-xl border border-slate-300 transition-all min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request a Callback</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
