var changecolor = document.getElementById('colorchange');
var changeshape = document.getElementById('shapechange');
var circle = document.getElementById('circle');
var sh = "square";
var square = document.getElementById(sh);

var colors = ["green", "red", "maroon", "pink", "cyan"];
var shapes = ["triangle-topleft", "triangle-topright", "triangle-bottomright", "triangle-bottomleft", "triangle-up", "triangle-down", "oval", "circular", "rectangle", "square"]

changecolor.addEventListener('click', function() {
    var randcolor = colors[Math.floor(Math.random()*(colors.length))];
    circle.style.backgroundColor = randcolor;
});

changeshape.addEventListener('click', function() {
    var randshape = shapes[Math.floor(Math.random()*shapes.length)];
    square.setAttribute("id", randshape);
    sh = randshape;
});