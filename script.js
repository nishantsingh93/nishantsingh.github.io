const menuButton = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
window.matchMedia('(min-width: 721px)').addEventListener('change', closeMenu);
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  projects.forEach(project => {
    project.hidden = button.dataset.filter !== 'all' && !project.dataset.category.split(' ').includes(button.dataset.filter);
    if (!project.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = `${count} projects shown`;
}));
// Deterministic decorative points; this is an illustration, not project results.
const scatter = document.querySelector('#scatter');
for (let i = 0; i < 65; i++) {
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const x = 30 + ((i * 67) % 380);
  const y = Math.max(20, Math.min(230, 230 - x * .43 + Math.sin(i * 13) * 49));
  dot.setAttribute('cx', x); dot.setAttribute('cy', y);
  dot.setAttribute('r', i % 5 === 0 ? '3' : '2');
  dot.setAttribute('fill', i % 4 === 0 ? '#1b2cf0' : '#84877c');
  dot.setAttribute('opacity', '.55'); scatter.append(dot);
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navigation.querySelectorAll('a').forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle('current', current);
        if (current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
