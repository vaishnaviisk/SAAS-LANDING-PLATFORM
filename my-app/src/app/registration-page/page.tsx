'use client';
import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import EditText from '@/components/ui/EditText';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegistrationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    agreeToTerms?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);

  setTimeout(() => {
    // ✅ SAVE LOGIN STATE
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', formData.email);

    setIsLoading(false);

    // ✅ REDIRECT TO HOME PAGE
    router.push('/');
  }, 1500);
};


  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle social login
  };

  return (
    <div className="w-full bg-[#000000] min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-[200px] right-[100px] w-[120px] h-[120px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[60px] shadow-[0px_4px_30px_#888888ff] opacity-50" />
      <div className="absolute top-[500px] left-[80px] w-[150px] h-[150px] bg-[linear-gradient(177deg,#494955_0%,_#141414_100%)] rounded-[75px] shadow-[0px_4px_30px_#888888ff] opacity-50" />

      <Header />

      <main className="w-full px-4 sm:px-6 lg:px-14 py-[80px] sm:py-[100px] md:py-[120px]">
        <div className="w-full max-w-[520px] mx-auto">
          {/* Header Section */}
          <div className="text-center mb-[48px]">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[48px] sm:leading-[56px] md:leading-[64px] text-[#ffffff] mb-[16px]">
              Create Your Account
            </h1>
            <p className="text-[14px] sm:text-[16px] font-normal leading-[24px] text-[#9e9e9e]">
              Join thousands of designers creating stunning landing pages
            </p>
          </div>

          {/* Social Login Buttons
          <div className="space-y-[12px] mb-[32px]">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-[12px] px-[24px] py-[14px] bg-[#ffffff] hover:bg-[#f5f5f5] text-[#000000] rounded-[8px] transition-all duration-200 font-medium text-[14px]"
            >
              <Image
                src="/images/img_search.svg"
                alt="Google Icon"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              Continue with Google
            </button>
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="w-full flex items-center justify-center gap-[12px] px-[24px] py-[14px] bg-[#18181c] hover:bg-[#222228] text-[#ffffff] rounded-[8px] transition-all duration-200 font-medium text-[14px] border border-[#222228]"
            >
              <Image
                src="/images/img_group_26.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
                className="w-[20px] h-[20px]"
              />
              Continue with GitHub
            </button>
          </div> */}

          {/* Divider */}
          <div className="flex items-center gap-[16px] mb-[32px]">
            <div className="flex-1 h-[1px] bg-[#222228]" />
            {/* <span className="text-[12px] text-[#9e9e9e] font-normal"></span> */}
            <div className="flex-1 h-[1px] bg-[#222228]" />
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-[20px]">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[14px] font-medium text-[#ffffff] mb-[8px]">
                Full Name
              </label>
              <EditText
                id="fullName"
                type="text"
                placeholder="Vaishnavi S Kotari"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-[16px] py-[14px] bg-[#18181c] text-[#ffffff] border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                  errors.fullName ? 'border-red-500' : 'border-[#222228]'
                }`}
              />
              {errors.fullName && (
                <p className="text-[12px] text-red-500 mt-[6px]">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-[#ffffff] mb-[8px]">
                Email Address
              </label>
              <EditText
                id="email"
                type="email"
                placeholder="vaish@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-[16px] py-[14px] bg-[#18181c] text-[#ffffff] border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                  errors.email ? 'border-red-500' : 'border-[#222228]'
                }`}
              />
              {errors.email && (
                <p className="text-[12px] text-red-500 mt-[6px]">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-[14px] font-medium text-[#ffffff] mb-[8px]">
                Password
              </label>
              <div className="relative">
                <EditText
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={`w-full px-[16px] py-[14px] bg-[#18181c] text-[#ffffff] border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.password ? 'border-red-500' : 'border-[#222228]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-[#9e9e9e] hover:text-[#ffffff] transition-colors duration-200"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-[12px] text-red-500 mt-[6px]">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-[14px] font-medium text-[#ffffff] mb-[8px]">
                Confirm Password
              </label>
              <div className="relative">
                <EditText
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className={`w-full px-[16px] py-[14px] bg-[#18181c] text-[#ffffff] border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-[#222228]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-[#9e9e9e] hover:text-[#ffffff] transition-colors duration-200"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-[12px] text-red-500 mt-[6px]">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex items-start gap-[12px] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="mt-[4px] w-[18px] h-[18px] rounded-[4px] border-[#222228] bg-[#18181c] text-purple-500 focus:ring-2 focus:ring-purple-500 cursor-pointer"
                />
                <span className="text-[13px] text-[#9e9e9e] leading-[20px]">
                  I agree to the{' '}
                  <Link href="#" className="text-[#ffffff] hover:text-purple-400 underline transition-colors duration-200">
                    Terms and Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="#" className="text-[#ffffff] hover:text-purple-400 underline transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </span>
              </label>
              {errors.agreeToTerms && (
                <p className="text-[12px] text-red-500 mt-[6px]">{errors.agreeToTerms}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              text={isLoading ? 'Creating Account...' : 'Create Account'}
              disabled={isLoading}
              className="w-full px-[28px] py-[14px] mt-[8px]"
            />
          </form>

          {/* Login Link */}
          <div className="text-center mt-[32px]">
            <p className="text-[14px] text-[#9e9e9e]">
              Already have an account?{' '}
              <Link href="/login" className="text-[#ffffff] hover:text-purple-400 font-medium transition-colors duration-200">
                Sign In
              </Link>
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mt-[48px] pt-[32px] border-t border-[#222228]">
            <div className="flex items-center justify-center gap-[24px] text-[12px] text-[#9e9e9e]">
              <div className="flex items-center gap-[8px]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}