import { GAME_URL } from '../config.js'

export const Footer = () => `
  <footer>
    <div class="wrap footer-row">
      <a class="brand" href="#top"><span class="seal" aria-hidden="true">美術</span>The Vault</a>
      <a class="btn" href="${GAME_URL}">Play Who Wants to Be a Nihon-Go!</a>
    </div>
  </footer>
`
