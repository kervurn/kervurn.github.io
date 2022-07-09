const countdown = document.getElementById("countdown");
const countdownValue = document.getElementById("countdown-value");
const success = document.getElementById("success");

const lastDay = new Date("Sep 2, 2022 00:00:00").getTime();
const clock = setInterval(function() {
  const now = new Date().getTime();
  const diff = lastDay - now;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff > 0) {
    countdownValue.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  } else {
    clearInterval(clock);
    countdown.ontransitionend = () => {
      countdown.style.display = "none";
      success.classList.toggle("hidden");
      success.classList.toggle("fade-out");
    };
    countdown.classList.toggle("fade-out");
  }
}, 1000);
