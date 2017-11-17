$(function() {

	//----magnific popup works start---

	$('.protfolio-item').each(function(){
		$(this).magnificPopup();
	});

	//----magnific popup works end---

//-----Button UP Start----
$(window).scroll(function() {
		if ($(this).scrollTop() > 250) {
			$('.btnUp').fadeIn();
		}else {
			$('.btnUp').fadeOut();
		}
	});
	

	$('.btnUp').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1200);
	});
//-----Button UP End----


	//----magnific popup gallery start---

	$('.mfp-gallery').each(function(){
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			
			// image: {
			// 	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// 	titleSrc: function(item) {
			// 		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// 	}
			// }
		});
	});

	//----magnific popup gallery end---


	$('.popup-call').magnificPopup({
			closeOnContentClick: false,
			image: {
				verticalFit: false
			}
	});

//---Mobil Toggle Menu Start---

	$('.toggle-mnu-header').on('click', function(){
		$('.main-mnu-mob').slideToggle(400);
	});

	$('.toggle-mnu-footer').on('click', function(){
		$('html, body').animate({scrollTop: $(document).height() + 200}, "slow");
		return false;
	});


//---Mobil Toggle Menu End---


//--Mouse Icon Start---

	$('.mw-wrapper a').on('click', function(e){
		e.preventDefault();
		var selector = $(this).attr('href');
		var h = $(selector);

		$('html, body').animate({
			scrollTop: h.offset().top
		},600);
	});

//--Mouse Icon End---


//Replace all SVG images with inline SVG
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

	});

//Replace all SVG images with inline SVG end---



//----OWL Carousel-Brand start---

	$('.brand-carousel').owlCarousel({
				center: false,
				dots: false,
        items:1,
        loop:true,
        margin:20,
        autoHeight: false,
        nav: true,
        responsiveClass: true,
        responsive:{
            0:{
            items:1,
            nav:true,
            loop:true
        },
        600:{
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        },
        1150:{
            items:4,
            nav:true,
            loop:true
        }
       }
	});

//----OWL Carousel-Brand end---



//----equalHeight start---

function heightses(){
	$('.item-text').height('auto').equalHeights();
	$('.eq-heght').height('auto').equalHeights();
}

$(window).resize(function(){
	heightses();
})
heightses();
//----equalHeight end---



//----OWL Carousel-Person end---

$('.person-carousel').owlCarousel({
				center: true,
				dots: false,
        items:3,
        loop:true,
        nav: false,
       responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            nav:true
        },
        600:{
        		center: false,
            items:2,
            nav:true,
            loop:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
	});

//----OWL Carousel-Person end---


//----OWL Carousel-Person end---

$('.parteners-carousel').owlCarousel({
        items:5,
        margin: 30,
        dots: false,
        nav: true,
        navText :["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
       	responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        400:{
            items:3,
        },
        800:{
            items:4,
        },
        1000:{
            items:5,
        }
    }
	});

//----OWL Carouse



$(".s-adv").waypoint(function() {
		
		$({blurRadius: 5}).animate({blurRadius: 0}, {
			duration: 1200,
			easing: 'swing',
			step: function() {
				$(".s-adv-item h3 span").css({
					"-webkit-filter": "blur("+this.blurRadius+"px)",
					"filter": "blur("+this.blurRadius+"px)"
				});
			}
		});
		var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
		$(".s-adv-item h3 span").each(function() {
			var tcount = $(this).data("count");
			$(this).animateNumber({ number: tcount,
				easing: 'easeInQuad',
				"font-size": "1.8125em",
				numberStep: comma_separator_number_step},
				1200);
		});
		this.destroy();

	}, {
		offset: '70%'
	});



});