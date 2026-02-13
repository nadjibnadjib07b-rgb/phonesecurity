"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";

export default function SignUpClient() {
  const { t, lang } = useLanguage(); // ⚠️ مهم نجيبو lang
  const router = useRouter();

  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);

  const strengthLabel = () => {
    if (strength <= 1) return t.signup.weak;
    if (strength <= 3) return t.signup.medium;
    return t.signup.strong;
  };

  const strengthColor = () => {
    if (strength <= 1) return "bg-red-500";
    if (strength <= 3) return "bg-yellow-400";
    return "bg-green-500";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;

    if (strength < 4) {
      alert(t.signup.passwordWeak);
      return;
    }

    if (password !== confirmPassword) {
      alert(t.signup.passwordMismatch);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "userAccount",
        JSON.stringify({ email, password })
      );
      localStorage.setItem("isLoggedIn", "true");

      // ⚠️ هنا التعديل المهم
      router.push(`/${lang}/dashboard`);
    }, 1500);
  };

  return (
    <main className="relative overflow-hidden px-6 pt-24 pb-24">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[170px] rounded-full"></div>

      <section className="max-w-md mx-auto relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-4xl font-bold text-center mb-6">
            👤 {t.signup.title1}{" "}
            <span className="text-cyan-400">{t.signup.title2}</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                placeholder={t.signup.email}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 outline-none transition text-white"
              />
              <span className="absolute left-3 top-3 text-cyan-400">📧</span>
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t.signup.password}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 outline-none transition text-white"
              />
              <span className="absolute left-3 top-3 text-cyan-400">🔒</span>

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-sm text-gray-300 hover:text-cyan-400"
              >
                {showPassword ? t.signup.hide : t.signup.show}
              </button>

              {password.length > 0 && (
                <div className="mt-3">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${strengthColor()}`}
                      style={{ width: `${(strength / 4) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1 text-gray-300">
                    {t.signup.strength}{" "}
                    <span>{strengthLabel()}</span>
                  </p>
                </div>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <input
                type="password"
                placeholder={t.signup.confirmPassword}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 outline-none transition text-white"
              />
              <span className="absolute left-3 top-3 text-cyan-400">✔️</span>
            </div>

            {/* CHECKBOX */}
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 accent-cyan-500"
              />
              <label>{t.signup.agree}</label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={!accepted || loading}
              className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
              ${
                accepted
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              {loading ? t.signup.creating : t.signup.create}
            </button>

          </form>

          {/* LOGIN LINK */}
          <div className="text-sm text-center text-gray-300 mt-6">
            {t.signup.haveAccount}{" "}
            <Link
              href={`/${lang}/login`}
              className="text-cyan-400 hover:underline"
            >
              {t.signup.login}
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
