import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();

  const toggleLang = () => {
    const next: Language = lang === "ru" ? "en" : "ru";
    setLang(next);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border"
      style={{
        borderColor: "#1E293B",
        color: "#94A3B8",
        background: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#C9A96E";
        e.currentTarget.style.color = "#C9A96E";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#1E293B";
        e.currentTarget.style.color = "#94A3B8";
      }}
    >
      <span style={{ color: lang === "ru" ? "#C9A96E" : "#94A3B8" }}>
        {t("language.ru") as string}
      </span>
      <span style={{ color: "#64748B" }}>/</span>
      <span style={{ color: lang === "en" ? "#C9A96E" : "#94A3B8" }}>
        {t("language.en") as string}
      </span>
    </button>
  );
}
