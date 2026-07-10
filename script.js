/* ==========================================================
   BENI MULYAWAN — PORTFOLIO
   All project content sourced from the provided portfolio deck.
   ========================================================== */

/* ---------------------------------------------------------
   1. PROJECT DATA
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'skinmate',
    title: 'SkinMate',
    tagline:
      'AI facial skin analysis — type, acne count & severity, in seconds.',
    description:
      'SkinMate is an AI-powered skin analysis web app that reads skin conditions straight from a facial photo. Upload a photo and it returns a skin type — oily, dry, or normal — along with a full acne breakdown across comedones, inflamed spots, and severe cases, mapped visually onto the face. Built as a PKM-KC competition entry with a team of five, I worked across the stack: frontend, backend, and AI model integration, wiring a YOLOv8 detection model and an EfficientNet classifier into a complete product with a results dashboard.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Flask',
      'YOLOv8',
      'EfficientNet',
      'Supabase',
      'Prisma',
    ],
    stat: { label: 'Accuracy', value: '64–80%' },
    icon: 'skinmate',
    links: [{ label: 'Live Demo', url: 'https://skinmateai.vercel.app/' }],
  },
  {
    id: 'neuroscan',
    title: 'NeuroScan',
    tagline:
      'MRI brain tumor classifier with an explainable AI heatmap overlay.',
    description:
      'NeuroScan classifies brain MRI scans into four categories — glioma, meningioma, pituitary tumor, or no tumor — using EfficientNetB1 with transfer learning. Rather than acting as a black box, every prediction is layered with Grad-CAM++, generating a heatmap that shows exactly which region of the scan drove the diagnosis. The whole thing is deployed with Streamlit for fast, interactive use.',
    tags: [
      'Python',
      'TensorFlow',
      'EfficientNetB1',
      'Transfer Learning',
      'Grad-CAM++',
      'Streamlit',
    ],
    stat: { label: 'Confidence', value: 'up to 99%' },
    icon: 'neuroscan',
    links: [
      { label: 'Source Code', url: 'https://github.com/Beni1412/Brain_Tumor' },
    ],
  },
  {
    id: 'sentiment',
    title: 'Sentiment Analysis',
    tagline: 'Aspect-based sentiment extraction for customer feedback.',
    description:
      "A sentiment analysis engine that reads customer feedback and pulls out exactly what people liked and didn't, aspect by aspect. Instead of one score for a whole review, it extracts individual aspects — like \u201cfood\u201d or \u201cservice\u201d — and classifies each one separately into positive, negative, or neutral, with a confidence score attached, using classic NLP and machine learning techniques.",
    tags: ['Python', 'NLP', 'Scikit-learn', 'NLTK', 'Machine Learning'],
    stat: { label: 'Classes', value: 'Pos / Neg / Neutral' },
    icon: 'sentiment',
    links: [{ label: 'Live Demo', url: 'https://nomnomai.vercel.app/' }],
  },
  {
    id: 'diabetes',
    title: 'Diabetes Detection',
    tagline: 'Five-model ensemble screening for early diabetes risk.',
    description:
      'An early-warning system for diabetes, built from patient symptoms rather than lab work. Five models — Random Forest, Logistic Regression, SVM, KNN, and Decision Tree — were trained and compared, with SMOTE balancing the classes and GridSearchCV tuning hyperparameters. The decision threshold was deliberately optimized for recall, since missing an actual diabetes case is far costlier than a false alarm. Deployed with Flask behind a simple, interactive interface.',
    tags: [
      'Python',
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'Flask',
      'SMOTE',
      'GridSearchCV',
    ],
    stat: { label: 'Models compared', value: '5' },
    icon: 'diabetes',
    links: [
      { label: 'Source Code', url: 'https://github.com/Beni1412/Diabet/' },
    ],
  },
  {
    id: 'predatoria',
    title: 'Predatoria',
    tagline: 'Scan a QR code, meet a 3D animal — AR learning for kids.',
    description:
      "Predatoria turns learning about animals into a small piece of magic for kids: scan a QR code and a 3D animal model pops into the real world in front of them, paired with a bite-sized educational description. It's built on WebAR, so there's nothing to install — it just runs in the browser.",
    tags: ['8th Wall', 'WebAR', 'JavaScript', '3D Modeling'],
    stat: { label: 'Mode', value: 'Augmented Reality' },
    icon: 'predatoria',
    links: [{ label: 'Live Demo', url: 'https://beni1412.github.io/virtual/' }],
  },
  {
    id: 'birthday',
    title: 'Birthday Web Animation',
    tagline: 'Fireworks, confetti & photo cards — a coded birthday card.',
    description:
      'A personalized birthday gift, written in code instead of wrapping paper. Each page is built around one person, with fireworks, floating balloons, falling confetti, a looping soundtrack, and popup photo cards that reveal little memories as you interact with the page.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    stat: { label: 'Type', value: 'Interactive experience' },
    icon: 'birthday',
    links: [
      { label: "Alice's Page", url: 'https://beni1412.github.io/alice/' },
      { label: "Tania's Page", url: 'https://beni1412.github.io/tania/' },
    ],
  },
];

/* ---------------------------------------------------------
   2. ICONS — small hand-built SVGs, one visual idea per project
   --------------------------------------------------------- */
