$(document).ready(function(){
    $("#inttrip").hover(function() {
        $(this).css("font-size", "xx-large");
        $(this).css("box-shadow", "1px 1px 5px rgb(117, 67, 75)");
        $("#inttrip1").removeClass("hidden");
        $("#inttrip2").removeClass("hidden");
        $("#text").addClass("hidden");
    }, function () {
        $(this).css("font-size", "x-large");
        $(this).css("box-shadow", "none");
        $("#inttrip1").addClass("hidden");
        $("#inttrip2").addClass("hidden");
        $("#text").removeClass("hidden");
    })
});
