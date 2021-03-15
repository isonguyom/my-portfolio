// Global declaratons
let menu = document.querySelector('.mobile-nav')
let toggler = document.querySelector('.hamburger')
let upper = document.getElementsByClassName('upper');
let middle = document.getElementsByClassName('middle');
let lower = document.getElementsByClassName('lower');
let mobilewin = window.matchMedia("(max-width: 699px)");
let bigwin = window.matchMedia("(min-with: 700px)");




// Toggling and animating mobile-nav and hambuger icon
let tlToggler = new TimelineLite({
  paused: true,
  reversed: true
});

tlToggler
  .to(upper, 0.5, {
    attr: {
      d: "M8,2 L2,8"
    },
    x: 1,
    ease: Power2.easeInOut
  }, 'start')
  .to(middle, 0.5, {
    autoAlpha: 0
  }, 'start')
  .to(lower, 0.5, {
    attr: {
      d: "M8,8 L2,2"
    },
    x: 1,
    ease: Power2.easeInOut
  }, 'start')
  .to(".mobile-nav", 2, {
    top: 0,
    ease: Expo.easeInOut,
    delay: -0.3
  })

  .staggerFrom(
    ".mobile-nav li",
    2, {
      x: -200,
      opacity: 0,
      ease: Expo.easeOut
    },
    -0.1
  )

toggler.addEventListener('click', function () {
  tlToggler.reversed() ? tlToggler.play() : tlToggler.reverse();
});




// Arrow bouncing, get to know me
TweenMax.to("#bouncingArrow", {
  y: 10,
  opacity: 1,
  duration: 1.5,
  repeat: -1
}, -0.3);



// Fading balls on landing page
let object = {
  ball: '.fading-ball',
  duration: 10
}

gsap.fromTo(object.ball, object.duration, {
  opacity: 1,
  scale: 1.3,
  x: 0,
  transformOrigin: 'center'
}, {
  opacity: 0,
  x: Math.PI * 5,
  modifiers: {
    x: function (x) {
      return Math.sin(parseFloat(x)) * 30 + "px";
    }
  },
  scale: 0,
  stagger: {
    each: object.duration / document.querySelectorAll(object.ball).length,
    repeat: -1
  }
}, -0.2);



// About section background image animation
let bg = ('.about-section');
var moving = new TimelineMax({
  //reversed:true,
  paused: true,
  repeat: -1,
  yoyo: true,
});
moving
  .set(bg, {
    backgroundSize: "100% 100%"
  })
  .to(bg, 7, {
    backgroundSize: "120% 120%",
    overflow: "hidden",
    ease: Power4.ease
  })
  .progress(1).progress(0)
  .play();



  // Google map embedding
let position = [27.1959739, 78.02423269999997];

function showGoogleMaps() {

  let latLng = new google.maps.LatLng(position[0], position[1]);

  let mapOptions = {
    zoom: 10, // initialize zoom level - the max value is 21
    streetViewControl: false, // hide the yellow Street View pegman
    scaleControl: false, // allow users to zoom the Google Map
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