'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewer-image');
document.querySelectorAll('.image-open').forEach(button => {
  button.addEventListener('click', () => {
    viewerImage.src = button.dataset.src;
    viewerImage.alt = button.dataset.caption;
    document.getElementById('viewer-caption').textContent = button.dataset.caption;
    viewer.showModal();
  });
});
document.getElementById('close-viewer')?.addEventListener('click', () => viewer.close());
viewer?.addEventListener('click', event => { if (event.target === viewer) { const box = viewer.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) viewer.close(); } });
const track = document.querySelector('.game-track');
if (track) {
  const cards = [...track.querySelectorAll('.shelf-game')];
  const prev = document.querySelector('.shelf-prev');
  const next = document.querySelector('.shelf-next');
  const count = document.querySelector('.shelf-count');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  const update = () => {
    index = cards.reduce((best, card, i) => Math.abs(card.offsetLeft - cards[0].offsetLeft - track.scrollLeft) < Math.abs(cards[best].offsetLeft - cards[0].offsetLeft - track.scrollLeft) ? i : best, 0);
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
    count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(cards.length).padStart(2, '0')}`;
  };
  const move = direction => {
    const target = Math.max(0, Math.min(cards.length - 1, index + direction));
    track.scrollTo({left: cards[target].offsetLeft - cards[0].offsetLeft, behavior: reduceMotion.matches ? 'instant' : 'smooth'});
  };
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, {passive: true});
  track.addEventListener('keydown', event => {
    if (event.target !== track) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
  });
  window.addEventListener('resize', update);
  update();
}
