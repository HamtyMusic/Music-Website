function timeAgo(oldDate, length) {
  length = length || 3;
  var newDate = new Date();
  var msInWeek = 1000 * 60 * 60 * 24 * 7,
    msInDay = 1000 * 60 * 60 * 24;
  var deltaYr = newDate.getFullYear() - oldDate.getFullYear();
  if (oldDate.getMonth() > newDate.getMonth() ||
    (oldDate.getMonth() === newDate.getMonth() && oldDate.getDate() > newDate.getDate())) {
    deltaYr--;
  }
  var deltaMn = newDate.getMonth() - oldDate.getMonth();
  if (deltaMn < 0) {
    deltaMn += 12;
  }
  if (oldDate.getDate() > newDate.getDate()) {
    deltaMn--;
  }
  var tempDate = new Date(oldDate.getFullYear() + deltaYr, oldDate.getMonth() + deltaMn, oldDate.getDate());
  var tempDy = (newDate.getTime() - tempDate.getTime()) / msInDay;
  var deltaDy = parseInt(tempDy);
  var tempHr = (tempDy - deltaDy) * 24;
  var deltaHr = parseInt(tempHr);
  var tempMt = (tempHr - deltaHr) * 60;
  var deltaMt = parseInt(tempMt);
  var tempSc = (tempMt - deltaMt) * 60;
  var deltaSc = parseInt(tempSc);
  var sb = [];
  if (deltaYr > 0) {
    sb.push(deltaYr + ' year' + (deltaYr > 1 ? 's' : ''));
  }
  if (deltaMn > 0) {
    sb.push(deltaMn + ' month' + (deltaMn > 1 ? 's' : ''));
  }
  if (deltaDy > 0) {
    sb.push(deltaDy + ' day' + (deltaDy > 1 ? 's' : ''));
  }
  if (deltaHr > 0) {
    sb.push(deltaHr + ' hour' + (deltaHr > 1 ? 's' : ''));
  }
  if (deltaMt > 0) {
    sb.push(deltaMt + ' minute' + (deltaMt > 1 ? 's' : ''));
  }
  if (deltaSc > 0) {
    sb.push(deltaSc + ' second' + (deltaSc > 1 ? 's' : ''));
  }
  if (sb.length > length) {
    sb.length = length;
  }
  return sb.join(', ');
}

function addEvent(elem, evnt, func) {
  if (elem.addEventListener) { // W3C DOM
    elem.addEventListener(evnt, func, false);
  } else if (elem.attachEvent) { // IE DOM
    elem.attachEvent("on" + evnt, func);
  } else { // No much to do
    elem[evnt] = func;
  }
}
String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};

function Search(str) {
  str = str || "";
  if (str.isEmpty()) {
    return Songs;
  }
  var srchTgs = str.split(" ");
  for (var i = 0; i < srchTgs.length; i++) {
    srchTgs[i] = srchTgs[i].toLowerCase();
  }
  var mObj = [];
  for (var i = 0; i < Songs.length; i++) {
    mObj[i] = true;
  }
  for (var i = 0; i < srchTgs.length; i++) {
    for (var y = 0; y < mObj.length; y++) {
      if (mObj[y]) {
        if (Songs[y].name) {
          if (((Songs[y].name).toLowerCase()).search(srchTgs[i]) == -1) {
            delete mObj[y];
          }
        }
      }
    }
  }
  var results = [];
  for (var i = 0; i < mObj.length; i++) {
    if (mObj[i]) {
      results.push(Songs[i]);
    }
  }
  return results;
}

function newElem(type, parent, class1) {
  var elem = document.createElement(type);
  parent.appendChild(elem);
  if (class1) {
    elem.className = class1;
  }
  return elem;
}

function drawSongs(Songs) {
  if (Songs) {} else {
    return false;
  }
  var songParent = document.getElementById("SongList");
  songParent.innerHTML = "";
  if (Songs.length == 0) {
    return false;
  }
  for (var i in Songs) {
    var Song = Songs[i];
    var wrap = newElem("div", songParent, "song-wrap");
    var elem = newElem("div", wrap, "song pb shadow");
    if (Song.img) {
      var imgPar = newElem("div", elem, "song-image-parent")
      var img = newElem("img", imgPar, "song-image shadow");
      img.src = Song.img;
    }
    var title = newElem("div", elem, "song-title");
    title.innerHTML = Song.title;
    title.setAttribute("title", Song.name);
    var author = newElem("div", elem, "song-author");
    author.innerHTML = Song.author;
    author.setAttribute("title", Song.name);
    
    var links = newElem("div", elem, "link-buttons");
    var a = newElem("a", links, "link download-link");
    a.setAttribute("title", "Click for download options");
    var arrowBox = newElem("div", links, "arrow_box");
    var dlbtn = newElem("img", a, "link-button ");
    dlbtn.src = "http://static.tumblr.com/mv8e1sl/xQOoejjgl/download.svg";
    dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/Zldoejjgh/download.png'";
    for (var key in Song.links) {
      link = Song.links[key];
      var a = newElem("a", links, "link");
      if (link.constructor === Array) {
        a.href = link.join("");
      } else {
        a.href = link;
      }
      a.target = "_blank";
      var dlbtn = newElem("img", a, "link-button");
      if (key == "downloadFlac") {
        arrowBox.appendChild(a);
        dlbtn.className += " download-button";
        a.setAttribute("title", ("Free Download .flac (" + Song.name + ")"));
        dlbtn.src = "http://static.tumblr.com/mv8e1sl/otnoejhpo/flac.svg";
        dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/6ttoejhq2/flac.png'";
      } else if (key == "downloadMp3") {
        arrowBox.appendChild(a);
        dlbtn.className += " download-button";
        a.setAttribute("title", ("Free Download .mp3 (" + Song.name + ")"));
        dlbtn.src = "http://static.tumblr.com/mv8e1sl/NaQoejhqd/mp3.svg";
        dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/k2Moejhqh/mp3.png'";
      } else if (key == "soundcloud") {
        a.setAttribute("title", ("\"" + Song.name + "\" on Soundcloud"));
        dlbtn.src = "http://static.tumblr.com/mv8e1sl/50Soehftt/sc.svg";
        dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/48ioehftr/sc.png'";
      } else if (key == "youtube") {
        a.setAttribute("title", ("\"" + Song.name + "\" on Youtube"));
        dlbtn.src = "http://static.tumblr.com/mv8e1sl/g88oehfu7/yt.svg";
        dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/QnGoehfu3/yt.png'";
      } else if (key == "bandcamp") {
        a.setAttribute("title", ("\"" + Song.name + "\" on Bandcamp"));
        dlbtn.src = "http://static.tumblr.com/mv8e1sl/hNQoehftc/bc.svg";
        dlbtn.onerror="this.onerror=null; this.src='http://static.tumblr.com/mv8e1sl/Bpqoehft9/bc.png'";
      }
    }
    //Release Date
    if (Song.date) {
      if (Object.prototype.toString.call(Song.date) === "[object Date]") {
        var date = Song.date;
        var dates = newElem("div", elem, "DateContainer");
        var date1 = newElem("div", dates, "dateText");
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
        var date2 = newElem("div", dates, "dateText");
        date2.innerHTML = (timeAgo(date, 1) + " ago");
        date2.setAttribute("title", (timeAgo(date)));
      }
    }
  }
  return true;
}
