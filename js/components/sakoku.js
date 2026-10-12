import { images } from '../data/images.js'
import { Plate } from './plate.js'

// Edo spotlight: how two centuries of isolation let ukiyo-e and a distinct visual culture grow.
// Follows Head Historian Boletic's segment of the show script.
export const Sakoku = () => `
  <section id="sakoku" class="sakoku has-ghost" data-nav="history">
    <div class="ghost layer ghost-left" data-speed="0.35" data-speed-mobile="0.2" aria-hidden="true">浮</div>
    <div class="wrap">
      <div class="section-head"><h2>Isolation and the floating world</h2><span class="jp">鎖国・浮世</span></div>

      <div class="sakoku-grid">
        <div>
          <p class="lead">To understand Japanese art, start with the Edo period. From the 1630s until 1853, the Tokugawa shogunate enforced <em>sakoku</em>, a policy of national isolation that lasted more than 200 years.</p>
          <p>Foreigners were barred from entering and Japanese people could not travel abroad. Contact with the outside world shrank to a thin, controlled trickle: Dutch and Chinese merchants at Nagasaki, and envoys from Korea and the Ryūkyū Kingdom. With outside influence held back, a distinctly Japanese visual culture had room to bloom.</p>
        </div>

        <table class="contrast">
          <caption>How the two traditions differed during the Edo period</caption>
          <thead><tr><th scope="col"></th><th scope="col">Western painting</th><th scope="col">Edo Japan</th></tr></thead>
          <tbody>
            <tr><th scope="row">Aim</th><td data-label="West">A realistic illusion of depth, built with linear perspective and light and shadow</td><td data-label="Edo Japan">Flat areas of colour, strong outlines, and decorative pattern</td></tr>
            <tr><th scope="row">Medium</th><td data-label="West">Oil paint on canvas</td><td data-label="Edo Japan">Woodblock prints, ink on paper and silk, gold-leaf screens</td></tr>
            <tr><th scope="row">Viewpoint</th><td data-label="West">One fixed vantage point</td><td data-label="Edo Japan">High, shifting viewpoints and bold cropping</td></tr>
            <tr><th scope="row">Subjects</th><td data-label="West">Religion, history, and portraits of the elite</td><td data-label="Edo Japan">Townspeople, actors, travellers, and the seasons</td></tr>
          </tbody>
        </table>
      </div>

      <div class="ukiyo">
        <h3>Ukiyo-e: pictures of the floating world</h3>
        <p><em>Ukiyo</em> once meant the sorrowful, passing world of Buddhist thought. In Edo's lively city districts it came to mean living for the moment. Woodblock prints celebrated that world, and because a single set of carved blocks could print hundreds of copies, ordinary townspeople could afford them.</p>
        <ul class="ukiyo-subjects">
          <li data-speed="0.06" data-speed-mobile="0">
            ${Plate({ image: images.utamaro, pattern: 'shippo', seal: '歌麿' })}
            <strong>Everyday life</strong><span>Fashionable beauties, street scenes, and city pleasures, as in the prints of Kitagawa Utamaro.</span>
          </li>
          <li data-speed="-0.06" data-speed-mobile="0">
            ${Plate({ image: images.sharaku, pattern: 'shippo', seal: '写楽' })}
            <strong>Theatre</strong><span>Kabuki actors in famous roles, the celebrities of their day, captured by artists such as Tōshūsai Sharaku.</span>
          </li>
          <li data-speed="0.06" data-speed-mobile="0">
            ${Plate({ image: images.kirifuri, pattern: 'seigaiha', seal: '北斎' })}
            <strong>Nature and travel</strong><span>Landscapes, weather, and Mount Fuji, perfected by Hokusai and Hiroshige.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
`
