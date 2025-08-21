
// Highlight current nav link
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a => {
    if(a.getAttribute('href') === here){ a.style.background = '#fff'; a.style.color = '#8b1e3f'; }
  });
});
