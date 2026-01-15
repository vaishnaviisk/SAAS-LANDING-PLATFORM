'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const router = useRouter();

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // ✅ AUTH GUARD (ONLY ADDITION)
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.replace('/login');
    }
  }, [router]);

  const features = [
    {
      icon: "/images/img_vector.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700.svg",
      title: "Responsive Design",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_46x44.svg",
      title: "Modern Interface",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_44x44.svg",
      title: "Fast Performance",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_46x44.svg",
      title: "Easy Integration",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_42x44.svg",
      title: "24/7 Support",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Designer",
      image: "/images/img_ellipse_4.png",
      alt: "Portrait of Sarah Johnson, Product Designer",
      text: "Squid has transformed the way we design landing pages. The intuitive interface and powerful features make it our go-to tool."
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      image: "/images/img_ellipse_9.png",
      alt: "Portrait of Michael Chen, Creative Director",
      text: "The best design tool I've used in years. It's fast, reliable, and produces stunning results every single time."
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "/images/img_ellipse_10.png",
      alt: "Portrait of Emily Rodriguez, UX Designer",
      text: "Squid\'s customization options are incredible. We can create unique designs that perfectly match our brand identity."
    }
  ];

  const faqs = [
    {
      question: "What is Squid and how does it work?",
      answer: "Squid is a modern design tool that helps you create beautiful, responsive landing pages. It combines intuitive drag-and-drop functionality with powerful customization options to deliver professional results."
    },
    {
      question: "Can I use Squid for commercial projects?",
      answer: "Yes! Squid is perfect for commercial projects. All designs created with Squid can be used for both personal and commercial purposes without any restrictions."
    },
    {
      question: "Is there a free trial available?",
      answer: "Absolutely! We offer a 15-day free trial with full access to all features. No credit card required to get started."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support through email, live chat, and our comprehensive documentation. Our team is always ready to help you succeed."
    },
    {
      question: "Can I export my designs?",
      answer: "Yes, you can export your designs in multiple formats including HTML, CSS, and various image formats. We also provide code snippets for easy integration."
    }
  ];

  const boxSections = [
    {
      title: "Analytics Dashboard",
      description: "Track your performance with real-time analytics and insights",
      image: "/images/img_group_108.png",
      alt: "Analytics dashboard showing performance metrics and charts"
    },
    {
      title: "Design Tools",
      description: "Professional design tools at your fingertips",
      image: "/images/img_group_115.png",
      alt: "Design tools interface with various editing options"
    },
    {
      title: "Collaboration",
      description: "Work together seamlessly with your team",
      image: "/images/img_group_132.png",
      alt: "Team collaboration interface showing shared workspace"
    }
  ];

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-[107px] w-[1px] h-[768px] bg-[linear-gradient(180deg,#404047_0%,_#40404700_100%)]" />
      <div className="absolute top-[303px] right-[117px] w-[96px] h-[96px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[48px] shadow-[0px_4px_20px_#888888ff]" />
      <div className="absolute top-[400px] left-[122px] w-[130px] h-[130px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[65px] shadow-[0px_4px_30px_#888888ff]" />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mt-[160px] mb-[70px]">
          <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
            <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-center text-[#ffffff] mb-[48px] sm:mb-[64px] md:mb-[96px] lg:mb-[128px] max-w-[800px]">
              Beautiful Landing Page Design for You
            </h1>
            
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[42%] min-w-[300px] mb-[48px]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>

            <Button
              text="Get Started Free"
              className="px-[28px] py-[10px]"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mt-[80px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[24px]">
              Powerful Features
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mx-auto mb-[64px]">
              Everything you need to create stunning landing pages
            </p>

            <div className="w-full max-w-[1110px] mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px]">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-[#17171b] rounded-[20px] p-[22px] sm:p-[32px] md:p-[46px] text-center space-y-[14px] sm:space-y-[24px] md:space-y-[38px] hover:bg-[#1a1a1e] transition-colors duration-200"
                  >
                    <div className="flex justify-center">
                      <div className="bg-[#222228] rounded-[30px] p-[22px] sm:p-[24px] md:p-[28px] w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] flex items-center justify-center">
                        <Image
                          src={feature?.icon}
                          alt={`${feature?.title} Icon`}
                          width={44}
                          height={44}
                          className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px]"
                        />
                      </div>
                    </div>
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-[#ffffff]">
                      {feature?.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] text-center text-[#9e9e9e]">
                      {feature?.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Box Sections */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mt-[120px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[64px]">
              Everything You Need
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {boxSections?.map((box, index) => (
                <div
                  key={index}
                  className="bg-[#222228] rounded-[20px] p-[32px] space-y-[24px] hover:bg-[#2a2a30] transition-colors duration-200"
                >
                  <div className="flex justify-center">
                    <Image
                      src={box?.image}
                      alt={box?.alt}
                      width={192}
                      height={154}
                      className="w-full max-w-[192px] h-auto"
                    />
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[27px] sm:leading-[30px] text-center text-[#ffffff]">
                    {box?.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[28px] text-center text-[#9e9e9e]">
                    {box?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-[#17171b] py-[80px] sm:py-[100px] md:py-[120px] mt-[120px]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[24px]">
              What Our Customers Say
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mx-auto mb-[64px]">
              Join thousands of satisfied customers who trust Squid
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] max-w-[1110px] mx-auto">
              {testimonials?.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#000000] rounded-[20px] p-[32px] space-y-[24px] hover:bg-[#111111] transition-colors duration-200"
                >
                  <p className="text-[14px] font-normal leading-[28px] text-left text-[#9e9e9e]">
                    "{testimonial?.text}"
                  </p>
                  <div className="flex items-center gap-[16px]">
                    <Image
                      src={testimonial?.image}
                      alt={testimonial?.alt}
                      width={48}
                      height={48}
                      className="w-[48px] h-[48px] rounded-full"
                    />
                    <div>
                      <h4 className="text-[16px] font-semibold leading-[24px] text-[#ffffff]">
                        {testimonial?.name}
                      </h4>
                      <p className="text-[12px] font-normal leading-[18px] text-[#9e9e9e]">
                        {testimonial?.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-4 sm:px-6 lg:px-14 py-[80px] sm:py-[100px] md:py-[120px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff] mb-[24px]">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[600px] mx-auto mb-[64px]">
              Everything you need to know about Squid
            </p>

            <div className="max-w-[800px] mx-auto space-y-[16px]">
              {faqs?.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#17171b] rounded-[16px] overflow-hidden hover:bg-[#1a1a1e] transition-colors duration-200"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-[24px] sm:px-[32px] py-[20px] sm:py-[24px] flex justify-between items-center text-left"
                  >
                    <h3 className="text-[14px] sm:text-[16px] font-semibold leading-[24px] text-[#ffffff] pr-[16px]">
                      {faq?.question}
                    </h3>
                    <span className="text-[#ffffff] text-[20px] flex-shrink-0">
                      {openFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === index && (
                    <div className="px-[24px] sm:px-[32px] pb-[20px] sm:pb-[24px]">
                      <p className="text-[13px] sm:text-[14px] font-normal leading-[24px] sm:leading-[28px] text-[#9e9e9e]">
                        {faq?.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 sm:px-6 lg:px-14 mb-[80px]">
          <div className="w-full max-w-[1440px] mx-auto">
            <div className="relative w-full max-w-[1110px] mx-auto">
              <div className="relative bg-[linear-gradient(174deg,#ff9797_0%,_#8053ff_100%)] rounded-[40px] p-[60px] sm:p-[80px] text-center">
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[65px] text-center text-[#ffffff] mb-[24px]">
                  Ready to Get Started?
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-[#ffffff] mb-[40px] max-w-[600px] mx-auto">
                  Join thousands of designers and start creating beautiful landing pages today
                </p>
                <Button
                  text="Start Free Trial"
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