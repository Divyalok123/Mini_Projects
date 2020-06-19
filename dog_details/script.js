var imagebutton = $("#getbutton #button");
var nextbutton = $("#next-button");
var selectbox = $("#options");
var value;
var link;
var flag = true;

$.get('https://dog.ceo/api/breeds/list/all', function(data) {
    let breeds = data.message;
    for(let breed in breeds) {
        selectbox.append('<option value="' + breed + '">' + breed + '</option>');
    }
});

selectbox.change(function() { flag = true; });

function request() {
    value = $("#options option:selected").val();
    link = 'https://dog.ceo/api/breed/' + value + '/images';
    $.get(link, function(data){
        let imageurl = data.message;
        let random;
        if(flag) {random = Math.floor(Math.random()*imageurl.length); flag = false; }
        else {alert("Click 'Next' to see more!");}
        $("#theimage #image").attr('src', imageurl[random]); 
    }).fail(function(){alert("Something's wrong!!!")});
}

function nextitem() {
    link = 'https://dog.ceo/api/breed/' + value + '/images/random';
    $.get(link, function(data) {
        let imageurl = data.message;
        $("#theimage #image").attr('src', imageurl); 
    }).fail(function() {alert("Click 'See the dog!' first!")});
}

imagebutton.click('click', request);
nextbutton.click(nextitem);

