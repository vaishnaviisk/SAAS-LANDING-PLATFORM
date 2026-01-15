'use client';
import Image from'next/image';

export default function CompaniesSection() {
  const companies = [
    { name: "Smile", logo: "/images/img_frame.svg", width: 100, height: 36 },
    { name: "Urban", logo: "/images/img_group_96.svg", width: 94, height: 24 },
    { name: "Natural", logo: "/images/img_group_97.svg", width: 104, height: 20 },
    { name: "Wave", logo: "/images/img_group_98.svg", width: 84, height: 18 },
    { name: "Buzz", logo: "/images/img_group_99.svg", width: 68, height: 24 },
    { name: "Alba", logo: "/images/img_group_100.svg", width: 70, height: 22 }
  ]

  return (
    <section className="w-full bg-[#17171b] py-[54px] sm:py-[80px] md:py-[108px] mt-[44px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="w-full max-w-[1110px] mx-auto space-y-[56px] sm:space-y-[64px] md:space-y-[70px]">
          
          {/* Section Title */}
          <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center text-[#ffffff]">
            Companies we Worked With in Since 2015
          </h2>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[15px] sm:gap-[20px] md:gap-[30px]">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-[#000000] rounded-[10px] p-[20px] sm:p-[24px] md:p-[32px] flex items-center justify-center hover:bg-[#111111] transition-colors duration-200 aspect-square"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} Logo`}
                  width={company.width}
                  height={company.height}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}