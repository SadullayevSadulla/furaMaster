// === index.js ===

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
};

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal Animations
const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

hiddenElements.forEach(el => observer.observe(el));

// Truck Search Filter
const searchTruck = document.getElementById('searchTruck');
const truckCards = document.querySelectorAll('.truck-card');

searchTruck.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  truckCards.forEach(card => {
    const title = card.querySelector('h4').innerText.toLowerCase();
    card.style.display = title.includes(term) ? 'block' : 'none';
  });
});

// Animate Number Counters
function animateCounter(el, target, duration) {
  let start = 0;
  const increment = target / (duration / 10);
  const interval = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + '+';
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(start) + '+';
    }
  }, 10);
}

window.addEventListener('load', () => {
  const stats = document.querySelectorAll('.hero-stats h3');
  stats.forEach(stat => {
    const value = parseInt(stat.textContent);
    animateCounter(stat, value, 1500);
  });
});

// Fade-in on load for hero section
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  hero.classList.add('show');
});

// Add smooth transition to all links
const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); // Close mobile menu on link click
  });
});
