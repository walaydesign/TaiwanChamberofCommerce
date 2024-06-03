$(".header_menu").click(function(){
    let scroll = $(window).scrollTop();
    if(scroll <= 0) {
        $(this).parents(".header").toggleClass("active");
    }
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

$(window).on("scroll resize", function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("active");
    }else {
        $(".header").removeClass("active");
    }
})

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0},300);
})