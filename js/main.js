var site = {} || site;
var textObj = document.getElementById("text");
var gallObj = document.getElementById("galleryContainer");
var backWhite = document.getElementById("backWhite");
var headlineObj = document.getElementById("headerText");
var socjalObj = document.getElementById("socialContainer");
var dotObj = document.getElementById("dot");

window.onload = function() {
  site.menuclick = true;
  site.delta = 0;
  textObj.style.animation = "fadeInAnimation 1.2s forwards";
  textObj.style.WebkitAnimation = "fadeInAnimation 1.2s forwards";
  gallObj.style.display = "none";
  site.slide = 1;
  site.check = 1;
  slideOneEvent();

  var touchSurface = document.getElementById('block'),
    startX,
    startY,
    dist,
    threshold = 150, //required min distance traveled to be considered swipe
    thresholdLeft = -150,
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime;

    touchSurface.addEventListener('touchstart', function(e) {
      var touchObj = e.changedTouches[0];
      dist = 0;
      startX = touchObj.pageX;
      startY = touchObj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    }, false);

    touchSurface.addEventListener('touchmove', function(e) {
      e.preventDefault(); // prevent scrolling when inside DIV
    }, false);

    touchSurface.addEventListener('touchend', function (e) {
      var touchObj = e.changedTouches[0];
      dist = touchObj.pageX - startX ;// get total dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime; // get time elapsed
      var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchObj.pageY - startY) <= 100);
      var swipeleftBol = (elapsedTime <= allowedTime && dist <= thresholdLeft  && Math.abs(touchObj.pageY - startY) <= 100);
      handleswipe(swiperightBol,"right");
      handleswipe(swipeleftBol,"left");
      e.preventDefault();
    },false);


}

window.addEventListener('mousewheel', MouseWheelHandler, false);
if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else {
  window.addEventListener("onmousewheel", MouseWheelHandler);
}

function handleswipe(swipe,side) {
  if (swipe && side ==="right"){
    if(site.slide<3){
      site.slide = site.slide + 1;
    }
    if(site.slide == 1){
      slideOneEvent();
    }
    if(site.slide == 2){
      slideTwoEvent();
    }
    if(site.slide == 3){
      slideThreeEvent();
    }
  }

  if (swipe && side ==="left"){
    if(site.slide>1){
      site.slide = site.slide - 1;
    }
    if(site.slide == 1){
      slideOneEvent();
    }
    if(site.slide == 2){
      slideTwoEvent();
    }
    if(site.slide == 3){
      slideTwoEvent();
    }
  }
}

function MouseWheelHandler(e) {
  // cross-browser wheel delta
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
  if (site.delta < 1 && site.delta > -13) {
    site.delta = site.delta + delta;

    if (site.delta < 1 && site.delta > -4) {
      // Slide 1
      slideOneEvent();
    }
    if (site.delta < -4 && site.delta > -9) {
      // Slide 2
      slideTwoEvent();
    }

    if (site.delta < -9 && site.delta > -13) {
      // Slide 3
      slideThreeEvent();
    }
  } else {
    if (site.delta == 1) {
      site.delta = 0;
    }
    if (site.delta == -13) {
      site.delta = -12;
    }
  }
}

function slideOneEvent() {

  site.slide = 1;
  textObj.style.display = "block";
  textObj.style.animation = "fadeInAnimation 1.4s forwards";
  textObj.style.WebkitAnimation = "fadeInAnimation 1.4s forwards";
  gallObj.style.display = "none";
  headlineObj.innerHTML = "About";
  backWhite.style.backgroundColor = "rgb(255,255,255)";
  headlineObj.style.backgroundColor = "rgb(125,125,125)";
  document.getElementById("headerTextMe").style.display = "inline-block";
  socjalObj.style.display = "none";
  dotObj.classList.remove("animateDot1");

  console.log("site.slide 1");
    console.log(site.slide);
    console.log(site.check );
  // If not white then fade out to white
  if (site.slide == 1 && site.check > 1) {
    console.log(site.slide);
    console.log("true 1 >1");
    headlineObj.style.backgroundColor = "rgb(125,125,125)";
    backWhite.style.backgroundColor = "rgb(125,125,125)";
    dotObj.style.backgroundColor = "rgb(164, 191, 198)";
    document.getElementById("headerTextMe").style.display = "inline-block";
    backWhite.style.animation = "fadeOutGallAnimation 0.8s forwards";
    backWhite.style.WebkitAnimation = "fadeOutGallAnimation 0.8s forwards";
    site.check = 1;
  }
}