const ICONS = {
  skinmate: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><rect x="6" y="6" width="10" height="2" fill="currentColor"/><rect x="6" y="6" width="2" height="10" fill="currentColor"/><rect x="32" y="6" width="10" height="2" fill="currentColor"/><rect x="40" y="6" width="2" height="10" fill="currentColor"/><ellipse cx="24" cy="25" rx="12" ry="14" stroke="currentColor" stroke-width="1.6"/><circle cx="19" cy="22" r="1.6" fill="currentColor"/><circle cx="29" cy="24" r="1.6" fill="currentColor"/><circle cx="24" cy="31" r="1.6" fill="currentColor"/></svg>`,
  neuroscan: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="1.6"/><circle cx="27" cy="21" r="7" fill="currentColor" opacity="0.18"/><circle cx="27" cy="21" r="7" stroke="currentColor" stroke-width="1.3"/><circle cx="27" cy="21" r="2.4" fill="currentColor"/><path d="M24 8V4M24 44V40M8 24H4M44 24H40" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  sentiment: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><path d="M6 10H42V32H20L12 40V32H6V10Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><rect x="13" y="22" width="4" height="6" fill="currentColor"/><rect x="22" y="17" width="4" height="11" fill="currentColor"/><rect x="31" y="14" width="4" height="14" fill="currentColor" opacity="0.4"/></svg>`,
  diabetes: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><path d="M24 6C24 6 12 20.5 12 29.5C12 36.4 17.4 42 24 42C30.6 42 36 36.4 36 29.5C36 20.5 24 6 24 6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 27H16L19 21L23 33L26 25L28 27H39" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  predatoria: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><rect x="6" y="6" width="12" height="12" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="10" width="4" height="4" fill="currentColor"/><rect x="30" y="6" width="12" height="12" stroke="currentColor" stroke-width="1.6"/><rect x="34" y="10" width="4" height="4" fill="currentColor"/><rect x="6" y="30" width="12" height="12" stroke="currentColor" stroke-width="1.6"/><rect x="10" y="34" width="4" height="4" fill="currentColor"/><rect x="30" y="30" width="4" height="4" fill="currentColor"/><rect x="38" y="30" width="4" height="4" fill="currentColor"/><rect x="30" y="38" width="4" height="4" fill="currentColor"/><rect x="38" y="38" width="4" height="4" fill="currentColor"/></svg>`,
  birthday: `<svg viewBox="0 0 48 48" fill="none" width="26" height="26"><path d="M24 6V18M24 6L20 10M24 6L28 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18L15 21M36 18L33 21M14 30L17 28M34 30L31 28" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="24" cy="24" r="2" fill="currentColor"/><circle cx="14" cy="14" r="1.6" fill="currentColor" opacity="0.6"/><circle cx="34" cy="14" r="1.6" fill="currentColor" opacity="0.6"/><circle cx="10" cy="34" r="1.6" fill="currentColor" opacity="0.6"/><circle cx="38" cy="34" r="1.6" fill="currentColor" opacity="0.6"/></svg>`,
};

/* ---------------------------------------------------------
   3. RENDER PROJECT CARDS
   --------------------------------------------------------- */
const grid = document.getElementById('projectGrid');

PROJECTS.forEach((p, i) => {
  const card = document.createElement('button');
  card.className = 'project-card reveal';
  card.style.setProperty('--delay', `${(i % 2) * 90}ms`);
  card.setAttribute('data-index', i);
  card.setAttribute('aria-haspopup', 'dialog');

  const num = String(i + 1).padStart(2, '0');

  card.innerHTML = `
    <span class="bracket tl"></span><span class="bracket tr"></span>
    <span class="bracket bl"></span><span class="bracket br"></span>
    <div class="card-top">
      <span class="card-index mono">PROJECT_${num}</span>
      <span class="card-icon">${ICONS[p.icon]}</span>
    </div>
    <div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-desc">${p.tagline}</p>
    </div>
    <div class="card-tags">
      ${p.tags
        .slice(0, 3)
        .map((t) => `<span>${t}</span>`)
        .join('')}
      ${p.tags.length > 3 ? `<span>+${p.tags.length - 3}</span>` : ''}
    </div>
    <div class="card-bottom">
      <span class="card-stat mono">${p.stat.label.toUpperCase()} <b>${p.stat.value}</b></span>
      <span class="card-view mono">VIEW →</span>
    </div>
  `;

  card.addEventListener('click', () => openModal(i));
  grid.appendChild(card);
});

/* ---------------------------------------------------------
   4. MODAL
   --------------------------------------------------------- */
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalIndex = document.getElementById('modalIndex');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

let currentIndex = 0;
let lastFocused = null;

function renderModal(i) {
  const p = PROJECTS[i];
  const num = String(i + 1).padStart(2, '0');

  modalContent.innerHTML = `
    <p class="modal-eyebrow mono">PROJECT_${num} // ${p.id.toUpperCase()}</p>
    <div class="modal-icon-wrap">${ICONS[p.icon]}</div>
    <h3 id="modalTitle">${p.title}</h3>
    <p class="modal-desc">${p.description}</p>
    <div class="modal-tags">${p.tags.map((t) => `<span>${t}</span>`).join('')}</div>
    <div class="modal-stat">
      <span>${p.stat.label}</span>
      <b>${p.stat.value}</b>
    </div>
    <div class="modal-links">
      ${p.links
        .map(
          (l) => `
        <a href="${l.url}" target="_blank" rel="noopener" class="btn btn-primary">
          ${l.label}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      `,
        )
        .join('')}
    </div>
  `;
  modalIndex.textContent = `${num} / ${String(PROJECTS.length).padStart(2, '0')}`;
  modal.scrollTop = 0;
}

function openModal(i) {
  currentIndex = i;
  lastFocused = document.activeElement;
  renderModal(i);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

function stepModal(delta) {
  currentIndex = (currentIndex + delta + PROJECTS.length) % PROJECTS.length;
  renderModal(currentIndex);
}

modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => stepModal(-1));
modalNext.addEventListener('click', () => stepModal(1));

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (!overlay.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') stepModal(1);
  if (e.key === 'ArrowLeft') stepModal(-1);
});

/* ---------------------------------------------------------
   5. NAV — scrolled state, mobile toggle, active link
   --------------------------------------------------------- */
const nav = document.getElementById('siteNav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  },
  { passive: true },
);

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* mobile nav dropdown styling hook (kept in JS to avoid a11y-breaking
   default-visible menu; toggled purely via the .open class in CSS) */
const mobileNavStyle = document.createElement('style');
mobileNavStyle.textContent = `
  @media (max-width: 780px){
    .nav-toggle{ display:flex; }
    .nav-links{
      position: fixed; top: 0; right: 0; height: 100vh; width: min(78vw, 320px);
      background: var(--panel); border-left: 1px solid var(--line);
      flex-direction: column; align-items: flex-start; justify-content: center;
      gap: 28px; padding: 40px; transform: translateX(100%);
      transition: transform 0.35s ease; z-index: 60;
    }
    .nav-links.open{ transform: translateX(0); }
  }
`;
document.head.appendChild(mobileNavStyle);

/* ---------------------------------------------------------
   6. SCROLL REVEAL + PROGRESS DOTS (single observer set)
   --------------------------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => revealObserver.observe(el));

const sections = ['top', 'about', 'projects', 'contact'].map((id) =>
  document.getElementById(id),
);
const dots = document.querySelectorAll('.progress-dots .dot');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach((d) =>
          d.classList.toggle('active', d.dataset.target === id),
        );
        navAnchors.forEach((a) =>
          a.classList.toggle('active', a.dataset.nav === id),
        );
      }
    });
  },
  { threshold: 0.4 },
);
sections.forEach((s) => s && sectionObserver.observe(s));

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    document
      .getElementById(dot.dataset.target)
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ---------------------------------------------------------
   7. HERO — role cycle + confidence counter
   --------------------------------------------------------- */
const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;
const classText = document.getElementById('classText');
const confVal = document.getElementById('confVal');

const ROLES = [
  'Full-Stack AI Developer',
  'Computer Vision Engineer',
  'Web Application Developer',
];

if (!reduceMotion) {
  // confidence count-up
  let conf = 0;
  const target = 99.2;
  const confTimer = setInterval(() => {
    conf += target / 40;
    if (conf >= target) {
      conf = target;
      clearInterval(confTimer);
    }
    confVal.textContent = conf.toFixed(1) + '%';
  }, 35);

  // role cycle (typewriter-lite: fade swap)
  let roleIndex = 0;
  setInterval(() => {
    roleIndex = (roleIndex + 1) % ROLES.length;
    classText.style.opacity = 0;
    setTimeout(() => {
      classText.textContent = ROLES[roleIndex];
      classText.style.opacity = 1;
    }, 250);
  }, 3200);
  classText.style.transition = 'opacity 0.25s ease';
} else {
  confVal.textContent = '99.2%';
}
