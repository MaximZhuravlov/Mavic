$(document).ready(function () {
	// Smooth scrolling effect	
	$(".scroll").on("click", function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			$("html, body").animate({
				scrollTop: $(hash).offset().top
			}, 1000, function () {
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}
	});

  // Slider
  setInterval(function() {
    // prevent slider from not loading
    $(".about-slider-box").slick({
      slidesToScroll: 1,
      slidesToShow: 1,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>'
    });
  }, 5);

	// Accordion
	$(".answers-item-title").on("click", function () {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
			$(this).next().css("height", "0px");
			$(this).next().css("padding-bottom", "0px");
		} else {
			$(".answers-item").removeClass("active");
			$(".answers-item-title").next().css("height", "0px");
			$(".answers-item-title").next().css("padding-bottom", "0px");
			$(this).parent().addClass("active");
			$(this).next().css("height", $(this).next().prop("scrollHeight"));
			$(this).next().css("padding-bottom", $(this).next().prop("scrollHeight") + 30);
		}
	});

	// Fullpage scrolling
	$("#fullpage").fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		sectionSelector: ".page-section-fullpage",
		paddingTop: "90px",
		scrollingSpeed: 1000,
		scrollBar: true, // smooth scroll will not work without a scrollbar
		dragAndMove: true,
		afterRender: function () {
			new WOW().init();
		},
		responsiveHeight: 600
	});    
});