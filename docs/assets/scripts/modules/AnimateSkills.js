import $ from 'jquery';

class AnimateSkills {
	constructor(){
		this.skillsOffset = $('#skills').offset().top;
		this.animateEvent();
	}

	animateEvent() {
		$(window).on('scroll', this.animateSkills.bind(this))
	}

	animateSkills() {
		this.scrollPos = $(window).scrollTop();

		if(this.scrollPos >= this.skillsOffset/1.5) {
		    $(".html span").animate({ width: '80%' }, 2000)
		    $(".css span").animate({ width: '60%' }, 2000)
		    $(".js span").animate({ width: '50%' }, 2000)
		    $(".react span").animate({ width: '40%' }, 2000)
		    $(".jquery span").animate({ width: '50%' }, 2000)
		    $(".node span").animate({ width: '30%' }, 2000)
	    }
	}
}

export default AnimateSkills; 