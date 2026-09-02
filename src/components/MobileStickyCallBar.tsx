import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface MobileStickyCallBarProps {
  onOpenCallback: () => void;
}

export const MobileStickyCallBar: React.FC<MobileStickyCallBarProps> = ({ onOpenCallback }) => {
  return (
    <aside
      aria-label="Quick Call Bar"
      id="mobile-sticky-call-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-lg"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Callback Trigger */}
        <button
          type="button"
          onClick={onOpenCallback}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-slate-100 hover:bg-slate-200 text-[#1B3B7D] font-bold text-xs rounded-xl border border-slate-300 transition-colors min-h-[48px]"
        >
          <MessageSquare className="w-4 h-4 text-[#1B3B7D]" />
          <span>Callback</span>
        </button>

        {/* Big Tap to Call Button */}
        <a
          href={`tel:${FIRM_CONFIG.phoneRaw}`}
          id="mobile-bottom-tap-to-call"
          className="flex-[2] inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-extrabold text-sm rounded-xl shadow-md transition-transform active:scale-[0.98] min-h-[48px]"
        >
          <div className="p-1 bg-white/20 rounded-md">
            <Phone className="w-4 h-4 text-white animate-bounce" />
          </div>
          <span>Call Now: {FIRM_CONFIG.phoneDisplay}</span>
        </a>
      </div>
    </aside>
  );
};
