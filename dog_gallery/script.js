var breed = $('#breed');
var submit = $('#submit');
var subbreedinput = $('#sub-breed-input');
var gallery = $('#gallery');
var sub = $('#sub-breed');

(function(){
    $.get('https://dog.ceo/api/breeds/list/all', function(data){
        for(let d in data.message) {
            breed.append('<option value=' + d + '>' + d + '</option>');
        }
    });
})();

subbreedinput.empty();

breed.change(function() {
    $.get('https://dog.ceo/api/breed/' + breed.find(':selected').text() + '/list', function(newdata){
        subbreedinput.empty();   
        if(newdata.message.length === 0) {
            return;
        }
        subbreedinput.append('<select id="sub-breed"></select>');
        sub = $('#sub-breed');
        console.log(newdata.message);
        for(var i = 0; i < newdata.message.length; i++) {
            sub.append('<option value=' + newdata.message[i] + '>' + newdata.message[i] + '</option>');
        }   
    }); 
});


function showimages() {
    gallery.empty();
    var input1 = breed.find(':selected').text();
    $.get('https://dog.ceo/api/breed/' + input1 + '/list', function(data){
        if(data.message.length)
        {
            var input2 = sub.find(':selected').text();
            $.get('https://dog.ceo/api/breed/'+ input1 + '/' + input2 + '/images', function(data){
                for(let i = 0; i < data.message.length; i++)
                {
                    gallery.append('<img class="image" src=' + data.message[i] + '>');
                }
            });
        }
        else
        {
            $.get('https://dog.ceo/api/breed/'+ input1 + '/images', function(data){
                console.log(data);
                for(let i = 0; i < data.message.length; i++)
                {
                    gallery.append('<img class="image" src=' + data.message[i] + '>');
                }
            });
        }
    });
}

submit.click(showimages);