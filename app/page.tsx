"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  Scale,
  FileText,
  CheckCircle2,
  Clock,
  Award,
  Star,
  X,
  ChevronDown,
  ShieldCheck,
  Building2,
  Sparkles,
  ScrollText,
  FileCheck2,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";
import {
  brand,
  testimonials,
  contact,
  whatsapp,
  telephone,
  whatsappFor,
  maps,
  reviews,
} from "./lib/brand";

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GoogleColoredIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.15 0 9.98 0 12s.45 3.85 1.24 5.42l4.04-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const areas = [
  {
    title: "Inventário & Partilha de Bens",
    subtitle: "Via Extrajudicial em Cartório ou Judicial",
    icon: ScrollText,
    summary:
      "Cuidado com a história da sua família e condução técnica para organizar a transmissão do patrimônio sem desgastes desnecessários.",
    details:
      "Após a perda de um ente querido, lidar com a divisão de bens e trâmites de cartório pode ser exaustivo e burocrático. A Dra. Luana realiza o diagnóstico completo do acervo sucessório, orienta os herdeiros com clareza e prioriza sempre a via do inventário em cartório quando preenchidos os requisitos legais, trazendo economia de tempo e segurança total na partilha.",
    topics: [
      "Inventário extrajudicial rápido diretamente em cartório de notas",
      "Inventário judicial consensual ou litigioso com firmeza técnica",
      "Organização e levantamento completo de bens, dívidas e certidões",
      "Planejamento de partilha justa e redução de atritos familiares",
    ],
    whatsappSubject: "inventário e partilha de bens",
  },
  {
    title: "Ação de Usucapião",
    subtitle: "Urbana, Rural, Judicial e em Cartório",
    icon: Building2,
    summary:
      "Reconhecimento formal da propriedade para quem tem a posse legítima de imóvel, transformando contrato de gaveta em escritura definitiva.",
    details:
      "Você possui um imóvel há anos, mas não tem a escritura registrada em seu nome? A posse contínua, pacífica e sem oposição pode ser convertida em propriedade plena com registro imobiliário na matrícula. Avaliamos a melhor modalidade (ordinária, extraordinária, especial urbana ou rural) e conduzimos tanto a usucapião extrajudicial em cartório quanto a via judicial.",
    topics: [
      "Usucapião extrajudicial conduzida perante o Cartório de Imóveis",
      "Regularização de posses consolidadas e contratos de gaveta",
      "Levantamento da cadeia possessória, plantas e certidões",
      "Emissão da matrícula com propriedade plena e valorização do imóvel",
    ],
    whatsappSubject: "usucapião e reconhecimento de propriedade",
  },
  {
    title: "Regularização de Imóveis",
    subtitle: "Escritura, Registro e Pendências em Cartório",
    icon: FileCheck2,
    summary:
      "Atenção minuciosa à matrícula, escritura, averbações e pendências notariais para proteger o que é seu por direito.",
    details:
      "Imóvel sem escritura ou com pendências cadastrais perde até 40% do valor de mercado e não pode ser financiado nem vendido com segurança. Com 8 anos de experiência prática em Cartório de Registro de Imóveis, a Dra. Luana identifica com precisão as exigências do cartório e soluciona retificações, desmembramentos, averbações de construção e baixa de ônus.",
    topics: [
      "Regularização de imóveis sem escritura ou sem registro na matrícula",
      "Averbação de construções, reformas e habite-se junto ao cartório",
      "Retificação de área, desmembramento e unificação de lotes",
      "Cancelamento de penhoras, hipotecas e gravames antigos",
    ],
    whatsappSubject: "regularização de imóvel e documentação",
  },
  {
    title: "Consultoria Imobiliária & Notarial",
    subtitle: "Segurança Jurídica Preventiva e Contratos",
    icon: Scale,
    summary:
      "Due diligence e análise minuciosa de contratos, certidões e riscos antes de comprar, vender ou doar patrimônio.",
    details:
      "Adquirir ou vender um imóvel sem análise jurídica prévia pode gerar prejuízos irreversíveis com dívidas ocultas, penhoras ou vícios de titularidade. Nossa consultoria analisa a fundo o histórico do vendedor e do bem, elabora minutas contratuais blindadas e orienta todos os passos até a lavratura da escritura pública e o respectivo registro.",
    topics: [
      "Due diligence preventiva em transações de compra e venda de imóveis",
      "Análise profunda de certidões cíveis, fiscais e trabalhistas",
      "Elaboração e revisão criteriosa de promessas de compra e venda",
      "Assessoria direta junto a tabelionatos e cartórios registrais",
    ],
    whatsappSubject: "consultoria imobiliária e contratos",
  },
];

