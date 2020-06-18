
var roll, name, marks;
$("input[type=button]").click(function(){
    roll = $("#roll").val();
    name = $("#name").val();
    marks = $("#marks").val();
    let html = '<div class="output-row">Roll No - <span id="rnum">' + roll + '</span>, <span id="name">' + name + '</span> has scored <span id="num">' + marks + '</span> marks</div>';
    if(roll && name && marks)
    {
        $("#output").append(html);
    }
    else{
        alert("Fill empty fields!");
    }
});