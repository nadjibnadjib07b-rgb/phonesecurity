"use client";

import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";

export default function HomeClient() {
  const { t, lang } = useLanguage(); // ⚠️ مهم جدا نجيبو lang

  return (
    <main className="relative overflow-hidden px-6 pt-32 pb-16 min-h-screen flex items-center">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full -z-10"></div>

      <section className="max-w-7xl mx-auto w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            {t.home.title1}{" "}
            <span className="text-cyan-400">
              {t.home.title2}
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            {t.home.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* CHECK BUTTON */}
            <Link
              href={`/${lang}/check`}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold shadow-lg shadow-cyan-500/20 text-center"
            >
              {t.home.checkBtn}
            </Link>

            {/* LEARN MORE */}
            <Link
              href={`/${lang}/about`}
              className="px-6 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition text-center"
            >
              {t.home.learnMore}
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/phone.png"
            alt="Phone Security"
            className="w-[240px] sm:w-[320px] md:w-[500px] lg:w-[620px] animate-float object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.15)] drop-shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          />
        </div>

      </section>
    </main>
  );
}
