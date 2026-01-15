import { Metadata } from 'next';
 import SquidLandingPage from'./SquidLandingPage';

export const metadata: Metadata = {
  title: 'Squid - Beautiful Landing Page Design Tool',
  description: 'Create stunning landing pages with Squid - the modern design tool for beautiful, responsive websites. Start your 15-day free trial today and transform your web presence.',
  keywords: 'landing page design, web design tool, website builder, responsive design, modern websites, design tool, squid, beautiful design',
  
  openGraph: {
    title: 'Squid - Beautiful Landing Page Design Tool',
    description: 'Transform your web presence with Squid\'s intuitive design tool. Create beautiful, responsive landing pages that convert visitors into customers.',
  }
}

export default function Page() {
  return <SquidLandingPage />
}