// ===== CEcult+ · timeline.js =====
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#timeline-list');
  if (!list) return;
  const items = ((window.CECULT_DATA && window.CECULT_DATA.timeline) || []).slice().sort((a, b) => a.ano - b.ano);

  function render(filter) {
    const filtered = filter && filter !== 'todas' ? items.filter(i => i.categoria === filter) : items;
    if (!filtered.length) {
      list.innerHTML = `<div class="empty-state"><div class="es-icon">🕰️</div>Nenhum acontecimento encontrado para este filtro.</div>`;
      return;
    }
    list.innerHTML = filtered.map(i => `
      <div class="timeline-item reveal in" data-cat="${i.categoria}">
        <div class="timeline-year">${i.ano}</div>
        <h3>${i.titulo}</h3>
        <p>${i.descricao}</p>
        ${fonteBadgeHTML(i.fonte)}
      </div>
    `).join('');
  }

  render('todas');
  initFilterChips('#timeline-filters', render);
});
