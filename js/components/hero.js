// Layered parallax hero. Each layer's data-* attributes tell js/effects/parallax.js how it moves:
//   data-speed  how far it drifts per pixel scrolled (+ slower than the page, - faster)
//   data-zoom   extra scale added by the time the hero has scrolled away
//   data-fade   fades out as the hero scrolls away
export const Hero = () => `
  <header class="hero" id="top">
    <div class="layer hero-bg" data-speed="0.55" data-zoom="0.18">
      <img src="images/artwork3.jpg" alt="" fetchpriority="high" />
    </div>
    <div class="hero-shade"></div>
    <div class="layer hero-kanji" data-speed="-0.45" aria-hidden="true">美</div>

    <div class="hero-frame layer" data-speed="0.3" data-fade>
      <div class="hero-copy">
        <p class="kicker">The Vault:</p>
        <h1>Masterpieces of Japanese Art</h1>
        <p class="hero-sub">History, Philosophy, and Iconic Works</p>
        <a class="btn btn-shu" href="#masterpieces">Explore the masterpieces</a>
      </div>
      <div class="hero-stats">
        <div class="stat"><strong>16,000</strong><span>years of making</span></div>
        <div class="stat"><strong>5</strong><span>eras</span></div>
        <div class="stat"><strong>5</strong><span>masterpieces</span></div>
        <a class="scroll-hint" href="#history">Scroll to begin</a>
      </div>
    </div>

    <!-- Kumo (stylised clouds) rise faster than the page, sliding over the painting -->
    <svg class="layer hero-clouds" data-speed="-0.25" viewBox="0 0 1440 520" preserveAspectRatio="none" aria-hidden="true">
      <path fill="currentColor" opacity=".55" d="M0 120 C 90 70, 180 70, 240 110 C 300 60, 420 60, 470 115 C 560 80, 650 95, 690 130 C 760 90, 880 85, 930 125 C 1010 70, 1130 75, 1180 120 C 1260 85, 1370 90, 1440 115 L1440 520 L0 520 Z" />
      <path fill="currentColor" d="M0 165 C 110 130, 200 135, 260 160 C 340 120, 470 125, 520 165 C 610 140, 720 145, 770 175 C 860 135, 990 140, 1040 170 C 1130 130, 1250 140, 1300 168 C 1360 150, 1410 152, 1440 160 L1440 520 L0 520 Z" />
    </svg>
  </header>
`
