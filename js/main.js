/* ============================================================
   Particle Network Background
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    particleCount: 70,
    maxDistance: 140,
    speed: 0.35,
    particleRadius: 1.8,
    lineOpacityMax: 0.18,
    colorBlue: '37, 99, 235',
    colorCyan: '2, 132, 199',
  };

  let W, H, particles = [], animId;
  let mouse = { x: null, y: null, radius: 160 };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  class Particle {
    constructor() { this.reset(true); }

    reset(initial) {
      this.x  = rand(0, W);
      this.y  = initial ? rand(0, H) : (Math.random() < 0.5 ? -5 : H + 5);
      this.vx = rand(-CONFIG.speed, CONFIG.speed);
      this.vy = rand(-CONFIG.speed, CONFIG.speed);
      this.r  = rand(1, CONFIG.particleRadius);
      this.alpha = rand(0.2, 0.5);
      this.color = Math.random() > 0.5 ? CONFIG.colorBlue : CONFIG.colorCyan;
    }

    update() {
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.vx += (dx / dist) * force * 0.4;
          this.vy += (dy / dist) * force * 0.4;
        }
      }

      const maxSpeed = CONFIG.speed * 3;
      const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (spd > maxSpeed) {
        this.vx = (this.vx / spd) * maxSpeed;
        this.vy = (this.vy / spd) * maxSpeed;
      }

      this.vx *= 0.995;
      this.vy *= 0.995;

      this.x += this.vx;
      this.y += this.vy;

      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.fill();
    }
  }

  function buildParticles() {
    particles = [];
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONFIG.maxDistance) {
          const opacity = (1 - dist / CONFIG.maxDistance) * CONFIG.lineOpacityMax;
          const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0, `rgba(${a.color}, ${opacity})`);
          grad.addColorStop(1, `rgba(${b.color}, ${opacity})`);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(loop);
  }

  function init() {
    resize();
    buildParticles();
    loop();
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    buildParticles();
    loop();
  });

  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
  }

  init();
})();

/* ============================================================
   Navbar: scroll effect + active link highlight
   ============================================================ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const toggle = document.getElementById('navToggle');
  const navLinksList = document.querySelector('.nav-links');

  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toggle && navLinksList) {
    toggle.addEventListener('click', () => {
      navLinksList.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksList.classList.remove('open');
      });
    });
  }
})();

/* ============================================================
   Add reveal classes dynamically (must run before initScrollReveal)
   ============================================================ */
(function addRevealClasses() {
  const targets = [
    { sel: '.about-photo-wrapper', delay: 0 },
    { sel: '.about-text',          delay: 1 },
    { sel: '.paper-card',          delay: 0 },
    { sel: '.teaching-institution',delay: 0 },
    { sel: '.teaching-table-wrapper', delay: 1 },
    { sel: '.cv-card',             delay: 0 },
  ];

  targets.forEach(({ sel, delay }) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      const d = delay || i;
      if (d > 0) el.classList.add(`reveal-delay-${Math.min(d, 4)}`);
    });
  });

  document.querySelectorAll('.paper-card').forEach((el, i) => {
    el.classList.add(`reveal-delay-${Math.min(i + 1, 4)}`);
  });
})();

/* ============================================================
   Scroll Reveal
   ============================================================ */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');

  if (!revealEls.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
})();
