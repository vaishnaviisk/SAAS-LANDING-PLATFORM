'use client';

 import Header from'@/components/common/Header';
 import Footer from'@/components/common/Footer';
 import HeroSection from'./HeroSection';
 import DashboardSection from'./DashboardSection';
 import FeatureBoxesSection from'./FeatureBoxesSection';
 import GuideSection from'./GuideSection';
 import CompaniesSection from'./CompaniesSection';
 import TrialSection from'./TrialSection';
 import ContactSection from'./ContactSection';

export default function SquidLandingPage() {
  return (
    <div className="w-full bg-[#000000] min-h-screen">
      {/* Background Gradient Line */}
      <div className="absolute top-0 right-[107px] w-[1px] h-[768px] bg-[linear-gradient(180deg,#404047_0%,_#40404700_100%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-[303px] right-[117px] w-[96px] h-[96px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[48px] shadow-[0px_4px_20px_#888888ff]" />
      <div className="absolute top-[400px] left-[122px] w-[130px] h-[130px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[65px] shadow-[0px_4px_30px_#888888ff]" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Dashboard Mockup Section */}
        <DashboardSection />

        {/* Feature Boxes Section */}
        <FeatureBoxesSection />

        {/* Guide Section */}
        <GuideSection />

        {/* Companies Section */}
        <CompaniesSection />

        {/* Trial Section */}
        <TrialSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}