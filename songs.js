var Songs = {
  promenade: {
    name: "Hamty - Promenade",
    title: "Promenade",
    author: "Hamty",
    img: "https://i.imgur.com/EOKKX6Z.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/promenade",
      youtube: {
        id: "2jD7uWM1edY"
      },
      bandcamp: "https://hamty.bandcamp.com/track/promenade"
    },
    download: {
      flac: "http://sh.st/4dPZJ",
      mp3: "http://sh.st/4dPYT"
    },
    date: new Date(2016, 9, 25)
  },
  lockynAqua: {
    name: "Lockyn - Aqua ( Hamty\'s Remix )",
    title: "Aqua ( Hamty\'s Remix )",
    author: "Lockyn",
    img: "https://i.imgur.com/FNkzp0S.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/lockyn-aqua-remix",
      youtube: {
        id: "mEvwdNUg9jo"
      },
    },
    download: {
      flac: "http://sh.st/HzIKA",
      mp3: "http://sh.st/HzP5W"
    },
    date: new Date(2016, 6, 3)
  },
  sunshine: {
    name: "Hamty - Sunshine",
    title: "Sunshine",
    author: "Hamty",
    img: "https://i.imgur.com/YtgvHhF.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/sunshine",
      youtube: {
        id: "Z7T-bCQcJVQ"
      },
      bandcamp: "https://hamty.bandcamp.com/track/sunshine"
    },
    download: {
      mp3: "http://sh.st/nqRuX"
    },
    date: new Date(2015, 10, 21)
  },
  seaLights: {
    name: "Hamty - Sea Lights",
    title: "Sea Lights",
    author: "Hamty",
    img: "https://i.imgur.com/yzV6gD5.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/sea-lights",
      youtube: {
        id: "UiGhXFMFY94"
      },
      bandcamp: "https://hamty.bandcamp.com/track/sea-lights"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "1JcSyZ"]
    },
    date: new Date(2015, 5, 22, 19)
  },
  home: {
    name: "Hamty - Home",
    title: "Home",
    author: "Hamty",
    img: "https://i.imgur.com/7KvqLCa.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/hamty-home",
      youtube: {
        id: "Idmo2W8zcAg"
      },
      bandcamp: "https://hamty.bandcamp.com/track/home"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "1Bkfyo"]
    },
    date: new Date(2015, 2, 25)
  },
  inspiration: {
    name: "Hamty - Inspiration",
    title: "Inspiration",
    author: "Hamty",
    img: "https://i.imgur.com/IW0fpVX.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/hamty-inspiration",
      youtube: {
        id: "Uo8Ozq5fZro"
      },
      bandcamp: "http://hamty.bandcamp.com/track/inspiration"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "wTZVo"]
    },
    date: new Date(2015, 0, 20)
  },
  riverJourney: {
    name: "Hamty - River Journey",
    title: "River Journey",
    author: "Hamty",
    img: "https://i.imgur.com/SdQKV5Y.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/hamty-home",
      youtube: {
        id: "edFv3BTwk5g"
      },
      bandcamp: "https://hamty.bandcamp.com/track/river-journey"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "sDPor"]
    },
    date: new Date(2014, 8, 16)
  },
  return: {
    name: "Hamty - The Return",
    title: "The Return",
    author: "Hamty",
    img: "https://i.imgur.com/yMuBKFT.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/the-return",
      youtube: {
        id: "g5KG7cE5y44"
      },
      bandcamp: "https://hamty.bandcamp.com/track/the-return"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "sDQXi"]
    },
    date: new Date(2014, 5, 17)
  },
  timeRift: {
    name: "Hamty - Time Rift",
    title: "Time Rift",
    author: "Hamty",
    img: "https://i.imgur.com/MXMrcYl.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/time-rift",
      youtube: {
        id: "eMzHfDn8oxQ"
      },
      bandcamp: "https://hamty.bandcamp.com/track/time-rift"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "sDQnR"]
    },
    date: new Date(2014, 5, 17)
  },
  adventure: {
    name: "Hamty - The Adventure",
    title: "The Adventure",
    author: "Hamty",
    img: "http://i.imgur.com/HzsEy9F.jpg",
    links: {
      soundcloud: "https://soundcloud.com/hamty/the-adventure",
      youtube: {
        id: "YJvl1S2oPZk"
      },
      bandcamp: "https://hamty.bandcamp.com/track/the-adventure"
    },
    download: {
      mp3: ["http://", "adf", ".ly/", "wTZVo"]
    },
    date: new Date(2014, 4, 31)
  }
}
for (var i in Songs) {
  if(Songs[i].links.youtube) {
    if(Songs[i].links.youtube.id) {
      Songs[i].links.youtube.href = "https://youtu.be/" + Songs[i].links.youtube.id;
    }
  }
}
