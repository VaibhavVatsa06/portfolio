// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll to top
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--text)' : '';
  });
});

// Typing effect for hero role
const roles = ['Software Developer', 'React.js Developer', 'Full Stack Engineer', 'AI/ML Enthusiast'];
let ri = 0, ci = 0, deleting = false;
const typingEl = document.getElementById('typing-role');

function type() {
  const current = roles[ri];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ci + 1);
    ci++;
    if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typingEl.textContent = current.slice(0, ci - 1);
    ci--;
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();
