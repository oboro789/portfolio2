$(function(){ 
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    centerMode: true,
    centerPadding: '400px',
    variablewidth: true,
    slidesToScroll: 7,
    dots: true,
    prevArrow:'<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
   });
});
$(function(){ 
    $('.slider2').slick({
        autoplay:false,
        autoplaySpeed:5000,
        centerMode: true,
        dots: false,
        slidesToshow:4,
        slidesToscroll:4,
        prevArrow:'<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
       });
    });