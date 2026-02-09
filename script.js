/* ===== URL PARAMS ===== */
const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl";

const card = document.getElementById("card");

/* ===== FALLING ITEMS ===== */
const container = document.querySelector(".falling-container");
const items = ["❤️", "🤍", "🌸", "🌹"];

function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";
  el.innerText = items[Math.floor(Math.random() * items.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = 16 + Math.random() * 14 + "px";
  el.style.animationDuration = 5 + Math.random() * 5 + "s";
  container.appendChild(el);
  setTimeout(() => el.remove(), 20000);
}
setInterval(createFallingItem, 400);

/* ===== PAGE 0 – WARNING ===== */
card.innerHTML = `
  <h1 style="font-size:28px">⚠️ Important</h1>
  <div class="memo" style="text-align:center">
    Don’t worry.<br><br>
    I won’t bomb your house.<br>
    Trust me.<br><br>
    I love you. ❤️
  </div>
  <button id="trustBtn">Okay… I trust you 🤍</button>
`;
document.getElementById("trustBtn").onclick = page1;

/* ===== PAGE 1 ===== */
function page1() {
  card.innerHTML = `
    <img src="cat.png" class="val-img">
    <h1>Will you be my Valentine? 💘</h1>
    <p>${from} is asking ${to} 💖</p>
    <div class="buttons">
      <button id="yesBtn">Yes 💕</button>
      <button id="noBtn">No 😢</button>
    </div>
  `;

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  let yesScale = 1;
  let noClicks = 0;

  noBtn.onclick = () => {
    noClicks++;
    noBtn.classList.add("shake");
    setTimeout(() => noBtn.classList.remove("shake"), 300);
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
    else if (noClicks === 2) noBtn.innerText = "Think again 😭";
    else if (noClicks === 3) noBtn.innerText = "Last chance 💔";
    else noBtn.innerText = "Okay okay 😵";
  };

  yesBtn.onclick = page2;
}

/* ===== PAGE 2 ===== */
function page2() {
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
  `;
  setTimeout(page3, 5000);
}

/* ===== PAGE 3 ===== */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      I’m thinking about you right now.<br><br>
      Close your eyes… I’m there.<br><br>
      You’re safe with me.<br><br>
      Distance can’t stop what’s real.<br><br>
      Even when I’m not next to you, my heart never leaves you.
    </div>
  `;
  setTimeout(page4, 5000);
}

/* ===== PAGE 4 ===== */
function page4() {
  let clicks = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:80px;cursor:pointer">❤️</div>
    <p id="count">0 / 5</p>
  `;
  document.getElementById("bigHeart").onclick = () => {
    clicks++;
    document.getElementById("count").innerText = \`\${clicks} / 5\`;
    if (clicks === 5) page5();
  };
}

/* ===== PAGE 5 – LONG MEMO (كامل بلا نقصان) ===== */
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
  `;
  setTimeout(pageChoices, 8000);
}

/* ===== PAGE 6 – CHOICES ===== */
function pageChoices() {
  card.innerHTML = `
    <h1>Choose what you need today 💌</h1>
    <div class="choices">
      <button class="choice" data-msg="comfort">Comfort 🤗</button>
      <button class="choice" data-msg="love">Love 💖</button>
      <button class="choice" data-msg="hope">Hope 🌟</button>
    </div>
    <div id="choiceResult" class="memo" style="display:none"></div>
  `;

  const texts = {
    comfort: `I wish I could wrap you in my arms right now.<br><br>You don’t have to be strong with me.`,
    love: `You are deeply loved.<br><br>More than words. More than distance.`,
    hope: `Everything we’re waiting for will make sense one day.<br><br>This is not the end.`
  };

  document.querySelectorAll(".choice").forEach(btn => {
    btn.onclick = () => {
      const box = document.getElementById("choiceResult");
      box.innerHTML = texts[btn.dataset.msg];
      box.style.display = "block";
      setTimeout(pagePromise, 3500);
    };
  });
}

/* ===== PAGE 7 – PROMISE ===== */
function pagePromise() {
  card.innerHTML = `
    <h1>A promise 🤍</h1>
    <div class="memo">
      Even on days I’m tired.<br>
      Even on days I’m far.<br>
      Even on days life is heavy…<br><br>
      I will always choose you.
    </div>
  `;
  setTimeout(pageFinal, 5000);
}

/* ===== FINAL ===== */
function pageFinal() {
  card.innerHTML = `
    <h1 style="font-size:26px">
      Distance didn’t stop us.<br>
      And it won’t stop us. ❤️
    </h1>
  `;
}
