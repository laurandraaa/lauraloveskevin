$(document).ready(function(){
    $(".poloroidcollage > .poloroid").hover(function() {
        $(this).css("transform", "translate(0, -9px");
        $(this).css("box-shadow", "1px 1px 5px rgb(117, 67, 75)");
        $(this).css("background-color", "rgb(246, 193, 193)");
    }, function () {
        $(this).css("transform", "translate(0, 0");
        $(this).css("box-shadow", "none");
        $(this).css("background-color", "rgb(243, 210, 216)");
    })
});
