"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Building2,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Link2,
  MapPin,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

/* ─── Brand SVG icons ───────────────────────────────────── */
function IconX({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="X (Twitter)">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.261 5.636 5.903-5.636Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-label="Instagram">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

/* ─── Copy email button ─────────────────────────────────── */
function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 active:scale-95 transition-all cursor-pointer text-sm select-none"
    >
      <span>{email}</span>
      {copied ? <Check size={15} className="text-green-600" /> : <Copy size={15} className="text-gray-500" />}
    </button>
  );
}

/* ─── Reusable fade-in wrapper ─────────────────────────── */
function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
      x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stat counter card ─────────────────────────────────── */
function StatCard({ value, label }) {
  return (
    <div className="border-l-2 border-blue-600 pl-5">
      <div className="text-3xl font-heading font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

/* ─── Venture bento card ────────────────────────────────── */
function VentureCard({ icon: Icon, logo, title, desc, accent, className = "", href }) {
  const Tag = href ? "a" : "div";
  const linkProps = href ? { href, target: "_blank", rel: "noreferrer" } : {};
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
      <Tag
        {...linkProps}
        className={`group relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-pointer block ${className}`}
      >
        <div className="flex items-start justify-between mb-6">
          {logo ? (
            <img src={logo} alt={title + " logo"} className="h-9 w-auto object-contain" />
          ) : (
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: accent + "22" }}
            >
              <Icon size={22} style={{ color: accent }} strokeWidth={1.8} />
            </div>
          )}
        </div>
        <div>
          <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed opacity-80">{desc}</p>
        </div>
        <ArrowUpRight
          size={18}
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      </Tag>
    </motion.div>
  );
}