function slideTwoEvent() {

  site.slide = 2;
  console.log("site.slide 2");
  console.log(site.slide);

  headlineObj.style.backgroundColor = "rgb(164, 191, 198)";
  headlineObj.innerHTML = "Gallery";
  document.getElementById("headerTextMe").style.display = "none";
  textObj.style.display = "none";

  if (site.slide == 2 && site.check == 3) {
    console.log("true 2 = 3");
    console.log(site.slide);
    console.log(site.check );

    dotObj.classList.remove("animateDot2");
    dotObj.style.backgroundColor = "rgb(125,125,125)";
    gallObj.style.display = "flex";
    socjalObj.style.display = "none";
    backWhite.style.animation = "fadeOutConAnimation 0.8s forwards";
    backWhite.style.WebkitAnimation = "fadeOutConAnimation 0.8s forwards";
    gallObj.style.animation = "fadeInAnimation 0.8s forwards";
    gallObj.style.WebkitAnimation = "fadeInAnimation 0.8s forwards";
    // site.check = 2;
  }

  if (site.slide == 2 && site.check !== 3) {

    console.log("true 2 !3");
    console.log(site.slide);
    console.log(site.check );

    dotObj.classList.add("animateDot1");
    backWhite.style.animation = "fadeInGallAnimation 0.8s forwards";
    backWhite.style.WebkitAnimation = "fadeInGallAnimation 0.8s forwards";
    gallObj.style.display = "flex";
    gallObj.style.animation = "fadeInAnimation 0.8s forwards";
    gallObj.style.WebkitAnimation = "fadeInAnimation 0.8s forwards";
    site.check = 2;
  }

}

function slideThreeEvent() {
  site.check = 3;
  site.slide = 3;
  console.log("site.slide 3");
  console.log(site.slide);
  textObj.style.display = "none";
  dotObj.classList.remove("animateDot1");
  dotObj.classList.add("animateDot2");
  socjalObj.style.display = "flex";
  headlineObj.innerHTML = "Contact";
  headlineObj.style.backgroundColor = "rgb(125,125,125)";
  gallObj.style.display = "none";
  backWhite.style.animation = "fadeInConAnimation 0.8s forwards";
  backWhite.style.WebkitAnimation = "fadeInConAnimation 0.8s forwards";
  socjalObj.style.animation = "fadeInAnimation 0.8s forwards";
  socjalObj.style.WebkitAnimation = "fadeInAnimation 0.8s forwards";
}

var menuclick = document.getElementById("menu");
var lContainer = document.getElementById("lContainer");

menuclick.addEventListener("click", function() {
  var scr = screen.width;
  if (site.menuclick) {
    // menuclick.style.width = "500px";
    if (scr <= 768) {
      menuclick.style.width = "100%";
    } else {
      menuclick.style.width = "40%";
    }
    menuclick.style.justifyContent = "space-evenly";
    site.menuclick = false;
    setTimeout(function() {
      lContainer.style.display = "inline-block";
      lContainer.style.opacity = "1.0";
    }, 150);

  } else {
    // menuclick.style.width = "110px";
    if (scr <= 768) {
      menuclick.style.width = "20%";
    } else {
      menuclick.style.width = "9vw";
    }
    site.menuclick = true;
    lContainer.style.display = "none";
  }

});
