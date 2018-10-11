import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.ul = $("nav ul");
		this.menuIcon = $("#menu_icon");
		this.toggleEvent();
	}

	toggleEvent() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.ul.slideToggle(200);
		this.menuIcon.toggleClass("open");
	}
}

export default MobileMenu;