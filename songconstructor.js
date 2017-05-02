var detailProperties = [ "genre", "duration", "tempo", "type" ],
  linksToDisplay = [[ "soundcloud", "Soundcloud" ], [ "youtube", "Youtube" ], [ "routenote", "Routenote Direct" ], [ "bandcamp", "Bandcamp" ]];

function Search(str) {
  str = str || "";
  if (str.length == 0) {
    return Songs;
  }
  var srchTgs = str.split(" ");
  for (var i = 0; i < srchTgs.length; i++) {
    srchTgs[i] = srchTgs[i].toLowerCase();
  }
  var mObj = {};
  for (i in Songs) {
    if (!Songs.hasOwnProperty(i)) { continue; }
    mObj[i] = true;
  }
  for (var i = 0; i < srchTgs.length; i++) {
    for (var y in mObj) {
      if (Songs[y].name && mObj.hasOwnProperty(y)) {
        if (((Songs[y].name).toLowerCase()).search(srchTgs[i]) == -1) {
          delete mObj[y];
        }
      }
    }
  }
  var results = {};
  for (i in mObj) {
    if (!mObj.hasOwnProperty(i)) { continue; }
    results[i] = (Songs[i]);
  }
  return results;
}

function hideSongs(Songs) {
  var SongStorage = $("#SongStorage")[0];
  if(!SongStorage) {
    SongStorage = newElem("div", document.body, false, "SongStorage");
  }
  if(SongStorage) {
    if (Songs) {} else {
      return false;
    }
    var songParent = $("#SongList")[0];
    if(songParent) {} else {
      return false;
    }
    if (Songs.length == 0) {
      return false;
    }
    for (var i in Songs) {
      if (!Songs.hasOwnProperty(i)) { continue; }
      var Song = Songs[i];
      if(Song.elem) {
        SongStorage.appendChild(Song.elem);
      }
    }
    songParent.innerHTML = "";
  }
}

