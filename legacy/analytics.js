/**
 * hijrahassalam.com — GA4 Event Tracking
 * Measurement ID: G-9YYE9X6L4E
 *
 * Tracked events:
 *   click_hire_me      — High-intent: user clicks "Hire Me" CTA
 *   click_contact       — High-intent: user clicks "Send a Message"
 *   click_download_cv   — CV download request
 *   click_email         — mailto: link clicks
 *   click_github        — GitHub profile/project clicks
 *   click_linkedin      — LinkedIn profile clicks
 *   click_project       — Project card clicks (BundaGizi, Hermes, etc.)
 *   scroll_depth        — 25%, 50%, 75%, 100% scroll milestones
 */

(function () {
  'use strict';

  // ——— Scroll Depth Tracking ———
  const scrollMilestones = { 25: false, 50: false, 75: false, 100: false };

  function trackScrollDepth() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const percent = Math.round((scrollTop / docHeight) * 100);

    for (const threshold of [25, 50, 75, 100]) {
      if (percent >= threshold && !scrollMilestones[threshold]) {
        scrollMilestones[threshold] = true;
        gtag('event', 'scroll_depth', {
          percent_scrolled: threshold,
          page_path: window.location.pathname
        });
      }
    }
  }

  let scrollTick = false;
  window.addEventListener('scroll', function () {
    if (!scrollTick) {
      requestAnimationFrame(function () {
        trackScrollDepth();
        scrollTick = false;
      });
      scrollTick = true;
    }
  }, { passive: true });

  // ——— Click Event Tracking (Event Delegation) ———
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const text = (link.textContent || '').trim().toLowerCase();

    // Hire Me buttons
    if (href.includes('hire') || text.includes('hire me')) {
      gtag('event', 'click_hire_me', {
        link_text: text,
        link_url: href,
        page_path: window.location.pathname
      });
      return;
    }

    // Send a Message / Contact
    if (href.includes('/contact') || text.includes('send a message') || text.includes('get in touch')) {
      gtag('event', 'click_contact', {
        link_text: text,
        link_url: href,
        page_path: window.location.pathname
      });
      return;
    }

    // Download CV
    if (text.includes('download cv') || href.includes('#cv')) {
      gtag('event', 'click_download_cv', {
        link_text: text,
        page_path: window.location.pathname
      });
      return;
    }

    // Email (mailto)
    if (href.startsWith('mailto:')) {
      gtag('event', 'click_email', {
        link_url: href,
        page_path: window.location.pathname
      });
      return;
    }

    // GitHub
    if (href.includes('github.com')) {
      gtag('event', 'click_github', {
        link_url: href,
        link_text: text,
        page_path: window.location.pathname
      });
      return;
    }

    // LinkedIn
    if (href.includes('linkedin.com')) {
      gtag('event', 'click_linkedin', {
        link_url: href,
        page_path: window.location.pathname
      });
      return;
    }

    // Project links (BundaGizi, etc.)
    if (href.includes('bundagizi.com') || href.includes('/research')) {
      gtag('event', 'click_project', {
        link_url: href,
        link_text: text,
        page_path: window.location.pathname
      });
      return;
    }
  });

})();
