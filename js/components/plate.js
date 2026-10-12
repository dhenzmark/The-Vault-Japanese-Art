// Hanko-style seal: vermilion square with the text set vertically, like an artist's stamp on a print.
export const Seal = (text) => `<span class="hanko" aria-hidden="true" lang="ja">${text}</span>`

// A framed picture on a textile-pattern mat, with optional seal and vertical title, plus caption.
//   pattern   seigaiha | shippo | cord   (css/patterns.css)
//   vertical  Japanese text set top-to-bottom along the mat
//   caption   false to leave the caption out (when the parent shows captions together)
//   slide     left | right | fade: slides in sideways as it scrolls into view (js/effects/parallax.js)
//   speed     optional up/down drift of the whole framed card; the picture never moves inside its frame
export const Plate = ({ image, pattern = 'seigaiha', seal, vertical, className = '', caption = true, slide, speed }) => `
  <figure class="plate pattern-${pattern} ${className}"${slide ? ` data-slide="${slide}"` : ''}${speed ? ` data-speed="${speed}" data-speed-mobile="0"` : ''}>
    <div class="plate-frame">
      <div class="plate-window"${image.aspect ? ` style="aspect-ratio:${image.aspect}"` : ''}>
        <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async"${image.focus ? ` style="object-position:${image.focus}"` : ''} />
      </div>
      ${seal ? Seal(seal) : ''}
    </div>
    ${vertical ? `<span class="plate-vertical" aria-hidden="true" lang="ja">${vertical}</span>` : ''}
    ${caption ? `<figcaption>${image.caption}</figcaption>` : ''}
  </figure>
`
