import React from 'react';
import { Phone, FileText, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, FIRM_CONFIG } from '../data/firmData';

interface ProcessSectionProps {
  onOpenCallback: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenCallback }) => {
  return (
    <section id="how-it-works-section" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold text-[#F15B4C] uppercase tracking-wider mb-2 block">
            Simple 3-Step Process
          </span>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1B3B7D] tracking-tight mb-3"
          >
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We remove the fear and uncertainty from family legal proceedings. Here is what working with us looks like from day one.
          </p>
        </div>

        {/* 3 Numbered Steps Grid (Horizontal desktop, stacked mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="relative bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              {/* Step indicator badge */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1B3B7D] text-white font-extrabold text-sm shadow-xs">
                    0{step.stepNumber}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full">
                    {idx === 0 ? 'No Obligation' : idx === 1 ? 'Actionable Guidance' : 'Complete Representation'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Bottom step highlight */}
              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-medium text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg">
                <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                <span>{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="text-center max-w-md mx-auto">
          <a
            href={`tel:${FIRM_CONFIG.phoneRaw}`}
            id="process-call-cta-button"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-base rounded-xl shadow-sm transition-all min-h-[48px]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now for Step 1 Consultation</span>
          </a>
          <p className="text-xs text-slate-500 mt-2.5">
            Strictly confidential · Average initial phone call takes under 10 minutes
          </p>
        </div>

      </div>
    </section>
  );
};
