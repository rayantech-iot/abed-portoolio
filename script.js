/* ============================================================
   CONSTANTIN GADEGBE — Portfolio Script
   Vanilla JS · No dependencies
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Translations ---------- */
  const translations = {
    fr: {
      skip: "Aller au contenu",
      "nav.about": "ABOUT",
      "nav.experience": "EXPERIENCE",
      "nav.projects": "PROJECTS",
      "nav.expertise": "EXPERTISE",
      "nav.contact": "CONTACT",
      "nav.cta": "CONTACT",
      "hero.eyebrow": "AI & DATA ENGINEER",
      "hero.line1": "DATA.",
      "hero.line2": "INTELLIGENCE.",
      "hero.line3": "ENGINEERING.",
      "hero.subtitle":
        "Je conçois des solutions intelligentes à l'intersection de la Data, de l'IA et du Software Engineering.",
      "hero.cta1": "EXPLORE PROJECTS",
      "hero.cta2": "CONTACT ME",
      "hero.scroll": "SCROLL TO EXPLORE",
      "about.label": "01 / ABOUT",
      "about.headline1": "From software engineering",
      "about.headline2": "to intelligent systems.",
      "about.p1":
        "Constantin GADEGBE est un profil issu du génie logiciel et des systèmes d'information qui s'est progressivement spécialisé dans la vision industrielle, la Data Science, le Machine Learning, la Data Engineering et l'IA générative.",
      "about.p2":
        "Son parcours combine développement logiciel, traitement de données, Computer Vision, BI et systèmes intelligents.",
      "about.meta1": "AI & DATA",
      "about.meta5": "OPEN TO MOBILITY",
      "about.search": "Alternance 24 mois — Sept. 2026",
      "about.rhythm": "1 sem. formation / 3 sem. entreprise",
      "education.title": "Parcours",
      "edu.1.degree": "Génie Logiciels & Systèmes d'Informations",
      "edu.2.degree": "Vision pour la Robotique Industrielle",
      "edu.3.degree": "Master IA & Data",
      "exp.label": "02 / EXPERIENCE",
      "exp.title": "Expérience professionnelle",
      "exp.1.role": "Stagiaire en vision par ordinateur",
      "exp.1.stat": "PRECISION",
      "exp.1.p1":
        "Conception d'un système low-cost de surveillance de bassins de natation.",
      "exp.1.p2":
        "Traitement et analyse de séquences vidéo pour détecter des situations de noyade potentielles.",
      "exp.1.p3": "Étude et intégration de YOLO11.",
      "exp.2.company": "DÉVELOPPEMENT WEB",
      "exp.2.role":
        "Plateforme de promotion d'une école de langues internationale",
      "exp.3.role": "Administration systèmes et réseaux",
      "exp.3.stat": "POSTES MIGRÉS",
      "proj.label": "03 / SELECTED PROJECTS",
      "proj.title": "Projets sélectionnés",
      "proj.1.title": "Plateforme analytique Retail augmentée par l'IA",
      "proj.1.desc":
        "Extension Agentic AI pour une plateforme Power BI retail intégrée à Microsoft Fabric.",
      "proj.1.t1": "Architecture Medallion",
      "proj.1.t2": "Agent IA",
      "proj.1.t4": "Sources métier",
      "proj.1.t5": "Anti-hallucination",
      "proj.1.t7": "Evaluation",
      "proj.2.title": "Computer Vision — Pool Safety",
      "proj.2.desc":
        "Système de détection de situations à risque en bassin, fondé sur YOLO11 et le traitement vidéo.",
      "proj.2.note": "Illustrative visualization",
      "proj.3.title": "Retail Analytics Platform",
      "proj.3.desc":
        "Plateforme analytique retail — du modèle sémantique aux insights décisionnels.",
      "proj.3.note": "Illustrative visualization",
      "proj.4.title": "Data Engineering — 56K Tourist Places",
      "proj.4.desc":
        "Pipeline de données pour l'ingestion, le nettoyage et l'analyse de 56 000 lieux touristiques.",
      "proj.4.stat": "DATA POINTS",
      "expertise.label": "04 / EXPERTISE",
      "expertise.title": "Domaines d'expertise",
      "tools.title": "Tools I work with",
      "phil.l1": "DATA",
      "phil.l2": "BECOMES",
      "phil.l3": "INTELLIGENCE",
      "phil.tagline": "Build systems. Solve problems. Turn data into decisions.",
      "contact.label": "05 / CONTACT",
      "contact.headline": "Construisons quelque chose d'intelligent.",
      "contact.sub":
        "Une problématique Data, IA, Computer Vision ou Software Engineering ? Parlons-en.",
      "contact.linkedin": "LinkedIn — Constantin GADEGBE",
      "contact.cta": "START A CONVERSATION",
    },
    en: {
      skip: "Skip to content",
      "nav.about": "ABOUT",
      "nav.experience": "EXPERIENCE",
      "nav.projects": "PROJECTS",
      "nav.expertise": "EXPERTISE",
      "nav.contact": "CONTACT",
      "nav.cta": "CONTACT",
      "hero.eyebrow": "AI & DATA ENGINEER",
      "hero.line1": "DATA.",
      "hero.line2": "INTELLIGENCE.",
      "hero.line3": "ENGINEERING.",
      "hero.subtitle":
        "I design intelligent solutions at the intersection of Data, AI and Software Engineering.",
      "hero.cta1": "EXPLORE PROJECTS",
      "hero.cta2": "CONTACT ME",
      "hero.scroll": "SCROLL TO EXPLORE",
      "about.label": "01 / ABOUT",
      "about.headline1": "From software engineering",
      "about.headline2": "to intelligent systems.",
      "about.p1":
        "Constantin GADEGBE comes from software engineering and information systems, and has progressively specialized in industrial vision, Data Science, Machine Learning, Data Engineering and Generative AI.",
      "about.p2":
        "His path combines software development, data processing, Computer Vision, BI and intelligent systems.",
      "about.meta1": "AI & DATA",
      "about.meta5": "OPEN TO MOBILITY",
      "about.search": "24-month apprenticeship — Sept. 2026",
      "about.rhythm": "1 week training / 3 weeks company",
      "education.title": "Education",
      "edu.1.degree": "Software Engineering & Information Systems",
      "edu.2.degree": "Vision for Industrial Robotics",
      "edu.3.degree": "Master's in AI & Data",
      "exp.label": "02 / EXPERIENCE",
      "exp.title": "Professional experience",
      "exp.1.role": "Computer Vision Intern",
      "exp.1.stat": "PRECISION",
      "exp.1.p1":
        "Designed a low-cost swimming pool surveillance system.",
      "exp.1.p2":
        "Processed and analyzed video sequences to detect potential drowning situations.",
      "exp.1.p3": "Studied and integrated YOLO11.",
      "exp.2.company": "WEB DEVELOPMENT",
      "exp.2.role":
        "Promotional platform for an international language school",
      "exp.3.role": "Systems and network administration",
      "exp.3.stat": "WORKSTATIONS MIGRATED",
      "proj.label": "03 / SELECTED PROJECTS",
      "proj.title": "Selected projects",
      "proj.1.title": "AI-Augmented Retail Analytics Platform",
      "proj.1.desc":
        "Agentic AI extension for a Power BI retail platform integrated with Microsoft Fabric.",
      "proj.1.t1": "Medallion Architecture",
      "proj.1.t2": "AI Agent",
      "proj.1.t4": "Business sources",
      "proj.1.t5": "Anti-hallucination",
      "proj.1.t7": "Evaluation",
      "proj.2.title": "Computer Vision — Pool Safety",
      "proj.2.desc":
        "Risk detection system for swimming pools, built on YOLO11 and video processing.",
      "proj.2.note": "Illustrative visualization",
      "proj.3.title": "Retail Analytics Platform",
      "proj.3.desc":
        "Retail analytics platform — from semantic model to decision insights.",
      "proj.3.note": "Illustrative visualization",
      "proj.4.title": "Data Engineering — 56K Tourist Places",
      "proj.4.desc":
        "Data pipeline for ingesting, cleaning and analyzing 56,000 tourist places.",
      "proj.4.stat": "DATA POINTS",
      "expertise.label": "04 / EXPERTISE",
      "expertise.title": "Areas of expertise",
      "tools.title": "Tools I work with",
      "phil.l1": "DATA",
      "phil.l2": "BECOMES",
      "phil.l3": "INTELLIGENCE",
      "phil.tagline": "Build systems. Solve problems. Turn data into decisions.",
      "contact.label": "05 / CONTACT",
      "contact.headline": "Let's build something intelligent.",
      "contact.sub":
        "A Data, AI, Computer Vision or Software Engineering challenge? Let's talk.",
      "contact.linkedin": "LinkedIn — Constantin GADEGBE",
      "contact.cta": "START A CONVERSATION",
    },
  };

  /* ---------- State ---------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  let lang = localStorage.getItem("cg-lang") || "fr";
  // Light mode by default; stored prefs: light | dark | system
  let themePref = localStorage.getItem("cg-theme") || "light";

  /* ---------- DOM refs ---------- */
  const html = document.documentElement;
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const themeToggle = document.getElementById("theme-toggle");
  const hero = document.getElementById("hero");
  const heroGlow = document.getElementById("hero-glow");
  const eduTimeline = document.getElementById("edu-timeline");
  const philosophy = document.getElementById("philosophy");
  const yearEl = document.getElementById("year");

  /* ---------- Year ---------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Theme ---------- */
  function resolveTheme(pref) {
    if (pref === "light" || pref === "dark") return pref;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(pref) {
    themePref = pref;
    const resolved = resolveTheme(pref);
    html.setAttribute("data-theme", resolved);
    localStorage.setItem("cg-theme", pref);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = resolved === "dark" ? "#080A0F" : "#F7F8FA";

    if (themeToggle) {
      const label =
        resolved === "dark"
          ? lang === "fr"
            ? "Passer en mode clair"
            : "Switch to light mode"
          : lang === "fr"
            ? "Passer en mode sombre"
            : "Switch to dark mode";
      themeToggle.setAttribute("aria-label", label);
    }
  }

  function cycleTheme() {
    const current = resolveTheme(themePref);
    applyTheme(current === "dark" ? "light" : "dark");
  }

  applyTheme(themePref);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (themePref === "system") applyTheme("system");
    });

  if (themeToggle) themeToggle.addEventListener("click", cycleTheme);

  /* ---------- Language ---------- */
  function applyLanguage(next) {
    lang = next;
    localStorage.setItem("cg-lang", lang);
    html.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = translations[lang]?.[key];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    applyTheme(themePref);
  }

  applyLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang) applyLanguage(btn.dataset.lang);
    });
  });

  /* ---------- Navbar scroll ---------- */
  function onScroll() {
    if (!navbar) return;
    navbar.classList.toggle("is-scrolled", window.scrollY > 24);

    const sections = ["about", "experience", "projects", "expertise", "contact"];
    let current = "";
    const offset = window.innerHeight * 0.35;

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) current = id;
    });

    document.querySelectorAll(".navbar__link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("is-active", href === `#${current}`);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      lang === "fr" ? "Ouvrir le menu" : "Open menu"
    );
    mobileMenu.hidden = true;
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
      "aria-label",
      lang === "fr" ? "Fermer le menu" : "Close menu"
    );
    mobileMenu.hidden = false;
    document.body.style.overflow = "hidden";
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      if (open) closeMenu();
      else openMenu();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  }

  /* ---------- Hero ready + mouse glow ---------- */
  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add("is-ready");
      hero.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-inview");
      });
    });
  }

  if (heroGlow && !isTouch && !prefersReduced) {
    let raf = 0;
    let targetX = 50;
    let targetY = 40;
    let currentX = 50;
    let currentY = 40;

    function tick() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      hero.style.setProperty("--mx", `${currentX}%`);
      hero.style.setProperty("--my", `${currentY}%`);
      raf = requestAnimationFrame(tick);
    }

    hero.addEventListener(
      "pointermove",
      (e) => {
        const rect = hero.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width) * 100;
        targetY = ((e.clientY - rect.top) / rect.height) * 100;
      },
      { passive: true }
    );

    hero.addEventListener("pointerleave", () => {
      targetX = 50;
      targetY = 40;
    });

    raf = requestAnimationFrame(tick);

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");

  if (prefersReduced) {
    revealEls.forEach((el) => el.classList.add("is-inview"));
  } else if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => {
      if (!el.closest(".hero")) revealObserver.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-inview"));
  }

  /* ---------- Education timeline draw ---------- */
  if (eduTimeline) {
    if (prefersReduced) {
      eduTimeline.classList.add("is-visible");
    } else if ("IntersectionObserver" in window) {
      const tlObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              eduTimeline.classList.add("is-visible");
              tlObserver.unobserve(eduTimeline);
            }
          });
        },
        { threshold: 0.35 }
      );
      tlObserver.observe(eduTimeline);
    } else {
      eduTimeline.classList.add("is-visible");
    }
  }

  /* ---------- Philosophy sequence ---------- */
  if (philosophy) {
    if (prefersReduced) {
      philosophy.classList.add("is-visible");
    } else if ("IntersectionObserver" in window) {
      const philObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              philosophy.classList.add("is-visible");
              philObserver.unobserve(philosophy);
            }
          });
        },
        { threshold: 0.4 }
      );
      philObserver.observe(philosophy);
    } else {
      philosophy.classList.add("is-visible");
    }
  }

  /* ---------- Smooth section focus for keyboard ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      if (target instanceof HTMLElement) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    });
  });
})();
