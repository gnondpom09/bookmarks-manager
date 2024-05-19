function startTimer(duration: number, display: any) {
  let start = Date.now();
  let diff;
  let hours;
  let minutes;
  let seconds;

  const timer = () => {
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - ((Date.now() - start) / 1000 || 0);

    // does the same job as parseInt truncates the float
    hours = (diff / 3600) % 24 || 0;
    minutes = (diff / 60) % 60 || 0;
    seconds = diff % 60 || 0;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${hours}:${minutes}:${seconds}`;

    if (diff <= 0) {
      start = Date.now() + 1000;
    }
  };

  timer();
  setInterval(timer, 1000);
}

function getCookie(name): number {
  const match = document.cookie.match(RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  const res: number = match[1];
  return match ? res : 0;
}

if (!getCookie('timer')) {
  document.cookie = `timer=${Date.now()}; max-age=${24 * 60 * 60}`;
} else if ((-1 * (getCookie('timer') - Date.now())) / 3600 / 24 >= 60 * 24) {
  document.cookie = `timer=${Date.now()}; max-age=${24 * 60 * 60}`;
}

window.onload = () => {
  const timing = 60 * (60 * 24 - (Date.now() - getCookie('timer')) / 3600 / 24);
  const display = document.querySelector('#time');
  startTimer(timing, display);
};
