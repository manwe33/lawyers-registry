import { useEffect, useRef } from "react";
import {
  Mail,
  MapPin,
  Globe,
  Users,
  FileText,
  Search,
  CheckCircle2,
  GraduationCap,
  Award,
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
                {t("contacts.breadcrumbHome") as string}
              </a>
            </li>
            <li style={{ color: "#64748B" }}>/</li>
            <li style={{ color: "#94A3B8" }}>{t("contacts.breadcrumbContacts") as string}</li>
          </ol>
        </nav>
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
          style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
        >
          {t("contacts.heroTitle") as string}
        </h1>
      </div>
    </section>
  );
}

/* Contact Info */
function ContactInfoSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 lg:py-20" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AYUR */}
          <RevealSection>
            <div
              className="p-7 lg:p-8 rounded-xl h-full"
              style={{ background: "#151E32", border: "1px solid #1E293B" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <Globe size={22} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                  >
                    {t("contacts.ayurTitle") as string}
                  </h3>
                  <p className="text-sm" style={{ color: "#C9A96E" }}>
                    {t("contacts.ayurRole") as string}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="shrink-0 mt-0.5" style={{ color: "#94A3B8" }} />
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    {t("contacts.ayurLocation") as string}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={18} className="shrink-0" style={{ color: "#94A3B8" }} />
                  <a
                    href="https://alrf.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-[#C9A96E]"
                    style={{ color: "#94A3B8" }}
                  >
                    {t("contacts.ayurWebsite") as string}
                  </a>
                </div>

              </div>

              <div className="mt-6 pt-6" style={{ borderTop: "1px solid #1E293B" }}>
                <p className="text-sm" style={{ color: "#94A3B8" }}>
                  {t("contacts.ayurDesc") as string}
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Commission */}
          <RevealSection>
            <div
              className="p-7 lg:p-8 rounded-xl h-full"
              style={{ background: "#151E32", border: "1px solid #1E293B" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <Users size={22} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <h3
                    className="text-lg font-medium"
                    style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                  >
                    {t("contacts.commissionTitle") as string}
                  </h3>
                  <p className="text-sm" style={{ color: "#C9A96E" }}>
                    {t("contacts.commissionRole") as string}
                  </p>
                </div>
              </div>

              <p className="text-sm mb-5" style={{ color: "#94A3B8" }}>
                {t("contacts.commissionDesc") as string}
              </p>

              <div className="space-y-3">
                {[
                  t("contacts.commissionItem1") as string,
                  t("contacts.commissionItem2") as string,
                  t("contacts.commissionItem3") as string,
                  t("contacts.commissionItem4") as string,
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#94A3B8" }}>
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: "#C9A96E" }} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-5" style={{ borderTop: "1px solid #1E293B" }}>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0" style={{ color: "#94A3B8" }} />
                  <a
                    href="mailto:legalsupport@alrf.ru"
                    className="text-sm transition-colors hover:text-[#C9A96E]"
                    style={{ color: "#94A3B8" }}
                  >
                    {t("contacts.commissionEmail") as string}
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}

/* How to Apply */
function HowToApplySection() {
  const { t } = useLanguage();
  const steps = [
    { icon: FileText, title: t("contacts.step1Title") as string, desc: t("contacts.step1Desc") as string },
    { icon: Search, title: t("contacts.step2Title") as string, desc: t("contacts.step2Desc") as string },
    { icon: GraduationCap, title: t("contacts.step3Title") as string, desc: t("contacts.step3Desc") as string },
    { icon: Award, title: t("contacts.step4Title") as string, desc: t("contacts.step4Desc") as string },
  ];

  return (
    <section id="procedure" className="py-20 lg:py-28" style={{ background: "#0B1120" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <RevealSection className="mb-12 lg:mb-16">
          <p className="section-label mb-4">{t("contacts.procedureLabel") as string}</p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Playfair Display, serif", color: "#F1F5F9" }}
          >
            {t("contacts.procedureTitle") as string}
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <RevealSection key={i}>
              <div
                className="p-6 lg:p-7 rounded-xl card-hover h-full text-center"
                style={{
                  background: "#151E32",
                  border: "1px solid #1E293B",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(201, 169, 110, 0.15)" }}
                >
                  <step.icon size={24} style={{ color: "#C9A96E" }} />
                </div>
                <div
                  className="text-xs font-medium mb-3"
                  style={{ color: "#C9A96E", letterSpacing: "0.08em" }}
                >
                  {t("contacts.stepLabel") as string} {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-base font-medium mb-2"
                  style={{ fontFamily: "Inter, sans-serif", color: "#F1F5F9" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                  {step.desc}
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
            {t("contacts.ctaTitle") as string}
          </h2>
          <p
            className="text-base mb-8 max-w-2xl mx-auto"
            style={{ color: "#94A3B8" }}
          >
            {t("contacts.ctaText") as string}
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
            {t("contacts.ctaButton") as string}
          </a>
          <p className="mt-4 text-sm" style={{ color: "#64748B" }}>
            {t("contacts.ctaNote") as string}
          </p>
        </RevealSection>
      </div>
    </section>
  );
}

/* PAGE */
export default function ContactsPage() {
  return (
    <div style={{ background: "#0B1120", minHeight: "100vh" }}>
      <main>
        <HeroCompact />
        <ContactInfoSection />
        <HowToApplySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
