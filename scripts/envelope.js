$(document).ready(function(){
    $(".envelope-container").hover(function(){
        $("#letterpaper").delay(400).queue(function (next) {$("#letterpaper").removeClass("hidden"); next();})
        $("#flapheart").addClass("onhoverflapheart");
    }, function() {
        $("#letterpaper").addClass("hidden");
        $("#flapheart").removeClass("onhoverflapheart");
    });
  });
