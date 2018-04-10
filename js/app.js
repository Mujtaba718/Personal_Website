$(document).ready(function() {


	$(window).on('scroll', function() {
		let scrollPos = $(this).scrollTop();

	    if(scrollPos) { 
	        // If vertical position of scroll bar is not 0, add fixed class to header 
	        $('header').addClass('fixed');
	    } else {
	        $('header').removeClass('fixed')
	    }

	    if(scrollPos >= 340){
	    	$("#logo").css("visibility", "visible");
	    } else {
	    	$("#logo").css("visibility", "hidden");
	    }

	    if(scrollPos >= 765) {
		    $(".html span").animate({ width: '80%' }, 2000)
		    $(".css span").animate({ width: '60%' }, 2000)
		    $(".js span").animate({ width: '50%' }, 2000)
		    $(".react span").animate({ width: '40%' }, 2000)
		    $(".jquery span").animate({ width: '50%' }, 2000)
		    $(".node span").animate({ width: '30%' }, 2000)
	    }

	});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
		    // Only prevent default if animation is actually gonna happen
		    event.preventDefault();
		    $('html, body').animate({
		      scrollTop: target.offset().top
		    }, 1000, function() {
		      // Callback after animation
		      // Must change focus!
		      var $target = $(target);
		      $target.focus();
		      if ($target.is(":focus")) { // Checking if the target was focused
		        return false;
		      } else {
		        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		        $target.focus(); // Set focus again
		      };
		    });
		  }
		}
	});

	$('.menu').on("click", function(){
		$('ul').toggleClass('active');
	})
	
	// Scroll animation
    window.sr = ScrollReveal();
    sr.reveal('main > section', {
        duration: 2000,
        origin: 'right',
        distance: '500px',
    })

    sr.reveal('.contact section', {
        duration: 2000,
        origin: 'bottom',
        distance: '500px',
    }, 200)

});



