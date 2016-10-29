var Songs = {
  promenade: {
    name: "Hamty - Promenade",
    title: "Promenade",
    author: "Hamty",
    img: "https://i.imgur.com/EOKKX6Z.jpg",
    links: {
      downloadFlac: "http://sh.st/4dPZJ",
      downloadMp3: "http://sh.st/4dPYT",
      soundcloud: "https://soundcloud.com/hamty/promenade",
      youtubeId: "2jD7uWM1edY",
      bandcamp: "https://hamty.bandcamp.com/track/promenade"
    },
    date: new Date(2016, 9, 25)
  },
  lockynAqua: {
    name: "Lockyn - Aqua ( Hamty\'s Remix )",
    title: "Aqua ( Hamty\'s Remix )",
    author: "Lockyn",
    img: "https://i.imgur.com/FNkzp0S.jpg",
    links: {
      downloadFlac: "http://sh.st/HzIKA",
      downloadMp3: "http://sh.st/HzP5W",
      soundcloud: "https://soundcloud.com/hamty/lockyn-aqua-remix",
      youtubeId: "mEvwdNUg9jo"
    },
    date: new Date(2016, 6, 3)
  },
  sunshine: {
    name: "Hamty - Sunshine",
    title: "Sunshine",
    author: "Hamty",
    img: "https://i.imgur.com/YtgvHhF.jpg",
    links: {
      downloadMp3: "http://sh.st/nqRuX",
      soundcloud: "https://soundcloud.com/hamty/sunshine",
      youtubeId: "Z7T-bCQcJVQ",
      bandcamp: "https://hamty.bandcamp.com/track/sunshine"
    },
    date: new Date(2015, 10, 21)
  },
  seaLights: {
    name: "Hamty - Sea Lights",
    title: "Sea Lights",
    author: "Hamty",
    img: "https://i.imgur.com/yzV6gD5.jpg",
    links: {
      downloadMp3: ["http://", "adf", ".ly/", "1JcSyZ"],
      soundcloud: "https://soundcloud.com/hamty/sea-lights",
      youtubeId: "UiGhXFMFY94",
      bandcamp: "https://hamty.bandcamp.com/track/sea-lights"
    },
    date: new Date(2015, 5, 22, 19)
  },
  home: {
    name: "Hamty - Home",
    title: "Home",
    author: "Hamty",
    img: "https://i.imgur.com/7KvqLCa.jpg",
    links: {
      downloadMp3: ["http://", "adf", ".ly/", "1Bkfyo"],
      soundcloud: "https://soundcloud.com/hamty/hamty-home",
      youtubeId: "Idmo2W8zcAg",
      bandcamp: "https://hamty.bandcamp.com/track/home"
    },
    date: new Date(2015, 2, 25)
  },
  inspiration: {
    name: "Hamty - Inspiration",
    title: "Inspiration",
    author: "Hamty",
    img: "https://i.imgur.com/IW0fpVX.jpg",
    links: {
      downloadMp3: ["http://", "adf", ".ly/", "wTZVo"],
      soundcloud: "https://soundcloud.com/hamty/hamty-inspiration",
      youtubeId: "Uo8Ozq5fZro",
      bandcamp: "http://hamty.bandcamp.com/track/inspiration"
    },
    date: new Date(2015, 0, 20)
  },
  riverJourney: {
    name: "Hamty - River Journey",
    title: "River Journey",
    author: "Hamty",
    img: "https://i.imgur.com/SdQKV5Y.jpg",
    links: {
      downloadMp3: ["http://", "adf", ".ly/", "sDPor"],
      soundcloud: "https://soundcloud.com/hamty/hamty-home",
      youtubeId: "edFv3BTwk5g",
      bandcamp: "https://hamty.bandcamp.com/track/river-journey"
    },
    date: new Date(2014, 8, 16)
  },
  return: {
    name: "Hamty - The Return",
    title: "The Return",
    author: "Hamty",
    img: "https://i.imgur.com/yMuBKFT.jpg",
    links: {
      downloadMp3: ["http://", "adf", ".ly/", "sDQXi"],
      soundcloud: "https://soundcloud.com/hamty/the-return",
      youtubeId: "g5KG7cE5y44",
      bandcamp: "https://hamty.bandcamp.com/track/the-return"
    },
    date: new Date(2014, 6, 17)
  }
}
for (var i in Songs) {
  Songs[i].youtube = "https://youtu.be/" + Songs[i].youtubeId;
}
