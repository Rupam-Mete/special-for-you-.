document.getElementById("validate-btn").addEventListener("click", function () {
  const nameInput = document.getElementById("name-input").value.trim().toLowerCase();
  const errorMsg = document.getElementById("error-msg");

  if (nameInput === "ori") {
    document.getElementById("welcome-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");
  } else {
    errorMsg.textContent = "Hmm... that name doesn’t echo like hers.";
  }
});
const validateBtn = document.getElementById("validate-btn");
const music = document.getElementById("background-music");

validateBtn.addEventListener("click", () => {
  music.muted = false;
  music.play().catch((error) => {
    console.log("Playback prevented:", error);
  });
});
