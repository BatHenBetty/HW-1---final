class Clock {
    constructor(country, hours, minutes, seconds) {
        this.country = country;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    convertToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    show() {
        const formattedHours = String(this.hours).padStart(2, '0');
        const formattedMinutes = String(this.minutes).padStart(2, '0');
        const formattedSeconds = String(this.seconds).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }


}