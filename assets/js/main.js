/**
 * Hijrah Assalam — Main JavaScript
 * Theme toggle, scroll reveals, mobile nav, form handler
 */

(function() {
  'use strict';

  // ─── Mobile Menu ───
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // ─── Scroll Reveal ───
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    revealElements.forEach(el => revealObserver.observe(el));
  } else if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ─── Navbar Scroll ───
  const nav = document.getElementById('main-nav');

  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-slate-800/50');
        nav.classList.remove('border-transparent');
      } else {
        nav.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-slate-800/50');
        nav.classList.add('border-transparent');
      }
    }, { passive: true });
  }

  // ─── Active Nav Link ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  }

  // ─── Smooth Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
        }
      }
    });
  });

  // ─── Current Year ───
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ─── Contact Form Handler ───
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const btnText = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      const successMsg = document.getElementById('form-success');
      const errorMsg = document.getElementById('form-error');

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          contactForm.reset();
          if (successMsg) { successMsg.classList.add('show'); setTimeout(() => successMsg.classList.remove('show'), 5000); }
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        if (errorMsg) { errorMsg.classList.add('show'); setTimeout(() => errorMsg.classList.remove('show'), 5000); }
      } finally {
        btn.textContent = btnText;
        btn.disabled = false;
      }
    });
  }

  // ─── Copy Email ───
  document.querySelectorAll('[data-copy-email]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const email = btn.getAttribute('data-copy-email');
      try {
        await navigator.clipboard.writeText(email);
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = original, 2000);
      } catch (err) {
        window.location.href = 'mailto:' + email;
      }
    });
  });

})();
