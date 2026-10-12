// Every supporting image on the page, with its caption and credit.
// `aspect` is the crop shape used in a Plate; `focus` is the object-position that keeps the subject in frame.
// The footer credits list is built from the `commons` entries (public domain / CC0, via Wikimedia Commons).
const COMMONS = 'https://commons.wikimedia.org/wiki/File:'

export const images = {
  jomonVessel: {
    src: 'images/era-jomon.jpg',
    aspect: '1 / 1', focus: 'center 40%',
    alt: 'Earthenware cooking vessel with flame-like rim decorations',
    caption: 'Flame-rimmed cooking vessel (kaen doki), Middle Jōmon period, c. 3500–2500 BCE. The Metropolitan Museum of Art.',
    license: 'CC0',
    commons: '火焔土器-“Flame-Rimmed” Cooking Vessel (Kaen doki) MET 2015 300 258 Burke website.jpg',
  },
  shotoku: {
    src: 'images/era-asuka.jpg',
    aspect: '3 / 4', focus: 'center 30%',
    alt: 'Painted portrait of Prince Shōtoku standing between two young princes',
    caption: 'Portrait of Prince Shōtoku and Two Princes, 7th–8th century. Imperial Household collection.',
    license: 'Public domain',
    commons: 'Portrait of Prince Shōtoku and Two Princes.jpg',
  },
  genji: {
    src: 'images/era-heian.jpg',
    aspect: '16 / 10',
    alt: 'Scroll painting of court ladies in a palace room, seen from above without a roof',
    caption: 'Illustrated Tale of Genji handscroll, Azumaya chapter, c. 1130. Tokugawa Art Museum, Nagoya.',
    license: 'Public domain',
    commons: 'Genji emaki azumaya.jpg',
  },
  sesshu: {
    src: 'images/era-muromachi.jpg',
    aspect: '3 / 4',
    alt: 'Loose monochrome ink landscape of mountains and trees',
    caption: 'Sesshū Tōyō, Splashed-Ink Landscape (Haboku sansui), 1495. Tokyo National Museum.',
    license: 'Public domain',
    commons: 'Sesshu - Haboku-Sansui.jpg',
  },
  fujinRaijin: {
    src: 'images/artwork3.jpg',
    aspect: '2 / 1',
    alt: 'Gold folding screens with the wind god and thunder god at opposite edges',
    caption: 'Tawaraya Sōtatsu, Wind God and Thunder God Screens, early 17th century. Kennin-ji, Kyoto.',
  },
  perry: {
    src: 'images/era-meiji.jpg',
    aspect: '7 / 3',
    alt: 'Painted scroll of American warships anchored in a bay with crowds on shore',
    caption: 'Attributed to Hibata Ōsuke, The Mission of Commodore Perry to Japan in 1854 (detail), handscroll. British Museum.',
    license: 'Public domain',
    commons: 'The Mission of Commodore Perry to Japan in 1854 (BM 2013,3002.1).jpg',
  },
  utamaro: {
    src: 'images/ukiyo-utamaro.jpg',
    aspect: '3 / 4', focus: 'center 20%',
    alt: 'Woodblock print of three fashionable women with elaborate hairstyles',
    caption: 'Kitagawa Utamaro, Three Beauties of the Present Day, c. 1793.',
    license: 'Public domain',
    commons: 'Kitagawa Utamaro - Toji san bijin (Three Beauties of the Present Day)From Bijin-ga (Pictures of Beautiful Women), published by Tsutaya Juzaburo - Google Art Project.jpg',
  },
  sharaku: {
    src: 'images/ukiyo-sharaku.jpg',
    aspect: '3 / 4', focus: 'center 25%',
    alt: 'Woodblock print of a kabuki actor with a fierce face and clawed hands',
    caption: 'Tōshūsai Sharaku, Ōtani Oniji III as Yakko Edobei, 1794. The Metropolitan Museum of Art.',
    license: 'CC0',
    commons: '三代目大谷鬼次の奴江戸兵衛-Kabuki Actor Ōtani Oniji III as Yakko Edobei in the Play The Colored Reins of a Loving Wife (Koi nyōbō somewake tazuna) MET DP130228.jpg',
  },
  kirifuri: {
    src: 'images/ukiyo-hokusai.jpg',
    aspect: '3 / 4', focus: 'center 40%',
    alt: 'Woodblock print of travellers at the foot of a waterfall that spreads like fingers over rocks',
    caption: 'Katsushika Hokusai, Kirifuri Waterfall at Kurokami Mountain, c. 1832. The Metropolitan Museum of Art.',
    license: 'CC0',
    commons: 'Kirifuri Waterfall at Kurokami Mountain in Shimotsuke (Shimotsuke Kurokamiyama Kirifuri no taki), from the series A Tour of Waterfalls in Various Provinces (Shokoku taki meguri) MET DP141247.jpg',
  },
  hiroshige: {
    src: 'images/ukiyo-hiroshige.jpg',
    aspect: '2 / 3',
    alt: 'Woodblock print of people crossing a wooden bridge in heavy rain',
    caption: 'Utagawa Hiroshige, Sudden Shower over Shin-Ōhashi Bridge and Atake, 1857. The Metropolitan Museum of Art.',
    license: 'CC0',
    commons: 'Ōhashi Atake no yūdachi-名所江戸百景 大はしあたけの夕立-Sudden Shower over Shin-Ōhashi Bridge and Atake (Ōhashi Atake no yūdachi), from the series One Hundred Famous Views of Edo (Meisho Edo hyakkei) MET DP123602.jpg',
  },
  vanGogh: {
    src: 'images/impact-vangogh.jpg',
    aspect: '2 / 3',
    alt: 'Oil painting copying Hiroshige’s rainy bridge, framed by a border of painted Japanese characters',
    caption: 'Vincent van Gogh, Bridge in the Rain (after Hiroshige), 1887. Van Gogh Museum, Amsterdam.',
    license: 'Public domain',
    commons: 'Vincent van Gogh - Brug in de regen- naar Hiroshige - Google Art Project.jpg',
  },
  kinkakuji: {
    src: 'images/artwork2.jpg',
    aspect: '16 / 9', focus: 'center 45%',
    alt: 'The gold-covered Kinkaku-ji pavilion reflected in its pond',
    caption: 'Kinkaku-ji, the Temple of the Golden Pavilion, Kyoto.',
  },
  kintsugi: {
    src: 'images/artwork4.webp',
    aspect: '16 / 9',
    alt: 'Black tea bowl with cracks mended in gold',
    caption: 'A tea bowl repaired with kintsugi.',
  },
}

export const commonsUrl = (file) => COMMONS + encodeURIComponent(file.replaceAll(' ', '_'))
