var current = document.querySelector(".elementone");
var next = document.querySelector(".elementtwo");
var input = document.getElementById("inputfield");

let maxim;
let count = 1;
var interval;
function counter() {
    // if(input.trim() == "") return;
    count = 1;
    current.innerHTML = 0;
    next.innerHTML = 1;
    maxim = input.value;
    if(maxim.trim() == "") return;
    interval = setInterval(animate, 1000);
}

function animate() {
    if(count == maxim) 
    { 
        clearInterval(interval);
    }

    next.classList.add('animate');
    setTimeout(function() {
        current.innerHTML++;
        next.innerHTML++;
        count++;
        next.classList.remove('animate');
    }, 500);
}


