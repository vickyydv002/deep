const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

const revealElements = document.querySelectorAll(
  '.about-text, .about-stats, .work-heading, .work-card, .contact-text, .contact-form'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  formSuccess.hidden = false;
  contactForm.reset();
  setTimeout(() => {
    formSuccess.hidden = true;
  }, 4000);
});
