/**
 * Harsha M R — Portfolio Interactive Scripts
 * Handles theme toggling, project filtering, certificate viewer modal,
 * project deep-dive modal, copy-to-clipboard, scrollspy, and contact handling.
 */

// --- Certificate Data Store ---
const CERTIFICATES = {
  iucee: {
    title: "Web Development & GitHub",
    issuer: "IUCEE EWB-MCE & Malnad College of Engineering",
    date: "25 Oct 2025 - 07 Dec 2025",
    verifiedBy: "Dr. Ezhil Vannan S (Nodal Officer) & Dr. Amarendra H J (Principal)",
    badge: "Course Completion",
    image: "assets/cert_iucee_webdev.jpg",
    description: "Successfully completed hands-on training in core web development technologies and professional GitHub version control workflows with exemplary punctuality, dedication, and problem-solving."
  },
  ignite: {
    title: "Winner — IGNITE: Idea to Proto 2.0 (AI Chat Bot)",
    issuer: "ME-RIISE Foundation & Dept of 1st Year, MCE Hassan",
    date: "23rd December, 2025",
    verifiedBy: "Dr. Geetha Kiran A (CEO, ME-RIISE) & Dr. Amarendra H.J. (Principal)",
    badge: "1st Place Winner 🏆",
    image: "assets/cert_ignite_winner.jpg",
    description: "Awarded Winner in the flagship collegiate innovation project expo for conceiving, architecting, and successfully demonstrating an intelligent, context-aware AI Chatbot prototype."
  },
  technotsav: {
    title: "24-Hour Hackathon Participation — TECHNOTSAV",
    issuer: "VVCE Dept of CSE (AI & ML) in collaboration with IEEE CIS",
    date: "15th - 16th April, 2026",
    verifiedBy: "Dr. Aditya C R (HOD AI&ML) & Dr. B Sadashive Gowda (Principal)",
    badge: "Hackathon Contender ⚡",
    image: "assets/cert_technotsav_hackathon.jpg",
    description: "Participated in an intensive 24-hour collegiate hackathon organized by IEEE Computational Intelligence Society, engineering real-time intelligent solutions under rigorous deadlines."
  },
  claude: {
    title: "Claude 101 — Anthropic",
    issuer: "Anthropic",
    date: "2026",
    verifiedBy: "Anthropic Academy",
    badge: "Certified Specialist",
    image: null,
    description: "Comprehensive certification covering Claude architecture, advanced prompt engineering techniques, tool invocation, and responsible generative AI deployment."
  }
};

