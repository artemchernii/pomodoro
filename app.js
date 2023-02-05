class App {
	timer = {
		min_tens: document.getElementById('min_tens'),
		min: document.getElementById('min'),
		sec_tens: document.getElementById('sec_tens'),
		sec: document.getElementById('sec'),
	};
	#interval;

	submit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const time = formData.get('time');
		this.#clearTimer();
		this.#startTimer(time);
	}
	#startTimer(time) {
		const end = Date.now() + time * 1000 * 60;
		this.#interval = setInterval(() => {
			const nowTime = Date.now();
			const delta = end - nowTime;
			if (delta < 0) {
				clearInterval(this.#interval);
				return;
			}
			const minutes = Math.floor(delta / 1000 / 60);
			const seconds = Math.floor(delta / 1000) - minutes * 60;
			console.log(minutes, seconds);
			this.#setTimer({
				min_tens: Math.floor(minutes / 10),
				min: minutes % 10,
				sec_tens: Math.floor(seconds / 10),
				sec: seconds % 10,
			});
		}, 500);
	}
	#setTimer({ min_tens, min, sec_tens, sec }) {
		this.timer.min_tens.innerText = min_tens;
		this.timer.min.innerText = min;
		this.timer.sec_tens.innerText = sec_tens;
		this.timer.sec.innerText = sec;
	}
	#clearTimer() {
		if (this.#interval) {
			clearInterval(this.#interval);
		}
		this.#setTimer({ min_tens: 0, min: 0, sec_tens: 0, sec: 0 });
	}
}
const app = new App();

document.querySelector('.timer').addEventListener('submit', (e) => {
	app.submit(e);
});

console.log(app);
