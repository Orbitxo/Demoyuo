import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, ShieldCheck, Clock, Send, AlertCircle } from 'lucide-react';
import { FIRM_CONFIG } from '../data/firmData';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCaseType?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  defaultCaseType = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [caseType, setCaseType] = useState(defaultCaseType || 'Mutual Divorce');
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9 AM - 12 PM)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (defaultCaseType) {
      setCaseType(defaultCaseType);
    }
  }, [defaultCaseType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setError('Please provide a valid 10-digit mobile phone number.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulate reliable instant local form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setPhone('');
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <div
      id="callback-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={handleResetAndClose}
    >
      <div
        id="callback-modal-content"
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#1B3B7D] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-base text-white">Request a Confidential Callback</h3>
              <p className="text-[11px] text-blue-200">Advocate Sridharan & Associates · Bangalore</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Request Received</h4>
                <p className="text-sm text-slate-600 mt-1">
                  Thank you, <span className="font-semibold text-slate-800">{name}</span>. Advocate Sridharan will call you at <span className="font-semibold text-slate-800">{phone}</span> during your preferred time window.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 text-left space-y-1.5">
                <p className="font-bold text-slate-800">Need urgent legal advice right away?</p>
                <p>You can call our direct line without waiting for the callback window:</p>
                <a
                  href={`tel:${FIRM_CONFIG.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-sm rounded-lg mt-1"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {FIRM_CONFIG.phoneDisplay} Now</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600">
                Share a few brief details. We will reach out confidentially to discuss your options.
              </p>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="callback-name">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="callback-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B7D] focus:border-transparent"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="callback-phone">
                  Phone Number (Mobile) <span className="text-rose-500">*</span>
                </label>
                <input
                  id="callback-phone"
                  type="tel"
                  required
                  placeholder="e.g. 98801 23456"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B7D] focus:border-transparent"
                />
              </div>

              {/* Matter Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="callback-case-type">
                  Matter Type
                </label>
                <select
                  id="callback-case-type"
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B7D] focus:border-transparent bg-white"
                >
                  <option value="Mutual Divorce">Mutual Consent Divorce (Amicable)</option>
                  <option value="Contested Divorce">Contested Divorce / Maintenance</option>
                  <option value="Child Custody">Child Custody & Visitation Rights</option>
                  <option value="Family Law Consultation">General Family Law Consultation</option>
                  <option value="Other">Other Family Dispute</option>
                </select>
              </div>

              {/* Brief message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="callback-message">
                  Brief Message / Context (Optional)
                </label>
                <textarea
                  id="callback-message"
                  rows={2}
                  placeholder="Briefly describe your situation or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B3B7D] focus:border-transparent resize-none"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Preferred Time for Callback
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['Morning (9 AM - 12 PM)', 'Afternoon (12 PM - 4 PM)', 'Evening (4 PM - 8 PM)', 'Anytime (Urgent)'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setPreferredTime(slot)}
                      className={`p-2 rounded-lg border text-left font-medium transition-colors ${
                        preferredTime === slot
                          ? 'border-[#1B3B7D] bg-blue-50/70 text-[#1B3B7D]'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="callback-submit-button"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#F15B4C] hover:bg-[#D9483A] text-white font-bold text-base rounded-xl shadow-sm transition-all min-h-[48px]"
              >
                {isSubmitting ? (
                  <span>Submitting request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request My Callback</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                <span>100% confidential under Advocate-Client Privilege</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
