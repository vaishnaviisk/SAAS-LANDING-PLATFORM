'use client';
import Image from'next/image';
 import Button from'@/components/ui/Button';

export default function GuideSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 mt-[30px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[22px] items-center">
          
          {/* Left Side - Circular Diagram */}
          <div className="relative w-full max-w-[678px] mx-auto">
            <div className="relative w-full aspect-square">
              {/* Outer Border Circle */}
              <div className="absolute inset-0 border border-[#22222887] rounded-full" />
              
              {/* Inner Circles and Content */}
              <div className="absolute top-[12%] left-[12%] w-[75%] h-[75%]">
                {/* Multiple Nested Circles */}
                <div className="absolute inset-0 border border-[#222228] rounded-full" />
                <div className="absolute top-[12%] left-[12%] w-[76%] h-[76%] border border-[#222228] rounded-full" />
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-[#222228] rounded-full" />
                <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] border border-[#222228] rounded-full" />
                
                {/* Center Circle */}
                <div className="absolute top-[37%] left-[37%] w-[25%] h-[25%] bg-[#18181c] rounded-full" />
                
                {/* Content Elements */}
                <div className="absolute inset-0 p-[46px]">
                  {/* Top Icon */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <Image
                      src="/images/img_group_124.png"
                      alt="Top Icon"
                      width={32}
                      height={32}
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                    />
                  </div>
                  
                  {/* Left Profile */}
                  <div className="absolute left-0 top-[20%]">
                    <Image
                      src="/images/img_ellipse_11.png"
                      alt="Profile 1"
                      width={66}
                      height={66}
                      className="w-[50px] h-[50px] sm:w-[66px] sm:h-[66px] rounded-full"
                    />
                  </div>
                  
                  {/* Right Profile */}
                  <div className="absolute right-0 top-[25%]">
                    <Image
                      src="/images/img_ellipse_9.png"
                      alt="Profile 2"
                      width={66}
                      height={66}
                      className="w-[50px] h-[50px] sm:w-[66px] sm:h-[66px] rounded-full"
                    />
                  </div>
                  
                  {/* Center Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/images/img_vector_white_a700_52x64.svg"
                      alt="Center Logo"
                      width={64}
                      height={52}
                      className="w-[48px] h-[39px] sm:w-[64px] sm:h-[52px]"
                    />
                  </div>
                  
                  {/* Bottom Left Profile */}
                  <div className="absolute bottom-[15%] left-[15%]">
                    <Image
                      src="/images/img_ellipse_10.png"
                      alt="Profile 3"
                      width={66}
                      height={66}
                      className="w-[50px] h-[50px] sm:w-[66px] sm:h-[66px] rounded-full"
                    />
                  </div>
                  
                  {/* Bottom Right Icon */}
                  <div className="absolute bottom-[10%] right-[20%]">
                    <Image
                      src="/images/img_group_124.png"
                      alt="Bottom Icon"
                      width={32}
                      height={32}
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                    />
                  </div>
                  
                  {/* Left Bottom Icon */}
                  <div className="absolute bottom-[25%] left-0">
                    <Image
                      src="/images/img_group_124.png"
                      alt="Left Icon"
                      width={32}
                      height={32}
                      className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-[12px] sm:space-y-[16px] md:space-y-[20px] max-w-[444px] lg:ml-[40px]">
            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[48px] md:leading-[64px] text-left text-[#ffffff]">
              We are here to guide and help you at all times
            </h2>
            
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-left text-[#9e9e9e] max-w-[86%] mt-[12px]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
            </p>
            
            <div className="mt-[36px] sm:mt-[42px] md:mt-[46px]">
              <Button
                text="Download"
                className="px-[22px] sm:px-[24px] md:px-[28px] py-[8px] sm:py-[9px] md:py-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}