import $ from 'jquery';
import scrollreveal from 'scrollreveal';

class ScrollAnimation {
	constructor(){
		window.sr = ScrollReveal();

	    sr.reveal('main > section', {
	        duration: 2000,
	        origin: 'right',
	        distance: '100px',
	    })

	    sr.reveal('.contact section', {
	        duration: 2000,
	        origin: 'bottom',
	        distance: '500px',
	    }, 200)

	    sr.reveal('.my_projects a', {
	        duration: 2000,
	        opacity: 0,
	    }, 200)
	    
	}
}

export default ScrollAnimation;