var cubeList;
window.onload = function() {
    cubeList = document.querySelectorAll('.cube');

	var elements = document.getElementsByTagName('*'),
		i;
	for (i in elements) {
		if (elements[i].hasAttribute && elements[i].hasAttribute('data-include')) {
			fragment(elements[i], elements[i].getAttribute('data-include'));
		}
	}
	function fragment(el, url) {
		var localTest = /^(?:file):/,
			xmlhttp = new XMLHttpRequest(),
			status = 0;

		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4) {
				status = xmlhttp.status;
			}
			if (localTest.test(location.href) && xmlhttp.responseText) {
				status = 200;
			}
			if (xmlhttp.readyState == 4 && status == 200) {
				el.outerHTML = xmlhttp.responseText;
			}
		}

		try { 
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
		} catch(err) {
		}
    }
    
    var element = document.querySelector(".scene-container");
    var hammertime = Hammer(element);
    hammertime.on("swiperight", function(event) { swipe(); });    
    hammertime.on("swipeleft", function(event) { swipe(); });  


}

function swipe(){
    rollAllDice();
}

function onCubeClick() {
    rollAllDice();
}

shaker.on("step",function(o){
    rollAllDice();
    var element = document.getElementById("score");
    await sleep(2500);
    element.textContent = `You scored a combined ${o.steptreshold}`;
 });

async function rollAllDice(){
    var score = 0;
    Array.prototype.forEach.call (cubeList, function (cube) {
        var number = Math.floor(Math.random() * 6) + 1;
        score += number;
        rollTo(number, cube);
    } );
}

function rollDice(cubeToRoll) {
    
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

function rotateToSide(side, cubeToRotate) {
    var showClass = 'show-' + side;
    if (cubeToRotate.currentClass) {
        cubeToRotate.classList.remove(cubeToRotate.currentClass);
    }
    cubeToRotate.classList.add(showClass);
    cubeToRotate.currentClass = showClass;

    cubeToRotate.classList.remove("spinning");
    void cubeToRotate.offsetWidth;
    cubeToRotate.classList.add("spinning");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }