import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "О проекте",
    links: [
      { label: "О реестре", href: "/about" },
      { label: "Участники", href: "/about#participants" },
      { label: "Цели и задачи", href: "/about#goals" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "Критерии включения", href: "/criteria" },
      { label: "Процедура", href: "/contacts#procedure" },
      { label: "Принципы", href: "/about#principles" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "Ассоциация юристов России", href: "/contacts" },
      { label: "Комиссия АЮР", href: "/contacts" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#080C18", borderTop: "1px solid #1E293B" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top */}
        <div className="mb-12">
          <h3
            className="text-2xl lg:text-4xl mb-3"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Международный реестр юристов
          </h3>
          <p className="text-base max-w-xl" style={{ color: "#64748B" }}>
            База данных проверенных юристов из стран СНГ, ЕАЭС, ШОС и БРИКС
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