// --- Project Deep Dive Data Store ---
const PROJECT_DETAILS = {
  phantom: {
    title: "Phantom Rescue Mesh",
    subtitle: "Decentralized Emergency Communication System",
    category: "Android & Offline IoT",
    heroBadge: "Disaster Tech & Mesh Networking",
    posterImage: "assets/poster_phantom_rescue.jpg",
    problem: "During catastrophic floods, landslides, earthquakes, or deep wilderness expeditions, centralized cellular towers and power grids frequently collapse. Traditional SOS calls fail completely, isolating victims from life-saving first responders.",
    solution: "Phantom Rescue Mesh establishes an autonomous, peer-to-peer decentralized ad-hoc mesh network utilizing Bluetooth Low Energy (BLE) and custom routing protocols. Smartphones relay emergency alerts from phone to phone without internet or cellular reception.",
    features: [
      "One-Tap Instant SOS broadcast with user-designated emergency message",
      "Automatic high-precision GPS coordinate capture & embedding",
      "Decentralized hop-by-hop Bluetooth Mesh propagation across surrounding devices",
      "Interactive Rescuer Web Dashboard with OpenStreetMap/Leaflet integration",
      "Live incident status monitoring (Active Alerts, Rescuers Deployed, People Rescued)",
      "Designed for extreme durability with zero cloud dependencies for local routing"
    ],
    techStack: [
      "Kotlin", "Android Studio", "Bluetooth LE & Mesh", "OpenStreetMap", "Leaflet Maps", "Firebase", "Material Design 3", "GPS APIs"
    ],
    impact: "Provides immediate, lifeline connectivity for disaster rescue teams, hikers, road accident victims, and military search teams."
  },
  artisan: {
    title: "Artisan AI",
    subtitle: "AI-Driven Market Linkage & Smart Cataloging for Local Artisans",
    category: "AI & Full Stack",
    heroBadge: "Smart India Hackathon 2026 (SIH26090)",
    posterImage: null,
    problem: "Traditional rural artisans and craftspeople struggle with commercialization due to low digital literacy, language barriers, unfair pricing by middlemen, and difficulties writing professional product catalogs for e-commerce platforms.",
    solution: "An end-to-end AI platform engineered for Team Techno Verse at SIH 2026. Artisans take a picture of their handcrafted artifact and speak in their native tongue; the AI generates comprehensive catalogs, cultural backstories, and predictive market valuations.",
    features: [
      "Computer Vision based artifact analysis to recognize materials, craftsmanship, and categories",
      "Generative AI description generator creating SEO-optimized product listings",
      "Fair-price recommendation model evaluating raw materials and artisan hours while leaving final price control with the artisan",
      "Multilingual voice interface allowing artisans to operate the app purely via voice commands",
      "E-commerce ready export with standardized metadata and image optimization"
    ],
    techStack: [
      "Python", "Generative AI", "Computer Vision", "Speech-to-Text / TTS", "Web Technologies", "MySQL", "Git"
    ],
    impact: "Empowers grassroots artisans to bypass exploitative intermediaries and directly access national and global markets with dignity."
  },
  chatbot: {
    title: "Intelligent AI Chat Bot",
    subtitle: "Context-Aware Natural Language Assistant (IGNITE 2.0 Winner)",
    category: "AI & Machine Learning",
    heroBadge: "1st Place Winner 🏆 MCE ME-RIISE",
    posterImage: "assets/cert_ignite_winner.jpg",
    problem: "First-year students and visitors often struggle to find immediate answers to administrative queries, academic procedures, and campus navigation during rush hours.",
    solution: "Engineered a responsive, knowledge-grounded AI conversational agent that parses user queries, maintains conversation state, and delivers instantaneous, accurate answers.",
    features: [
      "Intent classification and entity extraction for structured query processing",
      "Context persistence across multi-turn interactions",
      "Graceful fallback handling and confidence score ranking",
      "Lightweight, low-latency deployment capable of running on modest edge hardware"
    ],
    techStack: [
      "Python", "NLP Fundamentals", "Conversational AI", "Pattern Matching", "REST APIs"
    ],
    impact: "Evaluated by academic and industry jury at the ME-RIISE Foundation Project Expo and awarded 1st Place across college entries."
  },
  ghat: {
    title: "Active Ghat Curve Warning System",
    subtitle: "Intelligent Road Safety Mechanism for Blind Curves",
    category: "IoT & Safety Systems",
    heroBadge: "Innovation Design Thinking Project",
    posterImage: null,
    problem: "Mountainous highways (ghat roads) suffer from high frequencies of fatal head-on collisions due to hairpin bends, dense fog, and blind spots with zero line of sight.",
    solution: "A proactive smart signalling network deployed along hairpin bends that senses vehicle approach from both opposite directions and activates dynamic warning indicators well in advance.",
    features: [
      "Bi-directional vehicular proximity detection using sensor nodes",
      "Dynamic high-intensity LED matrix warnings triggered before vehicles meet the apex",
      "Fail-safe alerting logic designed for low power consumption in remote terrains",
      "Modular design easily retrofitted to existing highway guardrails"
    ],
    techStack: [
      "Embedded Sensors", "Microcontroller Architecture", "Proximity Sensing", "Safety Logic Systems"
    ],
    impact: "Dramatically reduces collision risk in accident-prone hairpin turns across high-altitude roads."
  }
};

