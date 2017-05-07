const svgNS = "http://www.w3.org/2000/svg";
String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};
String.prototype.capFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
var images = {
  soundcloud: {
    svg: "https://static.tumblr.com/mv8e1sl/50Soehftt/sc.svg",
    png: "https://static.tumblr.com/mv8e1sl/48ioehftr/sc.png",
    inline: {
      wide: true,
      svg: { viewbox: "0 0 612 333.258" },
      path: { d: "m 522.729,138.188 c -0.717,-0.069 -1.404,-0.151 -2.064,-0.22 C 511.075,59.731 445.84,0 367.478,0 339.575,0 296.355,13.636 276.349,25.827 l -6.591,4.018 0,302.753 256.658,0.66 c 44.788,0 85.585,-47.966 85.585,-100.638 C 612,183.168 574.464,143.458 522.729,138.188 Z M 233.913,27.808 c -7.595,0 -13.76,6.151 -13.76,13.76 l 0,275.192 c 0,7.609 6.164,13.76 13.76,13.76 7.596,0 13.76,-6.15 13.76,-13.76 l 0,-275.192 c 0,-7.595 -6.164,-13.76 -13.76,-13.76 z m -55.038,27.52 c -7.595,0 -13.76,6.151 -13.76,13.76 l 0,247.673 c 0,7.609 6.164,13.76 13.76,13.76 7.596,0 13.76,-6.15 13.76,-13.76 l 0,-247.674 c 0,-7.595 -6.165,-13.759 -13.76,-13.759 z m -55.038,0 c -7.595,0 -13.76,6.151 -13.76,13.76 l 0,247.673 c 0,7.609 6.164,13.76 13.76,13.76 7.596,0 13.76,-6.15 13.76,-13.76 l 0,-247.674 c -0.001,-7.595 -6.165,-13.759 -13.76,-13.759 z m -55.039,55.038 c -7.595,0 -13.76,6.151 -13.76,13.76 l 0,192.635 c 0,7.609 6.164,13.76 13.76,13.76 7.596,0 13.76,-6.15 13.76,-13.76 l 0,-192.635 c 0,-7.596 -6.165,-13.76 -13.76,-13.76 z M 13.76,151.645 C 6.165,151.645 0,157.796 0,165.405 l 0,123.836 c 0,7.608 6.164,13.76 13.76,13.76 7.596,0 13.76,-6.151 13.76,-13.76 l 0,-123.837 c -0.001,-7.595 -6.165,-13.759 -13.76,-13.759 z" }
    }
  },
  youtube: {
    svg: "https://static.tumblr.com/mv8e1sl/g88oehfu7/yt.svg",
    png: "https://static.tumblr.com/mv8e1sl/QnGoehfu3/yt.png",
    inline: {
      wide: true,
      svg: { viewbox: "0 0 512 360.32501" },
      path: { d: "M 492.044,30.931 C 473.562,8.961 439.44,0 374.274,0 L 137.721,0 C 71.064,0 36.363,9.54 17.951,32.93 0,55.734 0,89.336 0,135.843 l 0,88.64 c 0,90.097 21.299,135.842 137.721,135.842 l 236.554,0 c 56.512,0 87.826,-7.908 108.085,-27.296 C 503.136,313.147 512,280.684 512,224.483 l 0,-88.64 C 512,86.798 510.611,52.998 492.044,30.931 Z M 328.706,192.4 221.288,248.54 c -2.401,1.255 -5.028,1.878 -7.65,1.878 -2.97,0 -5.933,-0.799 -8.557,-2.388 -4.942,-2.994 -7.959,-8.351 -7.959,-14.128 l 0,-111.92 c 0,-5.767 3.009,-11.119 7.941,-14.115 4.933,-2.996 11.069,-3.201 16.187,-0.542 l 107.418,55.778 c 5.465,2.837 8.897,8.479 8.905,14.635 0.007,6.162 -3.41,11.812 -8.867,14.662 z" }
    }
  },
  bandcamp: {
    svg: "https://static.tumblr.com/mv8e1sl/hNQoehftc/bc.svg",
    png: "https://static.tumblr.com/mv8e1sl/Bpqoehft9/bc.png",
    inline: {
      wide: true,
      svg: { viewbox: "0 0 445.98 270.215" },
      path: { d: "m 109.337,270.214 17.65,0 c -7.1328,-3.91614 -13.1573,-10.73379 -17.65,-16.619 z m -22.103,0 0,-188.732 L 0,270.214 Z m 233.852,0 4.322,-9.348 c -3.941,3.736 -8.646,6.943 -14.22,9.348 z M 445.98,0 124.895,0 88.033,79.752 l 22.629,0 0,69.488 c 13.3253,-12.96462 25.19884,-21.06968 40.732,-21.564 37.009,0 58.034,30.356 58.034,69.488 0,26.786 -8.991,60.802 -37.217,73.051 l 89.681,0 c -23.885,-9.826 -37.446,-34.318 -37.446,-65.071 0,-43.125 20.76,-77.468 66.815,-77.468 36.475,0 50.315,26.626 52.18,50.85 l -22.626,0 c -2.92,-18.636 -13.317,-29.813 -33.017,-29.813 -29.004,0 -38.326,27.677 -38.326,52.441 0,23.961 5.862,53.514 38.075,53.514 15.701,0 29.271,-11.72 33.268,-33.016 l 22.626,0 c -0.012,0.091 -0.025,0.183 -0.034,0.278 z M 147.668,254.666 c 25.554,0 37.536,-23.171 37.536,-53.775 0,-17.836 -1.864,-52.18 -38.066,-52.18 -33.813,0 -37.535,36.475 -37.535,59.098 0,36.999 23.16,46.857 38.065,46.857 z" }
    }
  },
  download: {
    svg: "https://static.tumblr.com/mv8e1sl/SYGoeqq6l/dl2.svg",
    png: "https://static.tumblr.com/mv8e1sl/tQKoeqq6o/dl2.png",
    inline: {
      svg: { viewbox: "0 0 48 48" },
      path: { d: "M38 18h-8V6H18v12h-8l14 14 14-14zM10 36v4h28v-4H10z" }
    }
  },
  download2: {
    svg: "https://static.tumblr.com/mv8e1sl/rRrogsjia/dl3.svg",
    png: "https://static.tumblr.com/mv8e1sl/6aGogsjid/dl3.png"
  },
  routenote: {
    svg: "https://static.tumblr.com/mv8e1sl/CAJoiyebd/rn.svg",
    png: "https://static.tumblr.com/mv8e1sl/oTgoiyebl/rn.png",
    inline: {
      svg: { viewbox: "0 0 99.3 99.3" },
      path: { d: "M 46.599609 0 C 43.999609 0.4 41.400781 0.69921875 38.800781 1.1992188 C 19.400781 5.3992188 3.6992188 22 0.69921875 41.5 C 0.39921875 43.2 0.2 44.899609 0 46.599609 L 0 52.800781 C 0.4 55.300781 0.69921875 57.799219 1.1992188 60.199219 C 5.4992187 80.199219 21.499219 95.299219 41.699219 98.699219 C 65.999219 102.69922 89.7 88.200781 97 64.800781 C 105.9 36.600781 88.700781 7.1996094 59.800781 1.0996094 C 57.500781 0.59960937 55.200781 0.4 52.800781 0 L 46.599609 0 z M 23 19.800781 L 24.099609 19.800781 L 43.5 19.800781 C 53.7 19.800781 62.299609 26.900781 64.099609 36.800781 C 65.899609 46.800781 60.400781 56.399609 50.800781 60.099609 C 50.600781 60.199609 50.3 60.300391 50 60.400391 C 51.8 65.200391 57.800781 69.299219 62.300781 68.699219 L 62.300781 65.300781 C 66.700781 67.600781 70.799219 69.900781 75.199219 72.300781 C 70.899219 74.700781 66.700391 76.900781 62.400391 79.300781 L 62.400391 75.800781 C 54.800391 75.300781 49 72.100781 45 65.800781 C 42.7 62.300781 41.499609 57.4 42.099609 54.5 C 42.999609 54.4 44 54.400781 45 54.300781 C 52.4 53.500781 57.8 47.200391 57.5 39.900391 C 57.2 32.600391 51.300391 26.699609 43.900391 26.599609 C 37.500391 26.499609 31 26.599609 24.5 26.599609 L 23 26.599609 L 23 19.800781 z" }
    }
  },
  spotify: {
    inline: {
      svg: { viewbox: "0 0 1674.8597 1674.8597" },
      path: { d: "M 1332.7997,742.399 C 1062.8597,582.09 617.5977,567.35 359.9067,645.56 c -41.383,12.56 -85.145,-10.81 -97.68,-52.18 -12.543,-41.41 10.793,-85.14 52.207,-97.72 295.812,-89.79 787.556,-72.45 1098.316,112.02 37.22,22.1 49.43,70.17 27.37,107.328 -22.08,37.219 -70.19,49.488 -107.32,27.391 z m -8.84,237.441 c -18.94,30.731 -59.12,40.371 -89.81,21.5 -225.05,-138.336 -568.216,-178.41 -834.466,-97.59 -34.527,10.434 -70.996,-9.035 -81.484,-43.496 -10.403,-34.527 9.074,-70.929 43.539,-81.429 304.152,-92.295 682.261,-47.59 940.741,111.253 30.69,18.903 40.35,59.102 21.48,89.762 z m -102.47,228.031 c -15.05,24.68 -47.18,32.411 -71.77,17.368 -196.653,-120.188 -444.173,-147.329 -735.673,-80.75 -28.09,6.441 -56.086,-11.161 -62.492,-39.25 -6.434,-28.079 11.102,-56.079 39.254,-62.489 318.996,-72.925 592.633,-41.539 813.361,93.34 24.61,15.031 32.36,47.18 17.32,71.781 z M 837.4337,0 C 374.9377,0 0,374.93 0,837.418 c 0,462.543 374.9377,837.4417 837.4337,837.4417 462.506,0 837.426,-374.8987 837.426,-837.4417 C 1674.8597,374.93 1299.9397,0 837.4337,0" }
    }
  },
  itunes: {
    inline: {
      svg: { viewbox: "0 0 416.90527 552" },
      path: { d: "m 348.20028,272.046 c -0.646,-64.841 52.88,-95.938 55.271,-97.483 -30.075,-44.01 -76.925,-50.039 -93.62,-50.736 -39.871,-4.037 -77.798,23.474 -98.033,23.474 -20.184,0 -51.409,-22.877 -84.476,-22.276 -43.458002,0.646 -83.529002,25.269 -105.906002,64.19 -45.152,78.35 -11.5629997,194.42 32.445,257.963 21.504,31.104 47.146002,66.038 80.813002,64.79 32.421,-1.294 44.681,-20.979 83.878,-20.979 39.196,0 50.215,20.979 84.524,20.335 34.888,-0.648 56.991,-31.699 78.347,-62.898 24.694,-36.084 34.862,-71.019 35.462,-72.812 -0.775,-0.354 -68.031,-26.119 -68.705,-103.568 z m -64.468,-190.285 c 17.869,-21.679 29.93,-51.756 26.64,-81.761 -25.739,1.048 -56.938,17.145 -75.405,38.775 -16.57,19.188 -31.075,49.813 -27.188,79.218 28.734,2.242 58.065,-14.602 75.953,-36.232 z" }
    }
  }
}
function $(q, caller) {
  caller = caller || document;
  return caller.querySelectorAll(q);
}
function newElem(type, parent, arg3, id) {
  type = type.toLowerCase();
  var elem,
      isSvg = (type == "svg" || type == "path" || type == "circle");
  if(isSvg) {
    elem = document.createElementNS(svgNS, type);
  } else {
    elem = document.createElement(type);
  }
  (parent || document.body).appendChild(elem);
  function setAttributes(obj) {
    for(var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if(i.toLowerCase) { 
          if(isSvg) {
            elem.setAttributeNS(svgNS, i, obj[i]);
          } else if(i.toLowerCase() == "innerhtml" || i.toLowerCase() == "outerhtml" || i.toLowerCase() == "id") {
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
    if(typeof arg3 == "string") {
      arg3 = arg3.split(" ");
    }
    elem.classList.add.apply(null, arg3);
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
function newPopup() {
  var otherPopup = $(".popup-body")[0];
  if(otherPopup) {
    otherPopup.outerHTML = "";
    return newPopup();
  }
  var popupBody = newElem("div", false, "popup-body"),
    popupBg = newElem("div", popupBody, "popup-bg"),
    popupWrap = newElem("div", popupBody, "popup-wrap"),
    popup = newElem("div", popupWrap, "popup pb shadow-5"),
    popupInner = newElem("div", popup, "popup-inner"),
    closeButton = newElem("div", popup, "close-wrap"),
    closeButtonIcon = newElem("div", closeButton, "close");
  addEvent(popupBg, "click", closePopup);
  addEvent(closeButton, "click", closePopup);
  return popupInner;
  function closePopup() {
    $(".popup-body")[0].outerHTML = "";
  }
}
function setVectorSource(elem, id) {
  if(elem && id && images[id] && images[id].inline) {
    /*
    if (images[id].svg) { elem.src = images[id].svg; }
    if (images[id].png) { elem.onerror = "this.onerror = null; this.src = \'" + images[id].png + "\'"; }
    */
    images[id].inline;
    if(images[id].inline.wide) {
      elem.classList.add("wide");
    }
    elem.setAttributeNS(svgNS, "viewbox", images[id].inline.svg.viewbox);
    /* elem.innerHTML += id.capFirstLetter(); */
    newElem("path", elem, { d: images[id].inline.path.d });
  } else {
    return false;
  }
}
function processLink(link, https) {
  if (!link) return undefined;
  if (link.href) {
    link = link.href;
  }
  if (link.constructor === Array) {
    link = link.join("");
  }
  if (https) {
    link = link.replace(/^http:\/\//i, 'https://');
  }
  return link;
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
function selectText(elem) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(elem);
    range.select();
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNodeContents(elem);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
  }
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
    addEvent(document, "DOMContentLoaded", function() {
      LetItSnow();
      addEvent(window, "resize", LetItSnow);
    });
  }
})();
