String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};
String.prototype.capFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
function $(q, caller) {
  caller = caller || document;
  return caller.querySelectorAll(q);
}
function newElem(type, parent, arg3, id) {
  var elem = document.createElement(type);
  (parent || document.body).appendChild(elem);
  function setAttributes(obj) {
    for(var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if(i.toLowerCase) {
          if(i.toLowerCase() == "innerhtml" || i.toLowerCase() == "outerhtml" || i.toLowerCase() == "id") {
            elem[i] = obj[i];
          } else if(i.toLowerCase() == "class") {
            elem.className = obj[i];
          } else {
            elem.setAttribute(i, obj[i]);
          }
        }
      }
    }
  }
  if(isObject(arg3)) {
    setAttributes(arg3);
  } else if(arg3) {
    elem.className = arg3;
  }
  if (id) {
    elem.id = id;
  }
  return elem;
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
function isObject(val) {
  if (val === null) { return false; }
  return ((typeof val === 'function') || (typeof val === 'object'));
}
function createPopup() {
  var otherPopup = $(".popup-body")[0];
  if(otherPopup) {
    otherPopup.outerHTML = "";
    return createPopup();
  }
  var popupBody = newElem("div", false, "popup-body"),
    popupBg = newElem("div", popupBody, "popup-bg"),
    popupWrap = newElem("div", popupBody, "popup-wrap"),
    popup = newElem("div", popupWrap, "popup pb shadow"),
    popupInner = newElem("div", popup, "popup-wrap"),
    closeButton = newElem("div", popup, "close-wrap", "embeds-close"),
    closeButtonIcon = newElem("div", closeButton, "close", "embeds-close-icon");
  addEvent(popupBg, "click", closePopup);
  addEvent(closeButton, "click", closePopup);
  return popupInner;
  function closePopup() {
    $(".popup-body")[0].outerHTML = "";
  }
}
function setVectorSource(elem, id) {
  if(elem && id) {
    elem.src = images[id].svg;
    elem.onerror = "this.onerror = null; this.src = \'" + images[id].png + "\'";
  } else {
    return false;
  }
}
var images = {
  soundcloud: {
    svg: "https://static.tumblr.com/mv8e1sl/50Soehftt/sc.svg",
    png: "https://static.tumblr.com/mv8e1sl/48ioehftr/sc.png"
  },
  youtube: {
    svg: "https://static.tumblr.com/mv8e1sl/g88oehfu7/yt.svg",
    png: "https://static.tumblr.com/mv8e1sl/QnGoehfu3/yt.png"
  },
  bandcamp: {
    svg: "https://static.tumblr.com/mv8e1sl/hNQoehftc/bc.svg",
    png: "https://static.tumblr.com/mv8e1sl/Bpqoehft9/bc.png"
  },
  download: {
    svg: "https://static.tumblr.com/mv8e1sl/SYGoeqq6l/dl2.svg",
    png: "https://static.tumblr.com/mv8e1sl/tQKoeqq6o/dl2.png"
  },
  download2: {
    svg: "http://static.tumblr.com/mv8e1sl/rRrogsjia/dl3.svg",
    png: "http://static.tumblr.com/mv8e1sl/6aGogsjid/dl3.png"
  }
}
function timeAgo(oldDate, length) {
  length = length || 3;
  var newDate = new Date();
  if((newDate - oldDate) < 0) {
    return "Coming soon";
  }
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
  return (sb.join(', ') + " ago");
}
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function getCurrentMonth() {
  return (new Date()).getMonth()
}
function LetItSnow() {
  document.removeEventListener("DOMContentLoaded", LetItSnow);
  var snowCanvasId = "snowCanvas",
    framerate = 30,
    flakeNumberModifier = 0.1,
    fallSpeedModifier = 0.4;
  var canvas = document.getElementById(snowCanvasId);
  if(canvas) {
    canvas.outerHTML = "";
    return LetItSnow();
  }
  canvas = document.createElement("CANVAS");
  canvas.id = snowCanvasId;
  document.body.appendChild(canvas);
  var context = canvas.getContext("2d"),
    width = window.innerWidth,
    height = window.innerHeight,
    numFlakes = Math.min(width, 300) * height / 400 * flakeNumberModifier,
    flakes = [],
    TWO_PI = Math.PI * 2,
    radHeight = 40;
  canvas.width = width;
  canvas.height = height;
  console.log(width + "x" + height);
  flake = document.createElement("CANVAS"),
    flakeContext = flake.getContext("2d");
  // create flake grafic
  flake.width = 8;
  flake.height = 8;
  flakeContext.fillStyle = "#fff";
  flakeContext.beginPath();
  flakeContext.arc(4, 4, 4, 0, TWO_PI);
  flakeContext.fill();
  // init snowflakes
  for(var x = 0; x < numFlakes; x++) {
    flakes[x] = getRandomFlake(true);
  }
  // start tick at specified fps
  if(window.snowCanvasInterval) {
    clearInterval(window.snowCanvasInterval);
  }
  window.snowCanvasInterval = setInterval(tick, Math.floor(1000 / framerate));
  // main routine
  function tick() {
    var posX = 0,
      imageData;
    // reset canvas for next frame
    context.clearRect(0, 0, width, height);
    for(var x = 0; x < numFlakes; x++) {
      // calculate changes to snowflake
      posX = flakes[x].x + Math.sin(flakes[x].yMod + flakes[x].y / radHeight * (5 - flakes[x].size)) * flakes[x].waveSize * (1 - flakes[x].size);
      flakes[x].y += flakes[x].size * fallSpeedModifier; // bigger flakes are nearer to screen, thus they fall faster to create 3d effect
      // if snowflake is out of bounds, reset
      if(flakes[x].y > height + 5) {
        flakes[x] = getRandomFlake();
      }
      // draw snowflake
      context.globalAlpha = (flakes[x].size - 1) / 3;
      context.drawImage(flake, posX, flakes[x].y, flakes[x].size, flakes[x].size);
    }
    // repeat 300px wide strip with snowflakes to fill whole canvas
    if(width > 300) {
      context.globalAlpha = 1;
      context.drawImage(canvas, 300, 0);
      if(width > 600) context.drawImage(canvas, 600, 0);
      if(width > 1200) context.drawImage(canvas, 1200, 0);
      if(width > 2400) context.drawImage(canvas, 2400, 0);
    }
  }
  // randomize flake data
  function getRandomFlake(init) {
    return {
      x: range(10, 310),
      y: init ? range(-5, height + 5) : -5,
      size: (Math.max(range(1, 4), 2)),
      yMod: range(0, 150),
      waveSize: range(1, 4)
    };
  }
  // get a random number inside a range
  function range(start, end) {
    return Math.random() * (end - start) + start;
  }
}
(function() {
  var m = month[getCurrentMonth()];
  if((location.pathname != "/banner") && (m == "December" || m == "January" || m == "February")) {
    addEvent(document, "DOMContentLoaded", LetItSnow);
    addEvent(window, "resize", LetItSnow);
  }
})();
