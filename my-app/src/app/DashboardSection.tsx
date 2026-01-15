'use client';
import Image from'next/image';

export default function DashboardSection() {
  return (
    // <section className="w-full px-4 sm:px-6 lg:px-14 -mt-[120px] sm:-mt-[160px]">
   <section className="
  w-full px-4 sm:px-6 lg:px-14
  -mt-[280px]
  sm:-mt-[340px]
  md:-mt-[420px]
  lg:-mt-[500px]
  relative z-30
">


      <div className="w-full max-w-[1440px] mx-auto">
        <div className="relative w-full">
          {/* Main Stack Container */}
          <div className="relative w-full h-[658px] sm:h-[800px] md:h-[900px] lg:h-[1032px]">
            
            {/* Right Side Download Button */}
            <div className="absolute top-0 right-0 flex flex-col items-center gap-[302px] w-[14%] z-10">
              {/* Top Decorative Circle */}
              <div className="w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] md:w-[64px] md:h-[64px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[16px] sm:rounded-[24px] md:rounded-[32px] shadow-[0px_4px_20px_#888888ff] ml-[34px]" />
              
              {/* Download Button */}
              {/* <div className="bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] rounded-[5px] px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-2">
                <span className="text-[12px] sm:text-[14px] font-normal leading-[18px] sm:leading-[21px] text-[#ffffff]">
                  Download Template
                </span>
              </div> */}
            </div>

            {/* Center Dashboard Content */}
            <div className="absolute top-0 left-[20%] right-[20%] flex flex-col items-center">
              {/* Main Dashboard Image */}
              <div className="relative w-full max-w-[538px] mb-[43px] sm:mb-[60px] md:mb-[80px]">
                <Image
                  src="/images/img_ellipse_5.png"
                  alt="Dashboard Analytics"
                  width={538}
                  height={508}
                  className="w-full h-auto"
                />
              </div>

              {/* Dashboard Cards Container */}
              <div className="w-full bg-[#131415] rounded-[28px] p-[21px] sm:p-[32px] md:p-[42px] -mt-[28px] relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] sm:gap-[20px] md:gap-[28px]">
                  
                  {/* Left Dashboard Card */}
                  <div className="bg-[#222228] rounded-[20px] p-[16px] sm:p-[20px] md:p-[24px] space-y-[16px] sm:space-y-[20px]">
                    {/* Search Icon */}
                    <div className="flex justify-center mb-[20px]">
                      <Image
                        src="/images/img_search.svg"
                        alt="Search"
                        width={40}
                        height={32}
                        className="w-[32px] h-[26px] sm:w-[40px] sm:h-[32px]"
                      />
                    </div>
                    
                    {/* Separator Line */}
                    <div className="w-full h-[1px] bg-[#313139]" />
                    
                    {/* List Items */}
                    <div className="space-y-[20px] sm:space-y-[24px]">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center gap-[16px] sm:gap-[20px]">
                          <div className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] bg-[#313139] rounded-[4px] sm:rounded-[5px]" />
                          <Image
                            src="/images/img_group_107.svg"
                            alt={`Item ${item}`}
                            width={106}
                            height={20}
                            className="flex-1 max-w-[85px] sm:max-w-[106px] h-[16px] sm:h-[20px]"
                          />
                        </div>
                      ))}
                      
                      {/* Profile Section */}
                      <div className="flex flex-col items-center gap-[14px] sm:gap-[18px] mt-[35px] sm:mt-[44px]">
                        <Image
                          src="/images/img_ellipse_4.png"
                          alt="Profile"
                          width={42}
                          height={42}
                          className="w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-[17px] sm:rounded-[20px]"
                        />
                        <Image
                          src="/images/img_group_107_blue_gray_900.svg"
                          alt="Profile Info"
                          width={106}
                          height={20}
                          className="w-[85px] sm:w-[106px] h-[16px] sm:h-[20px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Middle Dashboard Card */}
                  <div className="space-y-[20px] sm:space-y-[26px]">
                    {/* Top Chart Card */}
                    <div className="bg-[#222228] rounded-[20px] p-[14px] sm:p-[18px] md:p-[24px] flex justify-center">
                      <Image
                        src="/images/img_group_115.png"
                        alt="Chart"
                        width={192}
                        height={154}
                        className="w-full max-w-[154px] sm:max-w-[192px] h-auto"
                      />
                    </div>
                    
                    {/* Bottom Statistics Card */}
                    <div className="bg-[#222228] rounded-[20px] p-[14px] sm:p-[18px] md:p-[24px] space-y-[18px] sm:space-y-[22px]">
                      <div className="flex justify-between items-center">
                        <Image
                          src="/images/img_group_107.svg"
                          alt="Stats"
                          width={106}
                          height={20}
                          className="flex-1 max-w-[85px] sm:max-w-[106px] h-[16px] sm:h-[20px] ml-2"
                        />
                        <div className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] bg-[#313139] rounded-[4px] sm:rounded-[5px]" />
                      </div>
                      <div className="w-full h-[1px] bg-[#313139] ml-2" />
                      <Image
                        src="/images/img_group_132.png"
                        alt="Dashboard Stats"
                        width={170}
                        height={92}
                        className="w-full max-w-[136px] sm:max-w-[170px] h-auto mx-auto"
                      />
                    </div>
                  </div>

                  {/* Right Dashboard Card */}
                  <div className="space-y-[20px] sm:space-y-[26px]">
                    {/* Main Analytics Card */}
                    <div className="bg-[#222228] rounded-[20px] p-[12px] sm:p-[16px] space-y-[4px] relative">
                      <div className="space-y-[4px]">
                        {/* Header */}
                        <div className="flex justify-between items-center px-[12px] sm:px-[18px]">
                          <Image
                            src="/images/img_group_107.svg"
                            alt="Header"
                            width={106}
                            height={20}
                            className="flex-1 max-w-[85px] sm:max-w-[106px] h-[16px] sm:h-[20px]"
                          />
                          <div className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] bg-[#313139] rounded-[4px] sm:rounded-[5px]" />
                        </div>
                        
                        {/* Main Chart */}
                        <Image
                          src="/images/img_group_108.png"
                          alt="Main Chart"
                          width={192}
                          height={54}
                          className="w-full max-w-[154px] sm:max-w-[192px] h-auto px-[12px] sm:px-[18px] mt-[19px] sm:mt-[24px]"
                        />
                        
                        {/* Chart Stack with Gradient Overlay */}
                        <div className="relative px-[12px] sm:px-[18px]">
                          <div className="space-y-[3px] sm:space-y-[4px]">
                            {[1, 2, 3].map((item) => (
                              <Image
                                key={item}
                                src="/images/img_group_108.png"
                                alt={`Chart ${item}`}
                                width={192}
                                height={54}
                                className="w-full max-w-[154px] sm:max-w-[192px] h-auto"
                              />
                            ))}
                          </div>
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,#222228_0%,_#22222800_100%)]" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Empty Card */}
                    <div className="bg-[#222228] rounded-[20px] w-full h-[82px] sm:h-[102px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}