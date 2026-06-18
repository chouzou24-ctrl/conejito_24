function openLetter() {
  document.getElementById("opening-screen").style.display = "none";
  document.getElementById("letter-container").classList.remove("hidden");
}

// tulipes qui tombent
const container = document.querySelector(".flowers");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌷";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (3 + Math.random() * 5) + "s";
  flower.style.fontSize = (16 + Math.random() * 20) + "px";

  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

setInterval(createFlower, 250);
