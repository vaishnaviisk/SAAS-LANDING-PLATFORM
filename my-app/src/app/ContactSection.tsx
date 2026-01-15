'use client';
import { useState } from 'react';
 import Image from'next/image';
 import EditText from'@/components/ui/EditText';
 import TextArea from'@/components/ui/TextArea';
 import Button from'@/components/ui/Button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-14 py-[40px] sm:py-[50px] md:py-[60px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[44px] items-center">
          
          {/* Left Side - Graphic */}
          <div className="relative w-full max-w-[582px] mx-auto lg:mx-0 order-2 lg:order-1">
            <div className="relative aspect-square">
              {/* Main Circular Graphic */}
              <Image
                src="/images/img_group_133.svg"
                alt="Contact Graphic"
                width={540}
                height={540}
                className="w-full h-auto"
              />
              
              {/* Decorative Elements */}
              <div className="absolute bottom-[163px] right-0 w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[36px] sm:rounded-[48px] shadow-[0px_4px_20px_#888888ff]" />
              <div className="absolute top-0 left-0 w-[48px] h-[48px] sm:w-[64px] sm:h-[64px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[24px] sm:rounded-[32px] shadow-[0px_4px_20px_#888888ff]" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full max-w-[596px] order-1 lg:order-2 lg:mt-[28px]">
            <div className="space-y-[20px] sm:space-y-[28px]">
              
              {/* Section Title */}
              <h2 className="text-[24px] sm:text-[36px] md:text-[48px] font-semibold leading-[36px] sm:leading-[54px] md:leading-[72px] text-center lg:text-left text-[#ffffff]">
                Get In Touch
              </h2>
              
              {/* Description */}
              <p className="text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[26px] md:leading-[28px] text-center lg:text-left text-[#9e9e9e] max-w-[84%] mx-auto lg:mx-0">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-[14px] sm:space-y-[16px] md:space-y-[18px] w-full max-w-[68%] mx-auto lg:mx-0 mt-[28px]">
                
                {/* Email Input */}
                <EditText
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                />

                {/* Name Input */}
                <EditText
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                />
                 {/* Name Input */}
                <EditText
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                   className="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                />
                {/* Message TextArea
                <TextArea
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px]"
                /> */}

                {/* Submit Button */}
                <div className="pt-[20px] sm:pt-[24px] md:pt-[30px]">
                  <Button
                    type="submit"
                    text="Get in Touch"
                    className="w-auto px-[22px] sm:px-[24px] md:px-[28px] py-[8px] sm:py-[9px] md:py-[10px]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}