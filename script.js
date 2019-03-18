var cubeList;
function init() {
    cubeList = document.querySelectorAll('.cube');
}

function onCubeClick() {
    rollAllDice();
}

function rollAllDice(){
    Array.prototype.forEach.call (cubeList, function (cube) {

        rollDice(cube);
    
    } );
}

function rollDice(cubeToRoll) {
    rollTo(Math.floor(Math.random() * 6) + 1, cubeToRoll);
}

function rollTo(value, cubeToRoll) {
    var side;
    switch (value) {
        case 1:
            side = "front";
            break;
        case 2:
            side = "left";
            break;
        case 3:
            side = "bottom";
            break;
        case 4:
            side = "top";
            break;
        case 5:
            side = "right";
            break;
        case 6:
            side = "back";
            break;
    }
    rotateToSide(side, cubeToRoll);
}

var currentClass = '';
function rotateToSide(side, cubeToRotate) {
    var showClass = 'show-' + side;
    if (currentClass) {
        cubeToRotate.classList.remove(currentClass);
    }
    cubeToRotate.classList.add(showClass);
    currentClass = showClass;

    cubeToRotate.classList.remove("spinning");
    void cubeToRotate.offsetWidth;
    cubeToRotate.classList.add("spinning");
}