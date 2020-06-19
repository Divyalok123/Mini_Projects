
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

// function runthisfunction(data) {
//     // $('<img>', {
//     //     src: data.url,
//     //     height: "100vh",
//     //     width: "100%"
//     // }).appendTo('#images');

//     //we can also do above as
//     var ele = $(document.createElement('img'));
//     ele.attr('src', data.url);
//     ele.attr('height', "100%");
//     ele.attr('width', "100%");
//     ele.appendTo('#images');
// }

// $.ajax({
//     url: 'https://api.nasa.gov/planetary/apod',//?api_key=DEMO_KEY&date=2019-11-05', //api-key, date are query parameters we can also pass them in data
//     method: 'GET',
//     success: runthisfunction,
//     data: {
//         api_key: 'DEMO_KEY',
//         date: '2018-06-23'
//     }
// });