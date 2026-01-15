'use client';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    { name: 'Home Section', href: '#home' },
    { name: 'One Section', href: '#one' },
    { name: 'Two Section', href: '#two' },
    { name: 'Tree', href: '#tree' },
  ];

  return (
    <footer className="w-full bg-[#0f0f12] mt-5">
      {/* Main Footer Content */}
      <div className="w-full bg-[#17171b]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Logo and Description */}
            <div className="lg:col-span-2 space-y-6">
              <Image
                src="/images/img_footer_logo.svg"
                alt="Footer Logo"
                width={56}
                height={44}
                className="w-[56px] h-[44px]"
              />
              <p className="text-xs font-normal leading-relaxed text-[#9e9e9e] max-w-[302px]">
                A good design is not only aesthetically pleasing, but also functional.
                It should be able to solve the problem
              </p>
            </div>

            {/* Sections Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white">
                Sections
              </h3>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#9e9e9e] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Navigation Column 1 */}
            <div>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#9e9e9e] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Navigation Column 2 */}
            <div>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-xs text-[#9e9e9e] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="w-full bg-[#0b0b0d]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-36 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-xs text-[#9e9e9e] text-center md:text-left">
              All Rights Reserved Inkyy.com 2022
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {[
                { src: '/images/img_group_26.svg', alt: 'Social Icon 1' },
                { src: '/images/img_group_27.svg', alt: 'Social Icon 2' },
                { src: '/images/img_group_28.svg', alt: 'Social Icon 3' },
              ].map((icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-[#1a1a1e] rounded-md p-2.5 hover:bg-[#222228] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label={icon.alt}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="w-full h-full"
                  />
                </button>
              ))}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
