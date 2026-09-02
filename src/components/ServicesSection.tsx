import React from 'react';
import { Users, ShieldCheck, Scale, MessageSquareQuote, Phone, ArrowRight } from 'lucide-react';
import { SERVICES, FIRM_CONFIG } from '../data/firmData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenCallback: (initialService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenCallback }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#1B3B7D]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1B3B7D]" />;
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#1B3B7D]" />;
      case 'MessageSquareQuote':
      default:
        return <MessageSquareQuote className="w-6 h-6 text-[#1B3B7D]" />;
    }
  };

  return (
    <section id="services-section" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1B3B7D] tracking-tight mb-3"
          >
            How We Help
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Focused, empathetic legal guidance tailored to your unique family situation in Bangalore. We prioritize quick resolution and emotional dignity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-[#1B3B7D]/40 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4 group-hover:bg-[#1B3B7D]/5 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1B3B7D] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* One-sentence Benefit-Driven Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.benefit}
                </p>
              </div>

              {/* Card Action */}
              <div className="pt-4 border-t border-slate-200/70">
                <button
                  type="button"
                  onClick={() => onOpenCallback(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-[#1B3B7D] hover:text-[#F15B4C] transition-colors py-1.5"
                >
                  <span>Discuss your options</span>
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Direct CTA Banner */}
        <div className="bg-slate-100/90 rounded-2xl p-5 sm:p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#111C33]">
              Unsure which legal path fits your circumstances?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Speak directly with an advocate for a brief, confidential telephone evaluation.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${FIRM_CONFIG.phoneRaw}`}
              id="services-call-cta"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-sm rounded-xl transition-all min-h-[48px] shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now for Advice</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
