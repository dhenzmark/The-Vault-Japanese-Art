// Highlights the nav link for the section in view, and turns the nav solid once the hero is gone.
// A section without its own link names the link it belongs to with data-nav (e.g. sakoku → history);
// a section with neither (the quiz) clears the highlight.
export const initNavState = () => {
  const nav = document.querySelector('.nav')
  const links = [...nav.querySelectorAll('.nav-links a')]
  const highlight = (id) => links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`))

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) highlight(entry.target.dataset.nav || entry.target.id)
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section))

  const heroObserver = new IntersectionObserver(([entry]) => {
    const heroGone = entry.intersectionRatio < 0.25
    nav.classList.toggle('is-solid', heroGone)
    if (!heroGone) highlight(null)
  }, { threshold: [0, 0.25, 0.5] })
  heroObserver.observe(document.querySelector('.hero'))
}
