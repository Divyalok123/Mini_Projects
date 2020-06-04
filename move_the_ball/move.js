/** @format */

// var theball = document.getElementById("ball");

// var count = 1;
// theball.addEventListener("click", function(){
//     if(count % 2 == 1) { theball.style.top = "85vh"; count++; }
//     else { theball.style.top = "0"; count++; }
//     theball.style.transition = "all 2s ease-out";
// });
"use strict";
document.addEventListener("keydown", mover);

function mover(event) {
	var x = event.charCode || event.keyCode;
	var theball = document.getElementById("ball");
	var dimensions = theball.getBoundingClientRect();
	var leftval = dimensions.left;
	var topval = dimensions.top;
	
	if (x == 119 || x == 87) {
		//upwards
		if (topval <= 6) return;
		topval -= 10;
		theball.style.top = topval + "px";
	} else if (x == 97 || x == 65) {
		//left
		if (leftval < 6) return;
		leftval -= 10;
		theball.style.left = leftval + "px";
	} else if (x == 115 || x == 83) {
		//down
		if (topval >= window.innerHeight - theball.offsetHeight - 7.2) return;
		topval += 10;
		theball.style.top = topval + "px";
	} else if (x == 100 || x == 68) {
		//right
		if (leftval >= window.innerWidth - theball.offsetWidth - 8) return;
		leftval += 10;
		theball.style.left = leftval + "px";
	}
}
