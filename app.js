window.onload = function () {
	console.log('Loaded');
};

class App {
	constructor() {
		console.log('Loaded');
		this.helloButton = document.querySelector('.hello-button');
	}

	clickHandler(event) {
		console.log('Clicked', event);
	}
}
const app = new App();

// Navigator
console.log('==== Navigator ====');
console.log(navigator.cookieEnabled);
console.log(navigator.appName);
console.log(navigator.language);
// Location
console.log('==== Location ====');
console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.protocol);
// console.log(window.location.assign('http://google.com'));
// window.location.assign('http://google.com');
