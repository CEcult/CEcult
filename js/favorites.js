// ===== CEcult+ · favorites.js =====
// "Minha Coleção" — lets visitors save people, places, and events locally in their browser.

const CEFavorites = {
  key: 'cecult_favoritos',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (e) {
      return [];
    }
  },

  isSaved(id) {
    return this.getAll().some(f => f.id === id);
  },

  toggle(item) {
    let all = this.getAll();
    if (this.isSaved(item.id)) {
      all = all.filter(f => f.id !== item.id);
    } else {
      all.push(item);
    }
    localStorage.setItem(this.key, JSON.stringify(all));
    return this.isSaved(item.id);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    const btn = e.target.closest('[data-fav-id]');
    if (!btn) return;
    const item = {
      id: btn.dataset.favId,
      tipo: btn.dataset.favType || 'Item',
      titulo: btn.dataset.favTitle || 'Sem título',
      href: btn.dataset.favHref || '#'
    };
    const saved = CEFavorites.toggle(item);
    btn.classList.toggle('active', saved);
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    btn.textContent = saved ? '❤️ Salvo' : '🤍 Salvar';
  });

  document.querySelectorAll('[data-fav-id]').forEach(btn => {
    const saved = CEFavorites.isSaved(btn.dataset.favId);
    btn.classList.toggle('active', saved);
    btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
    if (saved) btn.textContent = '❤️ Salvo';
  });
});
