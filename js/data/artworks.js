// The five masterpieces, oldest first. Used by the gallery and the analysis dialog.
export const artworks = [
  {
    id: 'dogu',
    title: 'Goggle-Eyed Dogū',
    jp: '遮光器土偶',
    date: 'c. 1000 – 400 BCE',
    artist: 'Unknown Jōmon maker',
    period: 'Final Jōmon Period',
    medium: 'Unglazed hollow earthenware',
    location: 'Found at Kamegaoka, Aomori; now in the Tokyo National Museum',
    image: 'images/artwork5.jpg',
    focus: 'center 12%', // keep the goggle eyes in the cropped frame
    summary: 'A hollow clay figure with huge slit eyes, found with one leg missing — perhaps on purpose.',
    analysis: 'The figure\'s eyes are so large and banded that early scholars compared them to the snow goggles (shakōki) worn by Arctic peoples, which gave the type its name. Its broad shoulders, swelling hips, and tiny hands are covered in incised cord patterns and swirling bands, and the body is hollow, a technically demanding feat for low-fired clay.',
    significance: 'Dogū were rarely found whole. Many archaeologists think they were broken deliberately as a kind of sympathetic magic: an illness or injury was transferred to the figure, then destroyed with it. As one of the oldest representational sculptures in Japan, the Shakōki-dogū shows a spiritual world centuries before Buddhism arrived.'
  },
  {
    id: 'kinkakuji',
    title: 'Kinkaku-ji (Temple of the Golden Pavilion)',
    jp: '金閣寺',
    date: 'Late 14th century',
    artist: 'Commissioned by Ashikaga Yoshimitsu',
    period: 'Muromachi Period',
    medium: 'Timber architecture with gold leaf over lacquer',
    location: 'Rokuon-ji, Kyoto',
    image: 'images/artwork2.jpg',
    summary: 'A shogun\'s retirement villa turned Zen temple, its upper floors sheathed in gold above a mirror-still pond.',
    analysis: 'Each of the three storeys uses a different style. The ground floor follows Heian palace architecture (shinden-zukuri); the second, samurai residence style (buke-zukuri); the top, a Chinese Zen Buddhist hall, crowned by a bronze phoenix. Gold covers the upper two floors, and the pavilion is set at the edge of the Kyōko-chi, the "Mirror Pond", so it is always seen twice: in the air and in the water.',
    significance: 'Built as Yoshimitsu\'s retirement villa and converted into a Zen temple after his death in 1408, the pavilion was meant to evoke the Pure Land paradise on earth. It was burned by a young monk in 1950 and faithfully rebuilt in 1955, which itself raises a very Japanese question about whether authenticity lies in original material or in the renewal of form.'
  },
  {
    id: 'bakohan',
    title: 'The Bakōhan Tea Bowl & the Tradition of Kintsugi',
    jp: '馬蝗絆',
    date: 'Bowl 13th century; repair 15th century',
    artist: 'Longquan kilns, China; associated with Ashikaga Yoshimasa',
    period: 'Muromachi to Edo tradition',
    medium: 'Celadon stoneware with metal staples',
    location: 'Tokyo National Museum',
    image: 'images/artwork4.webp',
    summary: 'A cracked celadon bowl whose clumsy repair, legend says, inspired Japan to mend broken things beautifully.',
    analysis: 'The bowl itself is a pale blue-green Chinese celadon, prized in Japan for its jade-like glaze. When it cracked, the story goes, the shogun Ashikaga Yoshimasa sent it to China for a replacement. It came back repaired with heavy iron staples that looked like a large locust (bakō), which gave it its name — and which Japanese craftsmen found ugly.',
    significance: 'The search for a more graceful repair is often linked to the rise of kintsugi: rejoining broken ceramics with urushi lacquer dusted with powdered gold. Rather than hiding damage, kintsugi traces it in gold, treating the history of breakage as part of the object\'s beauty. It is wabi-sabi made tangible.'
  },
  {
    id: 'fujin-raijin',
    title: 'Wind God and Thunder God Screens',
    jp: '風神雷神図屏風',
    date: 'Early 17th century',
    artist: 'Tawaraya Sōtatsu',
    period: 'Edo Period, Rinpa school',
    medium: 'Pair of two-panel folding screens; ink and colour on gold leaf',
    location: 'Kennin-ji, Kyoto (National Treasure)',
    image: 'images/artwork3.jpg',
    frame: '2200 / 1006', // show the full pair of screens: the gods sit at the far edges
    summary: 'Two storm deities tumble in from opposite corners, leaving a vast field of gold between them.',
    analysis: 'Fūjin, the green-skinned wind god, carries his bag of winds; Raijin, the white thunder god, beats a ring of drums. Sōtatsu pushes both figures to the outer edges so they barely fit — the frame even crops part of Raijin\'s ring of drums — which makes them feel as if they are rushing into view. Their clouds, painted with tarashikomi (dropping ink into still-wet ink so it pools and bleeds), are the only other marks.',
    significance: 'The empty gold between the gods is the real subject: a charged field of ma where the storm is about to break. The composition so impressed later artists that Ogata Kōrin and Sakai Hōitsu both made their own copies, establishing it as a founding image of the Rinpa school and of Shinto nature deities in art.'
  },
  {
    id: 'great-wave',
    title: 'The Great Wave off Kanagawa',
    jp: '神奈川沖浪裏',
    date: 'c. 1830 – 1832',
    artist: 'Katsushika Hokusai',
    period: 'Edo Period',
    medium: 'Ukiyo-e woodblock print (nishiki-e)',
    location: 'From the series Thirty-six Views of Mount Fuji',
    image: 'images/artwork1.jpg',
    summary: 'A towering wave with claw-like foam bears down on three boats, while Mount Fuji sits small and still.',
    analysis: 'The wave fills the left of the print, its crest breaking into fingers of foam about to fall on the rowers below. Far behind, Mount Fuji appears tiny — almost a second wave — anchoring the chaos with permanence. Hokusai printed in Prussian blue, a synthetic European pigment that had only recently become affordable in Japan through foreign trade, giving the print its vivid, long-lasting colour.',
    significance: 'The print sets human fragility against nature\'s force and the enduring sacred mountain. Produced cheaply in thousands of copies, it became the most recognised image in Japanese art, and once it reached Europe, a touchstone of Japonisme admired by Debussy, Van Gogh, and the Impressionists.'
  }
]