/* ─── Section label ─────────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <span className="w-6 h-px bg-blue-600" />
      <span className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">
        {children}
      </span>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900">

      {/* ── NAVBAR ────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading text-xl font-bold tracking-tight">Wole Ekanola</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#ventures" className="hover:text-gray-900 transition-colors cursor-pointer">Ventures</a>
            <a href="#builder" className="hover:text-gray-900 transition-colors cursor-pointer flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Building
            </a>
            <a href="#impact" className="hover:text-gray-900 transition-colors cursor-pointer">Impact</a>
            <a href="#youth" className="hover:text-gray-900 transition-colors cursor-pointer">Youth</a>
            <a href="#author" className="hover:text-gray-900 transition-colors cursor-pointer">Author</a>
          </div>
          <a
            href="https://wa.me/2348121751210"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Decorative background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#09090B 1px, transparent 1px), linear-gradient(to right, #09090B 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft blue orb */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-50 blur-[120px] opacity-70 pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full"
        >
          <FadeIn delay={0.05}>
            <div className="flex items-center gap-3 mb-10">
              <MapPin size={14} className="text-blue-600" strokeWidth={2} />
              <span className="text-sm font-medium text-gray-500 tracking-wide">
                Lagos, Nigeria
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-500">Founder · Author · Builder</span>
            </div>
          </FadeIn>

          <div className="max-w-5xl">
            <FadeIn delay={0.12}>
              <h1 className="font-heading text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[1.05] tracking-tight text-gray-900 mb-8">
                Natural Builder{" "}
                <span className="italic font-normal text-gray-400">shaping</span>
                <br />
                Africa&apos;s Future.
              </h1>
            </FadeIn>

            <FadeIn delay={0.22}>
              <p className="text-xl text-gray-500 max-w-2xl leading-relaxed mb-12">
                Prolific founder powering Africa&apos;s transformation through technology,
                education, and youth empowerment — scaling ventures that serve thousands
                from Lagos, Nigeria.
              </p>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#ventures"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors cursor-pointer text-sm"
                >
                  Explore My Work <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/woleekanola"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-white transition-all cursor-pointer text-sm"
                >
                  <Link2 size={15} /> LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Hero stats row */}
          <FadeIn delay={0.5}>
            <div className="mt-20 pt-10 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
              <StatCard value="20+" label="Schools Powered" />
              <StatCard value="5,000+" label="Platform Users" />
              <StatCard value="2" label="Active Academies" />
              <StatCard value="1" label="Published Book" />
            </div>
          </FadeIn>
        </motion.div>
      </section>

      {/* ── VENTURES ──────────────────────────────────────── */}
      <section id="ventures" className="py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Founder &amp; Ventures</SectionLabel>
          <h2 className="font-heading text-5xl font-bold tracking-tight mb-4">
            Visionary Ventures
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mb-16">
            Bridging enterprise-scale execution with entrepreneurial innovation across
            education, technology, and productivity.
          </p>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Schoolwave — hero card spans 2 cols + 2 rows */}
          <FadeIn delay={0.05} className="md:col-span-2 md:row-span-2">
            <a
              href="https://schoolwave.ng"
              target="_blank"
              rel="noreferrer"
              className="relative h-full min-h-[380px] rounded-2xl overflow-hidden text-white p-8 flex flex-col justify-end group cursor-pointer block"
              style={{ background: "#0a2540" }}
            >
              {/* Brand colour overlay */}
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: "linear-gradient(135deg, #0a66b7 0%, #1236ff 100%)" }}
              />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
                alt="Schoolwave digital education platform"
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-15 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/95 via-[#0a2540]/50 to-transparent" />

              <div className="relative z-10">
                {/* Schoolwave logo + wordmark */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://schoolwave.ng/schoolwave.png"
                    alt="Schoolwave icon"
                    className="h-10 w-10 object-contain"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <span className="text-white text-2xl font-bold tracking-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Schoolwave
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 text-white/70 text-xs font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6eb8d4] animate-pulse" />
                  Flagship · Founder &amp; CEO
                </div>
                <p className="text-blue-100/80 text-base leading-relaxed max-w-lg mb-6">
                  AI-powered school management — equipping 20+ schools with digital infrastructure
                  for payments, administration, and scalable learning. Powering 5,000+ users across
                  4+ countries.
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-blue-200/60">
                  <span><strong className="text-white">20+</strong> Schools</span>
                  <span><strong className="text-white">5,000+</strong> Users</span>
                  <span><strong className="text-white">4+</strong> Countries</span>
                </div>
              </div>
              <ArrowUpRight
                size={20}
                className="absolute top-7 right-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          </FadeIn>

          {/* Techill Academy */}
          <FadeIn delay={0.1}>
            <a
              href="https://techill.ng"
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl p-7 flex flex-col justify-between overflow-hidden cursor-pointer block h-full min-h-[180px] text-white"
              style={{ background: "#214B46" }}
            >
              {/* Amber accent strip */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "#FEB834" }} />
              <div className="mb-6">
                <img
                  src="https://techill.ng/images/logo.png"
                  alt="Techill Academy"
                  className="h-9 w-auto object-contain brightness-0 invert"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <div>
                <p className="text-sm leading-relaxed" style={{ color: "#B1CFC8" }}>
                  Coding, Design &amp; Data — transforming beginners into job-ready software
                  engineers and AI professionals through hands-on mentorship.
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              />
            </a>
          </FadeIn>

          {/* AI & Automation */}
          <FadeIn delay={0.15}>
            <VentureCard
              icon={BrainCircuit}
              title="AI & Automation"
              desc="Helping business owners automate operations, slashing costs with emerging AI tools and custom systems."
              accent="#10B981"
              className="bg-white border border-gray-100 shadow-sm text-gray-900 h-full min-h-[180px]"
            />
          </FadeIn>

          {/* Eleto & Microbuk */}
          <FadeIn delay={0.2} className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <VentureCard
                icon={ExternalLink}
                title="Eleto.online"
                desc="Expanding the ecosystem of practical tech solutions — accessible tools designed for everyday challenges across Africa."
                accent="#8B5CF6"
                href="https://eleto.online"
                className="bg-slate-50 border border-gray-100 text-gray-900"
              />
              <VentureCard
                icon={Rocket}
                title="Microbuk"
                desc="Another practical tech solution in Wole's growing portfolio, designed for real-world productivity and impact."
                accent="#F59E0B"
                className="bg-slate-50 border border-gray-100 text-gray-900"
              />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── CORPORATE EXPERTISE ───────────────────────────── */}
      <section id="impact" className="py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <SectionLabel>Corporate Expertise</SectionLabel>
              <h2 className="font-heading text-5xl font-bold tracking-tight mb-6 leading-tight">
                Enterprise execution meets{" "}
                <span className="italic text-gray-400">entrepreneurial innovation.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                With years of corporate experience across operations, logistics systems
                leadership, and technical support management, Wole bridges the gap between
                enterprise-scale execution and bold entrepreneurial vision.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                He helps business owners automate operations and slash costs with emerging
                AI tools and custom-built systems that fuel sustainable, long-term growth.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Operations & Logistics", desc: "Systems leadership at enterprise scale" },
                  { icon: BrainCircuit, label: "AI Integration", desc: "Custom automation for cost reduction" },
                  { icon: Zap, label: "Technical Support", desc: "Infrastructure & support management" },
                  { icon: Rocket, label: "Growth Strategy", desc: "Sustainable systems for scaling ventures" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <Icon size={20} className="text-blue-400 mb-3" strokeWidth={1.8} />
                    <div className="text-sm font-semibold mb-1">{label}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── YOUTH EMPOWERMENT ─────────────────────────────── */}
      <section id="youth" className="py-28 max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>Youth Empowerment</SectionLabel>
          <h2 className="font-heading text-5xl font-bold tracking-tight mb-4">
            Raising the Next Generation
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mb-16">
            Visiting secondary schools across Nigeria, teaching life readiness skills —
            clarity, discipline, and purpose — to prepare teens for success.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              title: "Teenage Accelerator Program",
              desc: "Building confidence and direction in young lives — a pioneering programme that arms teenagers with the mindset and tools to lead their generation.",
              color: "bg-orange-50 border-orange-100",
              accent: "#F97316",
            },
            {
              icon: GraduationCap,
              title: "Lagos Kids Tech Festival",
              desc: "Exposing kids to technology, innovation, and limitless opportunities — showing them a world where they are creators, not just consumers.",
              color: "bg-violet-50 border-violet-100",
              accent: "#7C3AED",
            },
            {
              icon: BookOpen,
              title: "School Outreach",
              desc: "Regular visits to secondary schools across Nigeria, delivering workshops on clarity, discipline, and purpose — the foundational skills for a meaningful life.",
              color: "bg-emerald-50 border-emerald-100",
              accent: "#059669",
            },
          ].map(({ icon: Icon, title, desc, color, accent }, i) => (
            <FadeIn key={title} delay={i * 0.1}>
              <div className={`rounded-2xl p-7 border ${color} h-full`}>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: accent + "1A" }}
                >
                  <Icon size={22} style={{ color: accent }} strokeWidth={1.8} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── AUTHOR ────────────────────────────────────────── */}
      <section id="author" className="py-28 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* 3D Book Mockup */}
            <FadeIn direction="right">
              <div className="relative flex items-center justify-center py-20">
                <style>{`
                  /* ── Scene ── */
                  .book-wrap { perspective: 1400px; }

                  /* ── Book container ── */
                  .book3d {
                    width: 230px;
                    height: 320px;
                    position: relative;
                    transform-style: preserve-3d;
                    transform: rotateY(-28deg) rotateX(6deg);
                    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                  }
                  .book-wrap:hover .book3d {
                    transform: rotateY(-12deg) rotateX(4deg);
                  }

                  /* ── BACK face ── */
                  .b-back {
                    position: absolute;
                    inset: 0;
                    background: #ccc8dc;
                    transform: translateZ(-22px) rotateY(180deg);
                    backface-visibility: hidden;
                  }

                  /* ── FRONT face (parent of all side faces so they inherit z=22) ── */
                  .b-front {
                    position: absolute;
                    inset: 0;
                    transform: translateZ(22px);
                    transform-style: preserve-3d;   /* children live in same 3D space */
                    backface-visibility: hidden;
                  }

                  /* ── Cover content (overflow clipped separately) ── */
                  .b-cover {
                    position: absolute;
                    inset: 0;
                    background: #ffffff;
                    border-radius: 1px 5px 5px 1px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    box-shadow: inset -3px 0 8px rgba(0,0,0,0.06);
                  }
                  /* Gloss sheen */
                  .b-cover::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(120deg, rgba(255,255,255,0.2) 0%, transparent 55%);
                    pointer-events: none;
                    z-index: 10;
                  }

                  /*
                   * ── SPINE (child of b-front → inherits translateZ(22px))
                   *    right:100% puts the spine's right edge flush with b-front's left edge.
                   *    transform-origin: right center → pivot = that shared left/right edge.
                   *    rotateY(-90deg) folds the spine back 90° from z=+22 to z=-22.
                   */
                  .b-spine {
                    position: absolute;
                    top: 0;
                    right: 100%;
                    width: 44px;
                    height: 100%;
                    background: linear-gradient(180deg, #3730a3 0%, #2563EB 55%, #0284c7 100%);
                    transform-origin: right center;
                    transform: rotateY(-90deg);
                    backface-visibility: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: inset -5px 0 14px rgba(0,0,0,0.3), inset 3px 0 6px rgba(255,255,255,0.08);
                  }
                  .b-spine-text {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    font-family: 'Inter', sans-serif;
                    font-size: 9px;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.8);
                    white-space: nowrap;
                  }

                  /*
                   * ── PAGES (right edge, child of b-front)
                   *    left:100% → left edge flush with b-front's right edge.
                   *    transform-origin: left center → pivot at right edge of book.
                   *    rotateY(90deg) folds pages back 90° from z=+22 to z=-22.
                   */
                  .b-pages {
                    position: absolute;
                    top: 2px;
                    left: 100%;
                    width: 44px;
                    height: calc(100% - 4px);
                    transform-origin: left center;
                    transform: rotateY(90deg);
                    backface-visibility: hidden;
                    background: repeating-linear-gradient(
                      90deg,
                      #ede8df 0px, #f5f1ea 1.5px,
                      #e8e3d9 2px, #f2ede5 4px
                    );
                    border-radius: 0 1px 1px 0;
                  }

                  /*
                   * ── TOP EDGE (child of b-front)
                   *    bottom:100% → bottom edge at b-front's top (y=0).
                   *    transform-origin: bottom center → pivot at top of book.
                   *    rotateX(90deg) folds it back from z=+22 to z=-22.
                   */
                  .b-top {
                    position: absolute;
                    left: 0;
                    bottom: 100%;
                    width: 100%;
                    height: 44px;
                    background: linear-gradient(90deg, #b0abc4, #edeaf5, #d4d0e6);
                    transform-origin: bottom center;
                    transform: rotateX(90deg);
                    backface-visibility: hidden;
                  }

                  /*
                   * ── BOTTOM EDGE (child of b-front)
                   *    top:100% → top edge at b-front's bottom (y=320).
                   *    rotateX(-90deg) folds it back.
                   */
                  .b-bottom {
                    position: absolute;
                    left: 0;
                    top: 100%;
                    width: 100%;
                    height: 44px;
                    background: linear-gradient(90deg, #b0abc4, #edeaf5, #d4d0e6);
                    transform-origin: top center;
                    transform: rotateX(-90deg);
                    backface-visibility: hidden;
                  }

                  /* ── Gradient text utility ── */
                  .grad-text {
                    background: linear-gradient(135deg, #4F46E5 0%, #2563EB 50%, #0ea5e9 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                  }
                `}</style>

                <div
                  className="book-wrap cursor-pointer"
                  style={{ filter: "drop-shadow(-20px 32px 52px rgba(0,0,0,0.32)) drop-shadow(-6px 10px 16px rgba(0,0,0,0.14))" }}
                >
                  <div className="book3d">

                    {/* Back face */}
                    <div className="b-back" />

                    {/* Front face — parent of all side faces */}
                    <div className="b-front">

                      {/* Side faces (children → inherit z=22, rotate from shared edges) */}
                      <div className="b-spine">
                        <span className="b-spine-text">What Is In Your Hands · Wole Ekanola</span>
                      </div>
                      <div className="b-pages" />
                      <div className="b-top" />
                      <div className="b-bottom" />

                      {/* Cover content */}
                      <div className="b-cover">

                        {/* Author — top 15% */}
                        <div style={{ padding: "16px 16px 12px 16px", borderBottom: "1px solid #f0edf8" }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", color: "#a8a0b8", textTransform: "uppercase", margin: 0 }}>
                            Wole Ekanola
                          </p>
                        </div>

                        {/* Title — 70% */}
                        <div style={{ flex: 1, padding: "16px 14px 12px 16px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, fontWeight: 900, color: "#111827", lineHeight: 1.05, margin: 0, letterSpacing: "-0.5px" }}>
                            What
                          </p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 500, color: "#9ca3af", lineHeight: 1.2, margin: "3px 0 8px" }}>
                            Is In
                          </p>
                          <div style={{ width: 28, height: 2, background: "linear-gradient(90deg, #4F46E5, #0ea5e9)", borderRadius: 2, marginBottom: 10 }} />
                          <p className="grad-text" style={{ fontFamily: "'Inter', sans-serif", fontSize: 36, fontWeight: 900, lineHeight: 1.0, margin: 0, letterSpacing: "-0.5px" }}>
                            Your
                          </p>
                          <p className="grad-text" style={{ fontFamily: "'Inter', sans-serif", fontSize: 46, fontWeight: 900, lineHeight: 0.9, margin: 0, letterSpacing: "-1px" }}>
                            Hands
                          </p>
                        </div>

                        {/* Tagline — bottom 15% */}
                        <div style={{ padding: "10px 14px 14px 16px", borderTop: "1px solid #f0edf8" }}>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, fontWeight: 400, color: "#b0a8c0", lineHeight: 1.55, margin: 0 }}>
                            A practical guide unlocking youth potential by revealing the power already within every young person.
                          </p>
                        </div>

                      </div>{/* end .b-cover */}
                    </div>{/* end .b-front */}
                  </div>{/* end .book3d */}
                </div>

                {/* Badge */}
                <div className="absolute -bottom-3 right-4 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg whitespace-nowrap">
                  + More titles in the works
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="left">
              <SectionLabel>Author &amp; Thought Leader</SectionLabel>
              <h2 className="font-heading text-4xl font-bold tracking-tight mb-6 leading-tight">
                Inspiring Action &amp; Responsibility
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Author of{" "}
                <span className="font-semibold italic text-gray-900">
                  &quot;What Is In Your Hands&quot;
                </span>
                — a practical guide unlocking youth potential by revealing the power
                already within every young person.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                With several more titles in the works, Wole continues to craft literature
                that inspires a generation to act with clarity, purpose, and courage.
              </p>
              <a
                href="https://linkedin.com/in/woleekanola"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                Follow on LinkedIn for updates <ArrowUpRight size={16} />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────── */}
      <section id="contact" className="py-28 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <SectionLabel>Connect Today</SectionLabel>
            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              Ready to Build{" "}
              <span className="italic text-gray-400">Systems That Last?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Partner on AI automation, join a program, or collaborate to build systems
              that last — Wole&apos;s ready to elevate your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://linkedin.com/in/woleekanola"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0A66C2] text-white font-semibold rounded-full hover:bg-[#084e96] transition-colors cursor-pointer text-sm"
              >
                <Link2 size={18} />
                Connect on LinkedIn
              </a>
              <CopyEmailButton email="woleekanola@gmail.com" />
              <a
                href="https://instagram.com/woleekanola"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors cursor-pointer text-sm"
              >
                <IconInstagram size={17} /> @woleekanola
              </a>
              <a
                href="https://x.com/woleekanola"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors cursor-pointer text-sm"
              >
                <IconX size={15} /> @woleekanola
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ACTIVE BUILDER ────────────────────────────────── */}
      <section id="builder" className="py-28 border-t border-gray-100 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <SectionLabel>Currently Building</SectionLabel>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold -mt-5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                LIVE
              </span>
            </div>
            <h2 className="font-heading text-5xl font-bold tracking-tight mb-4">
              Still Shipping.{" "}
              <span className="italic text-gray-400">Every Day.</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mb-14">
              61 public repos and counting — here&apos;s the proof that the builder never stops.
            </p>
          </FadeIn>

          {/* Row 1 — Profile summary (contribution timeline) */}
          <FadeIn delay={0.08}>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">Contribution Activity</span>
                </div>
                <a
                  href="https://github.com/woleekanola"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  @woleekanola <ArrowUpRight size={12} />
                </a>
              </div>
              <img
                src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=woleekanola&theme=default"
                alt="GitHub contribution timeline"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* Row 2 — Stats + Streak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FadeIn delay={0.14}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=woleekanola&show_icons=true&hide_border=true&count_private=true&include_all_commits=true&bg_color=ffffff&title_color=111827&icon_color=2563EB&text_color=6B7280"
                  alt="GitHub stats for woleekanola"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="https://streak-stats.demolab.com/?user=woleekanola&hide_border=true&background=ffffff&stroke=f3f4f6&ring=2563EB&fire=4F46E5&currStreakLabel=111827&sideLabels=6B7280&dates=9CA3AF&sideNums=111827&currStreakNum=111827"
                  alt="GitHub streak stats for woleekanola"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Row 3 — Top languages + Productive time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FadeIn delay={0.22}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=woleekanola&layout=compact&hide_border=true&bg_color=ffffff&title_color=111827&text_color=6B7280&langs_count=8"
                  alt="Top languages"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                <img
                  src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=woleekanola&theme=default"
                  alt="Repos per language"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>

          {/* Row 4 — Activity graph full width */}
          <FadeIn delay={0.3}>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden mb-8">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=woleekanola&theme=minimal&hide_border=true&bg_color=ffffff&color=374151&line=2563EB&point=4F46E5&area=true&area_color=EEF2FF"
                alt="GitHub activity graph"
                className="w-full"
                loading="lazy"
              />
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.35}>
            <div className="text-center">
              <a
                href="https://github.com/woleekanola"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View All 61 Repos on GitHub
                <ArrowUpRight size={15} />
              </a>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="font-heading font-semibold text-gray-900">Wole Ekanola</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/woleekanola"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/woleekanola"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
