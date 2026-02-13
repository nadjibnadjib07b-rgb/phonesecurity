"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  const params = useParams();
  const currentLang = (params?.lang as string) || "en";

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (path: string) =>
    `transition ${
      pathname === `/${currentLang}${path}`
        ? "text-cyan-400"
        : "text-white hover:text-cyan-400"
    }`;

  const languages: { code: "en" | "fr" | "ar" | "ru"; label: string }[] = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "ar", label: "العربية" },
    { code: "ru", label: "Русский" },
  ];

  return (
    <nav
      className={`w-full px-6 md:px-10 py-5 fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/5 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">

        {/* LOGO */}
        <Link href={`/${currentLang}`} className="text-xl font-bold text-cyan-400">
          PhoneSecurity
        </Link>

        <div className="flex items-center gap-4">

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href={`/${currentLang}`} className={linkClass("")}>
              {t.nav.home}
            </Link>

            <Link href={`/${currentLang}/about`} className={linkClass("/about")}>
              {t.nav.about}
            </Link>

            <Link href={`/${currentLang}/check`} className={linkClass("/check")}>
              {t.nav.check}
            </Link>

            <Link href={`/${currentLang}/report`} className={linkClass("/report")}>
              {t.nav.report}
            </Link>

            <Link href={`/${currentLang}/delait`} className={linkClass("/delait")}>
              {t.nav.delait}
            </Link>

            <Link href={`/${currentLang}/signup`} className={linkClass("/signup")}>
              {t.nav.signup}
            </Link>
          </div>

          {/* Language */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm hover:border-cyan-400 transition"
            >
              🌐
            </button>

            <div
              className={`absolute ${
                lang === "ar" ? "left-0" : "right-0"
              } mt-2 w-40 bg-[#0f2027] border border-white/10 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-200 ${
                langOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                    window.location.href = `/${l.code}`;
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm transition ${
                    lang === l.code
                      ? "text-cyan-400 bg-white/5"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Burger */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 ${
          lang === "ar" ? "left-0" : "right-0"
        } h-full w-72 bg-gradient-to-br from-[#0f2027] to-[#203a43] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open
            ? "translate-x-0"
            : lang === "ar"
            ? "-translate-x-full"
            : "translate-x-full"
        } md:hidden z-40`}
      >
        <div className="flex flex-col mt-24 px-8 gap-6 text-lg">
          <Link href={`/${currentLang}`}>{t.nav.home}</Link>
          <Link href={`/${currentLang}/about`}>{t.nav.about}</Link>
          <Link href={`/${currentLang}/check`}>{t.nav.check}</Link>
          <Link href={`/${currentLang}/report`}>{t.nav.report}</Link>
          <Link href={`/${currentLang}/delait`}>{t.nav.delait}</Link>
          <Link href={`/${currentLang}/signup`}>{t.nav.signup}</Link>
        </div>
      </div>
    </nav>
  );
}
