const TARGET = "Sep 2, 2022 00:00:00";
const countdownValue = document.getElementById("countdown-value");

const lastDay = new Date(TARGET).getTime();
const clock = setInterval(function() {
  const now = new Date().getTime();
  const diff = lastDay - now;

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (diff >= 0) {
    countdownValue.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  } else {
    clearInterval(clock);
    const countdown = document.getElementById("countdown");
    const success = document.getElementById("success");

    countdown.ontransitionend = () => {
      countdown.style.display = "none";
      success.classList.toggle("hidden");
      success.classList.toggle("fade-out");
    };
    countdown.classList.toggle("fade-out");

    document.body.ontransitionend = () => {
      const fireworks = document.getElementById("fireworks");
      fireworks.classList.toggle("inactive");
    };
    document.body.classList.toggle("dark");
  }
}, 1000);