// --- DOM Ready Initializations ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initProjectFilters();
  initModals();
  initScrollSpy();
  initCounters();
  initContactActions();
});

// --- Theme Management ---
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const html = document.documentElement;

  // Read saved theme or default to dark
  const savedTheme = localStorage.getItem("portfolio_theme") || "dark";
  applyTheme(savedTheme);

  function toggle() {
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  }

  if (themeToggle) themeToggle.addEventListener("click", toggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggle);

  function applyTheme(theme) {
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
      updateToggleIcons("dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
      updateToggleIcons("light");
    }
  }

  function updateToggleIcons(theme) {
    const icons = document.querySelectorAll(".theme-toggle-icon");
    icons.forEach(icon => {
      if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun", "text-amber-400");
      } else {
        icon.classList.remove("fa-sun", "text-amber-400");
        icon.classList.add("fa-moon", "text-slate-600");
      }
    });
  }
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// --- Project Filtering ---
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active button style
      buttons.forEach(b => {
        b.classList.remove("bg-indigo-600", "text-white", "shadow-lg", "shadow-indigo-500/25");
        b.classList.add("bg-slate-800/60", "text-slate-300", "hover:bg-slate-700/60");
      });
      btn.classList.add("bg-indigo-600", "text-white", "shadow-lg", "shadow-indigo-500/25");
      btn.classList.remove("bg-slate-800/60", "text-slate-300", "hover:bg-slate-700/60");

      const filter = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter || card.dataset.tags?.includes(filter)) {
          card.classList.remove("hidden");
          card.classList.add("animate-fadeIn");
        } else {
          card.classList.add("hidden");
          card.classList.remove("animate-fadeIn");
        }
      });
    });
  });
}

// --- Modals (Certificates & Project Deep Dive) ---
function initModals() {
  const certModal = document.getElementById("cert-modal");
  const projectModal = document.getElementById("project-modal");

  // Close buttons & Backdrop clicks
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeAllModals();
    });
  });

  [certModal, projectModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener("click", e => {
      if (e.target === modal) closeAllModals();
    });
  });

  // ESC key listener
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAllModals();
  });
}

function closeAllModals() {
  const certModal = document.getElementById("cert-modal");
  const projectModal = document.getElementById("project-modal");
  if (certModal) certModal.classList.remove("active");
  if (projectModal) projectModal.classList.remove("active");
  document.body.classList.remove("overflow-hidden");
}

// Open Certificate Modal
window.openCertificate = function(key) {
  const data = CERTIFICATES[key];
  if (!data) return;

  const modal = document.getElementById("cert-modal");
  const title = document.getElementById("cert-modal-title");
  const issuer = document.getElementById("cert-modal-issuer");
  const date = document.getElementById("cert-modal-date");
  const desc = document.getElementById("cert-modal-desc");
  const badge = document.getElementById("cert-modal-badge");
  const img = document.getElementById("cert-modal-img");
  const noImg = document.getElementById("cert-modal-no-img");
  const externalLink = document.getElementById("cert-modal-view-full");

  if (title) title.textContent = data.title;
  if (issuer) issuer.textContent = data.issuer;
  if (date) date.textContent = data.date;
  if (desc) desc.textContent = data.description;
  if (badge) badge.textContent = data.badge;

  if (data.image) {
    if (img) {
      img.src = data.image;
      img.classList.remove("hidden");
    }
    if (noImg) noImg.classList.add("hidden");
    if (externalLink) {
      externalLink.href = data.image;
      externalLink.classList.remove("hidden");
    }
  } else {
    if (img) img.classList.add("hidden");
    if (noImg) noImg.classList.remove("hidden");
    if (externalLink) externalLink.classList.add("hidden");
  }

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
};

