import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Train, Building2, Check, ExternalLink, ShieldCheck, Share2 } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface LocationMapSectionProps {
  onOpenCallback: () => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ onOpenCallback }) => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // User provided Google location share link
  const googleMapsShareUrl = FIRM_CONFIG.googleMapsShareUrl || 'https://share.google/HJqh4jWyb63zuQoyk';
  
  // Directions and query URLs based on Advocate Sridharan's exact business location
  const exactLocationQuery = 'Advocate Sridharan B.Com. LL.B. LL.M (UK) LLP Garden Square Apartments Subramanyapura Bangalore';
  const iframeSrc = `https://maps.google.com/maps?q=${encodeURIComponent(exactLocationQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(exactLocationQuery)}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FIRM_CONFIG.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="location-section" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1B3B7D]/5 text-[#1B3B7D] rounded-full text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#1B3B7D]/10">
            <MapPin className="w-3.5 h-3.5 text-[#F15B4C]" />
            <span>Bangalore Office Location</span>
          </div>
          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl font-extrabold text-[#1B3B7D] tracking-tight"
          >
            Visit Our Bangalore Law Chambers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Conveniently accessible across Bangalore, providing dedicated, private, and strictly confidential consultation chambers.
          </p>
        </div>

        {/* Main Grid: Info on left, Interactive Google Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details, Transit, Proximity */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* Office Address Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1B3B7D] text-white flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                      Advocate Sridharan & Associates
                    </h3>
                    <p className="text-[11px] text-[#1B3B7D] font-medium">B.Com., LL.B., LL.M (UK) LLP</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open Today
                </span>
              </div>

              {/* Address details */}
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-1">
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-[#F15B4C] mr-2 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-800 font-medium text-xs sm:text-sm">
                    {FIRM_CONFIG.address}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <span className="text-slate-600 text-xs">
                    {FIRM_CONFIG.operatingHours}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-[#F15B4C] mr-2 shrink-0" />
                  <a href={`tel:${FIRM_CONFIG.phoneRaw}`} className="text-[#1B3B7D] font-bold hover:underline">
                    {FIRM_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Action Buttons for Address */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 transition-colors"
                >
                  <Check className={`w-3.5 h-3.5 ${copiedAddress ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                </button>
                <a
                  href={googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#1B3B7D] hover:bg-[#111C33] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Accessibility & Court Presence Highlights */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Chambers & Court Coverage
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#1B3B7D]" />
                    <span className="font-semibold text-slate-800">Bangalore Principal Family Court</span>
                  </div>
                  <span className="text-slate-500 font-medium whitespace-nowrap">Daily Practice</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#1B3B7D]" />
                    <span className="font-semibold text-slate-800">Karnataka High Court & City Civil</span>
                  </div>
                  <span className="text-slate-500 font-medium whitespace-nowrap">Appellate</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Train className="w-4 h-4 text-purple-700" />
                    <span className="font-semibold text-slate-800">Transit & Metro Accessibility</span>
                  </div>
                  <span className="text-slate-500 font-medium whitespace-nowrap">Easy Reach</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4 text-emerald-700" />
                    <span className="font-semibold text-slate-800">Dedicated Visitor Parking</span>
                  </div>
                  <span className="text-emerald-700 font-medium">Available</span>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenCallback}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors min-h-[44px]"
              >
                <span>Book In-Person Consultation</span>
              </button>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-full min-h-[380px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              
              {/* Map Floating Control Header */}
              <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200 shadow-md">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#F15B4C] shrink-0" />
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[180px] sm:max-w-none">
                    Garden Square, Subramanyapura, Bangalore
                  </span>
                </div>
                <a
                  href={googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B3B7D] hover:text-[#F15B4C] hover:underline whitespace-nowrap"
                >
                  <Share2 className="w-3 h-3 text-[#1B3B7D]" />
                  <span>Open Google Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Google Maps IFrame */}
              <iframe
                title="Advocate Sridharan & Associates Bangalore Location"
                src={iframeSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full flex-1 rounded-2xl"
              ></iframe>

              {/* Bottom Quick Bar on Map */}
              <div className="absolute bottom-3 left-3 right-3 z-10 bg-[#111C33]/90 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 shadow-lg">
                <div className="flex items-center space-x-2 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200 text-xs">
                    Confidential legal chambers for divorce & family law consultations.
                  </span>
                </div>
                <a
                  href={googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white text-xs font-bold rounded-lg transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
