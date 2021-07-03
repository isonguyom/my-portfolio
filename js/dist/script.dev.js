"use strict";

//Global declarations
var hamburger = document.querySelector(".hamburger-inner");
var darkModeToggler = document.getElementById("darkModeBtn"); //toggling menu on mobile

var displayMenu = function displayMenu() {
  //declarations
  var mainNav = document.querySelector(".main-nav");
  var hamburgerBar1 = document.querySelector(".bar1");
  var hamburgerBar2 = document.querySelector(".bar2");
  var welcomeBtn = document.querySelector(".welcome-btn");
  var logoMain = document.querySelector('.logo-main');
  var logoWhite = document.querySelector('.logo-white'); //toggling elements

  mainNav.classList.toggle('nav-active');
  hamburgerBar1.classList.toggle('bar-close');
  hamburgerBar2.classList.toggle('bar-close');
  welcomeBtn.classList.toggle('btn-disappear');
  darkModeToggler.classList.toggle('btn-disappear');
  logoMain.classList.toggle('hide-logo');
  logoWhite.classList.toggle('display-logo');
};

hamburger.addEventListener("click", displayMenu); //make aside element draggable on large screen

document.addEventListener('DOMContentLoaded', function () {
  var sidebar = document.querySelector('aside');
  sidebar.style.cursor = 'grab';
  var pos = {
    top: 0,
    left: 0,
    x: 0,
    y: 0
  };

  var mouseDownHandler = function mouseDownHandler(e) {
    sidebar.style.cursor = 'grabbing';
    sidebar.style.userSelect = 'none';
    pos = {
      left: sidebar.scrollLeft,
      top: sidebar.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY
    };
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  };

  var mouseMoveHandler = function mouseMoveHandler(e) {
    // How far the mouse has been moved
    var dx = e.clientX - pos.x;
    var dy = e.clientY - pos.y; // Scroll the element

    sidebar.scrollTop = pos.top - dy;
    sidebar.scrollLeft = pos.left - dx;
  };

  var mouseUpHandler = function mouseUpHandler() {
    sidebar.style.cursor = 'grab';
    sidebar.style.removeProperty('user-select');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }; // Attach the handler


  sidebar.addEventListener('mousedown', mouseDownHandler);
}); //dark mode toggling

var toggleDarkMode = function toggleDarkMode() {
  var site = document.body;
  site.classList.toggle("dark-mode");
  darkModeText();
};

darkModeToggler.addEventListener("click", toggleDarkMode);

var darkModeText = function darkModeText() {
  if (darkModeToggler.innerHTML === "dark mode") {
    darkModeToggler.innerHTML = "light mode";
  } else {
    darkModeToggler.innerHTML = "dark mode";
  }
}; //JQUERY CODES


$(document).ready(function () {
  //CHANGE IMAGE ON MOUSEOVER AND MOUSEOUT
  //Skill1 hovering
  $(".skill1").hover(function () {
    $('#skill1Icon').attr("src", "./images/web-dev2.png");
  }, function () {
    $('#skill1Icon').attr("src", "./images/web-dev.png");
  }); //Skill2 hovering

  $(".skill2").hover(function () {
    $('#skill2Icon').attr("src", "./images/wordpress2.png");
  }, function () {
    $('#skill2Icon').attr("src", "./images/wordpress.png");
  }); //Skill3 hovering

  $(".skill3").hover(function () {
    $('#skill3Icon').attr("src", "./images/responsive-design2.png");
  }, function () {
    $('#skill3Icon').attr("src", "./images/responsive-design.png");
  });
});