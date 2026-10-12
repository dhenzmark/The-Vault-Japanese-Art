import { onScroll, onLayoutChange, reduceMotion } from './scroll.js'

// Draws the vermilion line down the timeline as the reader passes each era.
// Positions are measured only when the layout changes; each frame works from scrollY.
export const initTimelineInk = () => {
  const timeline = document.getElementById('timeline')
  const ink = timeline.querySelector('.timeline-ink')
  const eras = [...timeline.querySelectorAll('.era')]
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
