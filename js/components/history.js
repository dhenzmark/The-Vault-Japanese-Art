// Part 1: art history timeline. The vermilion ink line is drawn by js/effects/timeline-ink.js.
export const History = () => `
    <section id="history">
      <div class="wrap">
        <div class="section-head"><h2>Historical Development</h2><span class="jp">歴史</span></div>
        <p class="lead">Japanese art grew through long stretches of absorbing ideas from the continent, then turning inward to make them its own. Each era below marks a shift in who made art, for whom, and why.</p>

        <div class="timeline" id="timeline">
          <div class="timeline-ink" aria-hidden="true"></div>

          <article class="era">
            <div><div class="era-date">c. 14,000 – 300 BCE</div><div class="era-kanji" lang="ja">縄文</div></div>
            <div>
              <h3>Jōmon Period</h3>
              <p>Hunter-gatherer communities produced some of the oldest pottery in the world. Vessels were pressed with twisted cord (<em>jōmon</em> means "cord-marked"), and clay figurines called <em>dogū</em> served ritual purposes — likely protection, fertility, and healing.</p>
              <ul><li>Ritual earthenware</li><li>Dogū effigies</li><li>Animist belief</li></ul>
            </div>
          </article>

          <article class="era">
            <div><div class="era-date">538 – 794 CE</div><div class="era-kanji" lang="ja">飛鳥・奈良</div></div>
            <div>
              <h3>Asuka &amp; Nara Periods</h3>
              <p>Buddhism arrived from the Korean kingdom of Baekje, bringing sutras, sculpture, and Chinese building methods. The court sponsored monumental temples such as Hōryū-ji and Tōdai-ji, whose Great Buddha was cast in bronze in 752.</p>
              <ul><li>Arrival of Buddhism</li><li>Tang Chinese influence</li><li>Temple building</li></ul>
            </div>
          </article>

          <article class="era">
            <div><div class="era-date">794 – 1573 CE</div><div class="era-kanji" lang="ja">平安・室町</div></div>
            <div>
              <h3>Heian &amp; Muromachi Periods</h3>
              <p>The Heian court refined a distinctly Japanese aesthetic in palace architecture (<em>shinden-zukuri</em>), poetry, and narrative scrolls. Centuries later, Zen Buddhism shaped Muromachi culture: monochrome ink painting (<em>sumi-e</em>), dry rock gardens, and the first formal tea gatherings.</p>
              <ul><li>Shinden-zukuri</li><li>Zen Buddhism</li><li>Sumi-e ink painting</li><li>Tea ceremony</li></ul>
            </div>
          </article>

          <article class="era">
            <div><div class="era-date">1603 – 1867 CE</div><div class="era-kanji" lang="ja">江戸</div></div>
            <div>
              <h3>Edo Period</h3>
              <p>Under the Tokugawa shogunate, the policy of <em>sakoku</em> sharply limited foreign contact. Peace and a wealthy merchant class fuelled urban pleasures and the art that celebrated them: <em>ukiyo-e</em> prints of the "floating world," and the lavish gold-ground screens of the Rinpa school.</p>
              <ul><li>Sakoku isolation</li><li>Merchant culture</li><li>Ukiyo-e</li><li>Rinpa school</li></ul>
            </div>
          </article>

          <article class="era">
            <div><div class="era-date">1868 – present</div><div class="era-kanji" lang="ja">明治〜現代</div></div>
            <div>
              <h3>Meiji Era to Modern</h3>
              <p>Commodore Perry's "Black Ships" arrived in 1853, and the 1854 Convention of Kanagawa ended isolation. Japanese prints flooded Europe, sparking <em>Japonisme</em> and reshaping Impressionism. In the 20th century Japan built one of the world's most careful systems for protecting its heritage.</p>
              <ul><li>End of sakoku</li><li>Japonisme</li><li>Modern preservation</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>
`
