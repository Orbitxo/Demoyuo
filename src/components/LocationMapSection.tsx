import React from 'react';
import { MapPin, Navigation, Phone, Clock, ShieldCheck, ExternalLink, Car, Train, Building2, CheckCircle2, Users } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';
import officePhoto from '../assets/images/bangalore_office_team_1788356601479.jpg';

interface LocationMapSectionProps {
  onOpenCallback: () => void;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({ onOpenCallback }) => {
  // Direct Google Maps Share Link provided by the user
  const googleMapShareUrl = 'https://share.google/HJqh4jWyb63zuQoyk';
  
  // Google Maps embed URL using the verified business entity query
  const googleMapEmbedUrl =
    'https://maps.google.com/maps?q=Advocate+Sridharan+B.Com.,+LL.B.,+LL.M+(UK)+LLP+-+Divorce,+Family,+Civil+%26+Criminal+;+Lawyers+in+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed';

  return (
    <section id="location-map-section" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white border border-slate-200 text-[#1B3B7D] rounded-full text-xs font-bold mb-3 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#F15B4C]" />
            <span>Bangalore Legal Chambers & Office</span>
          </div>

          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1B3B7D] tracking-tight mb-3"
          >
            Visit Our Bangalore Office
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated in central Bangalore with seamless connectivity to the Principal Family Courts and Karnataka High Court.
          </p>
        </div>

        {/* Office & Legal Chambers Photo Card */}
        <div className="mb-10 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 bg-slate-950 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full relative overflow-hidden flex items-center justify-center">
            <img
              src={officePhoto}
              alt="Advocate Sridharan and his team of advocates in Bangalore Legal Chambers"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3 bg-[#111C33]/85 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#F15B4C]" />
              <span>Bangalore Chambers & Legal Team</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full bg-white">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200 text-amber-900 rounded-full text-xs font-bold">
                <span>★ 5.0 Google Rated Law Firm</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                Advocate Sridharan B.Com., LL.B., LL.M (UK) LLP
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our central Bangalore law chambers house our full team of experienced matrimonial researchers, drafters, and courtroom litigators ready to assist you in privacy and confidence.
              </p>
              
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Private Sound-Proof Consultation Chambers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Extensive Matrimonial & Family Law Reference Library</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Associates for Speedy Filing & Case Preparation</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100 flex items-center gap-3">
              <a
                href={`tel:${FIRM_CONFIG.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Before Visiting</span>
              </a>
              <button
                type="button"
                onClick={onOpenCallback}
                className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#1B3B7D] font-bold text-xs sm:text-sm rounded-xl border border-slate-200 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Location Grid: Details Card & Interactive Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office & Practice Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
            <div className="space-y-5">
              
              {/* Chambers Title & Tag */}
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold rounded uppercase tracking-wider">
                    Verified Google Location
                  </span>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1">
                    ★ 5.0 Google Reviews
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  Advocate Sridharan & Associates
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  Divorce, Family, Matrimonial & Child Custody Advocates
                </p>
              </div>

              {/* Address with Icon */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                <div className="flex items-start text-sm text-slate-800 leading-relaxed font-medium">
                  <MapPin className="w-4 h-4 text-[#F15B4C] mr-2.5 shrink-0 mt-1" />
                  <span>
                    {FIRM_CONFIG.address}
                  </span>
                </div>
              </div>

              {/* Transit & Accessibility Landmarks */}
              <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                <div className="flex items-start">
                  <Train className="w-4 h-4 text-[#1B3B7D] mr-2.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Metro Connectivity:</strong> 2 minutes from Trinity and MG Road Metro Stations (Purple Line).
                  </span>
                </div>
                <div className="flex items-start">
                  <Car className="w-4 h-4 text-[#1B3B7D] mr-2.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Family Court Access:</strong> 10 minutes drive from Bangalore Principal Family Courts (Nyaya Degula).
                  </span>
                </div>
                <div className="flex items-start">
                  <Clock className="w-4 h-4 text-[#1B3B7D] mr-2.5 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hours:</strong> {FIRM_CONFIG.operatingHours}
                  </span>
                </div>
              </div>

              {/* Confidentiality Guarantee */}
              <div className="bg-blue-50/70 p-3 rounded-xl border border-blue-100 flex items-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1B3B7D] shrink-0" />
                <p className="text-xs text-slate-700 font-medium leading-tight">
                  Private, confidential client consultation rooms ensuring strict advocate-client privilege.
                </p>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-google-maps-btn"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-sm rounded-xl min-h-[48px] shadow-sm transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                href={`tel:${FIRM_CONFIG.phoneRaw}`}
                id="location-call-chambers-btn"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-slate-50 text-[#1B3B7D] font-bold text-sm rounded-xl border border-slate-300 transition-all min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-[#1B3B7D]" />
                <span>Call Chambers</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-slate-200 shadow-sm min-h-[380px] sm:min-h-[440px] bg-slate-100 relative">
            
            {/* Top Bar on Map with Share URL */}
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2 font-medium truncate pr-2">
                <MapPin className="w-4 h-4 text-[#F15B4C] shrink-0" />
                <span className="truncate">Advocate Sridharan & Associates · Bangalore Office</span>
              </div>
              <a
                href={googleMapShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F15B4C] hover:text-white font-bold underline flex items-center gap-1 shrink-0 text-xs transition-colors"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Iframe */}
            <iframe
              title="Advocate Sridharan and Associates Bangalore Office Location on Google Maps"
              src={googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            />

            {/* Bottom Quick Help Note */}
            <div className="bg-white/95 backdrop-blur-xs border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Prior appointment recommended for confidential in-person advisory</span>
              </span>
              <button
                type="button"
                onClick={onOpenCallback}
                className="text-[#1B3B7D] font-bold hover:underline shrink-0 ml-2"
              >
                Book Appointment →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
