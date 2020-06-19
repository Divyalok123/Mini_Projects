/** @format */

var link = 'https://codingninjas.in/api/v3/courses';
var img, name, lev, html;
function displaycards() {
    $.get(link, function(data){
        var datas = data.data.courses;
        for(var i  = 0; i < datas.length; i++) {
            img = datas[i].preview_image_url;
            name = datas[i].name;
            lev = datas[i].level; 
            html = '<div class="card"><img class="card-image" src="'+ img + '"></img><p class="card-text">' + name + '</p><p class="card-footer"><span>' + lev + '</span></p></div>';
            $("#cards").append(html);
        }
    }).fail(function() {alert("files not found");});
}

var thebutton = $("#button-box button");
thebutton.click(function () {
    $("body").css("background-color", "lightgray");
    $("#button-box").css("display", "none");
    displaycards();
});



