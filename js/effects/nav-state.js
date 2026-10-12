// Highlights the nav link for the section in view, and turns the nav solid once the hero is gone.
export const initNavState = () => {
  const nav = document.querySelector('.nav')
  const links = [...nav.querySelectorAll('.nav-links a')]

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`))
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  links.forEach(a => sectionObserver.observe(document.querySelector(a.getAttribute('href'))))

  const heroObserver = new IntersectionObserver(([entry]) => {
    const heroGone = entry.intersectionRatio < 0.25
    nav.classList.toggle('is-solid', heroGone)
    if (!heroGone) links.forEach(a => a.classList.remove('is-active'))
  }, { threshold: [0, 0.25, 0.5] })
  heroObserver.observe(document.querySelector('.hero'))
}
