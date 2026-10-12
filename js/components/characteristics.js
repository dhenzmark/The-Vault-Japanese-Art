import { images } from '../data/images.js'
import { Plate } from './plate.js'

// Part 2: the three core characteristics, in the order Head Historian Amaro presents them:
// nature and spirituality, the philosophy of wabi-sabi, and functional mastery and mediums.
export const Characteristics = () => `
  <section id="characteristics" class="char">
    <div class="pattern-band pattern-seigaiha" aria-hidden="true"></div>
    <div class="ghost layer" data-speed="0.6" data-speed-mobile="0.4" aria-hidden="true">間</div>
    <div class="wrap">
      <div class="section-head" data-slide="left"><h2>Key Characteristics</h2><span class="jp">特徴</span></div>
      <p class="lead char-intro" data-slide="left">Japanese art isn't only about making things look beautiful. It grows out of thousands of years of history and spiritual philosophy, and three characteristics run through almost every masterpiece in the vault. Look for them as you explore.</p>

      <ol class="cores">
        <li class="core">
          <header class="core-head"><span class="core-num">1</span><h3>Nature and spirituality</h3></header>
          ${Plate({ image: images.kinkakuji, pattern: 'seigaiha', seal: '自然', className: 'core-plate', slide: 'left' })}
          <div class="themes">
            <p class="lead">In Japan, nature is never just a background; it is sacred. Shintoism sees divine spirits, <em>kami</em>, in mountains, trees, and water, and Zen Buddhism teaches quiet attention to the natural world. Japanese art becomes a reflection on both the power and the calm harmony of nature.</p>
            <ul class="theme-list" data-slide="right">
              <li><strong>Shinto animism</strong><span>Kami dwell in mountains, trees, rocks, and water, so nature itself is worthy of reverence.</span></li>
              <li><strong>Zen Buddhism</strong><span>Meditation and simplicity. <em>Mujō</em>, impermanence, means art often captures a passing moment rather than a fixed, ideal form.</span></li>
              <li><strong>Power and harmony</strong><span>Hokusai's towering wave and the still reflection of the Golden Pavilion show nature's two faces.</span></li>
            </ul>
          </div>
        </li>

        <li class="core">
          <header class="core-head"><span class="core-num">2</span><h3>The philosophy of wabi-sabi</h3></header>
          ${Plate({ image: images.kintsugi, pattern: 'shippo', seal: '侘寂', className: 'core-plate', slide: 'right' })}
          <p class="lead">Much of Western art, from Greek sculpture to Renaissance painting, reached for flawless symmetry and perfection. Japanese art often looks the other way. Wabi-sabi finds deep beauty in imperfection, asymmetry, and impermanence: weathered surfaces, cracked ceramics, and fleeting moments.</p>
          <div class="principles">
            <div class="principle" data-slide="left">
              <div class="principle-kanji" data-speed="-0.2" data-speed-mobile="-0.1" lang="ja">侘</div>
              <div><h4>Wabi — humble simplicity</h4><p>The quiet beauty of plain, rustic things: a rough tea bowl, an unpainted wooden beam, a bare room.</p></div>
            </div>
            <div class="principle" data-slide="right">
              <div class="principle-kanji" data-speed="-0.2" data-speed-mobile="-0.1" lang="ja">寂</div>
              <div><h4>Sabi — the beauty of age</h4><p>The patina that time leaves behind. Wear, rust, and repairs show an object's history, and that history is valued, as in a kintsugi bowl mended with gold.</p></div>
            </div>
            <div class="principle is-ma" data-slide="left">
              <div class="principle-kanji" data-speed="-0.2" data-speed-mobile="-0.1" lang="ja">間</div>
              <div><h4>A related idea: ma, negative space</h4><p>Emptiness is not absence. The pause between forms gives them energy and focus, as in the bare gold between Sōtatsu's wind and thunder gods.</p></div>
            </div>
          </div>
        </li>

        <li class="core">
          <header class="core-head"><span class="core-num">3</span><h3>Functional mastery and mediums</h3></header>
          ${Plate({ image: images.fujinRaijin, pattern: 'seigaiha', seal: '用美', className: 'core-plate', slide: 'left' })}
          <p class="lead">Japanese artists didn't only paint canvases to hang in galleries. They turned everyday life into high art, mastering woodblock printing, gilding temples in gold leaf, and painting folding room screens (<em>byōbu</em>) that transformed ordinary spaces. Later thinkers called this <em>yō no bi</em>, the beauty of useful things.</p>
          <div class="materials-grid">
            <div class="material" data-slide="left"><strong>Woodblock printing (nishiki-e)</strong><p>"Brocade pictures": a separate carved block for each colour, printed in careful registration to build full-colour images.</p></div>
            <div class="material" data-slide="right"><strong>Gold leaf</strong><p>Squares of hammered gold laid over temples and folding screens, glowing in dim, candlelit rooms.</p></div>
            <div class="material" data-slide="left"><strong>Folding screens (byōbu)</strong><p>Painted panels that divided rooms, blocked draughts, and turned a plain space into a landscape or a storm.</p></div>
            <div class="material" data-slide="right"><strong>Urushi lacquer</strong><p>Sap of the lacquer tree, built up in many thin layers. It waterproofs, preserves, and, in kintsugi, binds gold into a repair.</p></div>
          </div>
        </li>
      </ol>
    </div>
  </section>
`
