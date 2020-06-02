var current = document.querySelector(".elementone");
var next = document.querySelector(".elementtwo");
var input = document.getElementById("inputfield");

function numdigits(num)
{
    return Math.log(num)*Math.LOG10E + 1 | 0;
}

var intervaldur = 1000;
var timeoutdur = 500;
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
    if(numdigits(parseInt(maxim)) == 3) 
    {
        intervaldur = 400;
        timeoutdur = 200;
    }
    else if (numdigits(parseInt(maxim)) > 3)
    {
        intervaldur = 200;
        timeoutdur = 100;
    }
    interval = setInterval(animate, intervaldur);
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
    }, timeoutdur);
}


