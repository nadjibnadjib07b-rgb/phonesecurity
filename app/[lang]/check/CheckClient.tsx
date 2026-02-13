"use client";

import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function CheckClient() {
  const { t } = useLanguage();

  const [imei, setImei] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [result, setResult] = useState<null | "CLEAN" | "STOLEN">(null);

  const stolenPhone = {
    ownerName: "Ahmed Benali",
    phone: "+213 6 55 44 33 22",
    email: "ahmed@email.com",
    country: "Algeria",
  };

  const handleCheck = () => {
    if (!accepted) return;
    if (imei.length !== 15) return;

    if (imei === "123456789012345") {
      setResult("STOLEN");
    } else {
      setResult("CLEAN");
    }
  };

  return (
    <main className="relative overflow-hidden px-6 pt-24 pb-32">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <img
            src="/phone2.png"
            alt="IMEI Verification"
            className="w-[200px] md:w-[300px] object-contain animate-float
            drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]
            drop-shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          />
        </div>

        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(34,211,238,0.1)]">

          <h2 className="text-2xl font-bold mb-4">
            {t.check.title}
          </h2>

          <p className="text-sm text-gray-300 mb-6">
            {t.check.description}
          </p>

          <input
            type="text"
            value={imei}
            onChange={(e) =>
              setImei(e.target.value.replace(/\D/g, "").slice(0, 15))
            }
            placeholder={t.check.placeholder}
            className="w-full mb-4 px-4 py-3 rounded-xl bg-black/40 border border-white/20 text-white focus:outline-none focus:border-cyan-400 transition"
          />

          <div className="flex items-start gap-2 text-xs text-gray-300 mb-4">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1"
            />
            <label>{t.check.disclaimer}</label>
          </div>

          <button
            onClick={handleCheck}
            disabled={!accepted || imei.length !== 15}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              accepted && imei.length === 15
                ? "bg-cyan-500 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            {t.check.button}
          </button>

          {result === "CLEAN" && (
            <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-400 text-green-300">
              {t.check.clean}
            </div>
          )}

          {result === "STOLEN" && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/20 border border-red-400 text-red-300">
              <p className="font-semibold mb-3">
                {t.check.stolen}
              </p>

              <div className="text-sm text-white space-y-1">
                <p><strong>{t.check.owner}:</strong> {stolenPhone.ownerName}</p>
                <p><strong>{t.check.phone}:</strong> {stolenPhone.phone}</p>
                <p><strong>{t.check.email}:</strong> {stolenPhone.email}</p>
                <p><strong>{t.check.country}:</strong> {stolenPhone.country}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
