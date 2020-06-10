var firstclasses = document.getElementsByClassName("elementone");
var secondclasses = document.getElementsByClassName("elementtwo");
var thebutton = document.getElementById("button");

var interval = 0;

function increaseCounter(firstclasses, secondclasses, n) 
{
    let firstclass = firstclasses[n];
    let secondclass = secondclasses[n];

    if(firstclass.innerText == 9)
    {
        increaseCounter(firstclasses, secondclasses, n-1);  
    }

    secondclass.classList.add("up");
    setTimeout(function(){
        firstclass.innerText = secondclass.innerText;
        secondclass.classList.remove("up");
        secondclass.innerText = parseInt(secondclass.innerText)+1;
        if(secondclass.innerText > 9) {
            secondclass.innerText = 0;
        }
    }, 600);
}

function reset(firstclasses, secondclasses, n)
{
    for(var i = 0; i < n; i++)
    {
        firstclasses[i].innerText = 0;
        secondclasses[i].innerText = 1;
    }
    count = 0;
}


thebutton.addEventListener("click", function(){
    var input = document.getElementById("input-box");
    if(isNaN(input.value) || (parseInt(input.value) != input.value))
    {
        alert("Not a valid number!");
        clearInterval(interval);
        return;
    }

    if(input.value < 1 || input.value > 99999)
    {
        alert("Out of bounds or not a right value!");
        clearInterval(interval);
        return;
    }

    reset(firstclasses, secondclasses, 5);
    clearInterval(interval);

    var count = 0;
    
    interval = setInterval(function() {
        if(count == parseInt(input.value)) {
            clearInterval(interval);
            alert("Done!");
            return;
        }
        increaseCounter(firstclasses, secondclasses, 4);
        count++;
    }, 730);

});



