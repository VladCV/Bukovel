function startCounting(){
    $({someValue: 0}).animate({someValue: 19}, {
        duration: 2000,
        easing:'swing',
        step: function() {
            $('.about-us__counters:eq(0)').text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });
    $({someValue: 0}).animate({someValue: 700}, {
        duration: 2000,
        easing:'swing',
        step: function() {
            $('.about-us__counters:eq(1)').text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });
    $({someValue: 0}).animate({someValue: 30000}, {
        duration: 2000,
        easing:'swing',
        step: function() {
            $('.about-us__counters:eq(2)').text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });
    $({someValue: 0}).animate({someValue: 1500000}, {
        duration: 2000,
        easing:'swing',
        step: function() {
            $('.about-us__counters:eq(3)').text(commaSeparateNumber(Math.round(this.someValue)));
        }
    });
    
    setTimeout(() => {
        $('.about-us__counters:eq(0)').text("19");
        $('.about-us__counters:eq(1)').text("700+");
        $('.about-us__counters:eq(2)').text("30000+");
        $('.about-us__counters:eq(3)').text("1500000+");
        $(".about-us__subtext").animate({opacity: "1"}, 1000);
      }, 2100);
}

function commaSeparateNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  }
  return val;
}


var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.about-us__wrapper__top').offset().top;
	var eh = $('.about-us__wrapper__top').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;

        setTimeout(() => {
            startCounting();
          }, 100);
	}
}

$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){


    $('.programs__one_card_second_button, .programs__one_card_third_button').click(function (e) {
        $('.pop .input_tour').val($(this).parent().parent().find('.programs__one_card_main_text').text())
    })


    $('button, a').click(function (e) {
        if( $(this).data('form') ){
            e.preventDefault();
            $('.pop').addClass('pop_open')
        }
    })

    $('.pop__bgd').click(function (e) {
        $('.pop').removeClass('pop_open')
    })



	scrollTracking();
    $('.popup-switcher__body').each(function(){
        $(this).find(".popup-switcher__body__card:eq(0)").css("display", "flex");
        $(this).find(".popup-switcher__body__card:eq(1)").css("display", "flex");
        $(this).find(".popup-switcher__body__card:eq(2)").css("display", "flex");
    });
});
// HAMBURGER MENU
$('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
});
$(".header__nav-mob a").on('click', function () {
    $('.hamburger-menu').removeClass('animate');
    $('.mobile-menu').removeClass('active');
});
$('.header-mob__link').on('click', function(){
    $('.hamburger-menu').removeClass('animate');
    $('.mobile-menu').removeClass('active');
});

// POP-UP
// close popup on link
$(".popup__go-back").on('click', function () {
    $(".popup-main").hide();
});
// three similiar popups
$(".programs__one_card_second_button:eq(0)").on('click', function () {
    $(".popup-main-p:eq(0)").show();
});
$(".programs__one_card_second_button:eq(1)").on('click', function () {
    $(".popup-main-p:eq(1)").show();
});
$(".programs__one_card_second_button:eq(2)").on('click', function () {
    $(".popup-main-p:eq(2)").show();
});
// other three similiar popups
$(".programs__one_card_third_button:eq(0)").on('click', function () {
    $(".popup-main-d:eq(0)").show();
});
$(".programs__one_card_third_button:eq(1)").on('click', function () {
    $(".popup-main-d:eq(1)").show();
});
$(".programs__one_card_third_button:eq(2)").on('click', function () {
    $(".popup-main-d:eq(2)").show();
});
// close popup on icon
$(".popup__close-icon").on('click', function () {
    $(".popup-main").hide();
});
$(document).mouseup(function (e) {
    var container = $(".popup-container");
    if (e.target != container[0] && !container.has(e.target).length) {
        $(".popup-main").hide();
    }
});

    $(document).ready(function(){
        $('a[href*="#"]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        });
        return false;
        });
// SWITCHER POPUP
$(".popup-switcher__head__button").on('click', function(){
    $(".popup-switcher__head__button").removeClass("selected");
    $(this).addClass("selected");
    $(this).parent().parent().find(".popup-switcher__body").find(".popup-switcher__body__card").css("display", "none");
    if($(this).index()!=0){
        i = ($(this).index()+1)*3;
    }
    else{ i = ($(this).index()+1)*3;}
    for (let j = 1; j <= 3; j++) {
        i--;
        $(this).parent().parent().find(".popup-switcher__body").find(".popup-switcher__body__card:eq("+i+")").css("display", "flex");
    };

});
new WOW().init();

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function () {
		img.removeAttribute('data-src');
	};
});