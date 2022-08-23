$(document).ready(function() {

var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('header_out');
	} else {
		header.removeClass('header_out');
	}
	scrollPrev = scrolled;
});

//slider

const swiper = new Swiper('.swiper1', {

	direction: 'horizontal',
	loop: true,
	initialSlide: 0,

	navigation: {
	  nextEl: '.solutions__prev',
	  prevEl: '.solutions__next',
	},	
});


const mySwiper = new Swiper('.swiper2', {

	direction: 'horizontal',
	loop: true,
	effect: 'slide',
	initialSlide: 0,
	slidesPerGroup: 1,
	centeredSlides: false,
	slidesPerView: 2,

	slideNextClass: 'swiper-next',
	slideActiveClass: 'swiper-active',

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	  },

});
 
/// карточки  

var $items = $('.js-items');
var $cards = $('.js-card');



$items.each(function() {
	var $item = $items.find('.js-item');

	$item.each(function(index, item) {
		$(item).hover(function (){
				let i = 0;
				while (i <= $cards.length) {
					$cards.eq(index).find('.js-img').fadeToggle('')
					if (index > i) {
						$cards.eq(i).toggleClass('features__card_hidden')
					}
					i++;
				}
		})
	})
});

/// табы к слайдеру

	const $tabs = $('.js-tabs');
	const $slider = $('.solutions__wrapper');

	$tabs.each(function() {
		var $tab = $tabs.find('.js-tab');
		var $slide = $slider.find('.solutions__slide');

		swiper.on('slideChange', function () {
			let iq = swiper.activeIndex - 1
			$tab.removeClass('solutions__tab_active')

			if ( iq !== $tab.length ) {
				$tab.eq(iq).addClass('solutions__tab_active')
			} else {
				$tab.eq(0).addClass('solutions__tab_active')
			} 
									 					
		});	


		$tab.each(function(index, item) {
			$(item).click(function() {
				$tab.removeClass('solutions__tab_active')
				$(item).addClass('solutions__tab_active')
				swiper.slideTo(index + 1)
			}) 
		})
	});
});



























// /// Пропадают все карточки нахуй
// $('.features__item').each(function(index, item){	
// 	$(this).hover(function(index, item) {
// 		$('.features__card').each(function(index, item) {
// 			console.log(index)
// 			console.log(item)
// 			$(this).toggleClass('features__card_hidden') 
// 		})
// 	})
// })




///Работает но ёбань 

// $('.features__item_1').hover(function (){
// 	$('.features__mark').fadeToggle()
// })
// $('.features__item_2').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__mark').fadeToggle()
// })
// $('.features__item_3').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__mark').fadeToggle('slow')
// })
// $('.features__item_4').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__card_3').toggleClass('features__card_hidden')
// 	$('.features__mark').fadeToggle('slow')
// })
// $('.features__item_5').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__card_3').toggleClass('features__card_hidden')
// 	$('.features__card_4').toggleClass('features__card_hidden')
// 	$('.features__cloud').fadeToggle('slow')
// })
// $('.features__item_6').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__card_3').toggleClass('features__card_hidden')
// 	$('.features__card_4').toggleClass('features__card_hidden')
// 	$('.features__card_5').toggleClass('features__card_hidden')
// 	$('.features__cloud').fadeToggle('slow')
// })
// $('.features__item_7').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__card_3').toggleClass('features__card_hidden')
// 	$('.features__card_4').toggleClass('features__card_hidden')
// 	$('.features__card_5').toggleClass('features__card_hidden')
// 	$('.features__card_6').toggleClass('features__card_hidden')
// 	$('.features__cloud').fadeToggle('slow')
// })
// $('.features__item_8').hover(function (){
// 	$('.features__card_1').toggleClass('features__card_hidden')
// 	$('.features__card_2').toggleClass('features__card_hidden')
// 	$('.features__card_3').toggleClass('features__card_hidden')
// 	$('.features__card_4').toggleClass('features__card_hidden')
// 	$('.features__card_5').toggleClass('features__card_hidden')
// 	$('.features__card_6').toggleClass('features__card_hidden')
// 	$('.features__card_7').toggleClass('features__card_hidden')
// 	$('.features__cloud').fadeToggle('slow')
// })



