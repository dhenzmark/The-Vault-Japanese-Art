// One shared, rAF-throttled scroll/resize loop for every scroll effect on the page.
const callbacks = []
let ticking = false

const run = () => {
  const frame = { vh: window.innerHeight, scrollY: window.scrollY }
  callbacks.forEach(cb => cb(frame))
  ticking = false
}

const request = () => {
  if (!ticking) { ticking = true; requestAnimationFrame(run) }
}

export const onScroll = (cb) => {
  if (callbacks.length === 0) {
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
  }
  callbacks.push(cb)
  cb({ vh: window.innerHeight, scrollY: window.scrollY })
}

export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
