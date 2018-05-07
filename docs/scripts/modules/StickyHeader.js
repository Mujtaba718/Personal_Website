import $ from 'jquery';

class StickyHeader {
	constructor(){
		this.events();
	}

	events(){
		$(window).on('scroll', this.fixedHeader.bind(this)) 
	}

	fixedHeader() {
		this.scrollPos = $(window).scrollTop();
		
		if(this.scrollPos) { 
 	        $('header').addClass('fixed');
 	    } else {
 	        $('header').removeClass('fixed')
 	    }

	}

}

export default StickyHeader;