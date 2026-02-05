const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you bunny";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let noClicks = 0;

// NO كي هرب
noBtn.addEventListener("click", () => {
  noClicks++;
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  const x = Math.random() * 400 - 200;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  if (noClicks === 1) noBtn.innerText = "Are you sure? 😕";
  else if (noClicks === 2) noBtn.innerText = "You don’t love me? 💔";
});

// 💖 HEART SPAM
const hearts = ["❤️","💖","💘","💝","💕","💞","💓"];

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (16 + Math.random() * 30) + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

let heartInterval = setInterval(createHeart, 180);

// YES 👉 PAGE 2
yesBtn.addEventListener("click", () => {
  document.querySelector(".card").innerHTML = `
    <img src="cat-love.gif" style="width:250px;"><br><br>
    <h1>
      YAAAY 💖<br>
      I love you forever 💕
    </h1>
  `;

  clearInterval(heartInterval);
  heartInterval = setInterval(createHeart, 90);
});


