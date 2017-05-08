const svgNS = "http://www.w3.org/2000/svg";
HTMLElement.prototype.setClass = function(classes) {
  if(typeof classes == "string") {
    classes = classes.split(" ");
  }
  if(classes.length == 1) {
    this.classList.add(classes);
  } else if(classes.length > 1) {
    for (var i = 0; i < classes.length; i++) {
      this.classList.add(classes[i]);
    }
  }
}
String.prototype.isEmpty = function() {
  return (this.length === 0 || !this.trim());
};
String.prototype.capFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
var images = {
  soundcloud: {
    inline: {
      wide: true,
      svg: { viewbox: "0 0 612 333.3" },
      path: { d: "m522.7 138.2c-0.7-0.1-1.4-0.2-2.1-0.2C511.1 59.7 445.8 0 367.5 0 339.6 0 296.4 13.6 276.3 25.8l-6.6 4 0 302.8 256.7 0.7c44.8 0 85.6-48 85.6-100.6C612 183.2 574.5 143.5 522.7 138.2ZM233.9 27.8c-7.6 0-13.8 6.2-13.8 13.8l0 275.2c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.1 13.8-13.8l0-275.2c0-7.6-6.2-13.8-13.8-13.8zm-55 27.5c-7.6 0-13.8 6.2-13.8 13.8l0 247.7c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.1 13.8-13.8l0-247.7c0-7.6-6.2-13.8-13.8-13.8zm-55 0c-7.6 0-13.8 6.2-13.8 13.8l0 247.7c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.1 13.8-13.8l0-247.7c0-7.6-6.2-13.8-13.8-13.8zm-55 55c-7.6 0-13.8 6.2-13.8 13.8l0 192.6c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.1 13.8-13.8l0-192.6c0-7.6-6.2-13.8-13.8-13.8zM13.8 151.6C6.2 151.6 0 157.8 0 165.4l0 123.8c0 7.6 6.2 13.8 13.8 13.8 7.6 0 13.8-6.2 13.8-13.8l0-123.8c0-7.6-6.2-13.8-13.8-13.8z" }
    }
  },
  youtube: {
    inline: {
      wide: true,
      svg: { viewbox: "0 0 512 360.3" },
      path: { d: "M492 30.9C473.6 9 439.4 0 374.3 0L137.7 0C71.1 0 36.4 9.5 18 32.9 0 55.7 0 89.3 0 135.8l0 88.6c0 90.1 21.3 135.8 137.7 135.8l236.6 0c56.5 0 87.8-7.9 108.1-27.3C503.1 313.1 512 280.7 512 224.5l0-88.6C512 86.8 510.6 53 492 30.9ZM328.7 192.4 221.3 248.5c-2.4 1.3-5 1.9-7.6 1.9-3 0-5.9-0.8-8.6-2.4-4.9-3-8-8.4-8-14.1l0-111.9c0-5.8 3-11.1 7.9-14.1 4.9-3 11.1-3.2 16.2-0.5l107.4 55.8c5.5 2.8 8.9 8.5 8.9 14.6 0 6.2-3.4 11.8-8.9 14.7z" }
    }
  },
  bandcamp: {
    inline: {
      wide: true,
      svg: { viewbox: "0 0 446 270.2" },
      path: { d: "m109.3 270.2 17.7 0c-7.1-3.9-13.2-10.7-17.6-16.6zm-22.1 0 0-188.7L0 270.2Zm233.9 0 4.3-9.3c-3.9 3.7-8.6 6.9-14.2 9.3zM446 0 124.9 0 88 79.8l22.6 0 0 69.5c13.3-13 25.2-21.1 40.7-21.6 37 0 58 30.4 58 69.5 0 26.8-9 60.8-37.2 73.1l89.7 0c-23.9-9.8-37.4-34.3-37.4-65.1 0-43.1 20.8-77.5 66.8-77.5 36.5 0 50.3 26.6 52.2 50.9l-22.6 0c-2.9-18.6-13.3-29.8-33-29.8-29 0-38.3 27.7-38.3 52.4 0 24 5.9 53.5 38.1 53.5 15.7 0 29.3-11.7 33.3-33l22.6 0c0 0.1 0 0.2 0 0.3zM147.7 254.7c25.6 0 37.5-23.2 37.5-53.8 0-17.8-1.9-52.2-38.1-52.2-33.8 0-37.5 36.5-37.5 59.1 0 37 23.2 46.9 38.1 46.9z" }
    }
  },
  download: {
    inline: {
      wide: true,
      svg: { viewbox: "0 0 28 34" },
      path: { d: "M28 12h-8V0H8v12H0l14 14 14-14zM0 30v4h28v-4H0z" }
    }
  },
  routenote: {
    inline: {
      svg: { viewbox: "0 0 99.3 99.3" },
      path: { d: "M46.599609 0C43.999609 0.4 41.400781 0.69921875 38.800781 1.1992188 19.400781 5.3992188 3.6992188 22 0.69921875 41.5 0.39921875 43.2 0.2 44.899609 0 46.599609L0 52.800781C0.4 55.300781 0.69921875 57.799219 1.1992188 60.199219 5.4992187 80.199219 21.499219 95.299219 41.699219 98.699219 65.999219 102.69922 89.7 88.200781 97 64.800781 105.9 36.600781 88.700781 7.1996094 59.800781 1.0996094 57.500781 0.59960937 55.200781 0.4 52.800781 0L46.599609 0zM23 19.800781L24.099609 19.800781 43.5 19.800781C53.7 19.800781 62.299609 26.900781 64.099609 36.800781 65.899609 46.800781 60.400781 56.399609 50.800781 60.099609 50.600781 60.199609 50.3 60.300391 50 60.400391 51.8 65.200391 57.800781 69.299219 62.300781 68.699219L62.300781 65.300781C66.700781 67.600781 70.799219 69.900781 75.199219 72.300781 70.899219 74.700781 66.700391 76.900781 62.400391 79.300781L62.400391 75.800781C54.800391 75.300781 49 72.100781 45 65.800781 42.7 62.300781 41.499609 57.4 42.099609 54.5 42.999609 54.4 44 54.400781 45 54.300781 52.4 53.500781 57.8 47.200391 57.5 39.900391 57.2 32.600391 51.300391 26.699609 43.900391 26.599609 37.500391 26.499609 31 26.599609 24.5 26.599609L23 26.599609 23 19.800781z" }
    }
  },
  spotify: {
    inline: {
      svg: { viewbox: "0 0 1674.9 1674.9" },
      path: { d: "M1332.8 742.4C1062.9 582.1 617.6 567.4 359.9 645.6c-41.4 12.6-85.1-10.8-97.7-52.2-12.5-41.4 10.8-85.1 52.2-97.7 295.8-89.8 787.6-72.4 1098.3 112 37.2 22.1 49.4 70.2 27.4 107.3-22.1 37.2-70.2 49.5-107.3 27.4zm-8.8 237.4c-18.9 30.7-59.1 40.4-89.8 21.5-225-138.3-568.2-178.4-834.5-97.6-34.5 10.4-71-9-81.5-43.5-10.4-34.5 9.1-70.9 43.5-81.4 304.2-92.3 682.3-47.6 940.7 111.3 30.7 18.9 40.4 59.1 21.5 89.8zm-102.5 228c-15 24.7-47.2 32.4-71.8 17.4-196.7-120.2-444.2-147.3-735.7-80.7-28.1 6.4-56.1-11.2-62.5-39.2-6.4-28.1 11.1-56.1 39.3-62.5 319-72.9 592.6-41.5 813.4 93.3 24.6 15 32.4 47.2 17.3 71.8zM837.4 0C374.9 0 0 374.9 0 837.4c0 462.5 374.9 837.4 837.4 837.4 462.5 0 837.4-374.9 837.4-837.4C1674.9 374.9 1299.9 0 837.4 0" }
    }
  },
  itunes: {
    inline: {
      svg: { viewbox: "0 0 416.9 552" },
      path: { d: "m348.2 272c-0.6-64.8 52.9-95.9 55.3-97.5-30.1-44-76.9-50-93.6-50.7-39.9-4-77.8 23.5-98 23.5-20.2 0-51.4-22.9-84.5-22.3-43.5 0.6-83.5 25.3-105.9 64.2-45.2 78.4-11.6 194.4 32.4 258 21.5 31.1 47.1 66 80.8 64.8 32.4-1.3 44.7-21 83.9-21 39.2 0 50.2 21 84.5 20.3 34.9-0.6 57-31.7 78.3-62.9 24.7-36.1 34.9-71 35.5-72.8-0.8-0.4-68-26.1-68.7-103.6zm-64.5-190.3c17.9-21.7 29.9-51.8 26.6-81.8-25.7 1-56.9 17.1-75.4 38.8-16.6 19.2-31.1 49.8-27.2 79.2 28.7 2.2 58.1-14.6 76-36.2z" }
    }
  },
  googleMusic: {
    inline: {
      svg: { viewbox: "0 0 468 512" },
      path: { d: "m269.7 279.7-230.9 230.9c3.8 0.9 7.6 1.4 11.5 1.4 9.5 0 19-2.7 27.3-8.1l267-149.4-74.8-74.8zm172.5-67.6-67.3-37.6-81.5 81.5 81.5 81.5 67.3-37.6c16.1-9 25.7-25.4 25.7-43.9 0-18.5-9.6-34.9-25.7-43.9zM10.1 20.1C3.7 28.7 0 39.2 0 50.3L0 461.7c0 11.1 3.7 21.6 10.1 30.2L246 256 10.1 20.1ZM77.6 8.1c-11.7-7.5-25.7-9.8-38.8-6.7L269.7 232.3 344.6 157.4 77.6 8.1Z" }
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
      isSvg = (document.createElementNS && document.setAttributeNS) && (type == "svg" || type == "path" || type == "circle");
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
          if(i.toLowerCase() == "innerhtml" || i.toLowerCase() == "outerhtml" || i.toLowerCase() == "id") {
            elem[i] = obj[i];
          } else if(i.toLowerCase() == "class") {
            elem.setClass(obj[i]);
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
    elem.setClass(arg3);
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
    elem.setAttribute("viewbox", images[id].inline.svg.viewbox);
    elem.innerHTML += id.capFirstLetter();
    newElem("path", elem, { d: images[id].inline.path.d });
    elem.outerHTML += "";
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
