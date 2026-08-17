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
import { useLanguage } from "../i18n/LanguageContext";

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
  const { t } = useLanguage();
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
          {t("home.heroTitle") as string}
        </h1>
        <p
          className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: "#94A3B8" }}
        >
          {t("home.heroSubtitle") as string}
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
          {t("home.heroCta") as string}
        </a>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function AboutSection() {
  const { t } = useLanguage();
  const goals = [
    t("home.goal1") as string,
    t("home.goal2") as string,
    t("home.goal3") as string,
    t("home.goal4") as string,
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <RevealSection>
            <p className="section-label mb-4">{t("home.aboutLabel") as string}</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
            >
              {t("home.aboutTitle") as string}
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              {t("home.aboutText") as string}
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
  const { t } = useLanguage();
  const audiences = [
    {
      icon: Globe,
      title: t("home.audience1Title") as string,
      desc: t("home.audience1Desc") as string,
    },
    {
      icon: Users,
      title: t("home.audience2Title") as string,
      desc: t("home.audience2Desc") as string,
    },
    {
      icon: Scale,
      title: t("home.audience3Title") as string,
      desc: t("home.audience3Desc") as string,
    },
    {
      icon: Building2,
      title: t("home.audience4Title") as string,
      desc: t("home.audience4Desc") as string,
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="text-center mb-12 lg:mb-16">
          <p className="section-label mb-4">{t("home.audienceLabel") as string}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("home.audienceTitle") as string}
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
  const { t } = useLanguage();
  const participants = [
    {
      icon: Shield,
      name: t("home.participant1Name") as string,
      role: t("home.participant1Role") as string,
      duties: [
        t("home.participant1Duty1") as string,
        t("home.participant1Duty2") as string,
      ],
    },
    {
      icon: FileCheck,
      name: t("home.participant2Name") as string,
      role: t("home.participant2Role") as string,
      duties: [
        t("home.participant2Duty1") as string,
        t("home.participant2Duty2") as string,
        t("home.participant2Duty3") as string,
      ],
    },
    {
      icon: Search,
      name: t("home.participant3Name") as string,
      role: t("home.participant3Role") as string,
      duties: [
        t("home.participant3Duty1") as string,
        t("home.participant3Duty2") as string,
        t("home.participant3Duty3") as string,
      ],
    },
    {
      icon: GraduationCap,
      name: t("home.participant4Name") as string,
      role: t("home.participant4Role") as string,
      duties: [
        t("home.participant4Duty1") as string,
        t("home.participant4Duty2") as string,
        t("home.participant4Duty3") as string,
      ],
    },
  ];

  return (
    <section className="py-24 lg:py-32" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">{t("home.participantsLabel") as string}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("home.participantsTitle") as string}
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
            {t("home.ctaTitle") as string}
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            {t("home.ctaText") as string}
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
            {t("home.ctaButton") as string}
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
