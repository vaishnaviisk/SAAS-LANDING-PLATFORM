'use client';


export default function HeroSection() {
  return (
  <section className="w-full px-4 sm:px-6 lg:px-14 pt-[80px] sm:pt-[100px] pb-[70px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
        <h1 className="text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold leading-[48px] sm:leading-[64px] md:leading-[80px] lg:leading-[97px] text-center text-white mb-[16px] sm:mb-[20px] md:mb-[24px] max-w-[800px]">
  Beautiful Landing Page Design for You
</h1>

        
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center text-[#9e9e9e] max-w-[42%] min-w-[300px]">
          A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
        </p>
      </div>
      <div className="mt-[32px] flex justify-center">
  <button className="bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] rounded-[6px] px-6 py-3 text-[14px] sm:text-[16px] font-medium text-white hover:opacity-90 transition">
    Download Template
  </button>
</div>


    </section>
  )
}