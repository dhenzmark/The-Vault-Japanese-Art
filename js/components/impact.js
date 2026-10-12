import { images } from '../data/images.js'
import { Plate } from './plate.js'

// Philosophical impact: Japonisme, influence on the West, and preservation.
export const Impact = () => `
    <section id="impact" class="impact">
      <div class="pattern-band pattern-shippo" aria-hidden="true"></div>
      <div class="ghost layer" data-speed="0.6" data-speed-mobile="0.4" aria-hidden="true">響</div>
      <div class="wrap">
        <div class="section-head"><h2>Philosophical Impact</h2><span class="jp">影響</span></div>

        <figure class="compare">
          <div class="compare-pair">
            <div class="compare-item" data-speed="0.16" data-speed-mobile="0.07">
              <span class="compare-year">1857</span>
              ${Plate({ image: images.hiroshige, pattern: 'seigaiha', seal: '広重' })}
            </div>
            <div class="compare-item" data-speed="-0.16" data-speed-mobile="-0.07">
              <span class="compare-year">1887</span>
              ${Plate({ image: images.vanGogh, pattern: 'shippo', seal: 'ゴッホ' })}
            </div>
          </div>
          <figcaption class="compare-caption">Thirty years apart: Hiroshige's woodblock print, and Van Gogh's oil copy of it. He kept the steep bridge, the slanting rain, and the flat colour, and added a border of Japanese characters copied from other prints.</figcaption>
        </figure>
        <div class="impact-grid">
          <div class="impact-text">
            <p class="lead">When Japan's ports reopened, its art travelled faster than its diplomats. Flat colour, high viewpoints, cropped compositions, and empty space challenged rules European painters had followed since the Renaissance.</p>
            <p>Monet filled his house at Giverny with Japanese prints and built a Japanese bridge over his lily pond. Degas borrowed the off-centre framing of ukiyo-e; Whistler its tonal calm. The ideas reached further than painting — wabi-sabi and ma still shape modern architecture, product design, and the way we think about simplicity.</p>
            <p>At home, Japan learned to protect what it had made. After a 1949 fire damaged the ancient murals of Hōryū-ji, the country passed its Law for the Protection of Cultural Properties, and later began honouring master craftspeople as Living National Treasures.</p>
            <blockquote>"All my work is based to some extent on Japanese art."<cite>Vincent van Gogh, letter to his brother Theo, 1888</cite></blockquote>
          </div>
          <ol class="chain">
            <li><time>1853</time><div><strong>The Black Ships arrive</strong><span>Commodore Perry forces Japan to open its ports.</span></div></li>
            <li><time>1867</time><div><strong>Paris Exposition Universelle</strong><span>Japan exhibits officially in Europe for the first time.</span></div></li>
            <li><time>1887</time><div><strong>Van Gogh copies Hiroshige</strong><span>He paints his own versions of two Hiroshige prints.</span></div></li>
            <li><time>1950</time><div><strong>Cultural Properties law</strong><span>National system for protecting heritage is created.</span></div></li>
            <li><time>1955</time><div><strong>Living National Treasures</strong><span>First master artisans designated to preserve their crafts.</span></div></li>
          </ol>
        </div>
      </div>
    </section>
`
