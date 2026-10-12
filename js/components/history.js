import { eras } from '../data/eras.js'
import { Plate } from './plate.js'

const Era = (era) => `
  <article class="era">
    <div class="era-media${era.images.length > 1 ? ' is-pair' : ''}">
      ${era.images.map((image, i) => Plate({ image, pattern: era.pattern, vertical: i === 0 ? era.vertical : '', caption: era.images.length === 1 })).join('')}
      ${era.images.length > 1 ? `<p class="era-captions">${era.images.map(img => img.caption).join('<br />')}</p>` : ''}
    </div>
    <div class="era-body">
      <div class="era-date">${era.date}</div>
      <h3>${era.title}</h3>
      <p>${era.text}</p>
      <ul>${era.tags.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  </article>
`

// Part 1: art history timeline, one illustrated card per era.
// The vermilion ink line is drawn by js/effects/timeline-ink.js.
export const History = () => `
  <section id="history">
    <div class="wrap">
      <div class="section-head"><h2>Historical Development</h2><span class="jp">歴史</span></div>
      <p class="lead">Japanese art grew through long stretches of absorbing ideas from the continent, then turning inward to make them its own. Each era below marks a shift in who made art, for whom, and why.</p>

      <div class="timeline" id="timeline">
        <div class="timeline-ink" aria-hidden="true"></div>
        ${eras.map(Era).join('')}
      </div>
    </div>
  </section>
`
