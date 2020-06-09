function getHeightt()
{
    return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
}

var scrollH = getHeightt();
var winh = window.innerHeight;

window.onresize = function(e)
{
    scrollH = getHeightt();
    winh = window.innerHeight;
};

var thenumber = document.getElementById("number")
window.addEventListener("scroll", function() {
    var yoff = window.pageYOffset;
    var val = Math.floor((yoff/(scrollH-winh))*100);
    thenumber.innerHTML = val;
});
