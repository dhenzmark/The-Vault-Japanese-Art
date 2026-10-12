import { onScroll, onLayoutChange, reduceMotion } from './scroll.js'
import { nativeScrollEffects } from './parallax.js'

// Draws the vermilion line down the timeline and marks each era's dot as the reader passes it
// (the reading line sits 60% down the screen).
export const initTimelineInk = () => {
  const timeline = document.getElementById('timeline')
  const ink = timeline.querySelector('.timeline-ink')
  const eras = [...timeline.querySelectorAll('.era')]

  if (nativeScrollEffects) {
    // The ink is drawn by CSS (css/scroll-effects.css); the dots only need to know when an era
    // crosses the reading line, which an observer reports without any scroll handler
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-passed', entry.boundingClientRect.top + 38 < innerHeight * 0.6)
      })
    }, { rootMargin: '0px 0px -40% 0px', threshold: [0, 1] })
    eras.forEach(el => observer.observe(el))
    return
  }

  // Fallback: positions measured only when the layout changes; each frame works from scrollY
  let top = 0, height = 1, eraTops = []
  let lastScale = '', lastPassed = []

  onLayoutChange(() => {
    const sy = window.scrollY
    const r = timeline.getBoundingClientRect()
    top = r.top + sy
    height = r.height || 1
    eraTops = eras.map(el => el.getBoundingClientRect().top + sy)
  })

  onScroll(({ vh, scrollY }) => {
    const readLine = scrollY + vh * 0.6
    const progress = Math.min(1, Math.max(0, (readLine - top) / height))
    const scale = `scaleY(${reduceMotion.matches ? 1 : progress.toFixed(3)})`
    if (scale !== lastScale) { ink.style.transform = scale; lastScale = scale }
    eras.forEach((el, i) => {
      const passed = eraTops[i] + 38 < readLine
      if (passed !== lastPassed[i]) { el.classList.toggle('is-passed', passed); lastPassed[i] = passed }
    })
  })
}
