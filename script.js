const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you bunny";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;
let noScale = 1;
let noClicks = 0;

// دالة الهروب
function runAway(btn) {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 300 - 150;
  btn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;
}

// كليك على NO
noBtn.addEventListener("click", () => {
  noClicks++;

  // YES كيكبر كل مرة
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  // تغييرات NO
  if (noClicks === 1) {
    noBtn.innerText = "Are you sure? 😕";
  } 
  else if (noClicks === 2) {
    noBtn.innerText = "You don’t love me? 💔";
    noScale = 0.7;
  } 
  else {
    noScale = 0.5;
  }

  // دابا يهــرب
  runAway(noBtn);
});

// كليك على YES
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      background:linear-gradient(135deg,#ff4d6d,#ffb3c6);
      color:white;
      font-family:'Comic Sans MS', cursive;
      padding:20px;
    ">
      <h1>
        Good girl 😌❤️<br><br>
        I love you forever 💕
      </h1>
    </div>
  `;
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

// spam hearts 🔥
setInterval(createHeart, 180);

