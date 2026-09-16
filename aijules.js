// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (light / dark)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function applyThemeLabel(theme) {
  const isLight = theme === 'light';
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}

// Sync the button state with whatever the inline head script already set.
applyThemeLabel(root.getAttribute('data-theme') || 'dark');

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  applyThemeLabel(next);
  try {
    localStorage.setItem('theme', next);
  } catch (e) {
    // localStorage unavailable (e.g. private browsing) — theme just won't persist.
  }
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Project file-list expand/collapse
document.querySelectorAll('.fileitem').forEach(item => {
  const row = item.querySelector('.fileitem__row');

  const toggle = () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.fileitem.is-open').forEach(other => {
      if (other !== item) other.classList.remove('is-open');
    });
    item.classList.toggle('is-open', !isOpen);
  };

  row.addEventListener('click', toggle);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});