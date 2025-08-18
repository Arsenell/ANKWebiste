// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Footer year
const y = document.querySelector('#year');
if (y) y.textContent = new Date().getFullYear();

// Contact form (Formspree friendly)
const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

if (form && status) {
  form.addEventListener('submit', async (e) => {
    if (!form.action.includes('formspree.io')) return; // if you wire your own backend, skip
    e.preventDefault();
    status.textContent = 'Sending…';
    try {
      const data = new FormData(form);
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
      if (res.ok) {
        form.reset();
        status.textContent = 'Thanks! I’ll get back to you shortly.';
      } else {
        status.textContent = 'Something went wrong. Please email me directly.';
      }
    } catch {
      status.textContent = 'Network error. Please try again or email me.';
    }
  });
}
