var theblock = document.getElementById("block");

window.addEventListener("resize", function(event) {
    viewWidth = window.innerWidth;
    viewHeight = window.innerHeight;
});



theblock.addEventListener("mouseover", function() {
    var boxdim = theblock.getBoundingClientRect();

    var height = window.innerHeight;
    var width = window.innerWidth;

    var y = Math.floor((height*Math.random()) + 1 - boxdim.height);
    var x = Math.floor((width*Math.random()) + 1 - boxdim.width);

    if(x < 0)
        x = 0;
    if(y < 0)
        y = 0;

    theblock.style.top = y + "px";
    theblock.style.left = x + "px";
});