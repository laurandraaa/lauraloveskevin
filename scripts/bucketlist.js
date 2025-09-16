$(document).ready(function(){
    $("#inttrip").hover(function() {
        $(this).css("background-color", "rgb(249, 244, 191)");
        $(this).css("font-weight", "bold");
        $("#inttrip1").removeClass("hidden");
        $("#inttrip2").removeClass("hidden");
        $("#text").addClass("hidden");
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("font-weight", "200");
        $("#inttrip1").addClass("hidden");
        $("#inttrip2").addClass("hidden");
        $("#text").removeClass("hidden");
    })
    $("#lauragrad").hover(function() {
        $(this).css("background-color", "rgb(249, 244, 191)");
        $(this).css("font-weight", "bold");
        $("#lauragrad1").removeClass("hidden");
        $("#lauragrad2").removeClass("hidden");
        $("#text").addClass("hidden");
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("font-weight", "200");
        $("#lauragrad1").addClass("hidden");
        $("#lauragrad2").addClass("hidden");
        $("#text").removeClass("hidden");
    }),
    $("#amazon").hover(function() {
        $(this).css("background-color", "rgb(249, 244, 191)");
        $(this).css("font-weight", "bold");
        $("#amazon1").removeClass("hidden");
        $("#amazon2").removeClass("hidden");
        $("#text").addClass("hidden");
    }, function () {
        $(this).css("background-color", "transparent");
        $(this).css("font-weight", "200");
        $("#amazon1").addClass("hidden");
        $("#amazon2").addClass("hidden");
        $("#text").removeClass("hidden");
    })

});
