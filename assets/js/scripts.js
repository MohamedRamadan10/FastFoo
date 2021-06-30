$(() => {
	// SVG
	const svgImg = $('img.svg');
	const convertSVG = function () {
		svgImg.each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(
				imgURL,
				function (data) {
					var $svg = jQuery(data).find('svg');
					if (typeof imgID !== 'undefined') {
						$svg = $svg.attr('id', imgID);
					}
					if (typeof imgClass !== 'undefined') {
						$svg = $svg.attr('class', imgClass + ' replaced-svg');
					}
					$svg = $svg.removeAttr('xmlns:a');
					$img.replaceWith($svg);
				},
				'xml'
			);
		});
	};
	convertSVG();

	// Change Navbar  on scroll
	const navbar = $('.navbar');
	const logo = $('.navbar .navbar-brand img');
	$(window).scroll(function () {
		if ($(document).scrollTop() > 50) {
			navbar.addClass('on-scroll');
			logo.attr('src', '/assets/images/logo-color.svg');
		} else {
			navbar.removeClass('on-scroll');
			logo.attr('src', '/assets/images/logo.svg');
		}
	});

	// Category Slide
	const catSlider = $('.category__slider');
	if (catSlider.length > 0) {
		catSlider.slick({
			dots: false,
			centerMode: true,
			infinite: true,
			centerPadding: '15px',
			slidesToShow: 6,
			slidesToScroll: 1,
			speed: 500,
			autoplay: true,
			variableWidth: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {},
				},
				{
					breakpoint: 769,
					settings: { slidesToShow: 4, slidesToScroll: 1, centerMode: false },
				},
				{
					breakpoint: 480,
					settings: {},
				},
			],
		});
	}

	// Fixed Sidebar
	const fixedSidebar = $('.theia');
	if (fixedSidebar.length > 0) {
		fixedSidebar.theiaStickySidebar({
			additionalMarginTop: 80,
		});
	}

	// Broken Image
	$("img").on("error", function () {
		$(this).attr("src", "/assets/images/placeholder.jpg");
	});
});
