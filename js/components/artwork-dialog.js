import { artworks } from '../data/artworks.js'

// Modal with the full study of one artwork: artist, period, medium, analysis, significance.
export const ArtworkDialog = () => `
  <dialog class="artwork" id="artwork-dialog" aria-labelledby="dialog-title">
    <button class="dialog-close" type="button" aria-label="Close">✕</button>
    <div class="dialog-grid">
      <div class="dialog-media"><img id="dialog-img" alt="" /></div>
      <div class="dialog-body" id="dialog-body"></div>
    </div>
  </dialog>
`

const DialogBody = (a) => `
  <div class="work-date">${a.date}</div>
  <h3 id="dialog-title">${a.title}</h3>
  <div class="jp-title" lang="ja">${a.jp}</div>
  <dl class="work-meta">
    <dt>Artist</dt><dd>${a.artist}</dd>
    <dt>Period</dt><dd>${a.period}</dd>
    <dt>Medium</dt><dd>${a.medium}</dd>
    <dt>Location</dt><dd>${a.location}</dd>
  </dl>
  <h4>Visual analysis</h4><p>${a.analysis}</p>
  <h4>Cultural significance</h4><p>${a.significance}</p>
`

// Opens the dialog for any element with data-open="<artwork id>"
export const initArtworkDialog = () => {
  const dialog = document.getElementById('artwork-dialog')
  const img = document.getElementById('dialog-img')
  const body = document.getElementById('dialog-body')

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open]')
    if (!trigger) return
    const a = artworks.find(x => x.id === trigger.dataset.open)
    if (!a) return
    img.src = a.image
    img.alt = a.title
    body.innerHTML = DialogBody(a)
    dialog.showModal()
  })

  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close())
  // Clicking the dimmed backdrop (the dialog element itself) closes it
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close() })
}
