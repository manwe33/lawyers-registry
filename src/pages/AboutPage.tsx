import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Award,
  TrendingUp,
  Eye,
  Target,
  Clock,
  Lock,
  Globe,
  Settings,
} from "lucide-react";
import Footer from "../sections/Footer";

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
    <div ref={ref} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}

/* Hero */
function HeroCompact({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}) {
  return (
    <section
      className="pt-32 pb-16 lg:pt-40 lg:pb-20"
      style={{ background: "#0B1120" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span style={{ color: "#64748B" }}>/</span>
                )}
                {i === breadcrumbs.length - 1 ? (
                  <span style={{ color: "#94A3B8" }}>{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.href}
                    className="transition-colors hover:text-[#C9A96E]"
                    style={{ color: "#64748B" }}
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}

/* Description */
function DescriptionSection() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "#0B1120" }}>
      <div className="max-w-[800px] mx-auto px-6 lg:px-12">
        <RevealSection>
          <p
            className="text-base lg:text-lg leading-relaxed mb-6"
            style={{ color: "#94A3B8" }}
          >
            Международный реестр юристов — это база данных проверенных юристов
            из разных правовых систем. Это не рейтинг. Наличие в реестре
            подтверждает квалификацию юриста, его профессиональную компетентность и
            добросовестность.
          </p>
          <p
            className="text-base lg:text-lg leading-relaxed mb-8"
            style={{ color: "#94A3B8" }}
          >
            Прототип на национальном уровне — реестр адвокатов. Они могут быть
            разные, но наличие статуса адвоката подтверждает квалификацию. На
            международном уровне прототипом служат списки юристов при
            консульствах и посольствах.
          </p>
        </RevealSection>

        <RevealSection>
          <div
            className="p-6 lg:p-8 rounded-xl gold-border-left"
            style={{ background: "#151E32" }}
          >
            <p className="text-base" style={{ color: "#F1F5F9" }}>
              Реестр будет содержать разделы по различным странам с указанием
              специализации и знания языка. Реестр будет служить надежным
              источником информации о юристе, его профиле, правовой системе,
              квалификации.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

/* Goals & Tasks */
function TasksSection() {
  const tasks = [
    {
      icon: BookOpen,
      title: "Международный реестр",
      desc: "Создание и ведение международного реестра юристов (аккредитованных юристов стран СНГ, ЕАЭС, ШОС, БРИКС)",
    },
    {
      icon: GraduationCap,
      title: "Образовательная платформа",
      desc: "Создание образовательной платформы для подготовки юристов в области права стран СНГ, ЕАЭС, ШОС, БРИКС",
    },
    {
      icon: Award,
      title: "Аккредитация юристов",
      desc: "Аккредитация юристов государств-участников СНГ, ЕАЭС, ШОС, БРИКС по единым стандартам",
    },
    {
      icon: TrendingUp,
      title: "Устранение барьеров",
      desc: "Устранение трансграничных правовых барьеров для бизнеса и инвестиций",
    },
  ];

  return (
    <section id="goals" className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">ЗАДАЧИ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Задачи проекта
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {tasks.map((task, i) => (
            <RevealSection key={i}>
              <div
                className="p-7 lg:p-8 rounded-xl card-hover h-full"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <task.icon size={20} style={{ color: "#C9A96E" }} />
                </div>
                <h3
                  className="text-lg font-medium mb-3"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                >
                  {task.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {task.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Principles */
function PrinciplesSection() {
  const principles = [
    {
      icon: Eye,
      title: "Прозрачность",
      desc: "Процедура включения в реестр открыта и доступна для ознакомления",
    },
    {
      icon: Target,
      title: "Объективность",
      desc: "Проверяемость сведений реестра независимыми экспертами",
    },
    {
      icon: Clock,
      title: "Актуальность",
      desc: "Сведения реестра регулярно обновляются и поддерживаются в актуальном состоянии",
    },
    {
      icon: Lock,
      title: "Конфиденциальность",
      desc: "Защита персональных данных участников реестра",
    },
    {
      icon: Globe,
      title: "Общедоступность",
      desc: "Сведения реестра доступны всем заинтересованным лицам",
    },
    {
      icon: Settings,
      title: "Автономность",
      desc: "Независимое управление реестром без внешнего вмешательства",
    },
  ];

  return (
    <section id="principles" className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">ПРИНЦИПЫ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Принципы функционирования
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <RevealSection key={i}>
              <div
                className="p-6 lg:p-7 rounded-xl card-hover h-full"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <p.icon size={18} style={{ color: "#C9A96E" }} />
                </div>
                <h3
                  className="text-base font-medium mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {p.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Participants Detail */
function ParticipantsDetailSection() {
  const participants = [
    {
      name: "Ассоциация юристов России",
      role: "Гарант доверия",
      desc: "АЮР обеспечивает доверие к международному реестру юристов и образовательной платформе. Ассоциация является ключевым институтом, гарантирующим объективность и независимость реестра.",
    },
    {
      name: "Комиссия АЮР по правовому обеспечению рыночной экономики",
      role: "Экспертный орган",
      desc: "Комиссия утверждает критерии оценки кандидатов, осуществляет мониторинг ведения реестра, проводит заседания по вопросу включения кандидатов, взаимодействует с государственными институтами.",
    },
    {
      name: "АНО (Организация по аккредитации)",
      role: "Оператор реестра",
      desc: "АНО организует оценку кандидатов, разрабатывает программы подготовки к аккредитации, обеспечивает образовательный процесс, привлекает экспертов и ведет их список.",
    },
    {
      name: "Эксперты",
      role: "Верификация",
      desc: "Эксперты проверяют кандидатов на соответствие критериям, подготавливают заключения по результатам проверки, формируют устойчивую профессиональную среду в области права стран СНГ, ЕАЭС, ШОС, БРИКС.",
    },
  ];

  return (
    <section id="participants" className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
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

        <div className="space-y-5">
          {participants.map((p, i) => (
            <RevealSection key={i}>
              <div
                className="p-7 lg:p-8 rounded-xl"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div className="mb-4">
                  <h3
                    className="text-xl font-medium mb-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm" style={{ color: "#C9A96E" }}>
                    {p.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {p.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA */
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
            Присоединяйтесь к реестру
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            Станьте частью международного правового сообщества и получите
            доступ к новым возможностям для развития вашей практики.
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

/* PAGE */
export default function AboutPage() {
  return (
    <div style={{ background: "#0B1120", minHeight: "100vh" }}>
      <main>
        <HeroCompact
          title="О международном реестре юристов"
          breadcrumbs={[
            { label: "Главная", href: "/" },
            { label: "О реестре", href: "/about" },
          ]}
        />
        <DescriptionSection />
        <TasksSection />
        <PrinciplesSection />
        <ParticipantsDetailSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
