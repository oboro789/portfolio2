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
    centerPadding: '100px',
    prevArrow:'<button class="slide3-arrow prev3-arrow"></button>',
    nextArrow:'<button class="slide3-arrow next3-arrow"></button>'
   });
   $('.slider4').slick({
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
   $('.slider5').slick({
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
   $('.slider6').slick({
    autoplay:false,
    slidesToScroll: 1,
    slidesToshow: 6,
    dots: false,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '200px',
    prevArrow:'<button class="slide4-arrow prev4-arrow"></button>',
    nextArrow:'<button class="slide4-arrow next4-arrow"></button>'
   });
   $('.slider7').slick({
    autoplay:false,
    slidesToScroll: 1,
    slidesToshow: 7,
    dots: false,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    centerPadding: '200px',
    prevArrow:'<button class="slide4-arrow prev4-arrow"></button>',
    nextArrow:'<button class="slide4-arrow next4-arrow"></button>'
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
    $('ul.tab_area li').click(function(){
        var index = $('ul.tab_area li').index(this);
        $('.tab_panel').css('display','none');
        $('.tab_panel').eq(index).fadeIn();
        $('ul.tab_area li').removeClass('select');
        $(this).addClass('select')
    });
    $('ul.tab_area2 li').click(function(){
        var index = $('ul.tab_area2 li').index(this);
        $('.tab_panel2').css('display','none');
        $('.tab_panel2').eq(index).fadeIn();
        $('ul.tab_area2 li').removeClass('select');
        $(this).addClass('select')
    });
    $('ul.tab_area3 li').click(function(){
        var index = $('ul.tab_area3 li').index(this);
        $('.tab_panel3').css('display','none');
        $('.tab_panel3').eq(index).fadeIn();
        $('ul.tab_area3 li').removeClass('select');
        $(this).addClass('select')
    });
});
