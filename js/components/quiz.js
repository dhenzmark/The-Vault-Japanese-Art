import { questions } from '../data/quiz.js'

// Match the Masterpiece: section shell. The card content is drawn by initQuiz().
export const Quiz = () => `
  <section id="quiz" class="quiz has-ghost">
    <div class="ghost layer ghost-right ghost-light" data-speed="0.35" data-speed-mobile="0.2" aria-hidden="true">問</div>
    <div class="wrap">
      <div class="section-head"><h2>Match the Masterpiece</h2><span class="jp">クイズ</span></div>
      <p class="lead">Five questions on the works and ideas above. Pick an answer to see if you're right.</p>
      <div class="quiz-card" id="quiz-card" aria-live="polite"></div>
    </div>
  </section>
`

const Progress = (qIndex) => `
  <div class="quiz-progress" aria-hidden="true">${questions.map((_, i) =>
    `<i class="${i < qIndex ? 'done' : i === qIndex ? 'now' : ''}"></i>`).join('')}</div>
`

const Question = (qIndex) => {
  const item = questions[qIndex]
  return `
    ${Progress(qIndex)}
    <p class="quiz-q">${item.q}</p>
    <div class="quiz-options">
      ${item.options.map((opt, i) => `<button type="button" data-i="${i}">${opt}</button>`).join('')}
    </div>
    <p class="quiz-feedback"></p>
    <div class="quiz-actions">
      <span class="quiz-score">Question ${qIndex + 1} of ${questions.length}</span>
      <button class="btn btn-shu" type="button" data-next hidden>${qIndex === questions.length - 1 ? 'See my score' : 'Next question'}</button>
    </div>
  `
}

const Result = (score) => {
  const verdict = score === questions.length ? 'A true master appraiser.'
    : score >= 3 ? 'A keen eye. Revisit the works you missed.'
    : 'Read through the masterpieces again, then give it another go.'
  return `
    <div class="quiz-result">
      <h3>You scored ${score} out of ${questions.length}</h3>
      <p class="quiz-feedback">${verdict}</p>
      <button class="btn btn-shu" type="button" data-restart>Try again</button>
    </div>
  `
}

export const initQuiz = () => {
  const card = document.getElementById('quiz-card')
  let qIndex = 0
  let score = 0

  card.addEventListener('click', (e) => {
    const option = e.target.closest('[data-i]')
    if (option && !option.disabled) {
      const item = questions[qIndex]
      const chosen = Number(option.dataset.i)
      const buttons = [...card.querySelectorAll('[data-i]')]
      buttons.forEach(b => { b.disabled = true })
      buttons[item.answer].classList.add('is-right')
      if (chosen === item.answer) score++
      else option.classList.add('is-wrong')
      card.querySelector('.quiz-feedback').textContent = `${chosen === item.answer ? 'Correct.' : 'Not quite.'} ${item.why}`
      const next = card.querySelector('[data-next]')
      next.hidden = false
      next.focus()
      return
    }
    if (e.target.closest('[data-next]')) {
      qIndex++
      card.innerHTML = qIndex < questions.length ? Question(qIndex) : Result(score)
      return
    }
    if (e.target.closest('[data-restart]')) {
      qIndex = 0
      score = 0
      card.innerHTML = Question(qIndex)
    }
  })

  card.innerHTML = Question(qIndex)
}
