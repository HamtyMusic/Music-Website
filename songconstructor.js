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
  if (Songs) {} else {
    return false;
  }
  var songParent = $("#SongList")[0];
  hideSongs(Songs);
  if (Songs.length == 0) {
    return false;
  }
  for (var i in Songs) {
    if (!Songs.hasOwnProperty(i)) { continue; }
    var Song = Songs[i];
    if(Song.elem) {
      songParent.appendChild(Song.elem);
      continue;
    }
    var wrap = newElem("div", songParent, "song-wrap");
    var elem = newElem("div", wrap, "song pb shadow");
    if (Song.img) {
      var imgPar = newElem("a", elem, "song-image-parent lighten");
      imgPar.href = "#" + i;
      var img = newElem("img", imgPar, "song-image shadow");
      img.src = Song.img.replace(/^http:\/\//i, 'https://');
    }
    var title = newElem("div", elem, "song-title");
    title.innerHTML = Song.title;
    title.setAttribute("title", Song.name);
    var author = newElem("div", elem, "song-author");
    author.innerHTML = Song.author;
    author.setAttribute("title", Song.name);
    
    var links = newElem("div", elem, "link-buttons");
    if(Song.download) {
      var a = newElem("a", links, "link download-link");
      a.setAttribute("title", "Click for download options");
      var arrowBoxContainer = newElem("div", links, "arrow_box-container"),
        arrowBox = newElem("div", arrowBoxContainer, "arrow_box shadow"),
        dlbtn = newElem("img", a, "link-button ");
      addEvent(dlbtn, "mousedown", function() {
        var abc = $(".arrow_box-container", this.parentElement.parentElement)[0];
        abc.style.display = "block";
        abc.focus();
      });
      addEvent(arrowBoxContainer, "mouseleave", function() { this.style.display = "none" });
      addEvent(arrowBoxContainer, "blur", function() { this.style.display = "none" });
      setVectorSource(dlbtn, "download");
      for (var key in Song.download) {
        if (!Song.download.hasOwnProperty(key)) { continue; }
        var link = Song.download[key];
        var a = newElem("a", arrowBox, "link");
        link = (link.href) ? link.href : link;
        a.href = (link.constructor === Array) ? link.join("") : link;
        a.target = "_blank";
        var span = newElem("span", a, "link-description");
        a.setAttribute("title", ("Free Download ." + key + " (" + Song.name + ")"));
        span.innerHTML = "." + key;
      }
    }
    for (var key in Song.links) {
      if (!Song.links.hasOwnProperty(key)) { continue; }
      var link = Song.links[key];
      var a = newElem("a", links, "link");
      link = (link.href) ? link.href : link;
      a.href = (link.constructor === Array) ? link.join("") : link;
      a.target = "_blank";
      var dlbtn = newElem("img", a, "link-button");
      a.setAttribute("title", ("\"" + Song.name + "\" on " + key.capFirstLetter()));
      setVectorSource(dlbtn, key);
    }
    //Release Date
    if (Song.date) {
      if (Object.prototype.toString.call(Song.date) === "[object Date]") {
        var date = Song.date;
        var dates = newElem("div", elem, "DateContainer");
        var date1 = newElem("div", dates, "dateText dateAbsolute");
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
        var date2 = newElem("div", dates, "dateText dateRelative");
        date2.innerHTML = timeAgo(date, 1);
        date2.setAttribute("title", (timeAgo(date)));
      }
    }
    Song.elem = wrap;
  }
  return true;
}
function drawSong(Song) {
  if (Song) {} else {
    return false;
  }
  if (Song.img) {
    var img = $("#SongImage")[0];
    img.src = Song.img.replace(/^http:\/\//i, 'https://');
  }
  var title = $("#SongTitle")[0];
  title.innerHTML = Song.name;
  title.setAttribute("title", Song.title + " by " + Song.author);
  
  var links = $("#SongLinks")[0];
  links.innerHTML = "";
  var dlLinks = $("#SongDlLinks")[0];
  dlLinks.innerHTML = "";
  if(Song.download) {
    for (var key in Song.download) {
      if (!Song.download.hasOwnProperty(key)) { continue; }
      var link = Song.download[key];
      var a = newElem("a", dlLinks, "link");
      link = (link.href) ? link.href : link;
      a.href = (link.constructor === Array) ? link.join("") : link;
      a.target = "_blank";
      var span = newElem("span", a, "link-description");
      a.setAttribute("title", ("Free Download ." + key + " (" + Song.name + ")"));
      span.innerHTML = "." + key;
    }
  }
  for (var key in Song.links) {
    if (!Song.links.hasOwnProperty(key)) { continue; }
    var link = Song.links[key];
    var a = newElem("a", links, "link");
    link = (link.href) ? link.href : link;
    a.href = (link.constructor === Array) ? link.join("") : link;
    a.target = "_blank";
    var dlbtn = newElem("img", a, "link-button");
    a.setAttribute("title", ("\"" + Song.name + "\" on " + key.capFirstLetter()));
    setVectorSource(dlbtn, key);
  }

  //Release Date
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
  var price = Song.price || "Free";
  $("#SongPrice")[0].innerHTML = price;
  
  if(window.curEmbedSong != Song || $("#embeds")[0].innerHTML == "") {
    $("#embeds")[0].innerHTML = "";
    window.curEmbedSong = Song;
    if(Song.links.youtube) {
      var ytid = Song.links.youtube.id;
      if(ytid) {
        var ytEmbedWrap = newElem("div", $("#embeds")[0], "yt-embed-wrap embed-wrap");
        var ytEmbed = newElem("iframe", ytEmbedWrap, "yt-embed embed");
        ytEmbed.src = "https://www.youtube.com/embed/" + ytid + "?autoplay=0&origin=" + (location.href || (location + "") || location.pathname);
        ytEmbed.setAttribute("frameborder", 0);
        window.curYtEmbed = ytEmbedWrap;
        window.curYtEmbedId = ytid;
      }
    }
    if(Song.links.soundcloud) {
      scid = Song.links.soundcloud.id;
      if(scid) {
        var scEmbedWrap = newElem("div", $("#embeds")[0], "sc-embed-wrap embed-wrap");
        var scEmbed = newElem("iframe", scEmbedWrap, "sc-embed embed");
        scEmbed.src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + scid + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";
        scEmbed.setAttribute("frameborder", 0);
        window.curScEmbed = scEmbedWrap;
        window.curScEmbedId = scid;
      }
    }
    if($("#embeds")[0].innerHTML != "") {
      var closeButton = newElem("div", $("#embeds")[0], false, "embeds-close");
      addEvent(closeButton, "click", function() {
        $("#embeds")[0].innerHTML = "";
      });
    }
  }
  return true;
}
