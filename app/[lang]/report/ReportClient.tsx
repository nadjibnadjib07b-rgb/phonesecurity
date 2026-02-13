"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function ReportClient() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const [submitted, setSubmitted] = useState(false);
  const [alreadyChecked, setAlreadyChecked] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const [imei, setImei] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const imeiParam = searchParams.get("imei");
    const brandParam = searchParams.get("brand");
    const colorParam = searchParams.get("color");

    if (imeiParam) {
      setImei(imeiParam);
      setBrand(brandParam || "");
      setColor(colorParam || "");
      setLocked(true);
    }
  }, [searchParams]);

  const isValidIMEI = (value: string) => {
    return /^\d{15}$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;

    const checkedIMEIs = ["123456789012345", "987654321098765"];

    if (!isValidIMEI(imei)) {
      alert(t.report.invalidImei);
      return;
    }

    if (checkedIMEIs.includes(imei)) {
      setAlreadyChecked(true);
    } else {
      setAlreadyChecked(false);
    }

    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen px-6 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#020024] via-[#0f2027] to-[#0a3d62] -z-10"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-500/10 blur-[180px] rounded-full -z-10"></div>

      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-3xl font-bold mb-3">
            🚨 {t.report.title1}{" "}
            <span className="text-cyan-400">
              {t.report.title2}
            </span>
          </h1>

          <p className="text-gray-300 mb-8">
            {t.report.description}
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                value={imei}
                onChange={(e) => setImei(e.target.value)}
                readOnly={locked}
                placeholder={t.report.imeiPlaceholder}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20"
              />

              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                readOnly={locked}
                placeholder={t.report.brandPlaceholder}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20"
              />

              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                readOnly={locked}
                placeholder={t.report.colorPlaceholder}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20"
              />

              <input
                type="text"
                placeholder={t.report.contactPlaceholder}
                required
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20"
              />

              <div className="text-xs text-gray-400">
                {t.report.disclaimer}
              </div>

              <div className="flex items-start gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 accent-red-500"
                />
                <label>{t.report.checkbox}</label>
              </div>

              <button
                type="submit"
                disabled={!accepted}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  accepted
                    ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-400 hover:to-pink-400 shadow-lg shadow-red-500/20"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {t.report.button}
              </button>

            </form>
          ) : (
            <div className="space-y-5 text-center">

              <div className="text-green-400 text-lg font-semibold">
                {t.report.success}
              </div>

              {alreadyChecked && (
                <div className="text-yellow-400">
                  {t.report.alreadyChecked}
                </div>
              )}

              <div className="bg-white/5 border border-white/20 p-5 rounded-xl text-gray-300">
                {t.report.recoverySent}
                <p className="text-xs text-gray-400 mt-2">
                  {t.report.keepSafe}
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}
