$(function(){
    $("#next").click(function(){
        var slideWidth = $(".section-five").width();
        $(".slide").animate({marginLeft:-slideWidth}, 400, function(){
            $(".slide li:first").appendTo(".slide");
            $(".slide").css({marginLeft:0});
        });
    });

    $("#prev").click(function(){
        var slideWidth = $(".section-five").width();
        $(".slide").animate({marginLeft:0}, 400, function(){
            $(".slide li:last").prependTo(".slide");
            $(".slide").css({marginLeft:-slideWidth});
        });
    });
});