const countdownEl = document.getElementById('countdown');

let seconds = parseInt(countdownEl.textContent.trim(), 10);
if (Number.isNaN(seconds)) {
  seconds = 30;
  countdownEl.textContent = seconds;
}

if (seconds <= 0) {
  alert('Вы победили в конкурсе!');
} else {
  const intervalId = setInterval(() => {
    seconds -= 1;
    countdownEl.textContent = seconds;
    if (seconds <= 0) {
      clearInterval(intervalId);
      alert('Вы победили в конкурсе!');
    }
  }, 1000);
}