// ===== CEcult+ · gallery.js =====
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('#lightbox');
  if (!lightbox) return;
  const inner = lightbox.querySelector('.lightbox-inner');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      inner.innerHTML = `
        <div class="foto-placeholder">
          <span class="foto-label">${item.dataset.label || 'Fotografia do acervo — exemplo'}</span>
        </div>
        <div class="lightbox-caption">
          <div>
            <strong>${item.dataset.title || ''}</strong>
            <div class="text-muted" style="font-size:0.85rem;">${item.dataset.meta || ''}</div>
          </div>
          <span class="fonte-badge fonte-exemplo">Imagem ilustrativa</span>
        </div>`;
      lightbox.classList.add('open');
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.closest('.lightbox-close')) {
      lightbox.classList.remove('open');
    }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
});
