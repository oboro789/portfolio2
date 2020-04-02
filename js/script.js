$(function(){ 
　$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    centerMode: true,
    centerPadding: '350px',
    slidesToScroll: 7,
    dots: true,
    prevArrow:'<button class="slide-arrow prev-arrow"></button>',
    nextArrow:'<button class="slide-arrow next-arrow"></button>'
   });
   $('.slider2').slick({
    autoplay:false,
    autoplaySpeed:5000,
    slidesToScroll: 4,
    slidesToshow: 4,
    dots: false
   });
});
　