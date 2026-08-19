// ===== CEcult+ · filters.js =====
// Small reusable filter-chip controller: attach to a container of [data-filter]
// buttons and a callback that receives the active filter value.

function initFilterChips(containerSelector, onChange) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.addEventListener('click', e => {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    container.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    onChange(btn.dataset.filter);
  });
}

function fonteBadgeHTML(fonte) {
  const labels = {
    oficial: 'Fonte oficial', academica: 'Fonte acadêmica', bibliografica: 'Fonte bibliográfica',
    acervo: 'Fonte de acervo', comunitaria: 'Contribuição comunitária', exemplo: 'Dado de exemplo'
  };
  const cls = { oficial: 'fonte-oficial', academica: 'fonte-academica', bibliografica: 'fonte-bibliografica', acervo: 'fonte-acervo', comunitaria: 'fonte-comunitaria', exemplo: 'fonte-exemplo' };
  return `<span class="fonte-badge ${cls[fonte] || 'fonte-comunitaria'}">${labels[fonte] || 'Fonte não identificada'}</span>`;
}
