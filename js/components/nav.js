// Fixed pill navigation. Turns solid once the hero scrolls away (js/effects/nav-state.js).
// Below 1024px the links collapse into a menu panel opened by the toggle button.
export const Nav = () => `
  <nav class="nav" aria-label="Main">
    <a class="brand" href="#top"><span class="seal" aria-hidden="true">美術</span><span class="brand-name">The Vault</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="#history">Historical Development</a></li>
      <li><a href="#characteristics">Key Characteristics</a></li>
      <li><a href="#masterpieces">Representative Masterpieces</a></li>
      <li><a href="#impact">Philosophical Impact</a></li>
    </ul>
  </nav>
`

// Menu toggle for small screens: closes on link tap, outside tap, or Escape.
export const initNav = () => {
  const nav = document.querySelector('.nav')
  const toggle = nav.querySelector('.nav-toggle')

  const setOpen = (open) => {
    nav.classList.toggle('is-open', open)
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  }

  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')))
  nav.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setOpen(false)))
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false) })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus() }
  })
}
