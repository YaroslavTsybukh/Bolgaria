$(function(){
    $('.slider').slick({
        speed:500,
        dots:true,
        waitForAnimate:false,
        infinite:true,
        autoplay:true,
        draggable:false,
    });
    $('.phone__colo').click(function(){
        $('#exampleModal').arcticmodal();
    })
    $(".down__angle").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
})

   

