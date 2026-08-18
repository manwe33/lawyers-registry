import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.home") as string, href: "/" },
    { label: t("nav.about") as string, href: "/about" },
    { label: t("nav.criteria") as string, href: "/criteria" },
    { label: t("nav.contacts") as string, href: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11, 17, 32, 0.95)" : "rgba(11, 17, 32, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1E293B",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "#F1F5F9" }}
          >
            {t("nav.logo") as string}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link ${location.pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://forms.yandex.ru/cloud/6a38e1fbd0468868d2495679"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "#C9A96E",
              color: "#0B1120",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D4B87A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C9A96E";
            }}
          >
            {t("nav.cta") as string}
          </a>
        </div>

        {/* Mobile: Language Switcher + Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#F1F5F9" }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-6 space-y-4"
          style={{ background: "rgba(11, 17, 32, 0.98)", borderColor: "#1E293B" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="block py-2 text-base"
              style={{
                color: location.pathname === link.href ? "#C9A96E" : "#94A3B8",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
          <a
            href="https://forms.yandex.ru/cloud/6a38e1fbd0468868d2495679"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-5 py-3 rounded-lg text-sm font-medium mt-4"
            style={{ background: "#C9A96E", color: "#0B1120" }}
          >
            {t("nav.cta") as string}
          </a>
        </div>
      )}
    </header>
  );
}
