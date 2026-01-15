'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "5 Landing Pages",
        "Basic Templates",
        "Email Support",
        "Mobile Responsive",
        "Basic Analytics"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Best for growing businesses and teams",
      monthlyPrice: 49,
      annualPrice: 490,
      features: [
        "Unlimited Landing Pages",
        "Premium Templates",
        "Priority Support",
        "Advanced Analytics",
        "Custom Domain",
        "A/B Testing",
        "Team Collaboration"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Professional",
        "Dedicated Account Manager",
        "Custom Integrations",
        "White Label Options",
        "Advanced Security",
        "SLA Guarantee",
        "Training & Onboarding"
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For Enterprise plans, we also offer invoice billing."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 15-day free trial with full access to all Professional plan features. No credit card required to start."
    },
    {
      question: "What happens when I cancel?",
      answer: "You can cancel anytime. Your account will remain active until the end of your billing period, and you'll retain access to all your data."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund within 30 days of purchase."
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "Marketing Director",
      plan: "Professional",
      image: "/images/img_ellipse_11.png",
      alt: "Portrait of David Martinez, Marketing Director",
      text: "The Professional plan has everything we need. The ROI has been incredible since we switched to Squid."
    },
    {
      name: "Lisa Thompson",
      role: "Startup Founder",
      plan: "Starter",
      image: "/images/img_ellipse_4.png",
      alt: "Portrait of Lisa Thompson, Startup Founder",
      text: "Perfect for our startup. The Starter plan gave us everything we needed to launch quickly and affordably."
    }
  ];

  const getPrice = (plan: typeof pricingPlans[0]) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan: typeof pricingPlans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    return monthlyCost - annualCost;
  };

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-[107px] w-[1px] h-[768px] bg-[linear-gradient(180deg,#404047_0%,_#40404700_100%)]" />
      <div className="absolute top-[303px] right-[117px] w-[96px] h-[96px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[48px] shadow-[0px_4px_20px_#888888ff]" />
      <div className="absolute top-[400px] left-[122px] w-[130px] h-[130px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[65px] shadow-[0px_4px_30px_#888888ff]" />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mt-[120px] mb-[80px]">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-center text-[#ffffff] mb-[24px] max-w-[800px]">
              Simple, Transparent Pricing
            </h1>
            
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mb-[48px]">
              Choose the perfect plan for your needs. All plans include a 15-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center gap-[16px] bg-[#17171b] rounded-[40px] p-[8px]">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-[24px] py-[10px] rounded-[32px] text-[14px] font-semibold transition-all duration-200 ${
                  billingPeriod === 'monthly' ?'bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] text-[#ffffff]' :'text-[#9e9e9e] hover:text-[#ffffff]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-[24px] py-[10px] rounded-[32px] text-[14px] font-semibold transition-all duration-200 ${
                  billingPeriod === 'annual' ?'bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] text-[#ffffff]' :'text-[#9e9e9e] hover:text-[#ffffff]'
                }`}
              >
                Annual
                <span className="ml-[8px] text-[12px] text-[#ffffff] bg-[#00000040] px-[8px] py-[2px] rounded-[12px]">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mb-[120px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1110px] mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-[20px] p-[32px] sm:p-[40px] space-y-[24px] transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-[linear-gradient(174deg,#ff9797_0%,_#8053ff_100%)] transform scale-105'
                      : 'bg-[#17171b] hover:bg-[#1a1a1e]'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-center mb-[16px]">
                      <span className="bg-[#00000040] text-[#ffffff] text-[12px] font-semibold px-[16px] py-[6px] rounded-[20px]">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center space-y-[12px]">
                    <h3 className="text-[24px] sm:text-[28px] font-semibold leading-[36px] text-[#ffffff]">
                      {plan.name}
                    </h3>
                    <p className="text-[14px] font-normal leading-[24px] text-[#ffffff] opacity-80">
                      {plan.description}
                    </p>
                  </div>

                  <div className="text-center py-[24px]">
                    <div className="flex items-baseline justify-center gap-[8px]">
                      <span className="text-[48px] sm:text-[56px] font-semibold leading-[64px] text-[#ffffff]">
                        ${getPrice(plan)}
                      </span>
                      <span className="text-[16px] font-normal text-[#ffffff] opacity-70">
                        /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && (
                      <p className="text-[12px] font-normal text-[#ffffff] opacity-70 mt-[8px]">
                        Save ${getSavings(plan)} per year
                      </p>
                    )}
                  </div>

                  <div className="space-y-[16px]">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-[12px]">
                        <div className="w-[20px] h-[20px] rounded-full bg-[#ffffff20] flex items-center justify-center flex-shrink-0 mt-[2px]">
                          <span className="text-[#ffffff] text-[12px]">✓</span>
                        </div>
                        <span className="text-[14px] font-normal leading-[24px] text-[#ffffff]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-[24px]">
                    <Button
                      text="Get Started"
                      fill_background_color={plan.highlighted ? '#000000' : undefined}
                      className={`w-full px-[28px] py-[12px] ${
                        plan.highlighted ? 'bg-[#000000] text-[#ffffff]' : ''
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full bg-[#17171b] py-[80px] sm:py-[100px] md:py-[120px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[64px]">
              Compare All Features
            </h2>

            <div className="max-w-[900px] mx-auto bg-[#000000] rounded-[20px] p-[32px] sm:p-[48px]">
              <div className="space-y-[24px]">
                {[
                  { feature: 'Landing Pages', starter: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Templates', starter: 'Basic', pro: 'Premium', enterprise: 'Premium + Custom' },
                  { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated Manager' },
                  { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced + Custom' },
                  { feature: 'Team Members', starter: '1', pro: '10', enterprise: 'Unlimited' },
                  { feature: 'Custom Domain', starter: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'A/B Testing', starter: '✗', pro: '✓', enterprise: '✓' },
                  { feature: 'White Label', starter: '✗', pro: '✗', enterprise: '✓' }
                ].map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-[16px] py-[16px] border-b border-[#222228] last:border-b-0"
                  >
                    <div className="col-span-1 text-[14px] font-semibold text-[#ffffff]">
                      {row.feature}
                    </div>
                    <div className="text-[14px] text-center text-[#9e9e9e]">{row.starter}</div>
                    <div className="text-[14px] text-center text-[#9e9e9e]">{row.pro}</div>
                    <div className="text-[14px] text-center text-[#9e9e9e]">{row.enterprise}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full px-4 sm:px-6 lg:px-14 py-[80px] sm:py-[100px] md:py-[120px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[64px]">
              Trusted by Customers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] max-w-[800px] mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#17171b] rounded-[20px] p-[32px] space-y-[24px] hover:bg-[#1a1a1e] transition-colors duration-200"
                >
                  <div className="flex items-center gap-[16px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.alt}
                      width={56}
                      height={56}
                      className="w-[56px] h-[56px] rounded-full"
                    />
                    <div>
                      <h4 className="text-[16px] font-semibold leading-[24px] text-[#ffffff]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[12px] font-normal leading-[18px] text-[#9e9e9e]">
                        {testimonial.role}
                      </p>
                      <span className="text-[11px] font-semibold text-[#ff9797]">
                        {testimonial.plan} Plan
                      </span>
                    </div>
                  </div>
                  <p className="text-[14px] font-normal leading-[28px] text-[#9e9e9e]">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#17171b] py-[80px] sm:py-[100px] md:py-[120px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[24px]">
              Pricing FAQs
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mx-auto mb-[64px]">
              Common questions about our pricing and plans
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

        {/* Enterprise CTA */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mb-[80px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="relative w-full max-w-[1110px] mx-auto">
              <div className="relative bg-[linear-gradient(174deg,#ff9797_0%,_#8053ff_100%)] rounded-[40px] p-[60px] sm:p-[80px] text-center">
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[65px] text-center text-[#ffffff] mb-[24px]">
                  Need a Custom Solution?
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-[#ffffff] mb-[40px] max-w-[600px] mx-auto">
                  Contact our sales team for enterprise pricing and custom solutions tailored to your needs
                </p>
                <Button
                  text="Contact Sales"
                  fill_background_color="#000000"
                  className="px-[28px] py-[10px] bg-[#000000] text-[#ffffff]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}