$(document).ready(function(){
    $(".stubbycontainer").click(function() {
        $(this).css("animation", "stubby 6s");
        $(this).delay(6000).queue(function (next) {$(this).css("animation", "none"); next();});
    })
});
