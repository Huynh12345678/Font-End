$(function(){
    $('.cacngonngu').slideUp();
    $('.top-ngonngu b').click(function(event) {
        $(this).next().slideToggle(300);
    });

    // kich hoat wow
    new WOW().init();
})  
