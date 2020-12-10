//8. attempting to add click events to table of images on about page (once again, does not work. i dont know)

window.addEventListener("load", cursorSetup);

function cursorSetup() {
    var cells = document.querySelectorAll("td img");
    for (var i = 0; i < cells.length; i++) {
        cells[i].style.cursor = "img/cursor_water.png";
    }
}

for (var i = 0; i < cells.length; i++) {
    var cells = document.querySelectorAll("td img");
    cells[i].addEventListener("click", function () {
        cells[i].style.cursor = "img/cursor_water.png";
    });
}
