
function loadimages() {
    var datevalue = $('#date').val();
    if(!datevalue) {alert('Please input the date!'); return;}
    $.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=sFSGRCh8zc5zlTuxeYpeB7tnBpf8AQ9gKuMcNRgf&earth_date=' + datevalue, function(data){
        if(data.photos.length == 0) { alert('No image available'); return; }
        $("#image-gallery").empty();
        for(var i = 0; i < data.photos.length; i++)
        {
            console.log(data.photos[i]);
            $('<img>', {
                class: "image",
                height: "300px",
                width: "300px",
                src: data.photos[i].img_src
            }).appendTo('#image-gallery');
        }
    }).fail(function() {alert('Some error occured!');});
}

$("#submit").click(loadimages);