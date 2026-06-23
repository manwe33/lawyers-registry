import { useEffect, useRef } from "react";
import {
  CheckCircle2,
  BookOpen,
  Scale,
  Trophy,
  UserCheck,
  GraduationCap,
  Globe2,
  FileText,
  Building2,
  Gavel,
  Landmark,
  Award,
  Star,
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
function HeroCompact() {
  return (
    <section
      className="pt-32 pb-16 lg:pt-40 lg:pb-20"
      style={{ background: "#0B1120" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a href="/" className="transition-colors hover:text-[#C9A96E]" style={{ color: "#64748B" }}>
                Главная
              </a>
            </li>
            <li style={{ color: "#64748B" }}>/</li>
            <li style={{ color: "#94A3B8" }}>Критерии</li>
          </ol>
        </nav>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
        >
          Критерии включения в реестр
        </h1>
      </div>
    </section>
  );
}

/* Main Criteria */
function MainCriteriaSection() {
  const criteria = [
    {
      icon: GraduationCap,
      title: "Высшее юридическое образование",
      desc: "Наличие диплома о получении высшего юридического образования",
    },
    {
      icon: UserCheck,
      title: "Опыт работы более 3 лет",
      desc: "Опыт работы в области юриспруденции более 3 лет",
    },
    {
      icon: Gavel,
      title: "Опыт судебных разбирательств",
      desc: "Наличие опыта участия в судебных процессах",
    },
    {
      icon: Trophy,
      title: "Выигранные дела",
      desc: "Наличие выигранных судебных процессов в высшей инстанции национального уровня",
    },
    {
      icon: UserCheck,
      title: "Отсутствие дисквалификации",
      desc: "Отсутствие в структуре управления лиц, подвергавшихся дисквалификации (для компаний)",
    },
    {
      icon: GraduationCap,
      title: "Дипломированный юрист в штате",
      desc: "Наличие в штате дипломированного юриста с опытом работы более 3 лет (для компаний)",
    },
  ];

  return (
    <section className="py-16 lg:py-20" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12">
          <p className="section-label mb-4">ОСНОВНЫЕ КРИТЕРИИ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Обязательные требования
          </h2>
          <p className="mt-4 text-base" style={{ color: "#94A3B8" }}>
            Для включения в Международный реестр юристов кандидат должен
            соответствовать следующим критериям:
          </p>
        </RevealSection>

        <div className="space-y-4">
          {criteria.map((c, i) => (
            <RevealSection key={i}>
              <div
                className="flex items-start gap-5 p-6 rounded-xl"
                style={{ background: "#151E32", border: "1px solid #1E293B" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <c.icon size={18} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <h3
                    className="text-base font-medium mb-1"
                    style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    {c.desc}
                  </p>
                </div>
                <CheckCircle2
                  size={22}
                  className="shrink-0 ml-auto"
                  style={{ color: "#059669" }}
                />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Additional Criteria */
function AdditionalCriteriaSection() {
  const criteria = [
    { icon: Globe2, title: "Международный опыт", desc: "Опыт судебных разбирательств в иностранных юрисдикциях или международных арбитражах" },
    { icon: Building2, title: "Крупные компании", desc: "Правовое сопровождение деятельности крупных компаний и топ-менеджмента" },
    { icon: FileText, title: "Amicus curiae", desc: "Опыт подготовки amicus curiae по запросу авторитетных организаций" },
    { icon: Award, title: "Статусные достижения", desc: "Наличие статусных достижений в области юриспруденции" },
    { icon: Landmark, title: "Филиалы за рубежом", desc: "Наличие иностранных филиалов и представительств" },
    { icon: Star, title: "Рейтинги", desc: "Наличие рейтинга в рейтинговых проектах" },
    { icon: BookOpen, title: "Публикации", desc: "Наличие публикаций в профессиональных изданиях" },
    { icon: Scale, title: "Профессиональные ассоциации", desc: "Участие в профессиональных ассоциациях" },
    { icon: Trophy, title: "Партнёрские соглашения", desc: "Наличие партнерских соглашений с иностранными компаниями" },
    { icon: FileText, title: "Международные контракты", desc: "Наличие опыта сопровождения международных контрактов" },
    { icon: GraduationCap, title: "Академические степени", desc: "Наличие в штате юристов с академическими степенями" },
    { icon: Globe2, title: "Аккредитация по иностранному праву", desc: "Наличие в штате юристов, аккредитованных по иностранному праву" },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">ДОПОЛНИТЕЛЬНЫЕ КРИТЕРИИ</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Преимущества кандидата
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#94A3B8" }}>
            Следующие критерии не являются обязательными, но повышают шансы на
            успешное включение в реестр:
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {criteria.map((c, i) => (
            <RevealSection key={i}>
              <div
                className="p-6 rounded-xl card-hover h-full"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <c.icon size={18} style={{ color: "#C9A96E" }} />
                </div>
                <h3
                  className="text-base font-medium mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                >
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {c.desc}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Procedure */
function ProcedureSection() {
  const steps = [
    { num: "01", title: "Подача заявки", desc: "Кандидат подает в Комиссию заявку на включение в реестр и уплачивает сбор" },
    { num: "02", title: "Оценка соответствия", desc: "Эксперты проверяют кандидата на соответствие критериям и готовят заключение" },
    { num: "03", title: "Подбор экспертов", desc: "Эксперты АНО привлекаются на платной основе для независимой оценки" },
    { num: "04", title: "Включение в реестр", desc: "Кандидат, соответствующий критериям, включается в реестр" },
    { num: "05", title: "Выдача свидетельства", desc: "Свидетельство АЮР содержит реестровый номер и специализацию" },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">ПРОЦЕДУРА</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            Порядок включения в реестр
          </h2>
        </RevealSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 lg:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "#1E293B" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <RevealSection key={i}>
                <div className="flex items-start gap-5 lg:gap-8 relative">
                  {/* Number circle */}
                  <div
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shrink-0 relative z-10"
                    style={{
                      background: "#151E32",
                      border: "2px solid #C9A96E",
                    }}
                  >
                    <span
                      className="text-sm lg:text-base font-semibold"
                      style={{ color: "#C9A96E" }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-6 rounded-xl"
                    style={{ background: "#151E32", border: "1px solid #1E293B" }}
                  >
                    <h3
                      className="text-lg font-medium mb-2"
                      style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#94A3B8" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
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
            Соответствуете критериям?
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            Если вы соответствуете основным критериям, подайте заявку на
            включение в реестр прямо сейчас.
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
export default function CriteriaPage() {
  return (
    <div style={{ background: "#0B1120", minHeight: "100vh" }}>
      <main>
        <HeroCompact />
        <MainCriteriaSection />
        <AdditionalCriteriaSection />
        <ProcedureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
