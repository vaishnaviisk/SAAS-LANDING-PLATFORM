'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create my first landing page?',
      answer:
        'After signing up, choose a template, customize it using our editor, and publish your page. No coding required.',
    },
    {
      question: 'Do I need coding knowledge to use Squid?',
      answer:
        'No. Squid is built for non-technical users. Developers can still access advanced customizations if needed.',
    },
    {
      question: 'Is Squid mobile responsive?',
      answer:
        'Yes. All pages are fully responsive and optimized for desktop, tablet, and mobile devices.',
    },
    {
      question: 'Can I integrate analytics tools?',
      answer:
        'You can integrate Google Analytics, Facebook Pixel, and other third-party tools easily.',
    },
    {
      question: 'Is there customer support available?',
      answer:
        'Yes. We offer email support, live chat, and priority support on higher plans.',
    },
  ];

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      <Header />

      {/* HERO */}
      <section className="w-full px-4 sm:px-6 lg:px-14 mt-[120px] mb-[80px]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-center text-[#ffffff] mb-[24px] max-w-[800px]">
            Frequently Asked Questions
          </h1>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px]">
            Everything you need to know about Squid and how it works.
          </p>
        </div>
      </section>

      {/* FAQ SECTION – SAME AS PRICING */}
      <section className="w-full bg-[#17171b] py-[80px] sm:py-[100px] md:py-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
          <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[24px]">
            FAQs
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mx-auto mb-[64px]">
            Common questions about Squid
          </p>

          <div className="max-w-[800px] mx-auto space-y-[16px]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#000000] rounded-[16px] overflow-hidden hover:bg-[#111111] transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-[24px] sm:px-[32px] py-[20px] sm:py-[24px] flex justify-between items-center text-left"
                >
                  <h3 className="text-[14px] sm:text-[16px] font-semibold leading-[24px] text-[#ffffff] pr-[16px]">
                    {faq.question}
                  </h3>
                  <span className="text-[#ffffff] text-[20px] flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-[24px] sm:px-[32px] pb-[20px] sm:pb-[24px]">
                    <p className="text-[13px] sm:text-[14px] font-normal leading-[24px] sm:leading-[28px] text-[#9e9e9e]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – SAME STYLE AS PRICING */}
      <section className="w-full px-4 sm:px-6 lg:px-14 mb-[80px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative w-full max-w-[1110px] mx-auto">
            <div className="bg-[linear-gradient(174deg,#ff9797_0%,_#8053ff_100%)] rounded-[40px] p-[60px] sm:p-[80px] text-center">
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[65px] text-[#ffffff] mb-[24px]">
                Still have questions?
              </h2>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#ffffff] mb-[40px] max-w-[600px] mx-auto">
                Our team is here to help you anytime.
              </p>

              <Button
                text="Contact Support"
                fill_background_color="#000000"
                className="px-[28px] py-[10px] bg-[#000000] text-[#ffffff]"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
