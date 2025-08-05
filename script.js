const options = document.querySelectorAll(".egg-option");
const timerDisplay = document.getElementById("timerDisplay");
const resetBtn = document.getElementById("resetBtn");
const sound = document.getElementById("doneSound");

let timer;

options.forEach(option => {
  const img = option.querySelector("img");

  img.addEventListener("click", () => {
    const minutes = parseInt(option.dataset.time);

    // Reset styles
    options.forEach(o => o.classList.remove("active"));
    option.classList.add("active");

    // Start timer
    startTimer(minutes * 60);
  });
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timerDisplay.textContent = "";
  options.forEach(o => o.classList.remove("active"));
});

function startTimer(seconds) {
  clearInterval(timer);
  updateDisplay(seconds);
  timer = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(timer);
      timerDisplay.textContent = "Done! 🍳";
      sound.play();
    } else {
      updateDisplay(seconds);
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  timerDisplay.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
}

