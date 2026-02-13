"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function ForgotClient() {
  const { t , lang } = useLanguage();

  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);

  const strengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const handleSendCode = () => {
    setError("");

    if (!email.includes("@")) {
      setError(t.forgot.invalidEmail);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1200);
  };

  const handleResetPassword = () => {
    setError("");

    if (code.trim().length !== 6) {
      setError(t.forgot.invalidCode);
      return;
    }

    if (strength < 4) {
      setError(t.forgot.weakPassword);
      return;
    }

    if (password !== confirmPassword) {
      setError(t.forgot.passwordMismatch);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      router.push(`/${lang}/login`);
    }, 1200);
  };

  return (
    <main className="relative overflow-hidden px-6 pt-24 pb-24">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[170px] rounded-full"></div>

      <section className="max-w-md mx-auto relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-4xl font-bold text-center mb-8">
            🔑 {t.forgot.title}
          </h1>

          {step === 1 && (
            <div className="space-y-5">

              <p className="text-gray-300 text-center text-sm">
                {t.forgot.step1Desc}
              </p>

              <div className="relative">
                <input
                  type="email"
                  placeholder={t.forgot.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-white"
                />
                <span className="absolute left-3 top-3 text-cyan-400">📧</span>
              </div>

              {error && (
                <div className="text-sm text-red-400 text-center">
                  ❌ {error}
                </div>
              )}

              <button
                onClick={handleSendCode}
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300
                bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:from-cyan-400 hover:to-blue-400 
                shadow-lg shadow-cyan-500/30"
              >
                {loading ? t.forgot.sending : t.forgot.sendButton}
              </button>

            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">

              <p className="text-gray-300 text-center text-sm">
                {t.forgot.step2Desc}
              </p>

              <input
                type="text"
                placeholder={t.forgot.code}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-white"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t.forgot.newPassword}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-white"
                />
                <span className="absolute left-3 top-3 text-cyan-400">🔒</span>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-sm text-gray-300 hover:text-cyan-400"
                >
                  {showPassword ? t.forgot.hide : t.forgot.show}
                </button>
              </div>

              {password.length > 0 && (
                <div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strengthColor()}`}
                      style={{ width: `${(strength / 4) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <input
                type="password"
                placeholder={t.forgot.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-white"
              />

              {error && (
                <div className="text-sm text-red-400 text-center">
                  ❌ {error}
                </div>
              )}

              <button
                onClick={handleResetPassword}
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300
                bg-gradient-to-r from-cyan-500 to-blue-500 
                hover:from-cyan-400 hover:to-blue-400 
                shadow-lg shadow-cyan-500/30"
              >
                {loading ? t.forgot.resetting : t.forgot.resetButton}
              </button>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
