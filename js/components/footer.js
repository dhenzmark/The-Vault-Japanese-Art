import { GAME_URL } from '../config.js'
import { images, commonsUrl } from '../data/images.js'

const credited = Object.values(images).filter(img => img.commons)

export const Footer = () => `
  <footer>
    <div class="wrap footer-row">
      <a class="brand" href="#top"><span class="seal" aria-hidden="true">美術</span>The Vault</a>
      <a class="btn" href="${GAME_URL}">Play Who Wants to Be a Nihon-Go!</a>
    </div>
    <details class="wrap credits">
      <summary>Image credits</summary>
      <ul>
        ${credited.map(img => `<li>${img.caption} ${img.license}, via <a href="${commonsUrl(img.commons)}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.</li>`).join('')}
      </ul>
    </details>
  </footer>
`
