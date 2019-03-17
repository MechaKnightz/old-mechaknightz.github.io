var cube;
function init() {
    cube = document.querySelector('.cube');
}

function onCubeClick() {
    rollDice();
}

function rollDice() {
    rollTo(Math.floor(Math.random() * 6) + 1);
}

function rollTo(value) {
    console.log(value);
    switch (value) {
        case 1:
            rotateToSide("front");
            break;
        case 2:
            rotateToSide("left");
            break;
        case 3:
            rotateToSide("bottom");
            break;
        case 4:
            rotateToSide("top");
            break;
        case 5:
            rotateToSide("right");
            break;
        case 6:
            rotateToSide("back");
            break;
    }
}

var currentClass = '';
function rotateToSide(side) {
    var showClass = 'show-' + side;
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    cube.classList.remove("spinning");
    void cube.offsetWidth;
    cube.classList.add("spinning");
}