const faqs = [
  {
    question: "Quando é possível fazer o inventário em cartório (extrajudicial)?",
    answer:
      "O inventário extrajudicial é a via mais rápida e prática. Ele pode ser realizado no Cartório de Notas quando todos os herdeiros forem maiores, capazes e estiverem de pleno acordo sobre a partilha de bens. Com a legislação recente, mesmo havendo testamento ou menores é possível utilizar a via extrajudicial sob certas condições com homologação judicial. A Dra. Luana orientará exatamente a viabilidade do seu caso.",
  },
  {
    question: "Tenho apenas contrato de gaveta ou recibo. Posso regularizar?",
    answer:
      "Sim. É muito comum no Brasil a posse ser transmitida por meio de 'contratos de gaveta' ou recibos simples de compra e venda. A depender do tempo de posse, da origem do bem e dos documentos comprobatórios, é possível regularizar a titularidade por meio da Ação de Usucapião (judicial ou em cartório) ou por adjudicação compulsória extrajudicial.",
  },
  {
    question: "Quanto tempo costuma demorar o processo?",
    answer:
      "Os procedimentos extrajudiciais realizados diretamente em cartório costumam ser finalizados em questão de poucas semanas ou meses, desde que toda a documentação esteja em ordem. Já processos judiciais dependem do fluxo da comarca. Por ter 8 anos de experiência em Cartório de Registro de Imóveis, a Dra. Luana trabalha para que o processo tramite sem exigências desnecessárias ou notas de devolução.",
  },
  {
    question: "Como funciona o atendimento se eu moro em outra cidade ou estado?",
    answer:
      "A Dra. Luana atende clientes de todo o Brasil e brasileiros no exterior por meio de atendimento 100% on-line e seguro. As reuniões são realizadas por vídeo ou WhatsApp, e os documentos podem ser enviados de forma digitalizada. Procedimentos em cartório e processos judiciais hoje são quase em sua totalidade eletrônicos.",
  },
  {
    question: "Quais documentos preciso ter em mãos para a primeira conversa?",
    answer:
      "Para a conversa inicial, não se preocupe em ter tudo organizado imediatamente. Documentos pessoais básicos (RG/CPF) e o que você tiver do imóvel (certidão de matrícula, escritura antiga, contrato de gaveta ou espelho do IPTU) já são suficientes para que a Dra. Luana faça um primeiro diagnóstico preciso.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<(typeof areas)[number] | null>(
    null
  );
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const dialogRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!activeArea) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const content = contentRef.current;
    content?.setAttribute("inert", "");
    const timer = window.setTimeout(
      () =>
        dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(),
      0
    );
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      content?.removeAttribute("inert");
      previousFocus?.focus();
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-[#FAF7F2] text-[#121417]">
        {/* Skip to Content */}
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#121417] focus:p-4 focus:text-[#FAF7F2]"
        >
          Ir para o conteúdo principal
        </a>

        {/* TOP NAVIGATION HEADER */}
        <header className="sticky top-0 z-40 border-b border-[#E8E1D5]/80 bg-[#FAF7F2]/90 backdrop-blur-md transition-all">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[104px] sm:px-8 lg:px-12">
            {/* Logo */}
            <a
              href="#inicio"
              aria-label="Luana Oliveira Advocacia — Início"
              onClick={closeMenu}
              className="group flex items-center gap-3.5 shrink-0"
            >
              <div className="relative flex items-center">
                <Image
                  src={brand.logo}
                  width={2172}
                  height={724}
                  alt={brand.businessName}
                  priority
                  className="h-[52px] w-auto object-contain sm:h-[63px] brightness-95 transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              {[
                ["INÍCIO", "#inicio"],
                ["O ESCRITÓRIO", "#sobre"],
                ["ESPECIALIDADES", "#especialidades"],
                ["POR QUE ESCOLHER", "#diferenciais"],
                ["AVALIAÇÕES (5,0 ★)", "#avaliacoes"],
                ["CONTATO", "#contato"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="relative text-[11px] font-semibold tracking-[0.14em] text-[#3D3833] transition-colors hover:text-[#B89047]"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Header Right Socials & High-Contrast CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              {/* Instagram */}
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Luana Oliveira"
                className="grid size-9 place-items-center rounded-lg border border-[#DDD5C7] text-[#3D3833] transition-all hover:border-[#B89047] hover:text-[#B89047] hover:shadow-xs"
              >
                <InstagramIcon size={15} />
              </a>

              {/* Phone */}
              <a
                href={telephone}
                aria-label={`Ligar para o escritório ${brand.phone}`}
                className="grid size-9 place-items-center rounded-lg border border-[#DDD5C7] text-[#3D3833] transition-all hover:border-[#B89047] hover:text-[#B89047] hover:shadow-xs"
              >
                <Phone size={15} />
              </a>

              {/* WhatsApp Icon */}
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp direto do escritório"
                className="grid size-9 place-items-center rounded-lg border border-[#DDD5C7] text-[#3D3833] transition-all hover:border-[#B89047] hover:text-[#B89047] hover:shadow-xs"
              >
                <WhatsAppIcon size={15} />
              </a>

              {/* Main Action Button */}
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                variant="dark"
                className="rounded-lg shadow-sm"
              >
                <span>CONSULTAR DIREITOS</span>
                <ArrowUpRight size={14} className="text-[#DFBD76]" />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 place-items-center rounded-lg border border-[#DDD5C7] text-[#121417] lg:hidden hover:border-[#B89047]"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Drawer Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24 }}
                className="border-b border-[#E8E1D5] bg-[#FAF7F2] px-6 py-5 lg:hidden"
              >
                <div className="flex flex-col gap-2">
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório", "#sobre"],
                    ["Especialidades Jurídicas", "#especialidades"],
                    ["Por Que Escolher", "#diferenciais"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Localização", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-2.5 text-sm font-medium text-[#2C2926] transition-colors hover:text-[#B89047]"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 pt-3 border-t border-[#E8E1D5] flex flex-col gap-2.5">
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 rounded-lg bg-[#121417] py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] shadow-sm"
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      href={telephone}
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 rounded-lg border border-[#DDD5C7] py-3 text-xs font-semibold text-[#121417]"
                    >
                      <Phone size={14} /> Ligar: {brand.phone}
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* HERO SECTION - REPLICATING THE LUXURY EDITORIAL PATTERN */}
        <section
          id="inicio"
          className="relative isolate overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28"
          style={{
            background:
              "radial-gradient(ellipse at 85% 20%, rgba(220, 191, 130, 0.12) 0%, rgba(250, 247, 242, 0) 65%), #FAF7F2",
          }}
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              {/* Left Column: Headline, Subhead, Badges, CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="max-w-2xl"
              >
                {/* Top Pill Tag */}
                <motion.div variants={reveal} className="inline-block mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#121417] px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#FAF7F2] shadow-sm border border-[#2B303A]">
                    <span className="size-2 rounded-full bg-[#DFBD76] animate-pulse" />
                    <span>
                      DRA. LUANA OLIVEIRA · DIREITO IMOBILIÁRIO & SUCESSÕES ·
                      CARATINGA - MG
                    </span>
                  </div>
                </motion.div>

                {/* Hero Main Headline with Italic Serif Accent */}
                <motion.h1
                  variants={reveal}
                  className="font-display text-[2.75rem] leading-[1.08] tracking-[-0.025em] text-[#121417] sm:text-[3.75rem] lg:text-[4.25rem]"
                >
                  Defesa jurídica estratégica, firmeza processual e excelência
                  para{" "}
                  <span className="italic font-normal text-[#B89047]">
                    você e sua família.
                  </span>
                </motion.h1>

                {/* Google Reviews Trust Tag */}
                <motion.div
                  variants={reveal}
                  className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wide text-[#7A5B23]"
                >
                  <span className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </span>
                  <span>
                    Nota máxima 5,0 ★ com 43 avaliações no Google Meu Negócio.
                  </span>
                </motion.div>

                {/* Narrative Lead Paragraph */}
                <motion.p
                  variants={reveal}
                  className="mt-4 text-[15px] leading-relaxed text-[#4A453E] sm:text-base sm:leading-8"
                >
                  Protegemos seu patrimônio e os direitos da sua família com
                  atuação altamente especializada em{" "}
                  <strong className="font-semibold text-[#121417]">
                    Inventário, Usucapião e Regularização de Imóveis
                  </strong>
                  , unindo mais de 8 anos de rigor técnico notarial, discrição e
                  acolhimento humano.
                </motion.p>

                {/* Dual Action CTA Buttons */}
                <motion.div
                  variants={reveal}
                  className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    href={whatsapp}
                    target="_blank"
                    size="lg"
                    variant="dark"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={18} className="text-[#25D366]" />
                    <span>FALAR NO WHATSAPP COM O ESCRITÓRIO</span>
                  </GlowingButton>

                  <a
                    href="#especialidades"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#DDD5C7] bg-white px-6 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#121417] transition-all hover:border-[#B89047] hover:bg-[#FAF7F2] shadow-xs active:scale-[0.98]"
                  >
                    <span>ESPECIALIDADES JURÍDICAS</span>
                    <ArrowRight size={15} className="text-[#B89047]" />
                  </a>
                </motion.div>

                {/* Bottom Micro Trust Row */}
                <motion.div
                  variants={reveal}
                  className="mt-10 grid grid-cols-1 gap-3 border-t border-[#E8E1D5] pt-6 sm:grid-cols-3 text-xs text-[#5C564E]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#F59E0B]">★</span>
                    <span className="font-medium">
                      5,0 estrelas no Google (43 avaliações)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-[#B89047] shrink-0" />
                    <span>Atendimento de Segunda a Sexta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#B89047] shrink-0" />
                    <span>Caratinga - MG & Online no Brasil</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column: Luxury Hero Showcase Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
              >
                {/* Framed Card Container */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0F141D] border border-[#B89047]/30 shadow-[0_25px_60px_-15px_rgba(15,20,29,0.35)]">
                  {/* Subtle Top Ambient Gold Glow */}
                  <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#DFBD76]/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#B89047]/10 blur-3xl" />

                  {/* Top Badge Overlay */}
                  <div className="relative z-10 p-5 sm:p-6 pb-0 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A2230]/90 px-3.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#FAF7F2] border border-[#B89047]/30 backdrop-blur-xs">
                      <span className="size-1.5 rounded-full bg-[#25D366]" />
                      CARATINGA - MG · ATENDIMENTO NACIONAL
                    </span>
                  </div>

                  {/* Portrait Showcase with Golden Organic Torn Leaf / Silhouette effect */}
                  <div className="relative mt-2 px-5 sm:px-6 flex justify-center items-end min-h-[380px] sm:min-h-[440px]">
                    {/* Background torn paper SVG gold contour */}
                    <div className="absolute inset-x-6 inset-y-4 rounded-xl bg-gradient-to-b from-[#1C2433] to-[#0A0D13] border border-[#B89047]/20 flex items-center justify-center overflow-hidden">
                      {/* Artistic Scales Watermark */}
                      <Scale
                        size={280}
                        strokeWidth={0.5}
                        className="absolute text-[#DFBD76]/8 -right-16 -top-10 pointer-events-none"
                      />
                    </div>

                    {/* Dra. Luana Oliveira Portrait */}
                    <div className="relative z-10 w-full max-w-[320px]">
                      <Image
                        src={brand.portrait}
                        alt="Dra. Luana Oliveira — Advogada especialista em Direito Imobiliário e Inventário"
                        width={340}
                        height={510}
                        priority
                        className="mx-auto h-auto w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                      />
                    </div>
                  </div>

                  {/* Bottom Lawyer Title Overlay inside card */}
                  <div className="relative z-10 border-t border-[#B89047]/25 bg-[#0C1017]/95 px-6 py-5 backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-2xl text-[#FAF7F2] tracking-wide">
                        Luana Oliveira
                      </h2>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#DFBD76]">
                        Advogada Associada · OAB/MG
                      </p>
                      <p className="text-[10px] text-[#A0988D] mt-0.5">
                        Especialista em Direito Imobiliário & Notarial
                      </p>
                    </div>
                    <div className="grid size-10 place-items-center rounded-lg bg-[#18202E] border border-[#B89047]/30 text-[#DFBD76]">
                      <Scale size={20} />
                    </div>
                  </div>
                </div>

                {/* Floating Google Review Card on bottom right */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -bottom-6 -right-2 sm:-right-5 z-20 rounded-xl bg-white p-3.5 sm:p-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] border border-[#E8E1D5] max-w-[240px]"
                >
                  <div className="flex items-center gap-2.5">
                    <GoogleColoredIcon size={22} />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#121417]">
                          5,0 / 5,0
                        </span>
                        <div className="flex text-[#F59E0B]">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              fill="currentColor"
                              stroke="none"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#7A7369] mt-0.5">
                        43 Avaliações no Google (100% 5★)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PRESTIGE DARK STRIP (Transitional Trust Section) */}
        <section className="relative isolate overflow-hidden bg-[#0C0E11] py-10 text-[#FAF7F2] border-y border-[#B89047]/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#B89047]/15">
              <div className="pt-4 sm:pt-0 sm:pr-6">
                <span className="font-display text-3xl sm:text-4xl text-[#DFBD76]">
                  8+ Anos
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#FAF7F2]">
                  Prática Notarial e Registral
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#9E978C]">
                  Vivência direta dentro de Cartório de Registro de Imóveis.
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-6">
                <span className="font-display text-3xl sm:text-4xl text-[#DFBD76]">
                  Nota 5.0 ★
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#FAF7F2]">
                  100% Satisfação no Google
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#9E978C]">
                  Todas as 43 avaliações públicas concedidas com nota máxima.
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:px-6">
                <span className="font-display text-3xl sm:text-4xl text-[#DFBD76]">
                  Pós-Graduada
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#FAF7F2]">
                  PUC Minas & Doctum
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#9E978C]">
                  Direito Imobiliário, Notarial e Registral de excelência.
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-6">
                <span className="font-display text-3xl sm:text-4xl text-[#DFBD76]">
                  Atendimento Direto
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#FAF7F2]">
                  Sem Intermediários
                </p>
                <p className="mt-1 text-[11px] leading-5 text-[#9E978C]">
                  Você trata cada detalhe diretamente com a advogada titular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES JURÍDICAS (ÁREAS DE ATUAÇÃO) */}
        <section
          id="especialidades"
          className="scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            {/* Section Header */}
            <div className="max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                • ESPECIALIDADES JURÍDICAS DO ESCRITÓRIO
              </span>
              <h2 className="mt-3 font-display text-3xl leading-[1.12] tracking-[-0.025em] text-[#121417] sm:text-4xl lg:text-5xl">
                Soluções estratégicas para proteger seu patrimônio e a
                tranquilidade de quem você ama.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4A453E]">
                Cada caso recebe um estudo de viabilidade jurídica minucioso.
                Priorizamos sempre os caminhos mais ágeis, seguros e econômicos,
                seja por cartório (via extrajudicial) ou pela via judicial.
              </p>
            </div>

            {/* Grid of 4 Practice Area Cards */}
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:gap-8">
              {areas.map((area) => {
                const Icon = area.icon;
                return (
                  <article
                    key={area.title}
                    className="group relative flex flex-col justify-between rounded-xl bg-white p-7 sm:p-9 border border-[#E8E1D5] shadow-[0_10px_30px_-10px_rgba(18,20,23,0.04)] transition-all duration-300 hover:border-[#B89047] hover:shadow-[0_20px_45px_-12px_rgba(184,144,71,0.12)] hover:-translate-y-1"
                  >
                    <div>
                      {/* Icon & Category Tag */}
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg bg-[#FAF7F2] border border-[#E8E1D5] text-[#B89047] group-hover:bg-[#121417] group-hover:text-[#DFBD76] group-hover:border-[#121417] transition-colors">
                          <Icon size={22} strokeWidth={1.7} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A0988D] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E8E1D5]">
                          Atuação Especializada
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="mt-6 font-display text-2xl text-[#121417] group-hover:text-[#B89047] transition-colors">
                        {area.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#7A5B23]">
                        {area.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="mt-3.5 text-[14px] leading-relaxed text-[#4A453E]">
                        {area.summary}
                      </p>

                      {/* Topic Checklist */}
                      <div className="mt-6 border-t border-[#F0EAE1] pt-5">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#7A7369]">
                          O que está incluído no atendimento:
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {area.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2.5 text-xs text-[#3D3833] leading-relaxed"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-[#B89047] shrink-0 mt-0.5"
                              />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Action CTAs */}
                    <div className="mt-8 pt-5 border-t border-[#F0EAE1] flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="text-xs font-semibold text-[#121417] hover:text-[#B89047] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Ver detalhes do procedimento</span>
                        <ArrowRight size={13} />
                      </button>

                      <a
                        href={whatsappFor(area.whatsappSubject)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B89047] hover:text-[#7A5B23] transition-colors"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Consultar este caso ↗</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* POR QUE ESCOLHER (DIFERENCIAIS COMPETITIVOS) */}
        <section
          id="diferenciais"
          className="scroll-mt-20 py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8E1D5]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                • POR QUE ESCOLHER O NOSSO ESCRITÓRIO
              </span>
              <h2 className="mt-3 font-display text-3xl leading-[1.12] text-[#121417] sm:text-4xl lg:text-5xl">
                Diferenciais que garantem agilidade, segurança e tranquilidade.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#4A453E]">
                Entenda o que torna a atuação da Dra. Luana Oliveira uma
                referência em inventários e regularização imobiliária.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "8 Anos em Cartório de Registro",
                  description:
                    "Conhecimento profundo das normas da Corregedoria e da rotina registral. Sabemos com precisão quais documentos são exigidos para aprovação sem atrasos.",
                  icon: ShieldCheck,
                },
                {
                  number: "02",
                  title: "Prioridade para Vias Extrajudiciais",
                  description:
                    "Sempre que preenchidos os requisitos da lei, conduzimos o processo em cartório de notas e registro, reduzindo meses ou anos de espera do judiciário.",
                  icon: Sparkles,
                },
                {
                  number: "03",
                  title: "Atendimento Direto com a Titular",
                  description:
                    "Você não fala com robôs ou intermediários. Toda a estratégia, conferência documental e esclarecimento de dúvidas é conduzida pela Dra. Luana.",
                  icon: Award,
                },
                {
                  number: "04",
                  title: "Transparência sem 'Juridiquês'",
                  description:
                    "Explicações claras e acessíveis para que você entenda cada decisão, com honorários previamente combinados e respeito absoluto à sua família.",
                  icon: FileText,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative rounded-xl bg-white p-6 sm:p-7 border border-[#E8E1D5] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl text-[#B89047]">
                          {item.number}
                        </span>
                        <div className="grid size-10 place-items-center rounded-lg bg-[#FAF7F2] text-[#B89047] border border-[#E8E1D5]">
                          <Icon size={18} />
                        </div>
                      </div>
                      <h3 className="mt-5 font-display text-xl text-[#121417]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-[#5C564E]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* O ESCRITÓRIO & A ADVOGADA (DRA. LUANA OLIVEIRA) */}
        <section
          id="sobre"
          className="scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              {/* Image Showcase */}
              <div className="relative mx-auto w-full max-w-[460px] lg:mx-0">
                <div className="overflow-hidden rounded-2xl bg-[#0F141D] border border-[#B89047]/30 shadow-2xl">
                  <Image
                    src={brand.aboutImage}
                    alt="Apresentação da Dra. Luana Oliveira — Especialista em Direito Imobiliário, Notarial e Registral"
                    width={510}
                    height={510}
                    className="h-auto w-full object-cover"
                  />
                  <div className="border-t border-[#B89047]/20 bg-[#0C1017] p-5 text-center">
                    <p className="font-display text-lg text-[#FAF7F2]">
                      Dra. Luana Oliveira
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#DFBD76]">
                      Advogada · Caratinga / MG · Atendimento Nacional
                    </p>
                  </div>
                </div>

                {/* Floating Quote Badge */}
                <div className="mt-4 rounded-xl bg-white p-4 sm:p-5 border border-[#E8E1D5] shadow-md">
                  <p className="italic text-xs leading-relaxed text-[#4A453E]">
                    “Cuidar do patrimônio de uma família é honrar anos de
                    trabalho e sacrifício. Nossa missão é unir rigor técnico e
                    acolhimento humano em cada caso.”
                  </p>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                  • O ESCRITÓRIO & A ADVOGADA
                </span>
                <h2 className="mt-3 font-display text-3xl leading-[1.12] text-[#121417] sm:text-4xl lg:text-5xl">
                  Experiência técnica para orientar.{" "}
                  <span className="italic font-normal text-[#B89047]">
                    Sensibilidade para acolher.
                  </span>
                </h2>

                <p className="mt-6 text-[15px] leading-relaxed text-[#4A453E]">
                  Ao longo de{" "}
                  <strong className="text-[#121417] font-semibold">
                    oito anos de trabalho direto em Cartório de Registro de
                    Imóveis
                  </strong>
                  , Luana Oliveira conheceu de perto as minúcias e exigências
                  que fazem parte da história de cada propriedade. Essa vivência
                  prática é o grande diferencial que hoje ela aplica na
                  advocacia, trazendo celeridade aos processos de inventário,
                  usucapião e regularização imobiliária.
                </p>

                <p className="mt-4 text-[15px] leading-relaxed text-[#4A453E]">
                  Pós-graduada em{" "}
                  <strong className="text-[#121417] font-semibold">
                    Direito Imobiliário pela PUC Minas
                  </strong>{" "}
                  e em{" "}
                  <strong className="text-[#121417] font-semibold">
                    Direito Notarial e Registral pela Doctum
                  </strong>
                  , sua atuação combina solidez acadêmica e soluções práticas.
                  Sua vida e profissão são pautadas em princípios éticos e
                  cristãos, pautados no respeito, verdade e atenção às pessoas.
                </p>

                {/* Credential Pills Grid */}
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-lg bg-white p-3 border border-[#E8E1D5]">
                    <CheckCircle2 size={16} className="text-[#B89047] shrink-0" />
                    <span className="font-medium text-[#121417]">
                      Pós-Graduada em Direito Imobiliário (PUC Minas)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-3 border border-[#E8E1D5]">
                    <CheckCircle2 size={16} className="text-[#B89047] shrink-0" />
                    <span className="font-medium text-[#121417]">
                      Pós-Graduada em Notarial e Registral (Doctum)
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-3 border border-[#E8E1D5]">
                    <CheckCircle2 size={16} className="text-[#B89047] shrink-0" />
                    <span className="font-medium text-[#121417]">
                      8 Anos de Vivência em Cartório de Imóveis
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-white p-3 border border-[#E8E1D5]">
                    <CheckCircle2 size={16} className="text-[#B89047] shrink-0" />
                    <span className="font-medium text-[#121417]">
                      Atendimento Presencial em Caratinga e On-line no Brasil
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    href={whatsapp}
                    target="_blank"
                    size="md"
                    variant="dark"
                  >
                    <WhatsAppIcon size={16} className="text-[#25D366]" />
                    <span>AGENDAR UMA CONSULTA COM A DRA. LUANA</span>
                  </GlowingButton>
                  <a
                    href={telephone}
                    className="text-xs font-bold text-[#121417] hover:text-[#B89047] transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone size={14} />
                    <span>Ligar: {brand.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGIA: COMO FUNCIONA O ATENDIMENTO */}
        <section className="py-20 sm:py-28 bg-[#12151B] text-[#FAF7F2] border-y border-[#B89047]/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFBD76]">
                • PASSO A PASSO TRANSPARENTE
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF7F2]">
                Clareza absoluta para você compreender cada etapa.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#A0988D]">
                Decisões sobre imóveis e sucessões exigem segurança. Conheça as
                quatro fases do nosso atendimento:
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Primeiro Contato",
                  desc: "Você entra em contato pelo WhatsApp e relata brevemente a sua necessidade. Agendamos seu atendimento presencial em Caratinga ou on-line por vídeo.",
                },
                {
                  step: "02",
                  title: "Diagnóstico Documental",
                  desc: "Analisamos com olhar pericial os documentos existentes: certidões de matrícula, contratos, escrituras e documentos dos envolvidos.",
                },
                {
                  step: "03",
                  title: "Estratégia & Orçamento",
                  desc: "Apresentamos o caminho mais rápido e seguro (cartório ou judicial), com cronograma estimado e honorários transparentes antes de qualquer custo.",
                },
                {
                  step: "04",
                  title: "Condução & Resolução",
                  desc: "Acompanhamos todos os trâmites perante cartórios e órgãos públicos, mantendo você informado a cada nova atualização até a conclusão definitiva.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl bg-[#191F2B] p-6 sm:p-7 border border-[#B89047]/20 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display text-3xl text-[#DFBD76]">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-display text-xl text-[#FAF7F2]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-[#B0A89C]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES NO GOOGLE (NOTA MÁXIMA 5,0 ★) */}
        <section
          id="avaliacoes"
          className="scroll-mt-20 py-20 sm:py-28 lg:py-32 bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                  • PROVA SOCIAL & DEPOIMENTOS VERIFICADOS
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#121417]">
                  Confiança comprovada por quem já foi atendido.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4A453E]">
                  Relatos reais de clientes atendidos pela Dra. Luana Oliveira,
                  publicados espontaneamente no Google Meu Negócio.
                </p>
              </div>

              {/* Big Google Rating Badge */}
              <div className="flex shrink-0 items-center gap-4 rounded-xl bg-white p-5 border border-[#E8E1D5] shadow-xs">
                <GoogleColoredIcon size={36} />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-3xl text-[#121417] leading-none">
                      5,0
                    </span>
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-[#7A7369]">
                    43 avaliações no Google (100% 5 estrelas)
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="flex flex-col justify-between rounded-xl bg-white p-7 border border-[#E8E1D5] shadow-xs"
                >
                  <blockquote className="text-[14px] leading-relaxed text-[#2C2926]">
                    “{item.text}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-[#F0EAE1] pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg text-[#121417]">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-[#A0988D] uppercase tracking-wider">
                        Avaliação verificada no Google
                      </p>
                    </div>
                    <div className="flex text-[#F59E0B]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Google Reviews Verification CTA */}
            <div className="mt-10 flex flex-col justify-between gap-4 rounded-xl bg-[#F4EFE6] p-6 border border-[#E8E1D5] sm:flex-row sm:items-center">
              <p className="text-xs text-[#5C564E]">
                Você pode conferir todas as avaliações e comentários diretamente
                no perfil oficial do Google Maps.
              </p>
              <a
                href={reviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#121417] border border-[#DDD5C7] hover:border-[#B89047] transition-all shrink-0"
              >
                <span>VER NO GOOGLE MAPS</span>
                <ArrowUpRight size={14} className="text-[#B89047]" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ - PERGUNTAS FREQUENTES */}
        <section className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E8E1D5]">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                • DÚVIDAS COMUNS
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl text-[#121417]">
                Perguntas Frequentes
              </h2>
              <p className="mt-3 text-sm text-[#4A453E]">
                Respostas diretas para as principais dúvidas de quem precisa de
                inventário ou regularização.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl bg-white border border-[#E8E1D5] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-[#FAF7F2]/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-semibold text-[#121417] pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#B89047] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-[#F0EAE1] px-5 sm:px-6 py-4 text-xs sm:text-sm leading-relaxed text-[#5C564E] bg-[#FAF7F2]/40"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HIGH-IMPACT FINAL CTA BANNER */}
        <section className="relative isolate overflow-hidden bg-[#0C0E11] py-20 sm:py-28 text-[#FAF7F2]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,144,71,0.18),transparent_60%)]" />
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#18202E] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#DFBD76] border border-[#B89047]/30">
              <span className="size-2 rounded-full bg-[#25D366] animate-pulse" />
              ATENDIMENTO EM CARATINGA - MG & ON-LINE EM TODO O BRASIL
            </span>

            <h2 className="mt-6 font-display text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] leading-[1.08]">
              Seu patrimônio e a tranquilidade da sua família merecem a melhor
              orientação jurídica.
            </h2>

            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#B0A89C] max-w-2xl mx-auto">
              Não deixe pendências imobiliárias ou sucessórias causarem dores de
              cabeça futuras. Agende hoje mesmo uma consulta com a Dra. Luana
              Oliveira.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="lg"
                variant="gold"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon size={18} />
                <span>FALAR COM A DRA. LUANA NO WHATSAPP</span>
              </GlowingButton>

              <a
                href={telephone}
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#B89047]/40 bg-[#141A24] px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#FAF7F2] hover:bg-[#1C2533] transition-colors"
              >
                <Phone size={15} className="text-[#DFBD76]" />
                <span>Ligar: {brand.phone}</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTATO & LOCALIZAÇÃO */}
        <section
          id="contato"
          className="scroll-mt-20 py-20 sm:py-28 bg-[#FAF7F2]"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Left Contact Information */}
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B89047]">
                  • FALE CONOSCO
                </span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl text-[#121417]">
                  Estamos prontos para atender você.
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4A453E]">
                  Entre em contato para tirar dúvidas, agendar uma consulta
                  presencial em Caratinga ou marcar uma reunião on-line segura.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-white p-5 border border-[#E8E1D5] hover:border-[#B89047] transition-all group"
                  >
                    <div className="grid size-12 place-items-center rounded-lg bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <WhatsAppIcon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A7369]">
                        WhatsApp Direto
                      </p>
                      <p className="text-sm font-semibold text-[#121417] group-hover:text-[#B89047] transition-colors">
                        {brand.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={telephone}
                    className="flex items-center gap-4 rounded-xl bg-white p-5 border border-[#E8E1D5] hover:border-[#B89047] transition-all group"
                  >
                    <div className="grid size-12 place-items-center rounded-lg bg-[#FAF7F2] text-[#B89047] group-hover:bg-[#121417] group-hover:text-[#DFBD76] transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A7369]">
                        Telefone Fixo / Celular
                      </p>
                      <p className="text-sm font-semibold text-[#121417] group-hover:text-[#B89047] transition-colors">
                        {brand.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={brand.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-white p-5 border border-[#E8E1D5] hover:border-[#B89047] transition-all group"
                  >
                    <div className="grid size-12 place-items-center rounded-lg bg-[#FAF7F2] text-[#B89047] group-hover:bg-[#121417] group-hover:text-[#DFBD76] transition-colors">
                      <InstagramIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7A7369]">
                        Instagram Oficial
                      </p>
                      <p className="text-sm font-semibold text-[#121417] group-hover:text-[#B89047] transition-colors">
                        {brand.instagramHandle}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Address & Office Details */}
              <div className="rounded-2xl bg-white p-7 sm:p-9 border border-[#E8E1D5] shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3.5 pb-6 border-b border-[#F0EAE1]">
                  <div className="grid size-11 place-items-center rounded-lg bg-[#121417] text-[#DFBD76]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#121417]">
                      Sede em Caratinga - MG
                    </h3>
                    <p className="text-xs text-[#7A7369]">
                      Centro Empresarial e Jurídico
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-xs sm:text-sm text-[#4A453E]">
                  <div>
                    <strong className="block font-semibold text-[#121417]">
                      Endereço Completo:
                    </strong>
                    <p className="mt-1 text-sm text-[#5C564E]">
                      {brand.address}
                    </p>
                  </div>

                  <div>
                    <strong className="block font-semibold text-[#121417]">
                      Horário de Funcionamento:
                    </strong>
                    <p className="mt-1 text-sm text-[#5C564E]">
                      Segunda a Sexta-feira · Atendimento mediante agendamento
                    </p>
                  </div>

                  <div>
                    <strong className="block font-semibold text-[#121417]">
                      Atendimento Remoto:
                    </strong>
                    <p className="mt-1 text-sm text-[#5C564E]">
                      Realizamos consultas e procedimentos por videoconferência
                      para clientes de qualquer localidade do país.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
                  <a
                    href={maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#121417] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:bg-[#20252B] transition-colors"
                  >
                    <span>ABRIR LOCALIZAÇÃO NO GOOGLE MAPS</span>
                    <ArrowUpRight size={14} className="text-[#DFBD76]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0A0D11] text-[#A0988D] py-14 sm:py-16 border-t border-[#B89047]/20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[#1E2530]">
              {/* Brand Column */}
              <div>
                <a
                  href="#inicio"
                  className="inline-block"
                  aria-label="Luana Oliveira Advocacia"
                >
                  <Image
                    src={brand.logo}
                    width={2172}
                    height={724}
                    alt={brand.businessName}
                    className="h-10 w-auto object-contain brightness-95"
                  />
                </a>
                <p className="mt-4 text-xs leading-relaxed text-[#8E867B]">
                  Advocacia especializada em Direito Imobiliário, Sucessões,
                  Inventário e Regularização de Imóveis. Rigor técnico e
                  acolhimento humano.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#DFBD76] text-xs">
                  <Scale size={14} />
                  <span>OAB/MG · Caratinga - MG</span>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF7F2]">
                  Navegação
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs">
                  <li>
                    <a
                      href="#inicio"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Início
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobre"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      O Escritório & Dra. Luana
                    </a>
                  </li>
                  <li>
                    <a
                      href="#especialidades"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Especialidades Jurídicas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#diferenciais"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Por Que Escolher
                    </a>
                  </li>
                  <li>
                    <a
                      href="#avaliacoes"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Avaliações dos Clientes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contato"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Contato e Endereço
                    </a>
                  </li>
                </ul>
              </div>

              {/* Practice Areas */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF7F2]">
                  Especialidades
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs">
                  <li>
                    <a
                      href={whatsappFor("inventário")}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Inventário em Cartório e Judicial
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappFor("usucapião")}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Ação de Usucapião Extrajudicial
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappFor("regularização de imóveis")}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Regularização de Escritura e Matrícula
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappFor("consultoria imobiliária")}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#DFBD76] transition-colors"
                    >
                      Consultoria e Contratos Imobiliários
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FAF7F2]">
                  Atendimento
                </h4>
                <div className="mt-4 space-y-2.5 text-xs">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#DFBD76] shrink-0 mt-0.5" />
                    <span>{brand.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={14} className="text-[#DFBD76] shrink-0" />
                    <span>{brand.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <InstagramIcon size={14} className="text-[#DFBD76] shrink-0" />
                    <span>{brand.instagramHandle}</span>
                  </p>
                  <p className="pt-2 text-[11px] text-[#7A7369]">
                    Atendimento on-line em todo o território nacional.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB notice */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A7369]">
              <p>
                © {new Date().getFullYear()} {brand.businessName}. Todos os
                direitos reservados.
              </p>
              <p className="text-center sm:text-right">
                Este site possui finalidade informativa e institucional, em
                conformidade com o Código de Ética e Disciplina da OAB.
              </p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON (Bottom Right with Pulse Animation) */}
        <aside
          aria-label="Atendimento rápido no WhatsApp"
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Luana Oliveira"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 whatsapp-pulse"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-[#121417] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md sm:group-hover:block border border-[#2B303A]">
              Falar no WhatsApp
            </span>
          </a>
        </aside>

        {/* DIALOG MODAL FOR SERVICE DETAILS */}
        <AnimatePresence>
          {activeArea && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dialog-title"
              ref={dialogRef as React.RefObject<HTMLDivElement>}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveArea(null)}
                className="fixed inset-0 bg-[#0F141D]/70 backdrop-blur-xs"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-[#E8E1D5]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89047]">
                      {activeArea.subtitle}
                    </span>
                    <h3
                      id="dialog-title"
                      className="mt-1 font-display text-2xl sm:text-3xl text-[#121417]"
                    >
                      {activeArea.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    aria-label="Fechar detalhes"
                    className="grid size-9 place-items-center rounded-lg border border-[#E8E1D5] text-[#5C564E] hover:border-[#121417] hover:text-[#121417] transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mt-5 text-sm leading-relaxed text-[#4A453E] space-y-4">
                  <p>{activeArea.details}</p>

                  <div className="rounded-xl bg-[#FAF7F2] p-5 border border-[#E8E1D5]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#121417]">
                      Etapas e escopo do procedimento:
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {activeArea.topics.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-[#3D3833]"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-[#B89047] shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-[#F0EAE1] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="w-full sm:w-auto text-xs font-semibold text-[#7A7369] hover:text-[#121417] py-2 cursor-pointer"
                  >
                    Voltar para o site
                  </button>
                  <GlowingButton
                    href={whatsappFor(activeArea.whatsappSubject)}
                    target="_blank"
                    size="md"
                    variant="dark"
                    className="w-full sm:w-auto"
                  >
                    <WhatsAppIcon size={16} className="text-[#25D366]" />
                    <span>Converse sobre este caso no WhatsApp</span>
                  </GlowingButton>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
