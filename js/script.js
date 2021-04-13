//Global declarations
let hamburger = document.querySelector(".hamburger-inner");
let darkModeToggler = document.getElementById("darkModeBtn");


//toggling menu on mobile
let displayMenu = function () {
    //declarations
    let mainNav = document.querySelector(".main-nav");
    let hamburgerBar1 = document.querySelector(".bar1");
    let hamburgerBar2 = document.querySelector(".bar2");
    let welcomeBtn = document.querySelector(".welcome-btn")
    let logoMain = document.querySelector('.logo-main');
    let logoWhite = document.querySelector('.logo-white');

    //toggling elements
    mainNav.classList.toggle('nav-active');
    hamburgerBar1.classList.toggle('bar-close');
    hamburgerBar2.classList.toggle('bar-close');
    welcomeBtn.classList.toggle('btn-disappear');
    darkModeToggler.classList.toggle('btn-disappear');
    logoMain.classList.toggle('hide-logo');
    logoWhite.classList.toggle('display-logo');
};
hamburger.addEventListener("click", displayMenu)



//function for changing of icon on hovering
let changeIcon = function (icon, iconId) {
    document.getElementById(iconId).src = icon;
}


//make aside element draggable on large screen
document.addEventListener('DOMContentLoaded', function () {
    let sidebar = document.querySelector('aside');
    sidebar.style.cursor = 'grab';

    let pos = {
        top: 0,
        left: 0,
        x: 0,
        y: 0
    };

    let mouseDownHandler = function (e) {
        sidebar.style.cursor = 'grabbing';
        sidebar.style.userSelect = 'none';

        pos = {
            left: sidebar.scrollLeft,
            top: sidebar.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    let mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        let dx = e.clientX - pos.x;
        let dy = e.clientY - pos.y;

        // Scroll the element
        sidebar.scrollTop = pos.top - dy;
        sidebar.scrollLeft = pos.left - dx;
    };

    let mouseUpHandler = function () {
        sidebar.style.cursor = 'grab';
        sidebar.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    sidebar.addEventListener('mousedown', mouseDownHandler);
});


//dark mode toggling
let toggleDarkMode = function () {
    let site = document.body;
    site.classList.toggle("dark-mode");
    darkModeText();
}
darkModeToggler.addEventListener("click", toggleDarkMode);

let darkModeText = function () {
    if (darkModeToggler.innerHTML === "dark mode") {
        darkModeToggler.innerHTML = "light mode";
    } else {
        darkModeToggler.innerHTML = "dark mode";
    }
}