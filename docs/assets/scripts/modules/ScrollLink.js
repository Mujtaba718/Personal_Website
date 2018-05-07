import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class ScrollLink {
	constructor() {
		this.headerLinks = $("nav a");
		this.addSmoothScrolling();
	}

	addSmoothScrolling(){
		this.headerLinks.smoothScroll({
			offset: -65
		});
	}
}

export default ScrollLink;