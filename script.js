const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* NO BUTTON */
let yesScale = 1;
let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  noBtn.style.animation = "shake 0.3s";
  setTimeout(() => (noBtn.style.animation = ""), 300);

  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
  else if (noClicks === 2) noBtn.innerText = "Think again 😭";
  else if (noClicks === 3) noBtn.innerText = "Last chance 💔";
  else noBtn.innerText = "Okay okay 😵";

  const scale = Math.max(0.5, 1 - noClicks * 0.1);
  noBtn.style.transform = `
    scale(${scale})
    translate(${Math.random()*300-150}px, ${Math.random()*200-100}px)
  `;
});

/* HEARTS */
const hearts = ["❤️","💖","💘","💝","💕","💞","💓"];
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (16 + Math.random() * 24) + "px";
  h.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.getElementById("hearts-container").appendChild(h);
  setTimeout(() => h.remove(), 6000);
}
let heartInterval = setInterval(createHeart, 180);

/* PAGE 2 */
yesBtn.addEventListener("click", () => {
  card.innerHTML = `
    <img src="cat-love.gif" style="width:240px;"><br><br>
    <h1>YAAAY 💖<br>That’s my good girl 😌❤️</h1>
    <button id="continueBtn">Continue →</button>
  `;

  clearInterval(heartInterval);
  heartInterval = setInterval(createHeart, 90);

  document.getElementById("continueBtn").onclick = pageDistance;
});

/* PAGE: Ukraine */
function pageDistance() {
  card.innerHTML = `
    <h1>Я знаю, що ми далеко… 🤍</h1>
    <div class="memo">
      Можливо, там холодно.<br><br>
      Можливо, інколи ти почуваєшся самотньо.<br><br>
      Але десь далеко є хтось, хто завжди думає про тебе.<br><br>
      І це я 🤍
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = page3;
}

/* PAGE 3 */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      Close your eyes… I’m there.<br><br>
      You’re safe with me.
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = page4;
}

/* PAGE 4 */
function page4() {
  let clicks = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:80px;cursor:pointer;">❤️</div>
    <p id="count">0 / 5</p>
  `;

  document.getElementById("bigHeart").onclick = () => {
    clicks++;
    document.getElementById("count").innerText = `${clicks} / 5`;
    if (clicks === 5) page5();
  };
}

// PAGE 5 – LONG MEMO
function page5() {
  card.innerHTML = `
    <h1>From my heart 🤍</h1>
    <div class="memo">
When I meet you I know that a new chapter of my life begins with you.<br><br>

I never knew a sweet girl like you.  
I literally love everything about you — the way you talk, the way you smile, the way you look at me.  
Even when we’re on FaceTime and I’m busy, I still notice how you look at me.  

I love your eyes, your face, your lips, your cheeks…  
Even my mom calls you “my cheeks” and gets jealous sometimes 😂  

She always tells me I’m going to love my wife more than her — and I laugh, because she just wants me happy.  

It’s Valentine’s Day.  
I wish I could give you everything you deserve.  
For now, this is my way of staying in your heart, even from far away.  

I know there’s a little kid inside you who needs love and care.  
Even from far, I’m trying my best to give you that.  

I love you so much.  
You are my world.  
I’m grateful to have you in my life.  

I hope we meet soon — and when we do, I know it will be worth everything.  

I love your laugh.  
I love your voice.  
I love your smile.  
I love your eyes, 
your nose,
your hair,
your hands.  

I love you. ❤️
    </div>

    <button id="endBtn">Next →</button>
  `;
  document.getElementById("endBtn").onclick = page5b; // go to short memo next
  ;
// PAGE 5B – SHORT MEMO
function page5b() {
  card.innerHTML = ``
    <h1>From my heart 🤍</h1>
    <div class="memo">
      I love you.<br><br>
      I choose you.<br><br>
      Even from far away, you are my home.
    </div>
    <button id="nextBtn">Finish →</button>
  `;
  document.getElementById("nextBtn").onclick = page6;
}

/* FINAL */
function page6() {
  card.innerHTML = `
    <h1>
      Distance didn’t stop us.<br>
      And it won’t stop us. ❤️
    </h1>
  `;
}
