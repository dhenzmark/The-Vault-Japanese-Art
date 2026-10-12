import { images } from './images.js'

// Timeline of eras, oldest first. `vertical` is the era name set vertically beside its picture;
// `pattern` picks the traditional textile pattern on the picture's mat (css/patterns.css).
export const eras = [
  {
    date: 'c. 14,000 – 300 BCE',
    vertical: '縄文時代',
    title: 'Jōmon Period',
    pattern: 'cord',
    images: [images.jomonVessel],
    text: 'Hunter-gatherer communities produced some of the oldest pottery in the world. Vessels were pressed with twisted cord (<em>jōmon</em> means "cord-marked"), and clay figurines called <em>dogū</em> served ritual purposes — likely protection, fertility, and healing.',
    tags: ['Ritual earthenware', 'Dogū effigies', 'Animist belief'],
  },
  {
    date: '538 – 794 CE',
    vertical: '飛鳥・奈良',
    title: 'Asuka & Nara Periods',
    pattern: 'shippo',
    images: [images.shotoku],
    text: 'Buddhism arrived from the Korean kingdom of Baekje, bringing sutras, sculpture, and Chinese building methods. Prince Shōtoku championed the new faith and founded Hōryū-ji, and the court later sponsored Tōdai-ji, whose Great Buddha was cast in bronze in 752.',
    tags: ['Arrival of Buddhism', 'Tang Chinese influence', 'Temple building'],
  },
  {
    date: '794 – 1573 CE',
    vertical: '平安・室町',
    title: 'Heian & Muromachi Periods',
    pattern: 'shippo',
    images: [images.genji, images.sesshu],
    text: 'The Heian court refined a distinctly Japanese aesthetic in palace architecture (<em>shinden-zukuri</em>), poetry, and narrative scrolls like the Tale of Genji. Centuries later, Zen Buddhism shaped Muromachi culture: monochrome ink painting (<em>sumi-e</em>), dry rock gardens, and the first formal tea gatherings.',
    tags: ['Shinden-zukuri', 'Zen Buddhism', 'Sumi-e ink painting', 'Tea ceremony'],
  },
  {
    date: '1603 – 1867 CE',
    vertical: '江戸時代',
    title: 'Edo Period',
    pattern: 'seigaiha',
    images: [images.fujinRaijin],
    text: 'Under the Tokugawa shogunate, the policy of <em>sakoku</em> sharply limited foreign contact. Peace and a wealthy merchant class fuelled urban pleasures and the art that celebrated them: <em>ukiyo-e</em> prints of the "floating world," and the lavish gold-ground screens of the Rinpa school.',
    tags: ['Sakoku isolation', 'Merchant culture', 'Ukiyo-e', 'Rinpa school'],
  },
  {
    date: '1868 – present',
    vertical: '明治〜現代',
    title: 'Meiji Era to Modern',
    pattern: 'seigaiha',
    images: [images.perry],
    text: 'Commodore Perry\'s "Black Ships" arrived in 1853, and the 1854 Convention of Kanagawa ended isolation. Japanese prints flooded Europe, sparking <em>Japonisme</em> and reshaping Impressionism. In the 20th century Japan built one of the world\'s most careful systems for protecting its heritage.',
    tags: ['End of sakoku', 'Japonisme', 'Modern preservation'],
  },
]
