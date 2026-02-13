"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function DelaitClient() {
  const { t } = useLanguage();

  const [imei, setImei] = useState("");
  const [code, setCode] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [result, setResult] = useState<null | "SUCCESS" | "ERROR">(null);

  const isValidIMEI = (value: string) => {
    return /^\d{15}$/.test(value);
  };

  const handleSubmit = () => {
    if (!accepted) return;

    if (!isValidIMEI(imei)) {
      alert(t.delait.invalidImei);
      return;
    }

    if (code.trim().length !== 6) {
      alert(t.delait.invalidCode);
      return;
    }

    if (imei === "123456789012345" && code === "654321") {
      setResult("SUCCESS");
    } else {
      setResult("ERROR");
    }
  };

  return (
    <main className="relative min-h-screen px-6 py-20 overflow-hidden">

      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h1 className="text-3xl font-bold mb-3">
            ❌ {t.delait.title1}{" "}
            <span className="text-cyan-400">{t.delait.title2}</span>
          </h1>

          <p className="text-gray-300 mb-8">
            {t.delait.description}
          </p>

          {result === null && (
            <div className="space-y-5">

              <input
                type="text"
                value={imei}
                onChange={(e) =>
                  setImei(e.target.value.replace(/\D/g, "").slice(0, 15))
                }
                placeholder={t.delait.imeiPlaceholder}
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-cyan-400 outline-none transition"
              />

              <input
                type="text"
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                placeholder={t.delait.codePlaceholder}
                className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-cyan-400 outline-none transition"
              />

              <div className="flex items-start gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 accent-cyan-500"
                />
                <label>{t.delait.confirm}</label>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!accepted}
                className={`w-full py-3 rounded-xl font-semibold transition ${
                  accepted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/20"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                {t.delait.button}
              </button>
            </div>
          )}

          {result === "SUCCESS" && (
            <div className="mt-6 text-center text-green-400">
              ✔ {t.delait.success}
              <p className="text-gray-300 mt-2">
                {t.delait.successDesc}
              </p>
            </div>
          )}

          {result === "ERROR" && (
            <div className="mt-6 text-center text-red-400">
              ❌ {t.delait.error}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
