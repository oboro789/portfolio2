$(function(){ 
　$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToshow: 7,
    slidesToScroll: 1,
    prevArrow:'<button class="slide-arrow prev-arrow"></button>',
    nextArrow:'<button class="slide-arrow next-arrow"></button>'
   });
   $('.slider2').slick({
    autoplay:false,
    slidesToScroll: 1,
    slidesToshow: 4,
    dots: false,
    arrows: true,
    variableWidth: true,
    centerMode: false,
    centerPadding: '380px',
    prevArrow:'<button class="slide2-arrow prev2-arrow"></button>',
    nextArrow:'<button class="slide2-arrow next2-arrow"></button>'
   });
   $('.slider3').slick({
    autoplay:false,
    slidesToScroll: 1,
    slidesToshow: 6,
    dots: false,
    arrows: true,
    variableWidth: true,
    centerMode: false,
    centerPadding: '380px',
    prevArrow:'<button class="slide3-arrow prev3-arrow"></button>',
    nextArrow:'<button class="slide3-arrow next3-arrow"></button>'
   });
});
$(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
    $(".tab_label").on("click",function(){
            var $th = $(this).index();
            $(".tab_label").removeClass("active");
            $(".tab_panel").removeClass("active");
            $(this).addClass("active");
            $(".tab_panel").eq($th).addClass("active");
    });
});
