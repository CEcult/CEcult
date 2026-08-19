// ===== CEcult+ · map.js =====
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#map-canvas');
  const sidebar = document.querySelector('#map-sidebar');
  if (!canvas || !sidebar) return;

  const municipios = (window.CECULT_DATA && window.CECULT_DATA.municipios) || [];
  const params = new URLSearchParams(window.location.search);
  const preSelected = params.get('municipio');

  const regionColor = {
    'Fortaleza e Região Metropolitana': 'var(--vermelho)',
    'Cariri': 'var(--laranja)',
    'Litoral Leste': 'var(--azul)',
    'Ibiapaba e Norte': 'var(--verde)',
    'Ibiapaba': 'var(--verde)',
    'Sertão Central': 'var(--laranja)',
    'Centro-Sul': 'var(--vermelho)',
    'Vale do Jaguaribe': 'var(--azul)',
    'Maciço de Baturité': 'var(--verde)',
    'Sertão dos Crateús': 'var(--laranja)'
  };

  // Build points
  municipios.forEach(m => {
    const point = document.createElement('button');
    point.className = 'map-point';
    point.style.left = m.x + '%';
    point.style.top = m.y + '%';
    point.style.background = regionColor[m.regiao] || 'var(--azul)';
    point.dataset.id = m.id;
    point.dataset.nome = m.nome;
    point.setAttribute('aria-label', `Ver detalhes de ${m.nome}`);
    point.addEventListener('click', () => selectMunicipio(m.id));
    canvas.appendChild(point);
  });

  // Build detail panels
  municipios.forEach(m => {
    const el = document.createElement('article');
    el.className = 'map-detail';
    el.id = `detail-${m.id}`;
    el.innerHTML = `
      <div class="md-regiao">${m.regiao}</div>
      <h3>${m.nome}</h3>
      <p class="lede">${m.resumo}</p>
      <h4 style="font-family:var(--font-mono);font-size:0.72rem;text-transform:uppercase;color:var(--ink-3);margin-top:14px;">Destaques</h4>
      <div class="md-list">${m.destaques.map(d => `<span class="tag">${d}</span>`).join('')}</div>
      <h4 style="font-family:var(--font-mono);font-size:0.72rem;text-transform:uppercase;color:var(--ink-3);">Gastronomia</h4>
      <div class="md-list">${m.gastronomia.map(g => `<span class="tag c-laranja"><span class="tag-dot"></span>${g}</span>`).join('')}</div>
      <p style="margin-top:14px;font-size:0.88rem;color:var(--ink-3);">💡 ${m.curiosidade}</p>
      <div style="margin-top:14px;">${fonteBadgeHTML(m.fonte)}</div>
    `;
    sidebar.appendChild(el);
  });

  function selectMunicipio(id) {
    document.querySelectorAll('.map-point').forEach(p => p.classList.toggle('active', p.dataset.id === id));
    document.querySelectorAll('.map-detail').forEach(d => d.classList.toggle('active', d.id === `detail-${id}`));
    const active = document.querySelector(`#detail-${id}`);
    if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  if (preSelected && municipios.some(m => m.id === preSelected)) {
    selectMunicipio(preSelected);
  } else if (municipios.length) {
    selectMunicipio(municipios[0].id);
  }
});
