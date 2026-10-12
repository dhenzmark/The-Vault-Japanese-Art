// Hanko-style seal: vermilion square with the text set vertically, like an artist's stamp on a print.
// It floats above its picture, moving faster than the page (parallax).
export const Seal = (text) => `<span class="hanko" data-speed="-0.25" data-speed-mobile="-0.15" aria-hidden="true" lang="ja">${text}</span>`

// A framed picture on a textile-pattern mat, with optional seal and vertical title, plus caption.
//   pattern   seigaiha | shippo | cord   (css/patterns.css)
//   vertical  Japanese text set top-to-bottom along the mat
//   caption   false to leave the caption out (when the parent shows captions together)
//   slide     left | right | fade: slides in sideways as it scrolls into view (js/effects/parallax.js)
export const Plate = ({ image, pattern = 'seigaiha', seal, vertical, className = '', caption = true, slide }) => `
  <figure class="plate pattern-${pattern} ${className}"${slide ? ` data-slide="${slide}"` : ''}>
    <div class="plate-frame">
      <div class="plate-window"${image.aspect ? ` style="aspect-ratio:${image.aspect}"` : ''}>
        <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async"${image.focus ? ` style="object-position:${image.focus}"` : ''} />
      </div>
      ${seal ? Seal(seal) : ''}
    </div>
    ${vertical ? `<span class="plate-vertical" data-speed="0.18" data-speed-mobile="0.1" aria-hidden="true" lang="ja">${vertical}</span>` : ''}
    ${caption ? `<figcaption>${image.caption}</figcaption>` : ''}
  </figure>
`