function drawSongs(Songs) {
  if (!Songs) {
    return false;
  }
  var songParent = $("#SongList")[0];
  hideSongs(Songs);
  if (Songs.length == 0) {
    return false;
  }
  for (var i in Songs) {
    if (!Songs.hasOwnProperty(i)) { continue; }
    (function () {
      var Song = Songs[i];
      if(Song.elem) {
        songParent.appendChild(Song.elem);
        return true;
      }
      var wrap = newElem("div", songParent, "song-wrap");
      var elem = newElem("div", wrap, "song pb shadow-2 dynamic");
      if (Song.img) {
        var imgPar = newElem("a", elem, { class: "song-image-wrap lighten", href: "#" + i });
        var img = newElem("img", imgPar, { class: "song-image shadow dynamic", src: Song.img.replace(/^http:\/\//i, 'https://') });
      }
      var title = newElem("div", elem, { class: "song-title", innerHTML: Song.title, title: Song.name });
      addEvent(title, "dblclick", function() {
        selectText(title);
      });
      var author = newElem("div", elem, { class: "song-author", innerHTML: Song.author, title: Song.name });

      var links = newElem("div", newElem("div", elem, "link-buttons-wrap"), "link-buttons");
      var numberOfLinks = 0;
      if(Song.download) {
        var a = newElem("a", links, { class: "link download-link", title: "Click for download options" }),
          dlbtn = newElem("img", a, "link-button");
        setVectorSource(dlbtn, "download");
        addEvent(a, "click", function() {
          downloadSong(Song);
        });
        numberOfLinks++;
      }
      linksToDisplay.forEach(function(key) {
        if(Song.links.hasOwnProperty(key[0])) {
          var a = newElem("a", links, { class: "link", href: processLink(Song.links[key[0]]), target: "_blank", title: ("\"" + Song.name + "\" on " + key[1]) });
          var dlbtn = newElem("img", a, "link-button");
          setVectorSource(dlbtn, key[0]);
          numberOfLinks++;
        }
      });
      //Release Date
      if (Song.date) {
        if (Object.prototype.toString.call(Song.date) === "[object Date]") {
          var date = Song.date;
          var dates = newElem("div", elem, "DateContainer");
          var date1 = newElem("div", dates, {
            class: "dateText dateAbsolute",
            innerHTML: date.toLocaleDateString([], {
              day: "numeric",
              month: "short",
              year: "numeric"
            }),
            title: (date.toLocaleDateString([], {
              day: "numeric",
              month: "long",
              year: "numeric"
            }) + " | " + date.toLocaleTimeString([]))
          });
          var date2 = newElem("div", dates, { class: "dateText dateRelative", innerHTML: timeAgo(date, 1), title: timeAgo(date) });
        }
      }
      Song.elem = wrap;
    }());
  }
  return true;
}
function drawSong(Song) {
  if (Song) {} else {
    return false;
  }
  var img = $("#SongImage")[0];
  if (Song.img) {
    img.src = processLink(Song.img, true);
  } else {
    img.src = "";
  }
  var title = $("#SongTitle")[0];
  title.innerHTML = Song.name || "No name";
  title.setAttribute("title", Song.title + " by " + Song.author);
  addEvent(title, "dblclick", function() {
    selectText(title);
  });
  
  var links = $("#SongLinks")[0];
  links.innerHTML = "";
  var dlLinks = $("#SongDlLinks")[0];
  dlLinks.innerHTML = "";
  if(Song.download && Song.download.length != 0) {
    for (var key in Song.download) {
      if (!Song.download.hasOwnProperty(key)) { continue; }
      var a = newElem("a", dlLinks, { class: "btn shadow dynamic", href: processLink(Song.download[key]), target: "_blank", innerHTML: "." + key, title: ("Free Download ." + key + " (" + Song.name + ")") });
    }
  } else {
    dlLinks.innerHTML = "Nothing here...";
  }
  linksToDisplay.forEach(function(key) {
    if(Song.links.hasOwnProperty(key[0])) {
      var a = newElem("a", links, { class: "link", href: processLink(Song.links[key[0]]), target: "_blank", title: ("\"" + Song.name + "\" on " + key[1]) });
      var dlbtn = newElem("img", a, "link-button");
      setVectorSource(dlbtn, key[0]);
    }
  });

  //Release Date
  $("#dateAbsolute")[0].innerHTML = "";
  $("#dateRelative")[0].innerHTML = "";
  if (Song.date) {
    if (Object.prototype.toString.call(Song.date) === "[object Date]") {
      var date = Song.date;
      var date1 = $("#dateAbsolute")[0];
      date1.innerHTML = date.toLocaleDateString([], {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
      date1.setAttribute("title", (date.toLocaleDateString([], {
        day: "numeric",
        month: "long",
        year: "numeric"
      }) + " | " + date.toLocaleTimeString([])));
      var date2 = $("#dateRelative")[0];
      date2.innerHTML = timeAgo(date, 1);
      date2.setAttribute("title", (timeAgo(date)));
    }
  }
  
  var table = $("#SongDetailsTable")[0];
  table.innerHTML = "";
  if(Song.details) {
    detailProperties.forEach(function(i) {
      if(Song.details.hasOwnProperty(i)) {
        var name = i.capFirstLetter();
        var value = Song.details[i];
        if(i == "type") {
          value = ["Original", "Remix"][value];
        } else if(i == "duration") {
          var min = Math.floor(value / 60);
          var sec = value - min * 60;
          sec = (sec < 10) ? "0" + sec : sec;
          value = min + ":" + sec;
        }
        var row = newElem("div", table, "song-details-table-row");
        newElem("div", row, { class: "song-details-table-cell name", innerHTML: name });
        newElem("div", row, { class: "song-details-table-cell value", innerHTML: value });
      }
    });
    var price = Song.details.price;
  }
  $("#SongPrice")[0].innerHTML = price || "Free";
  
  if(Song.links && (window.curEmbedSong != Song || $("#embeds")[0].innerHTML == "")) {
    $("#embeds")[0].innerHTML = "";
    window.curEmbedSong = Song;
    if(Song.links.youtube) {
      var ytid = Song.links.youtube.id;
      if(ytid) {
        var ytEmbedWrap = newElem("div", $("#embeds")[0], "yt-embed-wrap embed-wrap shadow");
        if(Song.links.youtube.aspectRatio) {
          ytEmbedWrap.style["padding-bottom"] = 100 / Song.links.youtube.aspectRatio + "%";
        }
        var ytEmbed = newElem("iframe", ytEmbedWrap, { class: "yt-embed embed", src: "https://www.youtube.com/embed/" + ytid + "?autoplay=0&origin=" + (location.href || (location + "") || location.pathname), frameborder: 0, allowfullscreen: true });
        window.curYtEmbed = ytEmbedWrap;
        window.curYtEmbedId = ytid;
      }
    }
    if(Song.links.soundcloud) {
      scid = Song.links.soundcloud.id;
      if(scid) {
        var scEmbedWrap = newElem("div", $("#embeds")[0], "sc-embed-wrap embed-wrap shadow");
        var scEmbed = newElem("iframe", scEmbedWrap, { class: "sc-embed embed", src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + scid + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true", frameborder: 0 });
        window.curScEmbed = scEmbedWrap;
        window.curScEmbedId = scid;
      }
    }
    if($("#embeds")[0].innerHTML != "") {
      var closeButton = newElem("div", $("#embeds")[0], "close-wrap small", "embeds-close");
      var closeButtonIcon = newElem("div", closeButton, "close", "embeds-close-icon");
      addEvent(closeButton, "click", function() {
        $("#embeds")[0].innerHTML = "";
      });
    }
  }
  return true;
}
function downloadSong(Song) {
  if(!isObject(Song)) {
    Song = Songs[Song];
  }
  if (!Song || !Song.download) return false;
  var popup = newPopup();
  if (Song.img) {
    var img = newElem("img", popup, { class: "song-image shadow", src: processLink(Song.img, true) });
  }
  var dlTextWrap = newElem("div", popup, { class: "center popup-dl-text-wrap" });
  newElem("span", dlTextWrap, { innerHTML: "Download", title: Song.name });
  if (Song.title) {
    var title = newElem("span", dlTextWrap, { class: "song-title", innerHTML: "\"" + Song.title + "\"", title: Song.name });
  }
  var linksWrap = newElem("div", popup, "popup-dl-links-wrap");
  var n = 0;
  for (var key in Song.download) {
    if (Song.download.hasOwnProperty(key)) n++;
  }
  for (var key in Song.download) {
    if (Song.download.hasOwnProperty(key)) {
      var linkWrap = newElem("div", linksWrap, "link-wrap");
      linkWrap.style.width = 100 / n + "%";
      var a = newElem("a", linkWrap, { class: "btn shadow dynamic", href: processLink(Song.download[key]), target: "_blank", innerHTML: "." + key, title: ("Free Download ." + key + " (" + Song.name + ")") });
    }
  }
}
  
