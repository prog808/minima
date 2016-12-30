$(document).ready(function(){
    $('.header__menu-trigger').click(function() {
        $('.header__ul').slideToggle(640);
    });
    $(window).resize(function() {
        if($(window).width() > 640 ) {
            $('.header__ul').removeAttr('style');
        }
    })
});