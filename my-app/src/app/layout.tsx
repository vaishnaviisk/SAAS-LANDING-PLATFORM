import React from 'react';
// import '../styles/index.css';
import "./globals.css";


export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Squid Landing Page',                           
    template: 'Squid Landing Page | %s',                     
  },
  description: 'Create stunning landing pages with Squid - the modern design tool for beautiful, responsive websites. Start your 15-day free trial today and transform your web presence.',
  keywords: 'landing page design, web design tool, website builder, responsive design, modern websites, design tool',
  
  openGraph: {
    type: 'website',
    title: {
      default: 'Squid Landing Page',                        
      template: 'Squid Landing Page | %s',                 
    },
    description: 'Transform your web presence with Squid\'s intuitive design tool. Create beautiful, responsive landing pages that convert visitors into customers.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fsquidland4287back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.12" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}