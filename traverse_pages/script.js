/** @format */

$("#bottom-container").css("height", $(window).height() - $("#button-container").height() -58 + "px");
$('#image-gallery').css("height", $(window).height() - $("#button-container").height() - 135 + "px");
var page;
var prevb = $("#prev");
var nextb = $("#next");

(function(){
    prevb.attr("disabled", "true");
    nextb.attr("disabled", "true");
    nextb.addClass("nohover");
    prevb.addClass("nohover");
})();

function disabledness(photos) {

    if(photos.length === 0) {
        nextb.addClass("nohover");
        prevb.removeClass("nohover");
        prevb.removeAttr("disabled");
        nextb.attr("disabled", "true");
        page--;
    }
    else if(page == 1) {
        nextb.removeClass("nohover");
        nextb.removeAttr("disabled");
        prevb.addClass("nohover");
        prevb.attr("disabled", "true");
    }
    else{
        prevb.removeClass("nohover");
        nextb.removeClass("nohover");
        prevb.removeAttr("disabled");
        nextb.removeAttr("disabled");
    }
}

function loadimages(pageno) {
    if(!pageno) alert("Something went wrong!");

	var solinput = $("#sol").val();

	if (solinput) {
		if (solinput > 1000 || isNaN(solinput)) {
			alert("Invalid input!");
			return;
		}
		$.ajax({
			url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
			data: {
				api_key: "sFSGRCh8zc5zlTuxeYpeB7tnBpf8AQ9gKuMcNRgf",
				sol: solinput,
				page: pageno,
			},
			method: "GET",
			success: function (data) {
				if (!data.photos.length) {
                    alert("No more images available!");
                    disabledness(data.photos);
					return;
                }
                
                disabledness(data.photos);

				$("#image-gallery").empty();
				for (var i = 0; i < data.photos.length; i++) {
					$("<img>", {
						class: "image",
						height: "300px",
						width: "300px",
						alt: i,
						src: data.photos[i].img_src,
					}).appendTo("#image-gallery");
                }
			},
		}).fail(function () {
			alert("Something's wrong!");
		});
	} else {
		alert("Invalid input!");
	}
}

$("#submit").click(function() {
    page = 1;
    loadimages(page);
});

$("#prev").click(function(){
    page--;
    loadimages(page);
});

$("#next").click(function(){
    page++;
    loadimages(page);
});