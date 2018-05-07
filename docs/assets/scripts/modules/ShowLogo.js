import $ from 'jquery';

class ShowLogo {
	constructor(){
		this.headerHeight = $("header").height();
		this.offset = $("figure figcaption").offset().top;
		this.event();
	}

	event(){
		$(window).on('scroll', this.displayLogo.bind(this));
	}

	displayLogo(){
		this.scrollPos = $(window).scrollTop();

		if(this.scrollPos >= this.offset - this.headerHeight) {
			$(".header_logo").addClass("header_logo_show");
		} else {
			$(".header_logo").removeClass("header_logo_show");
		}

	}
}

export default ShowLogo