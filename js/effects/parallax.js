import { onScroll, onLayoutChange, reduceMotion } from './scroll.js'

const smallScreen = window.matchMedia('(max-width: 640px)')

// [data-speed]         moves up/down relative to scroll (hero layers), to its section's top (.ghost kanji),
//                      or to its own distance from the viewport centre (everything else).
//                      + drifts slower than the page, - faster.
// [data-speed-mobile]  optional gentler speed on phones, where stacked blocks sit closer together
// [data-slide]         left | right | fade: slides in sideways and fades in as it scrolls into view,
//                      tied to the scroll position (reverses when scrolling back up)
// .pattern-band        background slides sideways with scrolling
//
// Positions are measured only when the layout changes (with every effect cleared), then each
// frame is computed from scrollY alone and only changed values are written, so scrolling stays
// smooth even in slower in-app browsers.
export const initParallax = () => {
  const movers = [...document.querySelectorAll('[data-speed], [data-slide]')]
  const bands = [...document.querySelectorAll('.pattern-band')]
  const ease = (t) => 1 - Math.pow(1 - t, 3)
  let geometry = []
  const written = new Map()

  const write = (el, transform, opacity) => {
    const prev = written.get(el)
    if (prev && prev.transform === transform && prev.opacity === opacity) return
    el.style.transform = transform
    if (opacity !== null) el.style.opacity = opacity
    written.set(el, { transform, opacity })
  }

  onLayoutChange(() => {
    // Measure the untransformed layout: clear effects, read every position once, effects come back next frame
    movers.forEach(el => { el.style.transform = ''; el.style.opacity = '' })
    written.clear()
    const sy = window.scrollY
    geometry = movers.map(el => {
      const p = el.parentElement.getBoundingClientRect()
      return {
        top: p.top + sy, height: p.height,
        ownTop: el.dataset.slide ? el.getBoundingClientRect().top + sy : 0,
        hero: el.parentElement.classList.contains('hero'),
        ghost: el.classList.contains('ghost'),
      }
    })
  })

  onScroll(({ vh, scrollY }) => {
    if (reduceMotion.matches) return
    const mobile = smallScreen.matches
    const slideDistance = mobile ? 70 : 140
    const bandX = `${(-scrollY * 0.35).toFixed(0)}px 0`
    bands.forEach(b => { b.style.backgroundPosition = bandX })

    movers.forEach((el, i) => {
      const g = geometry[i]
      if (!g) return
      const top = g.top - scrollY
      if (top + g.height < -200 || top > vh + 200) return
      let x = 0, y = 0, scale = 1, opacity = null

      if (el.dataset.speed !== undefined) {
        const speed = parseFloat(mobile && el.dataset.speedMobile !== undefined ? el.dataset.speedMobile : el.dataset.speed)
        if (g.hero) {
          const progress = Math.min(1, scrollY / g.height)
          scale = 1 + (parseFloat(el.dataset.zoom) || 0) * progress
          y = scrollY * speed
          if ('fade' in el.dataset) opacity = Math.max(0, 1 - progress * 1.6)
        } else if (g.ghost) {
          // Background kanji anchor to their section's top and trail the scroll, so they stay in view
          y = Math.max(-vh, Math.min(g.height - vh * 0.6, -top)) * speed
        } else {
          y = -(top + g.height / 2 - vh / 2) * speed
        }
      }

      if (el.dataset.slide) {
        // 0 as the element's top enters at the bottom of the screen, 1 once it is 40% of the way up
        const t = ease(Math.min(1, Math.max(0, (vh - (g.ownTop - scrollY)) / (vh * 0.4))))
        const dir = el.dataset.slide === 'left' ? -1 : el.dataset.slide === 'right' ? 1 : 0
        x = (1 - t) * slideDistance * dir
        opacity = t
      }

      const transform = (x || y || scale !== 1)
        ? `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)${scale !== 1 ? ` scale(${scale.toFixed(4)})` : ''}`
        : ''
      write(el, transform, opacity === null ? null : opacity.toFixed(2))
    })
  })
}
