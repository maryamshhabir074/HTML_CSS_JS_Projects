document.querySelector('.taskbar').addEventListener('click', function() {
    const startMenu = document.querySelector('.startmenu');
    // Toggle class to show/hide startmenu
    if (startMenu.style.bottom === "50px") {
        startMenu.style.bottom = "-650px";
    } else {
        startMenu.style.bottom = "50px";
    }
});

// document.querySelector('.taskbar').addEventListener('click', function () {
//   const startMenu = document.querySelector('.startmenu');
//   startMenu.classList.toggle('show');
// });