// Open Project Detail Modal
window.openProjectDetails = function(key) {
  const data = PROJECT_DETAILS[key];
  if (!data) return;

  const modal = document.getElementById("project-modal");
  const title = document.getElementById("project-modal-title");
  const subtitle = document.getElementById("project-modal-subtitle");
  const badge = document.getElementById("project-modal-badge");
  const problem = document.getElementById("project-modal-problem");
  const solution = document.getElementById("project-modal-solution");
  const impact = document.getElementById("project-modal-impact");
  const featuresList = document.getElementById("project-modal-features");
  const techStack = document.getElementById("project-modal-tech");
  const posterContainer = document.getElementById("project-modal-poster-wrap");
  const posterImg = document.getElementById("project-modal-poster-img");

  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;
  if (badge) badge.textContent = data.heroBadge;
  if (problem) problem.textContent = data.problem;
  if (solution) solution.textContent = data.solution;
  if (impact) impact.textContent = data.impact;

  // Populate Features
  if (featuresList) {
    featuresList.innerHTML = "";
    data.features.forEach(item => {
      const li = document.createElement("li");
      li.className = "flex items-start gap-2 text-sm text-slate-300";
      li.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 mt-1 text-xs"></i><span>${item}</span>`;
      featuresList.appendChild(li);
    });
  }

  // Populate Tech Badges
  if (techStack) {
    techStack.innerHTML = "";
    data.techStack.forEach(t => {
      const span = document.createElement("span");
      span.className = "tech-tag";
      span.textContent = t;
      techStack.appendChild(span);
    });
  }

  // Poster logic (specifically for Phantom Rescue Mesh)
  if (data.posterImage && posterImg && posterContainer) {
    posterImg.src = data.posterImage;
    posterContainer.classList.remove("hidden");
  } else if (posterContainer) {
    posterContainer.classList.add("hidden");
  }

  modal.classList.add("active");
  document.body.classList.add("overflow-hidden");
};

// --- Scroll Spy & Floating Buttons ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav-link");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-indigo-400", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-indigo-400", "font-semibold");
      }
    });

    if (backToTopBtn) {
      if (window.pageYOffset > 400) {
        backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
        backToTopBtn.classList.add("opacity-100", "pointer-events-auto");
      } else {
        backToTopBtn.classList.remove("opacity-100", "pointer-events-auto");
        backToTopBtn.classList.add("opacity-0", "pointer-events-none");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// --- Animated Stats Counters ---
function initCounters() {
  const counters = document.querySelectorAll(".stat-counter");
  let started = false;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          started = true;
          counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute("data-target"));
            const isFloat = counter.getAttribute("data-float") === "true";
            const duration = 1800;
            const startTime = performance.now();

            function updateNumber(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out quart
              const ease = 1 - Math.pow(1 - progress, 4);
              const currentVal = isFloat
                ? (ease * target).toFixed(2)
                : Math.floor(ease * target);

              counter.innerText = currentVal;

              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              } else {
                counter.innerText = isFloat ? target.toFixed(2) : target;
              }
            }
            requestAnimationFrame(updateNumber);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  const statsSection = document.getElementById("stats-section");
  if (statsSection) observer.observe(statsSection);
}

// --- Contact & Clipboard Actions ---
function initContactActions() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("form-name")?.value || "";
      const email = document.getElementById("form-email")?.value || "";
      const subject = document.getElementById("form-subject")?.value || "Portfolio Inquiry";
      const message = document.getElementById("form-message")?.value || "";

      // Open user's email client directly with pre-composed message
      const mailtoUrl = `mailto:harshagowdamr14@gmail.com?subject=${encodeURIComponent(
        `[Portfolio] ${subject} - from ${name}`
      )}&body=${encodeURIComponent(
        `Hi Harsha,\n\n${message}\n\nFrom: ${name} (${email})`
      )}`;

      window.location.href = mailtoUrl;
      showToast("Email client opened! Thank you for reaching out.");
      contactForm.reset();
    });
  }
}

// Utility: Copy to Clipboard
window.copyToClipboard = function(text, label = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(label);
  }).catch(() => {
    // Fallback
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(label);
  });
};

// Utility: Show Toast
window.showToast = function(msg) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
};
