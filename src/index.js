import CountdownTimer from "./js/countDownTimer";

const  cdtimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 09, 2022'),
});
cdtimer.startTimer();
