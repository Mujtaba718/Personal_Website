import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.ul = $("nav ul");
		this.menuIcon = $(".menu_icon");
		this.icon = $(".menu_icon i");
		this.toggleEvent();
	}

	toggleEvent() {
		this.menuIcon.click(this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.ul.slideToggle(200);
		this.icon.toggleClass("fa-times");
	}
}

export default MobileMenu;