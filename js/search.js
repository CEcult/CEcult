// ===== CEcult+ · search.js =====
// Powers the global search overlay by scanning all bundled datasets.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#global-search-form');
  const input = document.querySelector('#global-search-input');
  const results = document.querySelector('#search-results');
  if (!form || !input || !results) return;

  const index = buildSearchIndex();

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ''; return; }
    const matches = index
      .filter(item => item.text.includes(q))
      .slice(0, 12);
    renderResults(matches, results);
  });

  form.addEventListener('submit', e => e.preventDefault());
}); 

function buildSearchIndex() {
  const D = window.CECULT_DATA || {};
  const idx = [];

  (D.categorias || []).forEach(c => idx.push({
    type: 'Categoria', title: c.nome, sub: c.descricao,
    text: (c.nome + ' ' + c.descricao + ' ' + (c.subcategorias || []).join(' ')).toLowerCase(),
    href: `explorar.html#${c.id}`
  }));

  (D.municipios || []).forEach(m => idx.push({
    type: 'Município', title: m.nome, sub: m.regiao,
    text: (m.nome + ' ' + m.regiao + ' ' + m.resumo).toLowerCase(),
    href: `mapa.html?municipio=${m.id}`
  }));

  (D.pessoas || []).forEach(p => idx.push({
    type: 'Pessoa', title: p.nome, sub: p.municipio,
    text: (p.nome + ' ' + p.municipio + ' ' + p.resumo).toLowerCase(),
    href: `pessoas.html?pessoa=${p.id}`
  }));

  (D.eventos || []).forEach(e => idx.push({
    type: 'Evento', title: e.titulo, sub: e.municipio,
    text: (e.titulo + ' ' + e.municipio + ' ' + e.descricao).toLowerCase(),
    href: `agenda.html`
  }));

  (D.timeline || []).forEach(t => idx.push({
    type: 'Linha do Tempo', title: `${t.ano} — ${t.titulo}`, sub: t.categoria,
    text: (t.titulo + ' ' + t.categoria + ' ' + t.descricao).toLowerCase(),
    href: `timeline.html`
  }));

  return idx;
}

function renderResults(matches, container) {
  if (!matches.length) {
    container.innerHTML = `<div class="empty-state" style="padding: var(--space-4);">Nenhum resultado encontrado. Tente outro termo.</div>`;
    return;
  }
  container.innerHTML = matches.map(m => `
    <a class="search-result-item" href="${m.href}">
      <span class="sr-type">${m.type}</span>
      <span>
        <strong>${m.title}</strong>
        ${m.sub ? `<div class="text-muted" style="font-size:0.78rem;">${m.sub}</div>` : ''}
      </span>
    </a>
  `).join('');
}
