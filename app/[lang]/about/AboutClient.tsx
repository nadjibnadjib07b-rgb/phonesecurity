"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function AboutClient() {
  const { t } = useLanguage();

  return (
    <main className="relative px-6 pt-24 pb-32">

      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          {t.about.title}
        </h1>

        <div className="text-gray-300 leading-relaxed space-y-6 text-lg">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-400">
              {t.about.features.checkTitle}
            </h3>
            <p className="text-gray-300 text-sm">
              {t.about.features.checkDesc}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-400 transition duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-4">🚨</div>
            <h3 className="text-xl font-semibold mb-2 text-red-400">
              {t.about.features.reportTitle}
            </h3>
            <p className="text-gray-300 text-sm">
              {t.about.features.reportDesc}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-green-400 transition duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {t.about.features.secureTitle}
            </h3>
            <p className="text-gray-300 text-sm">
              {t.about.features.secureDesc}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}
