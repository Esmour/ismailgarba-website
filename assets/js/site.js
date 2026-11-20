document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const search = document.getElementById('record-search');
  const filter = document.getElementById('record-filter');
  const cards = [...document.querySelectorAll('.record-card')];
  const update = () => {
    const q = (search?.value || '').toLowerCase().trim();
    const type = filter?.value || 'all';
    cards.forEach(card => {
      const matchesText = !q || (card.dataset.search || '').includes(q);
      const matchesType = type === 'all' || card.dataset.type === type;
      card.classList.toggle('hidden-record', !(matchesText && matchesType));
    });
  };
  search?.addEventListener('input', update);
  filter?.addEventListener('change', update);
});
