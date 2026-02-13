"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

export default function DashboardClient() {
  const { t, lang } = useLanguage(); // ⚠️ نحتاجو lang
  const router = useRouter();

  const [imei, setImei] = useState("");
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [saved, setSaved] = useState(false);

  const isValidIMEI = (value: string) => {
    return /^\d{15}$/.test(value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push(`/${lang}`); // ⚠️ رجوع للغة الحالية
  };

  useEffect(() => {
    const savedData = localStorage.getItem("phoneData");
    if (savedData) {
      const phone = JSON.parse(savedData);
      setImei(phone.imei || "");
      setBrand(phone.brand || "");
      setColor(phone.color || "");
    }

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      router.push(`/${lang}/login`); // ⚠️ لازم lang
    }
  }, [lang, router]);

  const handleSave = () => {
    if (!isValidIMEI(imei)) {
      alert(t.dashboard.invalidImei);
      return;
    }

    const phoneData = { imei, brand, color };
    localStorage.setItem("phoneData", JSON.stringify(phoneData));
    setSaved(true);
  };

  const handleReportFromDashboard = () => {
    if (!imei || !brand || !color) return;

    // ⚠️ هنا أهم تعديل
    router.push(
      `/${lang}/report?imei=${imei}&brand=${brand}&color=${color}`
    );
  };

  return (
    <main className="relative min-h-screen px-6 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#020024] via-[#0f2027] to-[#0a3d62]"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-2xl mx-auto">

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              📱 {t.dashboard.my}{" "}
              <span className="text-cyan-400">
                {t.dashboard.phone}
              </span>
            </h1>

            <button
              onClick={handleLogout}
              className="text-sm text-red-400 hover:text-red-300 transition"
            >
              {t.dashboard.logout}
            </button>
          </div>

          <p className="text-gray-300 mb-8">
            {t.dashboard.description}
          </p>

          {/* INPUTS */}
          <div className="space-y-5">

            <input
              type="text"
              value={imei}
              onChange={(e) =>
                setImei(e.target.value.replace(/\D/g, "").slice(0, 15))
              }
              placeholder={t.dashboard.imei}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />

            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder={t.dashboard.brand}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />

            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder={t.dashboard.color}
              className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400 outline-none transition"
            />

          </div>

          {/* SAVE BUTTON */}
          <button
            onClick={handleSave}
            className="w-full mt-8 py-3 rounded-xl font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-500
            hover:from-cyan-400 hover:to-blue-400
            transition shadow-lg shadow-cyan-500/20"
          >
            {t.dashboard.save}
          </button>

          {/* REPORT BUTTON */}
          {imei && brand && color && (
            <button
              onClick={handleReportFromDashboard}
              className="w-full mt-4 py-3 rounded-xl font-semibold
              bg-gradient-to-r from-red-500 to-pink-500
              hover:from-red-400 hover:to-pink-400
              transition shadow-lg shadow-red-500/20"
            >
              {t.dashboard.reportNow}
            </button>
          )}

          {/* SUCCESS */}
          {saved && (
            <div className="mt-4 text-green-400 text-center animate-fade">
              ✔ {t.dashboard.saved}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
