// ===== CEcult+ · quiz.js =====
document.addEventListener('DOMContentLoaded', () => {
  const shell = document.querySelector('#quiz-shell');
  if (!shell) return;

  const questions = shuffle((window.CECULT_DATA && window.CECULT_DATA.quiz) || []).slice(0, 8);
  let current = 0;
  let score = 0;
  let answered = false;

  const els = {
    progress: shell.querySelector('.quiz-progress-bar'),
    question: shell.querySelector('.quiz-question'),
    options: shell.querySelector('.quiz-options'),
    counter: shell.querySelector('#quiz-counter'),
    xp: shell.querySelector('#quiz-xp'),
    next: shell.querySelector('#quiz-next'),
    result: shell.querySelector('#quiz-result')
  };

  function levelFor(xp) {
    if (xp >= 700) return 'Mestre da Cultura';
    if (xp >= 500) return 'Especialista';
    if (xp >= 300) return 'Conhecedor';
    if (xp >= 100) return 'Explorador';
    return 'Iniciante';
  }

  function renderQuestion() {
    answered = false;
    const q = questions[current];
    els.progress.style.width = `${(current / questions.length) * 100}%`;
    els.counter.textContent = `Pergunta ${current + 1} de ${questions.length}`;
    els.question.innerHTML = `<span class="eyebrow">${q.categoria}</span><br>${q.pergunta}`;
    els.options.innerHTML = q.opcoes.map((op, i) => `
      <button class="quiz-option" data-index="${i}">${op}</button>
    `).join('');
    els.next.style.display = 'none';
    els.result.textContent = '';
  }

  els.options.addEventListener('click', e => {
    const btn = e.target.closest('.quiz-option');
    if (!btn || answered) return;
    answered = true;
    const idx = Number(btn.dataset.index);
    const q = questions[current];
    const buttons = [...els.options.querySelectorAll('.quiz-option')];
    buttons.forEach(b => b.disabled = true);
    buttons[q.correta].classList.add('correct');
    if (idx === q.correta) {
      score += 100;
      els.result.innerHTML = `<span style="color:var(--verde);font-weight:700;">✔ Correto! +100 XP</span>`;
    } else {
      btn.classList.add('wrong');
      els.result.innerHTML = `<span style="color:var(--vermelho);font-weight:700;">✘ Quase! A resposta certa está destacada.</span>`;
    }
    els.xp.textContent = `${score} XP · ${levelFor(score)}`;
    els.next.style.display = 'inline-flex';
  });

  els.next.addEventListener('click', () => {
    current++;
    if (current >= questions.length) {
      els.progress.style.width = '100%';
      els.question.innerHTML = `Você concluiu o quiz! 🎉`;
      els.options.innerHTML = '';
      els.next.style.display = 'none';
      els.result.innerHTML = `
        <div class="curiosidade-card" style="margin-top:16px;">
          <div class="lamp">🏅</div>
          <div><strong>${score} XP</strong> — Nível: <strong>${levelFor(score)}</strong></div>
          <button class="btn btn-primary btn-sm" onclick="window.location.reload()">Jogar novamente</button>
        </div>`;
      return;
    }
    renderQuestion();
  });

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  renderQuestion();
});
