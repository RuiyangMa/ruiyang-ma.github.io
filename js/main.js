/* ============================================================
   Particle Network Background
   Hub-and-Spoke topology + Pulse propagation + Time-varying edges
   ============================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const CONFIG = {
    hubCount:        4,      // number of hub (systemically important) nodes
    satelliteCount:  55,     // regular satellite nodes
    hubRadius:       7,      // hub node visual radius
    nodeRadius:      1.8,    // satellite node visual radius
    hubMaxDist:      220,    // hubs connect over longer distances
    satMaxDist:      130,    // satellite connection distance
    speed:           0.28,
    hubSpeed:        0.12,   // hubs move slowly
    colorBlue:       '37, 99, 235',
    colorCyan:       '2, 132, 199',
    pulseInterval:   3200,   // ms between pulses
    pulseSpeed:      2.2,    // propagation speed
    pulseMaxRadius:  260,
  };

  let W, H, nodes = [], pulses = [], animId, lastPulseTime = 0;
  let mouse = { x: null, y: null, radius: 170 };
  let tick = 0;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  /* ---- Node class (shared by hubs and satellites) ---- */
  class Node {
    constructor(isHub, index) {
      this.isHub  = isHub;
      this.index  = index;
      this.color  = isHub ? CONFIG.colorBlue : (Math.random() > 0.45 ? CONFIG.colorBlue : CONFIG.colorCyan);
      this.baseAlpha = isHub ? 0.75 : rand(0.2, 0.45);
      this.alpha  = this.baseAlpha;
      this.r      = isHub ? CONFIG.hubRadius : rand(1.2, CONFIG.nodeRadius);
      this.pulse  = 0;   // 0–1 flash intensity from incoming pulse
      this.reset(true);
    }

    reset(initial) {
      const spd = this.isHub ? CONFIG.hubSpeed : CONFIG.speed;
      this.x  = rand(0, W);
      this.y  = initial ? rand(0, H) : (Math.random() < 0.5 ? -5 : H + 5);
      this.vx = rand(-spd, spd);
      this.vy = rand(-spd, spd);
    }

    update() {
      /* mouse repulsion */
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.vx += (dx / dist) * force * (this.isHub ? 0.15 : 0.4);
          this.vy += (dy / dist) * force * (this.isHub ? 0.15 : 0.4);
        }
      }

      const maxSpd = (this.isHub ? CONFIG.hubSpeed : CONFIG.speed) * 3;
      const spd = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (spd > maxSpd) { this.vx = (this.vx / spd) * maxSpd; this.vy = (this.vy / spd) * maxSpd; }

      const damp = this.isHub ? 0.998 : 0.995;
      this.vx *= damp; this.vy *= damp;
      this.x  += this.vx; this.y  += this.vy;

      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;

      /* decay pulse flash */
      if (this.pulse > 0) this.pulse = Math.max(0, this.pulse - 0.025);
    }

    draw() {
      const flash  = this.pulse;
      const alpha  = this.baseAlpha + flash * 0.55;
      const radius = this.r + flash * (this.isHub ? 4 : 2.5);

      if (this.isHub) {
        /* outer glow ring */
        const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, radius * 3.5);
        glow.addColorStop(0,   `rgba(${this.color}, ${0.18 + flash * 0.25})`);
        glow.addColorStop(0.5, `rgba(${this.color}, ${0.06 + flash * 0.1})`);
        glow.addColorStop(1,   `rgba(${this.color}, 0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        /* core dot */
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fill();

        /* pulsing ring on hubs */
        const ringPhase = (tick * 0.018 + this.index * 1.4) % (Math.PI * 2);
        const ringR = radius + 3 + Math.sin(ringPhase) * 3;
        const ringAlpha = (0.08 + flash * 0.15) * (0.5 + 0.5 * Math.sin(ringPhase));
        ctx.beginPath();
        ctx.arc(this.x, this.y, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${this.color}, ${ringAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fill();
      }
    }
  }

  /* ---- Pulse class ---- */
  class Pulse {
    constructor(originNode) {
      this.ox    = originNode.x;
      this.oy    = originNode.y;
      this.r     = 0;
      this.alive = true;
      this.hit   = new Set();
      this.hit.add(originNode.index);
      originNode.pulse = 1;
    }

    update() {
      this.r += CONFIG.pulseSpeed;
      if (this.r > CONFIG.pulseMaxRadius) { this.alive = false; return; }

      /* check if pulse front reaches any node */
      nodes.forEach(n => {
        if (this.hit.has(n.index)) return;
        const dx = n.x - this.ox;
        const dy = n.y - this.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const front = this.r;
        if (Math.abs(dist - front) < CONFIG.pulseSpeed * 1.5) {
          this.hit.add(n.index);
          n.pulse = 0.85;
        }
      });
    }

    draw() {
      const progress = this.r / CONFIG.pulseMaxRadius;
      const alpha    = (1 - progress) * 0.22;
      ctx.beginPath();
      ctx.arc(this.ox, this.oy, this.r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${CONFIG.colorBlue}, ${alpha})`;
      ctx.lineWidth   = 1.2;
      ctx.stroke();
    }
  }

  /* ---- Build nodes ---- */
  function buildNodes() {
    nodes  = [];
    pulses = [];
    for (let i = 0; i < CONFIG.hubCount; i++)       nodes.push(new Node(true,  i));
    for (let i = 0; i < CONFIG.satelliteCount; i++) nodes.push(new Node(false, CONFIG.hubCount + i));
  }

  /* ---- Draw edges with time-varying opacity ---- */
  function drawEdges() {
    const breathe = 0.5 + 0.5 * Math.sin(tick * 0.012); // 0–1 slow oscillation

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a   = nodes[i];
        const b   = nodes[j];
        const dx  = a.x - b.x;
        const dy  = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxD = (a.isHub || b.isHub) ? CONFIG.hubMaxDist : CONFIG.satMaxDist;

        if (dist > maxD) continue;

        const baseFade  = 1 - dist / maxD;
        const flashBoost = (a.pulse + b.pulse) * 0.3;
        const timeVar   = (a.isHub || b.isHub) ? 0.22 : 0.12 + breathe * 0.06;
        const opacity   = baseFade * (timeVar + flashBoost);
        const lineW     = (a.isHub || b.isHub) ? 1.2 + flashBoost * 2 : 0.7 + flashBoost;

        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        grad.addColorStop(0, `rgba(${a.color}, ${opacity})`);
        grad.addColorStop(1, `rgba(${b.color}, ${opacity})`);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth   = lineW;
        ctx.stroke();
      }
    }
  }

  /* ---- Main loop ---- */
  function loop(timestamp) {
    tick++;
    ctx.clearRect(0, 0, W, H);

    /* trigger new pulse from a random hub */
    if (timestamp - lastPulseTime > CONFIG.pulseInterval) {
      const hub = nodes[Math.floor(Math.random() * CONFIG.hubCount)];
      pulses.push(new Pulse(hub));
      lastPulseTime = timestamp;
    }

    /* update & draw pulses */
    pulses = pulses.filter(p => p.alive);
    pulses.forEach(p => { p.update(); p.draw(); });

    drawEdges();
    nodes.forEach(n => { n.update(); n.draw(); });

    animId = requestAnimationFrame(loop);
  }

  function init() {
    resize();
    buildNodes();
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animId);
    resize();
    buildNodes();
    requestAnimationFrame(loop);
  });

  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });
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
