// One shared, rAF-throttled scroll/resize loop for every scroll effect on the page.
// Effects measure the layout only when it changes (onLayoutChange) and work each frame from
// the scroll position alone, so scrolling never forces the browser to recalculate layout.
const callbacks = []
const layoutCallbacks = []
let ticking = false
let layoutDirty = true

const run = () => {
  if (layoutDirty) {
    layoutDirty = false
    layoutCallbacks.forEach(cb => cb())
  }
  const frame = { vh: window.innerHeight, scrollY: window.scrollY }
  callbacks.forEach(cb => cb(frame))
  ticking = false
}

export const requestFrame = () => {
  if (!ticking) { ticking = true; requestAnimationFrame(run) }
}

const invalidateLayout = () => { layoutDirty = true; requestFrame() }

// Page size changes (resize, fonts arriving, images loading) mean positions must be re-measured
new ResizeObserver(invalidateLayout).observe(document.body)
window.addEventListener('load', invalidateLayout)
document.fonts?.ready.then(invalidateLayout)

export const onScroll = (cb) => {
  if (callbacks.length === 0) {
    window.addEventListener('scroll', requestFrame, { passive: true })
    window.addEventListener('resize', invalidateLayout)
  }
  callbacks.push(cb)
  requestFrame()
}

// cb runs before the next frame whenever the layout may have changed; read positions there
export const onLayoutChange = (cb) => {
  layoutCallbacks.push(cb)
  invalidateLayout()
}

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
