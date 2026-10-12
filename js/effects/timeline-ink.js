import { onScroll, reduceMotion } from './scroll.js'

// Draws the vermilion line down the timeline as the reader passes each era.
export const initTimelineInk = () => {
  const timeline = document.getElementById('timeline')
  const ink = timeline.querySelector('.timeline-ink')
  const eras = [...timeline.querySelectorAll('.era')]

  onScroll(({ vh }) => {
    const rect = timeline.getBoundingClientRect()
    const eraTops = eras.map(el => el.getBoundingClientRect().top)

    const readLine = vh * 0.6
    const progress = Math.min(1, Math.max(0, (readLine - rect.top) / rect.height))
    ink.style.transform = `scaleY(${reduceMotion.matches ? 1 : progress})`
    eras.forEach((el, i) => el.classList.toggle('is-passed', eraTops[i] + 38 < readLine))
  })
}
