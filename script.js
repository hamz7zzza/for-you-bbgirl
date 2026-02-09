/* ===== URL PARAMS ===== */
const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl";
document.getElementById("names").innerText = `${from} is asking ${to} 💖`;

const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* ===== NO BUTTON LOGIC ===== */
let yesScale = 1;
let noClicks = 0;

noBtn.onclick = () => {
  noClicks++;
  noBtn.classList.add("shake");
  setTimeout(() => noBtn.classList.remove("shake"), 300);

  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  const scale = Math.max(0.5, 1 - noClicks * 0.1);
  noBtn.style.transform = `scale(${scale}) translate(${Math.random()*120-60}px, ${Math.random()*80-40}px)`;

  if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
  else if (noClicks === 2) noBtn.innerText = "Think again 😭";
  else if (noClicks === 3) noBtn.innerText = "Last chance 💔";
  else noBtn.innerText = "Okay okay 😵";
};

/* ===== FALLING HEARTS SLOW & ROMANTIC ===== */
const container = document.querySelector(".falling-container");
const items = ["❤️", "🤍", "🌸", "🌹"];

function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";
  el.innerText = items[Math.floor(Math.random() * items.length)];

  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 16 + Math.random() * 14 + "px";
  el.style.animationDuration = 10 + Math.random() * 10 + "s";
  el.style.transform = `rotate(${Math.random()*360}deg)`;

  container.appendChild(el);
  setTimeout(() => el.remove(), 20000);
}
setInterval(createFallingItem, 800);

/* ===== PAGE 2 ===== */
yesBtn.onclick = () => {
  card.innerHTML = `
    <h1>Я знаю, що ми далеко… 🤍</h1>
    <div class="memo">
      Можливо, там холодно.<br><br>
      Іноді ти можеш почуватися зовсім самотньо,<br>
      тобі хочеться плакати.<br><br>
      Але ніколи не забувай:<br>
      є людина, яка тебе дуже любить,<br>
      яка завжди думає про тебе.<br><br>
      Я завжди буду поруч із тобою<br>
      і ніколи тебе не залишу,<br>
      бо люблю тебе дуже сильно 🤍
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = page3;
};

/* ===== PAGE 3 ===== */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      I’m thinking about you right now.<br><br>
      Close your eyes… I’m there.<br><br>
      You’re safe with me.<br><br>
      Distance can’t stop what’s real.<br><br>
      Even when I’m not next to you, my heart never leaves you.<br><br>
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = page4;
}

/* ===== PAGE 4 ===== */
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

/* ===== PAGE 5 – LONG MEMO ===== */
function page5() {
  card.innerHTML = `
    <h1>From my heart 🤍</h1>
    <div class="memo">
      When I meet you I know that a new chapter of my life begins with you.<br><br>
      I never knew a sweet girl like you.<br><br>
      I literally love everything about you — the way you talk, the way you smile,
      the way you look at me. Even when we are on FaceTime and I’m doing something
      on my phone, I still notice the way you look at me.<br><br>
      I love your eyes, your face, your lips, your cheeks — even my mom calls you
      “my cheeks”. She always says: “Are you talking to your cheeks?” and sometimes
      I even get jealous because she likes you 😂😂😂<br><br>
      She always tells me that I will love my wife more than her, and I laugh
      because I’m 27 years old and she never pushed me to marry. She only wants me
      to find a girl like you — someone who makes me happy and loves the real me.
      She knows about the biggest heartbreak of my life.<br><br>
      And now… back to you.<br><br>
      It’s Valentine’s Day. I honestly wanted to buy you something because you
      deserve everything, but my budget is low right now. I promise I’ll do it
      later. You deserve something that keeps me in your mind — even though I know
      I’m already there 🤍<br><br>
      I know there is a little kid inside you that needs love and care, and I’m
      truly trying to take care of you, even from far away.<br><br>
      I love you so much — more than anything.<br>
      You are my world.<br><br>
      I’m happy to have you in my life and to be loved by you.<br>
      I hope we meet soon. I wish we met earlier, maybe it would have been even
      more perfect — but what we have now is beautiful.<br><br>
      I want to make you happier, make you laugh more, because I love seeing and
      hearing your laugh.<br><br>
      I love your voice.<br>
      I love your smile.<br>
      I love your eyes.<br>
      I love your nose.<br>
      I love your head.<br>
      I love your hair.<br>
      I love your hands.<br><br>
      I love you so much ❤️
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = pageChoices;
}

/* ===== CHOICES PAGE ===== */
function pageChoices() {
  card.innerHTML = `
    <h1>Choose a message for today 💌</h1>
    <div class="choices">
      <button class="choice" data-msg="comfort">Comfort 🤗</button>
      <button class="choice" data-msg="love">Love 💖</button>
      <button class="choice" data-msg="hope">Hope 🌟</button>
    </div>
    <div id="choiceResult" style="display:none;" class="memo"></div>
  `;

  document.querySelectorAll(".choice").forEach(btn => {
    btn.onclick = () => {
      const type = btn.dataset.msg;
      const box = document.getElementById("choiceResult");

      const texts = {
        comfort: `
          I wish I could wrap you in my arms right now.<br><br>
          You don’t have to be strong all the time.<br>
          I’m here. You can rest.
        `,
        love: `
          You are deeply loved.<br><br>
          More than words.<br>
          More than distance.<br>
          More than you even realize.
        `,
        hope: `
          Everything we’re waiting for<br>
          will make sense one day.<br><br>
          This isn’t the end.<br>
          It’s just the quiet part.
        `
      };

      box.innerHTML = texts[type];
      box.style.display = "block";

      setTimeout(pageFinal, 2500);
    };
  });
}

/* ===== FINAL PAGE ===== */
function pageFinal() {
  card.innerHTML = `
    <h1>
      Distance didn’t stop us.<br>
      And it won’t stop us. ❤️
    </h1>
  `;
}