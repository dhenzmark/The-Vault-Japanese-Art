import { onScroll, reduceMotion } from './scroll.js'

// Phones keep the hero and band parallax but skip the gallery-image drift,
// which costs frames on touch scrolling.
const smallScreen = window.matchMedia('(max-width: 640px)')

// [data-speed] layers   move relative to scroll (hero) or to their section's position (elsewhere)
// [data-parallax] images move inside their clipped frame, never further than the frame's spare height
export const initParallax = () => {
  const layers = [...document.querySelectorAll('[data-speed]')]
  const images = [...document.querySelectorAll('[data-parallax]')]

  onScroll(({ vh, scrollY }) => {
    if (reduceMotion.matches) return

    // Read phase: all layout reads first, so the writes below don't force extra reflows
    const layerRects = layers.map(el => el.parentElement.getBoundingClientRect())
    const frameRects = images.map(el => el.parentElement.getBoundingClientRect())
    const imageHeights = images.map(el => el.offsetHeight)

    // Write phase
    layers.forEach((el, i) => {
      const r = layerRects[i]
      if (r.bottom < 0 || r.top > vh) return
      const speed = parseFloat(el.dataset.speed)

      if (el.parentElement.classList.contains('hero')) {
        const progress = Math.min(1, scrollY / r.height)
        const zoom = 1 + (parseFloat(el.dataset.zoom) || 0) * progress
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0) scale(${zoom})`
        if ('fade' in el.dataset) el.style.opacity = String(Math.max(0, 1 - progress * 1.6))
      } else {
        const fromCenter = r.top + r.height / 2 - vh / 2
        el.style.transform = `translate3d(0, ${-fromCenter * speed}px, 0)`
      }
    })

    images.forEach((el, i) => {
      if (smallScreen.matches && el.closest('.work-media')) { el.style.transform = ''; return }
      const r = frameRects[i]
      if (r.bottom < 0 || r.top > vh) return
      const spare = (imageHeights[i] - r.height) / 2
      const shift = (r.top + r.height / 2 - vh / 2) * -parseFloat(el.dataset.parallax)
      el.style.transform = `translate3d(0, ${Math.max(-spare, Math.min(spare, shift))}px, 0)`
    })
  })
}
