class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    const timer = document.querySelector(selector);
    this.daysElem = timer.querySelector("[data-value='days']");
    this.hoursElem = timer.querySelector("[data-value='hours']");
    this.minsElem = timer.querySelector("[data-value='mins']");
    this.secsElem = timer.querySelector("[data-value='secs']");
  }
  startTimer() {
    setInterval(() => {
      const now = new Date();
      const time = this.targetDate -now.getTime();

      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      this.daysElem.innerText = days ;
      this.hoursElem.innerText = hours ;
      this.minsElem.innerText = mins ;
      this.secsElem.innerText = secs ;


    }, 1000);
  }
}
export default CountdownTimer;
