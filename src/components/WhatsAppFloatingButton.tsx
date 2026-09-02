import React, { useState } from 'react';
import { MessageCircle, X, Send, Shield, Clock } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const defaultMsg = 'Hello Advocate Sridharan, I would like to consult confidentially regarding a family law / divorce matter in Bangalore.';

  const handleOpenWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText || defaultMsg);
    const whatsappUrl = `https://wa.me/${FIRM_CONFIG.whatsappRaw}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const quickOptions = [
    { label: 'Mutual Consent Divorce Query', text: 'Hello Advocate Sridharan, I would like guidance on filing a Mutual Consent Divorce in Bangalore.' },
    { label: 'Child Custody & Visitation', text: 'Hello Advocate Sridharan, I need confidential advice on child custody and visitation rights in Bangalore.' },
    { label: 'Contested Divorce & Alimony', text: 'Hello Advocate Sridharan, I need legal representation for a contested divorce / alimony matter in Bangalore.' },
    { label: 'Schedule Urgent Office Meeting', text: 'Hello Advocate Sridharan, I would like to book an in-person consultation at your Bangalore MG Road office.' },
  ];

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popup Card */}
      {isOpen && (
        <div
          id="whatsapp-chat-popup"
          className="mb-3 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/20">
                  AS
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075E54] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight text-white">Advocate Sridharan</h4>
                <p className="text-[11px] text-emerald-100 flex items-center mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] mr-1.5"></span>
                  Online · Quick WhatsApp Consultation
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD]/40 text-slate-800 space-y-3">
            {/* Disclaimer pill */}
            <div className="flex items-center justify-center">
              <span className="text-[10px] bg-white/80 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs">
                <Shield className="w-3 h-3 text-emerald-600" />
                100% Confidential Legal Discussion
              </span>
            </div>

            {/* Advocate speech bubble */}
            <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-700 leading-relaxed border border-slate-100">
              <p className="font-medium text-[#1B3B7D] mb-1">Advocate Sridharan & Associates:</p>
              <p>
                Hello! How can our Bangalore family law team assist you today? You can choose a quick query topic below or message us directly.
              </p>
              <div className="flex items-center justify-end mt-1 text-[10px] text-slate-400 gap-1">
                <Clock className="w-3 h-3" />
                <span>Typically replies in minutes</span>
              </div>
            </div>

            {/* Quick action chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">Quick Topics:</p>
              {quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOpenWhatsApp(opt.text)}
                  className="w-full text-left text-xs bg-white hover:bg-[#25D366]/10 hover:border-[#25D366] text-slate-700 hover:text-[#075E54] font-medium p-2.5 rounded-xl border border-slate-200 transition-all flex items-center justify-between group shadow-2xs"
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#25D366] shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center bg-white rounded-xl border border-slate-300 p-1 focus-within:border-[#25D366] focus-within:ring-2 focus-within:ring-[#25D366]/20 transition-all shadow-2xs">
                <input
                  type="text"
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleOpenWhatsApp(customMsg);
                    }
                  }}
                  placeholder="Type your message..."
                  className="w-full text-xs px-2.5 py-1.5 focus:outline-hidden text-slate-800 placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => handleOpenWhatsApp(customMsg)}
                  className="p-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg transition-transform active:scale-95 shadow-sm"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2 group">
        {/* Tooltip / Label */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-800 text-xs font-bold rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-all hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <span>WhatsApp Us</span>
          </button>
        )}

        {/* WhatsApp Icon Button */}
        <button
          id="whatsapp-floating-button"
          type="button"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              setIsOpen(true);
            }
          }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white flex items-center justify-center shadow-xl transition-all duration-200 hover:shadow-2xl focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          aria-label="Chat with Advocate on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>

          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <svg
              className="w-8 h-8 sm:w-9 sm:h-9 fill-current text-white drop-shadow-xs"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          )}

          {/* Unread badge count */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F15B4C] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-xs">
              1
            </span>
          )}
        </button>
      </div>

    </div>
  );
};
