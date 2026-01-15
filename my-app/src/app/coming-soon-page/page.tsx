'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EditText from '@/components/ui/EditText';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(2847);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date (30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = launchDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setIsSubscribed(true);
      setSubscriberCount(prev => prev + 1);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  const features = [
    {
      icon: '🎨',
      title: 'Advanced Design Tools',
      description: 'Next-generation design capabilities with AI-powered suggestions'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance for seamless design experience'
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools and platforms'
    },
    {
      icon: '🚀',
      title: 'One-Click Deploy',
      description: 'Publish your designs instantly with a single click'
    }
  ];

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-[150px] right-[120px] w-[180px] h-[180px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[90px] shadow-[0px_4px_40px_#888888ff] opacity-40" />
      <div className="absolute top-[400px] left-[100px] w-[140px] h-[140px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[70px] shadow-[0px_4px_30px_#888888ff] opacity-40" />
      <div className="absolute bottom-[200px] right-[80px] w-[100px] h-[100px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[50px] shadow-[0px_4px_20px_#888888ff] opacity-40" />

      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-14 py-[80px] sm:py-[100px] md:py-[120px]">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-[64px]">
            <div className="inline-block mb-[24px]">
              <span className="px-[20px] py-[8px] bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] text-[#ffffff] text-[12px] font-semibold rounded-[20px]">
                COMING SOON
              </span>
            </div>
            
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-[#ffffff] mb-[24px] max-w-[900px] mx-auto">
              Something Amazing is on the Way
            </h1>
            
            <p className="text-[16px] sm:text-[18px] font-normal leading-[26px] sm:leading-[28px] text-[#9e9e9e] max-w-[700px] mx-auto mb-[16px]">
              We're working hard to bring you revolutionary new features that will transform the way you design. Be the first to know when we launch.
            </p>

            {/* Subscriber Count */}
            <div className="flex items-center justify-center gap-[12px] text-[14px] text-[#9e9e9e] mb-[48px]">
              <div className="flex -space-x-2">
                <Image
                  src="/images/img_ellipse_4.png"
                  alt="Subscriber avatar"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-[#000000]"
                />
                <Image
                  src="/images/img_ellipse_5.png"
                  alt="Subscriber avatar"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-[#000000]"
                />
                <Image
                  src="/images/img_ellipse_9.png"
                  alt="Subscriber avatar"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-[#000000]"
                />
                <Image
                  src="/images/img_ellipse_10.png"
                  alt="Subscriber avatar"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-[#000000]"
                />
                <Image
                  src="/images/img_ellipse_11.png"
                  alt="Subscriber avatar"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] rounded-full border-2 border-[#000000]"
                />
              </div>
              <span>
                <span className="text-[#ffffff] font-semibold">{subscriberCount.toLocaleString()}</span> people already joined the waitlist
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-[64px]">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#ffffff] text-center mb-[32px]">
              Launching In
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[16px] sm:gap-[24px] max-w-[700px] mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#18181c] rounded-[16px] p-[24px] sm:p-[32px] border border-[#222228] text-center"
                >
                  <div className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[#ffffff] leading-none mb-[12px]">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[12px] sm:text-[14px] font-normal text-[#9e9e9e] uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Email Subscription Form */}
          <div className="max-w-[600px] mx-auto mb-[80px]">
            <div className="bg-[#18181c] rounded-[20px] p-[32px] sm:p-[48px] border border-[#222228]">
              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#ffffff] text-center mb-[16px]">
                Get Early Access
              </h3>
              <p className="text-[14px] sm:text-[16px] text-[#9e9e9e] text-center mb-[32px]">
                Join our exclusive waitlist and be among the first to experience the future of design. Plus, get 20% off on launch day!
              </p>

              {isSubscribed ? (
                <div className="text-center py-[24px]">
                  <div className="inline-flex items-center justify-center w-[64px] h-[64px] bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] rounded-full mb-[16px]">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-[20px] font-semibold text-[#ffffff] mb-[8px]">
                    You're on the list!
                  </h4>
                  <p className="text-[14px] text-[#9e9e9e]">
                    We'll notify you as soon as we launch. Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-[12px]">
                  <EditText
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-[20px] py-[16px] bg-[#000000] text-[#ffffff] border border-[#222228] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  />
                  <Button
                    type="submit"
                    text="Notify Me"
                    className="px-[32px] py-[16px] whitespace-nowrap"
                  />
                </form>
              )}

              <div className="flex items-center justify-center gap-[8px] mt-[24px] text-[12px] text-[#9e9e9e]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>We respect your privacy. Unsubscribe anytime.</span>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-[80px]">
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-semibold text-[#ffffff] text-center mb-[48px]">
              What's Coming
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#18181c] rounded-[16px] p-[32px] border border-[#222228] hover:border-purple-500 transition-all duration-200 text-center"
                >
                  <div className="text-[48px] mb-[16px]">{feature.icon}</div>
                  <h3 className="text-[18px] font-semibold text-[#ffffff] mb-[12px]">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-[#9e9e9e] leading-[22px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-[14px] text-[#9e9e9e] mb-[24px]">
              Stay connected and follow our journey
            </p>
            <div className="flex items-center justify-center gap-[16px]">
              <Button className="w-[48px] h-[48px] bg-[#18181c] rounded-[8px] p-[12px] hover:bg-[#222228] transition-all duration-200 border border-[#222228] hover:border-purple-500">
                <Image
                  src="/images/img_group_26.svg"
                  alt="Social Icon 1"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </Button>
              <Button className="w-[48px] h-[48px] bg-[#18181c] rounded-[8px] p-[12px] hover:bg-[#222228] transition-all duration-200 border border-[#222228] hover:border-purple-500">
                <Image
                  src="/images/img_group_27.svg"
                  alt="Social Icon 2"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </Button>
              <Button className="w-[48px] h-[48px] bg-[#18181c] rounded-[8px] p-[12px] hover:bg-[#222228] transition-all duration-200 border border-[#222228] hover:border-purple-500">
                <Image
                  src="/images/img_group_28.svg"
                  alt="Social Icon 3"
                  width={24}
                  height={24}
                  className="w-full h-full"
                />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}