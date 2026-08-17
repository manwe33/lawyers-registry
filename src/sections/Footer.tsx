import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerColumns = [
    {
      title: t("footer.col1Title") as string,
      links: [
        { label: t("footer.col1Link1") as string, href: "/about" },
        { label: t("footer.col1Link2") as string, href: "/about#participants" },
        { label: t("footer.col1Link3") as string, href: "/about#goals" },
      ],
    },
    {
      title: t("footer.col2Title") as string,
      links: [
        { label: t("footer.col2Link1") as string, href: "/criteria" },
        { label: t("footer.col2Link2") as string, href: "/contacts#procedure" },
        { label: t("footer.col2Link3") as string, href: "/about#principles" },
      ],
    },
    {
      title: t("footer.col3Title") as string,
      links: [
        { label: t("footer.col3Link1") as string, href: "/contacts" },
        { label: t("footer.col3Link2") as string, href: "/contacts" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#080C18", borderTop: "1px solid #1E293B" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top */}
        <div className="mb-12">
          <h3
            className="text-2xl lg:text-4xl mb-3"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("footer.title") as string}
          </h3>
          <p className="text-base max-w-xl" style={{ color: "#64748B" }}>
            {t("footer.subtitle") as string}
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-xs font-medium tracking-[0.08em] uppercase mb-4"
                style={{ color: "#C9A96E" }}
              >
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200 hover:text-[#C9A96E]"
                      style={{ color: "#94A3B8" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
