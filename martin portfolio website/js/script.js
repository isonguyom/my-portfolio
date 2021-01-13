// Global declaratons
let menu = document.querySelector('.main-nav')
let toggler = document.querySelector('.hamburger')
let upper = document.getElementsByClassName('upper');
let middle = document.getElementsByClassName('middle');
let lower = document.getElementsByClassName('lower');
let mobilewin = window.matchMedia("(max-width: 699px)")
let bigwin = window.matchMedia("(min-with: 700px")

// // Toggling of menubar & hamburger
// let menuAnimation = function (e) {
//   if (e.matches) { // If media query matches
//     let tlToggler = new TimelineLite({ paused: true, reversed: true });
//     tlToggler
//       .to(upper, 0.5, { attr: { d: "M8,2 L2,8" }, x: 1, ease: Power2.easeInOut }, 'start')
//       .to(middle, 0.5, { autoAlpha: 0 }, 'start')
//       .to(lower, 0.5, { attr: { d: "M8,8 L2,2" }, x: 1, ease: Power2.easeInOut }, 'start')
//       .to(".main-nav", 2, {
//         top: "0%",
//         ease: Expo.easeInOut,
//         delay: -0.3
//       })

//       .staggerFrom(
//         ".main-nav li",
//         2,
//         { x: -200, opacity: 0, ease: Expo.easeOut },
//         -0.1
//       )

//     toggler.addEventListener('click', function () {
//       tlToggler.reversed() ? tlToggler.play() : tlToggler.reverse();
//     })
//   }
//   else {
//     let tlToggler = new TimelineLite();
//   }
// }
// mobilewin.addeventListener('resize', menuAnimation(mobilewin));



// Arrow bouncing, get to know me
TweenMax.to("#bouncingArrow", {y: -10, duration: 2, repeat:-1, ease: Power4.easeIn});
//to rotate backward from the current value forever:
TweenMax.to("#bouncingArrow", {y: 10, duration: 2, repeat:-1});


var position = [22.1959739, 78.02423269999997];

function showGoogleMaps() {

  var latLng = new google.maps.LatLng(position[0], position[1]);

  var mapOptions = {
    zoom: 16, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: true, // allow users to zoom the Google Map
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: latLng
  };

  map = new google.maps.Map(document.getElementById('googlemaps'),
    mapOptions);

  // Show the default red marker at the location
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP
  });
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);