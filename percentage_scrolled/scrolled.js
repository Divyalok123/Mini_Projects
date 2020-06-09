
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

console.log(scrollH);
console.log(winh);
console.log(window.scrollY);

var thenumber = document.getElementById("number")
window.addEventListener("scroll", function() {
    var val = Math.floor((window.scrollY/(scrollH-winh))*100);
    thenumber.innerHTML = val;
});