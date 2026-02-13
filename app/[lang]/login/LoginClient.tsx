"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import Link from "next/link";

export default function LoginClient() {
  const { t, lang } = useLanguage(); // ⚠️ لازم نجيبو lang
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const storedUser = localStorage.getItem("userAccount");

    if (!storedUser) {
      setError(t.login.noAccount);
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (email !== parsedUser.email || password !== parsedUser.password) {
      setError(t.login.invalid);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      // ⚠️ هنا أهم تعديل
      router.push(`/${lang}/dashboard`);
    }, 1200);
  };

  return (
    <main className="relative overflow-hidden px-6 pt-24 pb-24">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[170px] rounded-full"></div>

      <section className="max-w-md mx-auto relative z-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-4xl font-bold text-center mb-8">
            🔐 <span className="text-cyan-400">{t.login.title}</span>
          </h1>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                placeholder={t.login.email}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 pl-10 rounded-xl bg-black/40 border border-cyan-400/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 outline-none transition text-white"
              />
              <span className="absolute left-3 top-3 text-cyan-400">📧</span>
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder={t.login.password}
                required
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
                {showPassword ? t.login.hide : t.login.show}
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="text-sm text-red-400 text-center">
                ❌ {error}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold transition-all duration-300
              bg-gradient-to-r from-cyan-500 to-blue-500 
              hover:from-cyan-400 hover:to-blue-400 
              shadow-lg shadow-cyan-500/30"
            >
              {loading ? t.login.loading : t.login.button}
            </button>

          </form>

          {/* FORGOT PASSWORD */}
          <div className="text-sm text-center text-gray-300 mt-6">
            {t.login.forgot}{" "}
            <Link
              href={`/${lang}/forgot-password`}
              className="text-cyan-400 hover:underline"
            >
              {t.login.reset}
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
