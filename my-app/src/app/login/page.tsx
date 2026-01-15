'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import EditText from '@/components/ui/EditText';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ TEMP LOGIN (accepts any input)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email || 'demo@user.com');

    // ✅ REDIRECT TO HOME
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#17171b] p-[32px] rounded-[16px] w-full max-w-[400px] space-y-[18px]"
      >
        <h1 className="text-white text-[26px] font-semibold text-center">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-[13px] text-center">{error}</p>
        )}

        <EditText
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <EditText
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔥 THIS IS IMPORTANT */}
        <Button
          text="Login"
          type="submit"
          className="w-full py-[12px]"
        />
      </form>
    </div>
  );
}
