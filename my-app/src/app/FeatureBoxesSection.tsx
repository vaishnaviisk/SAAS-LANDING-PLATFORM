'use client';
import Image from'next/image';

export default function FeatureBoxesSection() {
  const features = [
    {
      icon: "/images/img_vector.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_46x44.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_44x44.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_46x44.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    },
    {
      icon: "/images/img_vector_white_a700_42x44.svg",
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem"
    }
  ]

  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 mt-[4px]">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Background Image */}
  <div className="relative w-full -mt-[180px] sm:-mt-[220px] md:-mt-[280px] z-0">

          <Image
            src="/images/img_subtract.png"
            alt="Feature Background"
            width={1440}
            height={474}
            className="w-full h-auto"
          />
          
          {/* Feature Boxes Title */}
        <div className="absolute top-[390px] left-[24px] sm:left-[40px] -translate-y-[32px]">

            <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff]">
              Feature Boxes
            </h2>
          </div>
        </div>

        {/* Description */}
        
    
      <div className="mt-[44px] ml-[16px] px-4 sm:px-6">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-left text-[#9e9e9e] max-w-[40%] min-w-[300px]">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-[24px] sm:mt-[32px] w-full max-w-[1110px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#17171b] rounded-[20px] p-[22px] sm:p-[32px] md:p-[46px] text-center space-y-[14px] sm:space-y-[24px] md:space-y-[38px] hover:bg-[#1a1a1e] transition-colors duration-200"
              >
                {/* Icon Container */}
                <div className="flex justify-center">
                  <div className="bg-[#222228] rounded-[30px] p-[22px] sm:p-[24px] md:p-[28px] w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[104px] md:h-[104px] flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={`${feature.title} Icon`}
                      width={44}
                      height={44}
                      className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[44px] md:h-[44px]"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[24px] sm:leading-[27px] md:leading-[30px] text-center text-[#ffffff]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[20px] sm:leading-[24px] md:leading-[28px] text-center text-[#9e9e9e]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}