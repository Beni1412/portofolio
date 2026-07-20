/* =========================================================
   PORTFOLIO LOGIC
   Gak perlu diubah buat nambah project/skill baru — itu
   semua diatur dari js/data.js. File ini cuma "mesin" render
   + tab switching.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- TAB NAVIGATION (Home / About / Skills / Projects / Contact) ---------- */
  const panels = document.querySelectorAll('[data-panel]');
  const navLinks = document.querySelectorAll('.nav__link');
  const tabLinks = document.querySelectorAll('[data-tab-link]');

  function goToTab(target, { updateHash = true } = {}) {
    const updateDOM = () => {
      panels.forEach((p) => p.classList.toggle('is-active', p.id === target));
      navLinks.forEach((l) =>
        l.classList.toggle('is-active', l.dataset.target === target),
      );
      if (updateHash) history.replaceState(null, '', '#' + target);
      document.getElementById('mainNav').classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document
        .getElementById('main')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (target === 'skills') animateSkillBars();
    };

    if (document.startViewTransition) {
      document.startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => goToTab(link.dataset.target));
  });
  tabLinks.forEach((link) => {
    link.addEventListener('click', () => goToTab(link.dataset.target));
  });

  const validTabs = new Set(['home', 'about', 'skills', 'projects', 'contact']);
  const initialTab = location.hash.replace('#', '');
  if (validTabs.has(initialTab)) goToTab(initialTab, { updateHash: false });

  /* ---------- MOBILE NAV TOGGLE ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* ---------- CLOCK (small HUD flourish) ---------- */
  const clockEl = document.getElementById('clock');
  function tickClock() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString([], { hour12: false });
  }
  tickClock();
  setInterval(tickClock, 1000);

  /* ---------- SKILLS RENDER ---------- */
  const skillsWrap = document.getElementById('skillsWrap');

  function renderSkills() {
    skillsWrap.innerHTML = skillGroups
      .map(
        (group, i) => `
        <div class="skill-group animate-item" style="animation-delay: ${0.1 * i}s">
          <h3>${group.group}</h3>
          ${group.items
            .map(
              (item) => `
              <div class="skill-row">
                <div class="skill-row__label">
                  <span>${item.name}</span>
                  <span class="val mono">${item.level}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-bar__fill" data-level="${item.level}"></div>
                </div>
              </div>`,
            )
            .join('')}
        </div>`,
      )
      .join('');
  }

  function animateSkillBars() {
    document.querySelectorAll('.skill-bar__fill').forEach((el) => {
      el.style.width = el.dataset.level + '%';
    });
  }

  renderSkills();
  if (document.getElementById('skills').classList.contains('is-active')) {
    animateSkillBars();
  }

  /* ---------- PROJECTS: GRID RENDER ---------- */
  const projectsGrid = document.getElementById('projectsGrid');
  const gridView = document.getElementById('projectsGridView');
  const detailView = document.getElementById('projectDetailView');
  const detailWrap = document.getElementById('projectDetail');
  const backToGrid = document.getElementById('backToGrid');

  function shortCode(title) {
    return title
      .split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();
  }

  function thumbHtml(p) {
    if (!p.image) {
      return `<span class="proj-card__thumb-label">${shortCode(p.title)}</span>`;
    }
    return `
      <img src="${p.image}" alt="${p.title} preview"
           onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'proj-card__thumb-label',textContent:'${shortCode(p.title)}'}))" />`;
  }

  let currentFilter = 'all';
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentFilter = btn.dataset.filter;
      renderProjectsGrid();
    });
  });

  function renderProjectsGrid() {
    let filtered = projects;
    if (currentFilter !== 'all') {
      filtered = projects.filter((p) => {
        const cat = p.category.toLowerCase();
        const isAI =
          cat.includes('machine') ||
          cat.includes('vision') ||
          cat.includes('nlp') ||
          cat.includes('deep learning') ||
          cat.includes('ai');
        if (currentFilter === 'ai') return isAI;
        if (currentFilter === 'other') return !isAI;
        return true;
      });
    }

    projectsGrid.innerHTML = filtered
      .map(
        (p, i) => `
        <article class="proj-card detect-frame animate-item" style="animation-delay: ${0.05 * i}s" tabindex="0" role="button"
                  aria-label="Open ${p.title} details" data-id="${p.id}">
          <span class="corner corner--tl"></span><span class="corner corner--tr"></span>
          <span class="corner corner--bl"></span><span class="corner corner--br"></span>
          <div class="proj-card__tag mono">PRJ_0${i + 1} · ${p.category}</div>
          <div class="proj-card__thumb">
            ${thumbHtml(p)}
          </div>
          <h3 class="proj-card__title">${p.title}</h3>
          <p class="proj-card__blurb">${p.blurb}</p>
          <div class="proj-card__meta">
            <span class="chip">${p.status}</span>
            <span class="proj-card__cta">View details →</span>
          </div>
        </article>`,
      )
      .join('');

    projectsGrid.querySelectorAll('.proj-card').forEach((card) => {
      card.addEventListener('click', () => openProject(card.dataset.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProject(card.dataset.id);
        }
      });
    });
  }

  /* ---------- PROJECTS: DETAIL VIEW (swaps in-place, no navigation) ---------- */
  let currentProject = null;
  let currentSlide = 0;
  let autoplayInterval = null;

  function galleryItems(p) {
    if (p.gallery && p.gallery.length) return p.gallery;
    return [];
  }

  function startAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
    const items = galleryItems(currentProject);
    if (items.length > 1) {
      autoplayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % items.length;
        updateGallery();
      }, 4000);
    }
  }

  function stopAutoplay() {
    if (autoplayInterval) clearInterval(autoplayInterval);
  }

  function toYouTubeEmbed(url) {
    const m = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/,
    );
    return m ? `https://www.youtube.com/embed/${m[1]}` : url;
  }

  function mediaHtml(item) {
    if (!item || !item.src) {
      return `<div class="gallery__empty mono">NO MEDIA SET</div>`;
    }
    if (item.type === 'video') {
      if (/youtube\.com|youtu\.be/.test(item.src)) {
        return `<iframe src="${toYouTubeEmbed(item.src)}" title="${item.caption || 'video'}"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen></iframe>`;
      }
      return `<video controls playsinline src="${item.src}"
               onerror="this.closest('.gallery__viewport').innerHTML='&lt;div class=&quot;gallery__empty mono&quot;&gt;VIDEO NOT FOUND&lt;/div&gt;'"></video>`;
    }
    return `<img src="${item.src}" alt="${item.caption || 'project media'}"
             onerror="this.closest('.gallery__viewport').innerHTML='&lt;div class=&quot;gallery__empty mono&quot;&gt;IMAGE NOT FOUND&lt;/div&gt;'" />`;
  }

  function renderGalleryHtml(items, index) {
    if (!items.length) {
      return '';
    }
    const item = items[index];
    const multi = items.length > 1;
    return `
      <div class="gallery">
        <div class="gallery__frame detect-frame">
          <span class="corner corner--tl"></span><span class="corner corner--tr"></span>
          <span class="corner corner--bl"></span><span class="corner corner--br"></span>
          <div class="gallery__viewport">${mediaHtml(item)}</div>
          ${
            multi
              ? `<button class="gallery__arrow gallery__arrow--prev" data-nav="prev" aria-label="Previous media">‹</button>
                 <button class="gallery__arrow gallery__arrow--next" data-nav="next" aria-label="Next media">›</button>`
              : ''
          }
        </div>
        <div class="gallery__meta">
          <span class="gallery__caption">${item.caption || ''}</span>
          ${
            multi
              ? `<div class="gallery__side">
                   <span class="mono gallery__count">${String(index + 1).padStart(2, '0')} / ${String(
                     items.length,
                   ).padStart(2, '0')}</span>
                   <div class="gallery__dots">
                     ${items
                       .map(
                         (_, i) =>
                           `<button class="gallery__dot ${i === index ? 'is-active' : ''}" data-goto="${i}" aria-label="Go to media ${i + 1}"></button>`,
                       )
                       .join('')}
                   </div>
                 </div>`
              : ''
          }
        </div>
      </div>`;
  }

  function updateGallery() {
    const items = galleryItems(currentProject);
    const updateDOM = () => {
      document.getElementById('galleryHost').innerHTML = renderGalleryHtml(
        items,
        currentSlide,
      );
    };
    if (document.startViewTransition) {
      document.startViewTransition(updateDOM);
    } else {
      updateDOM();
    }
  }

  function wireGalleryEvents() {
    document.getElementById('galleryHost').addEventListener('click', (e) => {
      const items = galleryItems(currentProject);
      const navBtn = e.target.closest('[data-nav]');
      const dotBtn = e.target.closest('[data-goto]');
      if (navBtn) {
        currentSlide =
          navBtn.dataset.nav === 'next'
            ? (currentSlide + 1) % items.length
            : (currentSlide - 1 + items.length) % items.length;
        updateGallery();
        startAutoplay();
      } else if (dotBtn) {
        currentSlide = parseInt(dotBtn.dataset.goto, 10);
        updateGallery();
        startAutoplay();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!currentProject || detailView.hidden) return;
    const items = galleryItems(currentProject);
    if (items.length < 2) return;
    if (e.key === 'ArrowRight') {
      currentSlide = (currentSlide + 1) % items.length;
      updateGallery();
    } else if (e.key === 'ArrowLeft') {
      currentSlide = (currentSlide - 1 + items.length) % items.length;
      updateGallery();
    }
  });

  function openProject(id) {
    const p = projects.find((proj) => proj.id === id);
    if (!p) return;
    currentProject = p;
    currentSlide = 0;

    let demoLinks = '';
    if (Array.isArray(p.links.demo)) {
      demoLinks = p.links.demo
        .map(
          (link, idx) =>
            `<a class="btn btn--primary" href="${link}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Live Demo ${idx + 1}</a>`,
        )
        .join(' ');
    } else if (p.links.demo) {
      demoLinks = `<a class="btn btn--primary" href="${p.links.demo}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Live Demo</a>`;
    }

    const linksHtml = [
      demoLinks,
      p.links.github
        ? `<a class="btn btn--ghost" href="${p.links.github}" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Source Code</a>`
        : '',
    ].join('');

    detailWrap.innerHTML = `
      <span class="detail-tag mono">PROJECTS / ${p.title}</span>
      <div class="detail-head">
        <h2>${p.title}</h2>
        <div class="detail-meta">
          <span class="chip chip--accent">${p.category}</span>
          ${p.status ? `<span class="chip">${p.status}</span>` : ''}
          ${p.year ? `<span class="chip">${p.year}</span>` : ''}
        </div>
      </div>
      <div id="galleryHost">${renderGalleryHtml(galleryItems(p), currentSlide)}</div>
      ${p.role ? `<p class="detail-role mono">${p.role}${p.team ? ' — ' + p.team : ''}</p>` : ''}
      <div class="detail-body">
        <div class="detail-col">
          <h4>Overview</h4>
          <p>${p.description}</p>
        </div>
        <div class="detail-col detail-col--side">
          ${
            p.stack.length
              ? `<h4>Tech Stack</h4><ul class="stack-list">${p.stack
                  .map((t) => `<li class="chip">${t}</li>`)
                  .join('')}</ul>`
              : ''
          }
          ${
            p.features.length
              ? `<h4>Highlights</h4><ul class="feature-list">${p.features
                  .map((f) => `<li>${f}</li>`)
                  .join('')}</ul>`
              : ''
          }
          ${linksHtml ? `<div class="detail-links">${linksHtml}</div>` : ''}
        </div>
      </div>
    `;

    wireGalleryEvents();
    gridView.hidden = true;
    detailView.hidden = false;
    detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    startAutoplay();
  }

  backToGrid.addEventListener('click', () => {
    detailView.hidden = true;
    gridView.hidden = false;
    currentProject = null;
    stopAutoplay();
  });

  renderProjectsGrid();

  /* ---------- CONTACT FORM (mailto) ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactNote = document.getElementById('contactNote');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const subject = encodeURIComponent(
      fd.get('subject') || 'Pesan dari Portfolio',
    );
    const body = encodeURIComponent(
      `Nama: ${fd.get('name')}\nEmail: ${fd.get('email')}\n\nPesan:\n${fd.get('message')}`,
    );

    window.location.href = `mailto:beni.mulyawan@binus.ac.id?subject=${subject}&body=${body}`;

    contactNote.hidden = false;
    contactNote.textContent = 'Membuka aplikasi email (Gmail/Outlook)...';
    contactForm.reset();
  });

  /* ---------- THEME TOGGLE ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const iconSun = themeToggle.querySelector('.icon-sun');
  const iconMoon = themeToggle.querySelector('.icon-moon');

  function setTheme(isLight) {
    if (isLight) {
      document.body.classList.add('light-theme');
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    } else {
      document.body.classList.remove('light-theme');
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    }
  }

  // Check saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') setTheme(true);

  themeToggle.addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-theme');
    setTheme(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  /* ---------- TYPING ANIMATION ---------- */
  const phrases = [
    'Machine Learning Models',
    'Full-Stack Web Apps',
    'Computer Vision Systems',
    'NLP Solutions',
    'Data Pipelines',
  ];
  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById('typingText');

  function type() {
    if (!typingElement) return;
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
    }

    let typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && letterIndex === currentPhrase.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  }
  type();

  /* ---------- CUSTOM CURSOR ---------- */
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;
      cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverElements = document.querySelectorAll(
      'a, button, input, textarea, [tabindex], .proj-card',
    );
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () =>
        cursorRing.classList.add('hover'),
      );
      el.addEventListener('mouseleave', () =>
        cursorRing.classList.remove('hover'),
      );
    });

    // Rebind on mutations if needed, or just let static elements work.
    // For project cards that are dynamically generated, we delegate or rebind.
    document.addEventListener('mouseover', (e) => {
      if (
        e.target.closest('a, button, input, textarea, [tabindex], .proj-card')
      ) {
        cursorRing.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (
        e.target.closest('a, button, input, textarea, [tabindex], .proj-card')
      ) {
        cursorRing.classList.remove('hover');
      }
    });
  } else {
    // Disable on touch devices
    document.body.style.cursor = 'auto';
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorRing) cursorRing.style.display = 'none';
  }

  /* ---------- AI PARTICLE BACKGROUND ---------- */
  const canvas = document.getElementById('bgCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.radius = Math.random() * 2 + 1.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = document.body.classList.contains('light-theme')
          ? 'rgba(120, 90, 70, 0.6)'
          : 'rgba(255, 148, 122, 0.7)';
        ctx.fill();
      }
    }

    for (let i = 0; i < 70; i++) particles.push(new Particle());

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLight = document.body.classList.contains('light-theme');
      const rgb = isLight ? '120, 90, 70' : '255, 148, 122';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb}, ${0.5 - dist / 300})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (mouse.x != null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${rgb}, ${0.6 - dist / 300})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  /* ---------- CERTIFICATIONS VIEW ---------- */
  const btnCertificates = document.getElementById("btnCertificates");
  const certListContainer = document.getElementById("certListContainer");
  const aboutMainView = document.getElementById("aboutMainView");
  const certDetailView = document.getElementById("certDetailView");
  const backToAbout = document.getElementById("backToAbout");

  const certifications = [
    {
      type: "folder",
      name: "komdigi",
      count: 10,
      files: [
        { name: "AI Engineer For Milenial", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_AI Engineer For Milenial.pdf" },
        { name: "Dasar-Dasar Implementasi Kecerdasan Artifisial", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Dasar-Dasar Implementasi Kecerdasan Artifisial.pdf" },
        { name: "Dasar-dasar Keamanan AI", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Dasar-dasar Keamanan AI.pdf" },
        { name: "Ethical Hacker For Dummies", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Ethical Hacker For Dummies (1).pdf" },
        { name: "Fundamental Junior Web Developer", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Fundamental Junior Web Developer.pdf" },
        { name: "Intermediate Junior Web Developer", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Intermediate Junior Web Developer.pdf" },
        { name: "Introduction To Cloud Computing", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Introduction To Cloud Computing.pdf" },
        { name: "Konsep Pemrograman", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Konsep Pemrograman (1).pdf" },
        { name: "Memahami Aspek Pengembangan Produk AI", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Memahami Aspek Pengembangan Produk AI.pdf" },
        { name: "Wawasan Karir dalam Bidang Data Analytics", file: "images/sertifikat/komdigi/Sertifikat_BENI MULYAWAN_Wawasan Karir dalam Bidang Data Analytics.pdf" }
      ]
    },
    {
      type: "folder",
      name: "microsoft",
      count: 3,
      files: [
        { name: "Pembelajaran Mesin Azure", file: "images/sertifikat/microsoft/pembelajaran mesin azure.pdf" },
        { name: "Pengantar Machine Learning", file: "images/sertifikat/microsoft/pengantar machine learning.pdf" },
        { name: "Penyerapan Data", file: "images/sertifikat/microsoft/penyerapan data.pdf" }
      ]
    },
    { type: "file", name: "Beelingua", file: "images/sertifikat/Beelingua.pdf" },
    { type: "file", name: "BNCC", file: "images/sertifikat/BNCC.png", isImage: true },
    { type: "file", name: "Pelatihan Azure", file: "images/sertifikat/pelatihan azure.pdf" }
  ];

  if (certListContainer) {
    const rootCerts = certifications;

    window.renderCertGrid = function(items, folderName = null) {
      let html = '<div class="cert-grid">';
      
      items.forEach((item, index) => {
        if (item.type === "folder") {
          html += `
            <div class="cert-card" style="cursor:pointer;" onclick="openCertFolder(${index})">
              <div class="cert-icon-placeholder" style="background: rgba(255,193,7,0.1); color: #ffc107;">📁</div>
              <span>${item.name} <span style="opacity:0.5; font-size:0.8em;">(${item.count})</span></span>
            </div>
          `;
        } else {
          const file = item.file || item.url;
          const isImg = item.isImage || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg');
          html += `
            <a href="${file}" target="_blank" class="cert-card">
              ${isImg 
                ? `<img src="${file}" alt="${item.name}" loading="lazy" onerror="this.outerHTML='<div class=\\'cert-icon-placeholder\\'>📄</div>'">` 
                : `<div class="cert-icon-placeholder">📄</div>`
              }
              <span>${item.name}</span>
            </a>
          `;
        }
      });
      html += '</div>';
      certListContainer.innerHTML = html;

      const bc = document.getElementById("certBreadcrumb");
      if (bc) {
        if (folderName) {
          bc.innerHTML = `← Back to all certificates / <b style="color:#fff;">${folderName}</b>`;
          bc.onclick = () => renderCertGrid(rootCerts, null);
        } else {
          bc.innerHTML = "";
          bc.onclick = null;
        }
      }
    };

    window.openCertFolder = function(index) {
      const folder = rootCerts[index];
      if (folder && folder.type === "folder") {
        renderCertGrid(folder.files, folder.name);
      }
    };

    renderCertGrid(rootCerts);
  }

  if (btnCertificates && aboutMainView && certDetailView) {
    btnCertificates.addEventListener("click", () => {
      aboutMainView.style.display = "none";
      certDetailView.style.display = "block";
      window.scrollTo({ top: document.getElementById("about").offsetTop - 100, behavior: "smooth" });
    });

    backToAbout.addEventListener("click", () => {
      certDetailView.style.display = "none";
      aboutMainView.style.display = "grid";
      window.scrollTo({ top: document.getElementById("about").offsetTop - 100, behavior: "smooth" });
    });
  }

})();
