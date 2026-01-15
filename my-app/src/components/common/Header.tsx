'use client';
import { useState } from 'react';
 import Image from'next/image';
 import Link from'next/link';
 import Button from'../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-bg-header-background">
      <div className="w-full max-w-[1110px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-auto py-4 md:py-6">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/img_search_white_a700.svg"
                alt="Search Icon"
                width={40}
                height={32}
                className="w-[32px] h-[26px] md:w-[40px] md:h-[32px]"
              />
              <Image
                src="/images/img_squid.svg"
                alt="Squid Logo"
                width={80}
                height={30}
                className="w-[64px] h-[24px] md:w-[80px] md:h-[30px] self-end"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link 
              href="/" 
              className="text-xs md:text-sm font-semibold leading-tight text-white hover:text-[#ff9797] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/pricing-page" 
              className="text-xs md:text-sm font-semibold leading-tight text-white hover:text-[#ff9797] transition-colors duration-200"

            >
              Pricing
            </Link>
            <Link 
              href="/faq-page" 
              className="text-xs md:text-sm font-semibold leading-tight text-white hover:text-[#ff9797] transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/coming-soon-page" 
              className="text-xs md:text-sm font-semibold leading-tight text-white hover:text-[#ff9797] transition-colors duration-200"

            >
              Coming Soon
            </Link>
            <Link 
              href="/registration-page"
            >
              <Button
                text="Sign Up"
                className="px-4 py-2 md:px-6 md:py-2.5"
              />
            </Link>
          </nav>

          {/* Mobile Hamburger Menu */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Mobile Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-bg-primary-background border-t border-border-primary z-50`}>
            <div className="px-4 py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-xs font-normal leading-tight text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/pricing-page" 
                className="block text-xs font-normal leading-tight text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/faq-page" 
                className="block text-xs font-normal leading-tight text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/coming-soon-page" 
                className="block text-xs font-normal leading-tight text-text-muted hover:text-text-primary transition-colors duration-200 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Coming Soon
              </Link>
              <div className="pt-2">
                <Link href="/registration-page" onClick={() => setMenuOpen(false)}>
                  <Button
                    text="Sign Up"
                    className="w-full px-4 py-2"
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header