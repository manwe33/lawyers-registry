import { useEffect, useRef } from "react";
import {
  Globe,
  Users,
  Scale,
  Building2,
  Shield,
  CheckCircle2,
  GraduationCap,
  Search,
  FileCheck,
} from "lucide-react";
import Footer from "../sections/Footer";

/* ---------- Fade-in-up on scroll ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, ...style }}
    >
      {children}
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, rgba(201, 169, 110, 0.08) 0%, transparent 70%), #0B1120",
      }}
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute left-[25%] top-0 bottom-0 w-px"
          style={{ background: "#1E293B" }}
        />
        <div
          className="absolute left-[50%] top-0 bottom-0 w-px"
          style={{ background: "#1E293B" }}
        />
        <div
          className="absolute left-[75%] top-0 bottom-0 w-px"
          style={{ background: "#1E293B" }}
        />
        <div
          className="absolute top-[33%] left-0 right-0 h-px"
          style={{ background: "#1E293B" }}
        />
        <div
          className="absolute top-[66%] left-0 right-0 h-px"
          style={{ background: "#1E293B" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
        >
          Международный реестр юристов
        </h1>
        <p
          className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "#94A3B8" }}
        >
          База данных проверенных юристов из стран СНГ, ЕАЭС, ШОС и БРИКС.
          Пространство доверия в международном праве.
        </p>
        <a
          href="https://forms.yandex.ru/cloud/6a38e1fbd0468868d2495679"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg text-base font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "#C9A96E", color: "#0B1120" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#D4B87A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#C9A96E";
          }}
        >
          Подать заявку на включение
        </a>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  const goals = [
    "Формирование пространства доверия в рамках права стран СНГ, ЕАЭС, ШОС, БРИКС",
    "Содействие в разрешении споров",
    "Создание площадки профессионального правового сообщества",
    "Верифицированный источник информации о юристах разных стран",
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <RevealSection>
            <p className="section-label mb-4">О ПРОЕКТЕ</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
            >
              Что такое Международный реестр юристов?
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              Международный реестр юристов — это база данных проверенных юристов
              из разных правовых систем. Это не рейтинг, а верифицированный
              источник информации о квалификации, специализации и компетенциях
              юристов. Прототип на национальном уровне — реестр адвокатов.
              Наличие статуса подтверждает квалификацию.
            </p>
          </RevealSection>

          {/* Right - Goals */}
          <div className="space-y-3">
            {goals.map((goal, i) => (
              <RevealSection key={i}>
                <div
                  className="p-5 lg:p-6 rounded-lg gold-border-left"
                  style={{ background: "#151E32" }}
                >
                  <p className="text-sm lg:text-base" style={{ color: "#F1F5F9" }}>
                    {goal}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- AUDIENCE ---------- */
function AudienceSection() {
  const audiences = [
    {
      icon: Globe,
      title: "Российский бизнес",
      desc: "Поиск проверенного юриста в другой стране",
    },
    {
      icon: Users,
      title: "Российские юристы",
      desc: "Привлечение клиентов из других стран",
    },
    {
      icon: Scale,
      title: "Иностранные юристы",
      desc: "Привлечение клиентов из России",
    },
    {
      icon: Building2,
      title: "Иностранный бизнес",
      desc: "Поиск юриста в России",
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-12 lg:mb-16">
          <p className="section-label mb-4">ЦЕЛЕВАЯ АУДИТОРИЯ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Для кого создан реестр?
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((item, i) => (
            <RevealSection key={i}>
              <div
                className="p-7 lg:p-8 rounded-xl card-hover h-full"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <item.icon size={22} style={{ color: "#C9A96E" }} />
                </div>
                <h3
                  className="text-lg font-medium mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#94A3B8" }}>
                  {item.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PARTICIPANTS ---------- */
function ParticipantsSection() {
  const participants = [
    {
      icon: Shield,
      name: "Ассоциация юристов России",
      role: "Гарант доверия",
      duties: [
        "Обеспечение доверия к международному реестру юристов",
        "Обеспечение доверия к образовательной платформе",
      ],
    },
    {
      icon: FileCheck,
      name: "Комиссия АЮР",
      role: "Экспертный орган",
      duties: [
        "Утверждение критериев оценки кандидатов",
        "Мониторинг ведения международного реестра",
        "Проведение заседаний по включению в реестр",
      ],
    },
    {
      icon: Search,
      name: "АНО (Организация по аккредитации)",
      role: "Оператор реестра",
      duties: [
        "Оценка кандидатов для включения в реестр",
        "Разработка программ подготовки к аккредитации",
        "Привлечение экспертов и ведение списка",
      ],
    },
    {
      icon: GraduationCap,
      name: "Эксперты",
      role: "Верификация",
      duties: [
        "Проверка кандидатов на соответствие критериям",
        "Подготовка заключений по результатам проверки",
        "Формирование профессиональной среды",
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">УЧАСТНИКИ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Участники проекта
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {participants.map((p, i) => (
            <RevealSection key={i}>
              <div
                className="p-7 lg:p-8 rounded-xl card-hover h-full"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(201, 169, 110, 0.15)" }}
                  >
                    <p.icon size={20} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-medium"
                      style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm" style={{ color: "#C9A96E" }}>
                      {p.role}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {p.duties.map((duty, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "#94A3B8" }}
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 mt-0.5"
                        style={{ color: "#C9A96E" }}
                      />
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "#151E32",
        borderTop: "1px solid #1E293B",
        borderBottom: "1px solid #1E293B",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <RevealSection>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-5"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Готовы стать частью реестра?
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            Подайте заявку на включение в Международный реестр юристов и
            получите доступ к международному правовому сообществу.
          </p>
          <a
            href="https://forms.yandex.ru/cloud/6a38e1fbd0468868d2495679"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg text-base font-medium transition-all duration-200 hover:scale-[1.02]"
            style={{ background: "#C9A96E", color: "#0B1120" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D4B87A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#C9A96E";
            }}
          >
            Подать заявку
          </a>
        </RevealSection>
      </div>
    </section>
  );
}

/* ---------- HOME PAGE ---------- */
export default function HomePage() {
  return (
    <div style={{ background: "#0B1120", minHeight: "100vh" }}>
      <main>
        <HeroSection />
        <AboutSection />
        <AudienceSection />
        <ParticipantsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
