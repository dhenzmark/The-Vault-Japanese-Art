import { artworks } from '../data/artworks.js'

// One gallery row per artwork. Clicking the image or the button opens js/components/artwork-dialog.js.
const Work = (a, i) => `
  <article class="work">
    <button class="work-media" data-slide="${i % 2 ? 'right' : 'left'}" type="button" data-open="${a.id}" aria-label="Open analysis of ${a.title}"${a.frame ? ` style="aspect-ratio:${a.frame}"` : ''}>
      <img src="${a.image}" alt="${a.title}" loading="lazy" decoding="async"${a.focus ? ` style="object-position:${a.focus}"` : ''} />
    </button>
    <div class="work-text" data-speed="0.06" data-speed-mobile="0" data-slide="${i % 2 ? 'left' : 'right'}">
      <div class="work-date">${a.date}</div>
      <h3>${a.title}</h3>
      <div class="jp-title" lang="ja">${a.jp}</div>
      <dl class="work-meta">
        <dt>Artist</dt><dd>${a.artist}</dd>
        <dt>Period</dt><dd>${a.period}</dd>
        <dt>Medium</dt><dd>${a.medium}</dd>
      </dl>
      <p>${a.summary}</p>
      <button class="btn btn-line" type="button" data-open="${a.id}">Read the analysis</button>
    </div>
  </article>
`

// Part 3: the five representative artworks, oldest first.
export const Masterpieces = () => `
  <section id="masterpieces" class="has-ghost">
    <div class="ghost layer ghost-right" data-speed="0.55" data-speed-mobile="0.35" aria-hidden="true">名</div>
    <div class="wrap">
      <div class="section-head" data-slide="left"><h2>Representative Masterpieces</h2><span class="jp">名作</span></div>
      <p class="lead">Five works, oldest first, each standing for a different era and idea. Select an image or "Read the analysis" for the full study.</p>
      <div class="works" id="works">
        ${artworks.map(Work).join('')}
      </div>
    </div>
  </section>
`
