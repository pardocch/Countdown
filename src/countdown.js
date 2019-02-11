class Countdown {
	constructor(time, target) {
		this.time = time;
		this.target = target;
		this.start = Date.now();
		this.diff = this.year = this.month = this.day = this.hour = this.minute = this.second = '';
		this.enableFields = {
			year: false,
			month: false,
			day: true,
			hour: true,
			minute: true,
			second: true,
		};
	}

	enableField(setting) {
		this.enableFields = setting;
		return this;
	}

	doCountdown() {
		this.diff = this.time - ((Date.now() / 1000) | 0);
		this.day = (((this.diff / 86400)) | 0);
		this.hour = (((this.diff / 3600) % 24) | 0);
		this.minute = (((this.diff / 60) % 60) | 0);
		this.second = ((this.diff % 60) | 0);

		this.hour = ((this.hour.toString()).length < 2) ? "0" + this.hour : this.hour;
		this.minute = ((this.minute.toString()).length < 2) ? "0" + this.minute : this.minute;
		this.second = ((this.second.toString()).length < 2) ? "0" + this.second : this.second;

		this.target.innerHTML = this.render();
	}

	render() {
		let time = '';
		if (this.enableFields.year) {
			if (this.year != '') time += this.year + ((this.year > 1) ? " years " : " year ");
		}
		if (this.enableFields.month) {
			if (this.month != '') time += this.month + ((this.month > 1) ? " months " : "month ");
		}
		if (this.enableFields.day) {
			if (this.day != '') time += this.day + ((this.day > 1) ? " days " : " day ");
		}
		if (this.enableFields.hour) {
			// time += this.hour + (this.hour > 1) ? " hours" : "hour";
			if (this.hour != '') time += this.hour + ":";
		}
		if (this.enableFields.minute) {
			// time += this.minute + (this.minute > 1) ? " minutes" : "minute";
			if (this.minute != '') time += this.minute + ":";
		}
		if (this.enableFields.second) {
			// time += this.second + (this.second > 1 ) ? " seconds" : "second";
			if (this.second != '') time += this.second;
		}
		return time;
	}

	display() {
		this.doCountdown();
		setInterval(this.doCountdown.bind(this), 1000);
	}
}