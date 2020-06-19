function loadimages() {
    var solinput = $("#sol").val();
    var pageinput = $("#page").val();

    if(solinput && pageinput) {
        if(solinput > 1000) { alert("Invalid input!"); return; }
        $.ajax({
            url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
            data: {
                api_key: 'sFSGRCh8zc5zlTuxeYpeB7tnBpf8AQ9gKuMcNRgf',
                page: pageinput,
                sol: solinput
            },
            method: 'GET',
            success: function(data) {
                if(!data.photos.length) {alert("No image available!"); return; }
                $('#image-gallery').empty();
                for(var i = 0; i < data.photos.length; i++){
                    $('<img>', {
                        class: 'image',
                        height: '300px',
                        width: '300px',
                        alt: i,
                        src: data.photos[i].img_src
                    }).appendTo('#image-gallery');
                }
            }
        }).fail(function() { alert('Somethings wrong!');});
    } else { alert("Invalid input!");}
}

$("#submit").click(loadimages);