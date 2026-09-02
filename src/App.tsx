import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutTrustSection } from './components/AboutTrustSection';
import { LocationMapSection } from './components/LocationMapSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { CallbackModal } from './components/CallbackModal';
import { MobileStickyCallBar } from './components/MobileStickyCallBar';

export default function App() {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenCallback = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setIsCallbackOpen(true);
  };

  const handleCloseCallback = () => {
    setIsCallbackOpen(false);
    setSelectedService('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-[#F15B4C]/20 selection:text-[#1B3B7D]">
      {/* 1. Sticky Header */}
      <Header onOpenCallback={() => handleOpenCallback()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenCallback={() => handleOpenCallback()} />

        {/* 3. Services Section ("How We Help") */}
        <ServicesSection onOpenCallback={(title) => handleOpenCallback(title)} />

        {/* 4. How It Works (3 numbered steps) */}
        <ProcessSection onOpenCallback={() => handleOpenCallback()} />

        {/* 5. Testimonials / Proof Section (5.0★ on Google) */}
        <TestimonialsSection onOpenCallback={() => handleOpenCallback()} />

        {/* 6. About / Trust Section */}
        <AboutTrustSection onOpenCallback={() => handleOpenCallback()} />

        {/* 7. Google Location Map Section */}
        <LocationMapSection onOpenCallback={() => handleOpenCallback()} />

        {/* 8. Final CTA Section (Full-width Navy) */}
        <FinalCTASection onOpenCallback={() => handleOpenCallback()} />
      </main>

      {/* Footer */}
      <Footer onOpenCallback={() => handleOpenCallback()} />

      {/* Sticky Mobile Call Bar for phone-first conversions */}
      <MobileStickyCallBar onOpenCallback={() => handleOpenCallback()} />

      {/* Callback Request Modal Dialog */}
      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={handleCloseCallback}
        defaultCaseType={selectedService}
      />
    </div>
  );
}
