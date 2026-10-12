// Hanko-style seal: vermilion square with the text set vertically, like an artist's stamp on a print.
export const Seal = (text) => `<span class="hanko" aria-hidden="true" lang="ja">${text}</span>`

// A framed picture on a textile-pattern mat, with optional seal and vertical title, plus caption.
//   pattern   seigaiha | shippo | cord   (css/patterns.css)
//   vertical  Japanese text set top-to-bottom along the mat
//   caption   false to leave the caption out (when the parent shows captions together)
export const Plate = ({ image, pattern = 'seigaiha', seal, vertical, fit = 'cover', className = '', caption = true }) => `
  <figure class="plate pattern-${pattern} ${className}">
    <div class="plate-frame">
      <img src="${image.src}" alt="${image.alt}" loading="lazy" decoding="async" class="fit-${fit}" style="${image.aspect ? `aspect-ratio:${image.aspect};` : ''}${image.focus ? `object-position:${image.focus};` : ''}" />
      ${seal ? Seal(seal) : ''}
    </div>
    ${vertical ? `<span class="plate-vertical" aria-hidden="true" lang="ja">${vertical}</span>` : ''}
    ${caption ? `<figcaption>${image.caption}</figcaption>` : ''}
  </figure>
`
