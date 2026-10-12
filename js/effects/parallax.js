import { onScroll, reduceMotion } from './scroll.js'

const smallScreen = window.matchMedia('(max-width: 640px)')

// [data-speed]         moves up/down relative to scroll (hero layers), to its section's top (.ghost kanji),
//                      or to its own distance from the viewport centre (everything else).
//                      + drifts slower than the page, - faster.
// [data-speed-mobile]  optional gentler speed on phones, where stacked blocks sit closer together
// [data-slide]         left | right | fade: slides in sideways and fades in as it scrolls into view,
//                      tied to the scroll position (reverses when scrolling back up)
// --scroll             page offset exposed to CSS, used to slide the pattern bands sideways
export const initParallax = () => {
  const movers = [...document.querySelectorAll('[data-speed], [data-slide]')]
  const root = document.documentElement

  const ease = (t) => 1 - Math.pow(1 - t, 3)

  onScroll(({ vh, scrollY }) => {
    if (reduceMotion.matches) return
    root.style.setProperty('--scroll', String(scrollY))
    const mobile = smallScreen.matches
    const slideDistance = mobile ? 70 : 140

    // Read phase: all layout reads first, so the writes below don't force extra reflows
    const parentRects = movers.map(el => el.parentElement.getBoundingClientRect())
    const ownRects = movers.map(el => el.dataset.slide ? el.getBoundingClientRect() : null)

    // Write phase
    movers.forEach((el, i) => {
      const r = parentRects[i]
      if (r.bottom < -200 || r.top > vh + 200) return
      let x = 0, y = 0, scale = 1, opacity = null

      if (el.dataset.speed !== undefined) {
        const speed = parseFloat(mobile && el.dataset.speedMobile !== undefined ? el.dataset.speedMobile : el.dataset.speed)
        if (el.parentElement.classList.contains('hero')) {
          const progress = Math.min(1, scrollY / r.height)
          scale = 1 + (parseFloat(el.dataset.zoom) || 0) * progress
          y = scrollY * speed
          if ('fade' in el.dataset) opacity = Math.max(0, 1 - progress * 1.6)
        } else if (el.classList.contains('ghost')) {
          // Background kanji anchor to their section's top and trail the scroll, so they stay in view
          y = Math.max(-vh, Math.min(r.height - vh * 0.6, -r.top)) * speed
        } else {
          y = -(r.top + r.height / 2 - vh / 2) * speed
        }
      }

      if (el.dataset.slide) {
        // 0 as the element's top enters at the bottom of the screen, 1 once it is 40% of the way up
        const t = ease(Math.min(1, Math.max(0, (vh - ownRects[i].top) / (vh * 0.4))))
        const dir = el.dataset.slide === 'left' ? -1 : el.dataset.slide === 'right' ? 1 : 0
        x = (1 - t) * slideDistance * dir
        opacity = t
      }

      el.style.transform = (x || y || scale !== 1)
        ? `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)${scale !== 1 ? ` scale(${scale})` : ''}`
        : ''
      if (opacity !== null) el.style.opacity = opacity.toFixed(3)
    })
  })
}
