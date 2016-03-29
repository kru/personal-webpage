$(document).ready(function () {

	$('.list li:eq(4)').addClass('clear');
	function checkWidth() {
		if (window.matchMedia('(max-width: 1224px) and (min-width: 961px)').matches) {
			$('.list li:eq(4)').removeClass('clear');
			$('.list li:eq(3)').addClass('clear');
		}
		else {
			$('.list li:eq(4)').addClass('clear');
			$('.list li:eq(3)').removeClass('clear');
		}
	}

	$(document).load($(window).bind("resize", checkWidth));


	$(document).on('scroll', onScroll);

	// 1. Detect current active id
	// 2. Move to down or top section depend on up, down, pgUp, PgDown
	// 3.

	$('.nav-right a').on('keypress', function(val) {
		if (val.keyCode === 40 || val.keyCode === 38) {

		}
	});

	// Detect Window to change the nav when user scrolls or clicks

	$('.nav-right a, .dropdown-style a').on('click', function (e) {
        e.preventDefault();
        //$(document).off("scroll");

        $('.nav-right a, .dropdown-style a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;

        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.position().top
        }, 1100, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


	function onScroll(event) {
		var scrollPos = $(document).scrollTop();
		$('.nav-right a').each(function() {

			var currLink = $(this),
				refElement = $(currLink.attr('href'));

			if (refElement.position().top-50 <= scrollPos && refElement.position().top +
				refElement.height() > scrollPos-100) {

            	$('.nav-right a').removeClass("active");
            	currLink.addClass("active");
        	}
        	else {
            	currLink.removeClass("active");
        	}
    	});
	}

	// Hamburger menu trigger

	$('.glyphicon-menu-hamburger').on('click', function() {
		$('ul.nav-dropdown li').slideToggle(500).delay(3000).slideToggle(300);
	});

	// Navigation Bar Animation
	$(document).on('scroll', function() {
		var offset = $(window).scrollTop(), win = $(document).scrollTop();
		console.log(offset + 'and' +win);
		if (offset >= 30) {
			$('.nav').slideDown(500);
		}
		else {
			$('.nav').slideUp(500);
		}
	});
});

// Images animation
function imageAnimation() {

		var scroll_top = $(window).scrollTop(),
			position = $('#About').position().top,
			windowPos = Math.floor(position),
			imgSlide = document.querySelector('#profile-photo img'),
			sublimeRot = document.querySelector('.dev-tools #sublime');
			jadeRot = document.querySelector('.dev-tools #jade');
			sassRot = document.querySelector('.dev-tools #sass');

		if (scroll_top >= (windowPos - 300)) {
			imgSlide.style.right = '0';
			imgSlide.style.transition = 'all .9s';
		}

		if (scroll_top >= (windowPos - 100)) {
			sublimeRot.style.transform = 'rotate(0deg)';
			sublimeRot.style.transition = 'all 1s';

			jadeRot.style.transform = 'rotate(0deg)';
			jadeRot.style.transition = 'all 2s';

			sassRot.style.transform = 'rotate(0deg)';
			sassRot.style.transition = 'all 3s';
		}
	}

$(window).scroll(imageAnimation);
