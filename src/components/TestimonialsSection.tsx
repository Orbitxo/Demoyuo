import React from 'react';
import { Star, CheckCircle2, Phone, MessageSquare, Shield } from 'lucide-react';
import { TESTIMONIALS, FIRM_CONFIG } from '../data/firmData';

interface TestimonialsSectionProps {
  onOpenCallback: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenCallback }) => {
  return (
    <section id="testimonials-section" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-semibold mb-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Google Rating: {FIRM_CONFIG.googleRating}★ ({FIRM_CONFIG.totalReviewsCount} Reviews)</span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1B3B7D] tracking-tight mb-3"
          >
            What Our Clients Say (5.0★ on Google)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Summarized feedback from Bangalore clients who trusted Advocate Sridharan & Associates with their family matters.
          </p>
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={review.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-slate-300 transition-shadow hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header with stars & Google Review badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-md">
                    {review.verifiedLabel}
                  </span>
                </div>

                {/* Key highlight takeaway */}
                <div className="mb-3 text-xs font-bold text-[#1B3B7D] bg-white px-2.5 py-1.5 rounded-lg border border-slate-200/60 inline-block">
                  {review.keyHighlight}
                </div>

                {/* Summarized feedback (no quotation marks per prompt instruction) */}
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  {review.summary}
                </p>
              </div>

              {/* Client meta */}
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#1B3B7D]/10 text-[#1B3B7D] font-bold flex items-center justify-center text-xs">
                    {review.clientName.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block leading-tight">
                      {review.clientName}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      {review.location}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">
                  {review.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary box & CTA */}
        <div className="bg-[#1B3B7D]/5 rounded-2xl p-6 border border-[#1B3B7D]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#1B3B7D] text-white items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Ready to resolve your family case with peace of mind?
              </p>
              <p className="text-xs text-slate-600">
                Call today to discuss your situation confidentially with our Bangalore legal team.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${FIRM_CONFIG.phoneRaw}`}
              id="testimonials-call-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-sm rounded-xl min-h-[48px] shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {FIRM_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
