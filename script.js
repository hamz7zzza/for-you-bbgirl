const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ---------- NO BUTTON ---------- */
let yesScale = 1;
let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  // shake
  noBtn.style.animation = "shake 0.3s";
  setTimeout(() => noBtn.style.animation = "", 300);

  // yes grows
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  // text change
  if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
  else if (noClicks === 2) noBtn.innerText = "Think again 😭";
  else if (noClicks === 3) noBtn.innerText = "Last chance 💔";
  else noBtn.innerText = "Okay okay 😵";

  // no shrinks & runs
  const scale = Math.max(0.5, 1 - noClicks * 0.1);
  noBtn.style.transform = `
    scale(${scale})
    translate(${Math.random()*300-150}px, ${Math.random()*200-100}px)
  `;
});

/* ---------- HEARTS ---------- */
const hearts = ["❤️","💖","💘","💝","💕","💞","💓"];
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = hearts[Math.floor(Math.random()*hearts.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (16 + Math.random()*24) + "px";
  h.style.animationDuration = (3 + Math.random()*3) + "s";
  document.getElementById("hearts-container").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}
let heartInterval = setInterval(createHeart, 180);

/* ---------- PAGE 2 ---------- */
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <img src="cat-love.gif" style="width:240px;"><br><br>
    <h1>
      YAAAY 💖<br>
      That’s my good girl 😌❤️<br>
      I love you forever 💕
    </h1>
    <button id="continueBtn">Continue →</button>
  `;

  clearInterval(heartInterval);
  heartInterval = setInterval(createHeart, 90);

  document.getElementById("continueBtn").onclick = pageDistance;
});

/* ---------- PAGE: Distance (UA) ---------- */
function pageDistance() {
  card.innerHTML = `
    <h1>Я знаю, що ми далеко… 🤍</h1>

    <div class="memo">
      Я знаю, що між нами відстань.<br><br>
      Можливо, там холодно.<br>
      Можливо, інколи ти почуваєшся самотньо.<br><br>
      Але десь далеко…<br>
      є хтось, хто постійно думає про тебе.<br><br>
      І це я.<br>
      Я завжди думаю про тебе.<br>
      Я завжди люблю тебе.<br><br>
      Навіть здалеку — ти в моєму серці.
    </div>

    <button id="nextBtn">Next →</button>
  `;

  document.getElementById("nextBtn").onclick = page3;
}

/* ---------- PAGE 3 ---------- */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      I’m thinking about you right now.<br><br>
      Close your eyes… I’m there.<br><br>
      You’re safe with me.<br><br>
      Distance can’t stop what’s real.
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = page4;
}

/* ---------- PAGE 4 ---------- */
function page4() {
  let clicks = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:70px;cursor:pointer;">❤️</div>
    <p id="count">0 / 5</p>
  `;

  document.getElementById("bigHeart").onclick = () => {
    clicks++;
    document.getElementById("count").innerText = `${clicks} / 5`;
    if (clicks === 5) page5();
  };
}

/* ---------- PAGE 5 ---------- */
function page5() {
  card.innerHTML = `
    <h1>From my heart 🤍</h1>
    <div class="memo">
      I’m proud of you.<br><br>
      I admire your strength.<br><br>
      I see your effort.<br><br>
      I’m thankful for you.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = page6;
}

/* ---------- FINAL ---------- */
function page6() {
  card.innerHTML = `
    <h1>
      Distance didn’t stop us.<br>
      And it won’t stop us.<br><br>
      I love you so much, bunny 🐰💖
    </h1>
  `;
}
