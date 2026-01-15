'use client';
import Image from'next/image';
 import Button from'@/components/ui/Button';

export default function TrialSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-14">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="relative w-full max-w-[1110px] mx-auto">
          {/* Main Gradient Container */}
          <div className="relative bg-[linear-gradient(174deg,#ff9797_0%,_#8053ff_100%)] rounded-[40px] p-[18px] overflow-hidden">
            
            {/* Content Layout */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[368px]">
              
              {/* Left Content */}
              <div className="w-full lg:w-[42%] text-center lg:text-left space-y-[20px] sm:space-y-[30px] z-10 lg:pl-[60px] lg:pr-[20px] py-[40px] lg:py-0">
                {/* Love our Tool Text */}
                <div className="mb-[80px] lg:mb-[40px]">
                  <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[24px] sm:leading-[27px] md:leading-[30px] text-center lg:text-left text-[#ffffff]">
                    Love our Our Tool?
                  </p>
                </div>
                
                {/* Main Heading */}
                <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[65px] text-center lg:text-left text-[#ffffff]">
                  Fell Free to Join our 15 Days Free Trial
                </h2>
                
                {/* CTA Button */}
                <div className="pt-[20px] lg:pt-0 lg:mb-[52px]">
                  <Button
                    text="Download Template"
                    fill_background_color="#000000"
                    className="px-[22px] sm:px-[24px] md:px-[28px] py-[8px] sm:py-[9px] md:py-[10px] bg-[#000000] text-[#ffffff]"
                  />
                </div>
              </div>

              {/* Right Content - Graphic */}
              <div className="w-full lg:w-[48%] flex justify-center lg:justify-end lg:-ml-[40px] mt-[20px] lg:mt-0">
                <Image
                  src="/images/img_frame_gray_900_05.svg"
                  alt="Trial Graphic"
                  width={554}
                  height={368}
                  className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[554px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}