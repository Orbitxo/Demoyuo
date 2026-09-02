import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface FooterProps {
  onOpenCallback: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCallback }) => {
  return (
    <footer id="main-footer" className="bg-[#111C33] text-slate-300 pt-12 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 pb-8 border-b border-slate-800">
          
          {/* Col 1: Firm Overview */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Advocate Sridharan & Associates
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated family law practice in Bangalore specializing in mutual consent divorce, contested matrimonial litigation, and child custody matters with speed, compassion, and discretion.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Bangalore Bar · {FIRM_CONFIG.experienceYears}</span>
            </div>
          </div>

          {/* Col 2: Quick Links / Practice Areas */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Practice Areas
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Mutual Consent Divorce (Sec 13B)
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Contested Divorce & Alimony
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Child Custody & Visitation Rights
                </a>
              </li>
              <li>
                <a href="#services-section" className="hover:text-white transition-colors">
                  Matrimonial Property Settlements
                </a>
              </li>
              <li>
                <a href="#location-map-section" className="hover:text-white transition-colors">
                  Bangalore Office & Location Map
                </a>
              </li>
              <li>
                <a
                  href="https://share.google/HJqh4jWyb63zuQoyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Google Maps Directions</span>
                  <span className="text-[10px] text-[#F15B4C]">↗</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCallback}
                  className="text-[#F15B4C] hover:underline font-semibold"
                >
                  Book a Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bangalore Office & Contact
            </h4>
            <div className="text-xs space-y-2.5 text-slate-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#F15B4C] mr-2 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-tight">
                  {FIRM_CONFIG.address}
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#F15B4C] mr-2 shrink-0" />
                <a href={`tel:${FIRM_CONFIG.phoneRaw}`} className="text-white font-bold hover:text-[#F15B4C] transition-colors">
                  {FIRM_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 text-slate-400 mr-2 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {FIRM_CONFIG.operatingHours}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="space-y-4 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Bar Council of India Disclaimer:</strong> As per the rules of the Bar Council of India, law firms and advocates are not permitted to solicit work or advertise. This website is meant solely for the purpose of informational guidance and basic client communication upon specific request. It does not constitute legal solicitation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-800 text-slate-400 text-xs">
            <p>© {new Date().getFullYear()} Advocate Sridharan & Associates. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Bangalore, Karnataka, India</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
