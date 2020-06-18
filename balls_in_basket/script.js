var button = $("#button-con button");
var basket = $("#basket");
var sum = 0;
var color = ["red", "blue", "grey", "lightgray", "yellow", 'darkorchid', 'black', 'orange', 'cyan', 'green','purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
button.click(function(){
    var rand = Math.floor(Math.random()*15);
    var html = '<div class="ball" style="background-color: ' + color[rand] + ';"></div>';
    if(sum+85 > basket.width())
    {
        sum = 85;
        let h = basket.height();
        h = h+85;
        basket.css("height", h);
        basket.append(html);
    }
    else
    {
        basket.append(html);
        sum += 85;
    }

});