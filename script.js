const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "I AM ";
const to = params.get("to") || "You BABY ";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let yesScale = 1;

// No button كيهرب
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 400 - 200;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Yes كيكبر
yesBtn.addEventListener("mouseenter", () => {
  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// Click Yes
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
    ">
      <h1>
        Good girl 😌❤️<br><br>
        I love you FOREVER 💕
      </h1>
    </div>
  `;
});
