import { artworks } from '../data/artworks.js'

// One gallery row per artwork. The picture itself opens the full study (js/components/artwork-dialog.js).
const Work = (a, i) => `
  <article class="work">
    <button class="work-media" data-slide="${i % 2 ? 'right' : 'left'}" type="button" data-open="${a.id}" aria-label="Look closer at ${a.title}"${a.frame ? ` style="aspect-ratio:${a.frame}"` : ''}>
      <img src="${a.image}" alt="${a.title}" loading="lazy" decoding="async"${a.focus ? ` style="object-position:${a.focus}"` : ''} />
      <span class="work-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5M11 8.5v5M8.5 11h5"/></svg>
        Look closer
      </span>
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
    </div>
  </article>
`

// Part 3: the five representative artworks, oldest first.
export const Masterpieces = () => `
  <section id="masterpieces" class="has-ghost">
    <div class="ghost layer ghost-right" data-speed="0.55" data-speed-mobile="0.35" aria-hidden="true">名</div>
    <div class="wrap">
      <div class="section-head" data-slide="left"><h2>Representative Masterpieces</h2><span class="jp">名作</span></div>
      <p class="lead">Five works, oldest first, each standing for a different era and idea. Tap or click any picture to look closer.</p>
      <div class="works" id="works">
        ${artworks.map(Work).join('')}
      </div>
    </div>
  </section>
`
