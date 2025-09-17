const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clicks = 0;
let isBig = true;

cookie.onclick = function () {
  clicks++;
  counter.textContent = clicks;

  if (isBig) {
    cookie.width = 180;
    cookie.height = 180;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
  isBig = !isBig;

  if (clicks >= 40) {
    alert("Поздравляю! Ты накликал 40 печенек!");
    cookie.onclick = null;
  }
};