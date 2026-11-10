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
