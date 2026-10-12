import { onScroll, reduceMotion } from './scroll.js'

const smallScreen = window.matchMedia('(max-width: 640px)')

// [data-speed]         moves relative to scroll (hero layers), to its section's top (.ghost kanji),
//                      or to its own distance from the viewport centre (everything else).
//                      + drifts slower than the page, - faster.
// [data-speed-mobile]  optional gentler speed on phones, where stacked blocks sit closer together
// [data-parallax]      an oversized image drifting inside its clipped frame, never past the frame's spare height
// [data-marquee]       a title row that slides sideways as its strip passes through the screen
// --scroll             page offset exposed to CSS, used to slide the pattern bands sideways
export const initParallax = () => {
  const layers = [...document.querySelectorAll('[data-speed]')]
  const images = [...document.querySelectorAll('[data-parallax]')]
  const rows = [...document.querySelectorAll('[data-marquee]')]
  const root = document.documentElement

  onScroll(({ vh, scrollY }) => {
    if (reduceMotion.matches) return
    root.style.setProperty('--scroll', String(scrollY))
    const mobile = smallScreen.matches

    // Read phase: all layout reads first, so the writes below don't force extra reflows
    const layerRects = layers.map(el => el.parentElement.getBoundingClientRect())
    const frameRects = images.map(el => el.parentElement.getBoundingClientRect())
    const imageHeights = images.map(el => el.offsetHeight)
    const rowRects = rows.map(el => el.parentElement.getBoundingClientRect())
    const rowWidths = rows.map(el => el.offsetWidth)

    // Write phase
    layers.forEach((el, i) => {
      const r = layerRects[i]
      if (r.bottom < -200 || r.top > vh + 200) return
      const speed = parseFloat(mobile && el.dataset.speedMobile !== undefined ? el.dataset.speedMobile : el.dataset.speed)

      if (el.parentElement.classList.contains('hero')) {
        const progress = Math.min(1, scrollY / r.height)
        const zoom = 1 + (parseFloat(el.dataset.zoom) || 0) * progress
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0) scale(${zoom})`
        if ('fade' in el.dataset) el.style.opacity = String(Math.max(0, 1 - progress * 1.6))
      } else if (el.classList.contains('ghost')) {
        // Background kanji anchor to their section's top and trail the scroll, so they stay in view
        // through tall sections instead of being pushed out of them
        const lag = Math.max(-vh, Math.min(r.height - vh * 0.6, -r.top)) * speed
        el.style.transform = `translate3d(0, ${lag.toFixed(1)}px, 0)`
      } else {
        const fromCenter = r.top + r.height / 2 - vh / 2
        el.style.transform = speed ? `translate3d(0, ${(-fromCenter * speed).toFixed(1)}px, 0)` : ''
      }
    })

    // Title strips: start a third of the way into the row and slide as the strip crosses the screen
    rows.forEach((el, i) => {
      const r = rowRects[i]
      if (r.bottom < 0 || r.top > vh) return
      const x = -rowWidths[i] * 0.3 + (vh - r.top) * parseFloat(el.dataset.marquee)
      el.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0)`
    })

    images.forEach((el, i) => {
      const r = frameRects[i]
      if (r.bottom < 0 || r.top > vh) return
      const spare = (imageHeights[i] - r.height) / 2
      const shift = (r.top + r.height / 2 - vh / 2) * -parseFloat(el.dataset.parallax)
      el.style.transform = `translate3d(0, ${Math.max(-spare, Math.min(spare, shift)).toFixed(1)}px, 0)`
    })
  })
}
