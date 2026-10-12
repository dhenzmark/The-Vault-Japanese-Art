import { Nav } from './components/nav.js'
import { Hero } from './components/hero.js'
import { History } from './components/history.js'
import { Sakoku } from './components/sakoku.js'
import { ParallaxBand } from './components/parallax-band.js'
import { Characteristics } from './components/characteristics.js'
import { Masterpieces } from './components/masterpieces.js'
import { Impact } from './components/impact.js'
import { Quiz, initQuiz } from './components/quiz.js'
import { Footer } from './components/footer.js'
import { ArtworkDialog, initArtworkDialog } from './components/artwork-dialog.js'
import { bands } from './data/bands.js'
import { initParallax } from './effects/parallax.js'
import { initTimelineInk } from './effects/timeline-ink.js'
import { initNavState } from './effects/nav-state.js'

// ─── Page assembly ───────────────────────────────────────────────────────────
document.getElementById('app').innerHTML = `
  ${Nav()}
  ${Hero()}
  <main>
    ${History()}
    ${Sakoku()}
    ${ParallaxBand(bands.wave)}
    ${Characteristics()}
    ${ParallaxBand(bands.kintsugi)}
    ${Masterpieces()}
    ${Impact()}
    ${Quiz()}
  </main>
  ${Footer()}
  ${ArtworkDialog()}
`

// ─── Behaviour ───────────────────────────────────────────────────────────────
initArtworkDialog()
initQuiz()
initParallax()
initTimelineInk()
initNavState()

// The page is built by script, so jump to a #section link manually once it exists
if (location.hash) document.querySelector(location.hash)?.scrollIntoView()
