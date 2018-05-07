import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.ul = $("nav ul");
		this.menuIcon = $(".menu_icon");
		this.toggleEvent();
	}

	toggleEvent() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.ul.toggleClass('active');
	}
}

export default MobileMenu;