




$(document).ready(function () {
	$('.reviews__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 550,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}
		],
	})

	$('.opinion__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 550,
				settings:{
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			}
		],
	})
	  
})







