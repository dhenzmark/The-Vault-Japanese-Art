// Full-width image strip between sections. The photo scrolls at a different speed from the page
// (data-parallax) and the brush kanji moves against it (data-speed), so the strip has real depth.
// Pass quote: true only for a real, attributed quotation; otherwise the text is a plain caption.
export const ParallaxBand = ({ image, kanji, text, caption, quote = false, align = 'left' }) => `
  <aside class="band band-${align}" aria-label="${caption}">
    <div class="band-media"><img src="${image}" alt="" loading="lazy" decoding="async" data-parallax="0.45" /></div>
    <div class="band-shade"></div>
    <div class="band-kanji layer" data-speed="-0.6" data-speed-mobile="-0.4" aria-hidden="true" lang="ja">${kanji}</div>
    <figure class="band-copy wrap" data-speed="0.18" data-speed-mobile="0.1">
      ${quote ? `<blockquote>${text}</blockquote>` : `<p class="band-text">${text}</p>`}
      <figcaption>${caption}</figcaption>
    </figure>
  </aside>
`
