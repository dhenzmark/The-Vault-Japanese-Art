// Scroll-driven title strip: two rows of giant text that slide sideways in opposite
// directions as you scroll (data-marquee, js/effects/parallax.js). Purely decorative.
const Row = (jp, en, outline) => {
  const unit = `<span class="mq-jp" lang="ja">${jp}</span><span class="mq-en">${en}</span><span class="mq-dot"></span>`
  return `<div class="marquee-row${outline ? ' is-outline' : ''}" data-marquee="${outline ? -0.6 : 0.6}">${unit.repeat(8)}</div>`
}

export const Marquee = ({ jp, en }) => `
  <div class="marquee" aria-hidden="true">
    ${Row(jp, en, false)}
    ${Row(jp, en, true)}
  </div>
`
