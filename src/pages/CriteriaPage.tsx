import { useEffect, useRef } from "react";
import {
  CheckCircle2,
  FileCheck,
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
import { useLanguage } from "../i18n/LanguageContext";

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
  const { t } = useLanguage();
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
                {t("criteria.breadcrumbHome") as string}
              </a>
            </li>
            <li style={{ color: "#64748B" }}>/</li>
            <li style={{ color: "#94A3B8" }}>{t("criteria.breadcrumbCriteria") as string}</li>
          </ol>
        </nav>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
        >
          {t("criteria.heroTitle") as string}
        </h1>
      </div>
    </section>
  );
}

/* Main Criteria */
function MainCriteriaSection() {
  const { t } = useLanguage();
  const criteria = [
    {
      icon: GraduationCap,
      title: t("criteria.criteria1Title") as string,
      desc: t("criteria.criteria1Desc") as string,
    },
    {
      icon: UserCheck,
      title: t("criteria.criteria2Title") as string,
      desc: t("criteria.criteria2Desc") as string,
    },
  ];

  return (
    <section className="py-16 lg:py-20" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("criteria.mainTitle") as string}
          </h2>
          <p className="mt-4 text-base" style={{ color: "#94A3B8" }}>
            {t("criteria.mainSubtitle") as string}
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
  const { t } = useLanguage();
  const criteria = [
    { icon: Trophy, title: t("criteria.add1Title") as string, desc: t("criteria.add1Desc") as string },
    { icon: Globe2, title: t("criteria.add2Title") as string, desc: t("criteria.add2Desc") as string },
    { icon: Building2, title: t("criteria.add3Title") as string, desc: t("criteria.add3Desc") as string },
    { icon: FileText, title: t("criteria.add4Title") as string, desc: t("criteria.add4Desc") as string },
    { icon: Award, title: t("criteria.add5Title") as string, desc: t("criteria.add5Desc") as string },
    { icon: Landmark, title: t("criteria.add6Title") as string, desc: t("criteria.add6Desc") as string },
    { icon: Star, title: t("criteria.add7Title") as string, desc: t("criteria.add7Desc") as string },
    { icon: BookOpen, title: t("criteria.add8Title") as string, desc: t("criteria.add8Desc") as string },
    { icon: Scale, title: t("criteria.add9Title") as string, desc: t("criteria.add9Desc") as string },
    { icon: FileText, title: t("criteria.add10Title") as string, desc: t("criteria.add10Desc") as string },
    { icon: Gavel, title: t("criteria.add11Title") as string, desc: t("criteria.add11Desc") as string },
    { icon: GraduationCap, title: t("criteria.add12Title") as string, desc: t("criteria.add12Desc") as string },
    { icon: Globe2, title: t("criteria.add13Title") as string, desc: t("criteria.add13Desc") as string },
    { icon: UserCheck, title: t("criteria.add14Title") as string, desc: t("criteria.add14Desc") as string },
    { icon: FileCheck, title: t("criteria.add15Title") as string, desc: t("criteria.add15Desc") as string },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("criteria.additionalTitle") as string}
          </h2>
          <p className="mt-4 text-base max-w-2xl" style={{ color: "#94A3B8" }}>
            {t("criteria.additionalSubtitle") as string}
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
  const { t } = useLanguage();
  const steps = [
    { num: "01", title: t("criteria.step1Title") as string, desc: t("criteria.step1Desc") as string },
    { num: "02", title: t("criteria.step2Title") as string, desc: t("criteria.step2Desc") as string },
    { num: "03", title: t("criteria.step3Title") as string, desc: t("criteria.step3Desc") as string },
    { num: "04", title: t("criteria.step4Title") as string, desc: t("criteria.step4Desc") as string },
    { num: "05", title: t("criteria.step5Title") as string, desc: t("criteria.step5Desc") as string },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">{t("criteria.procedureLabel") as string}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("criteria.procedureTitle") as string}
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
  const { t } = useLanguage();
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
            {t("criteria.ctaTitle") as string}
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            {t("criteria.ctaText") as string}
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
            {t("criteria.ctaButton") as string}
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
