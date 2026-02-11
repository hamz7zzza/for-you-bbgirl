document.addEventListener("DOMContentLoaded", () => {
const music = document.getElementById("bgMusic");
const card = document.getElementById("card");
const container = document.querySelector(".falling-container");

let forcedNoStage = 0;
let heartInterval;

/* ===== FALLING HEARTS ===== */
function createHeart() {
  const el = document.createElement("div");
  el.className = "fall";
  el.innerText = ["❤️","💖","🌸","✨"][Math.floor(Math.random()*4)];
  el.style.left = Math.random()*100 + "vw";
  el.style.fontSize = (14 + Math.random()*20) + "px";
  el.style.animationDuration = (4 + Math.random()*3) + "s";
  container.appendChild(el);
  setTimeout(()=>el.remove(),7000);
}

/* ===== PAGE 0 – Important ===== */
card.innerHTML = `
<h1 style="font-size:28px">⚠️ Important</h1>
<div class="memo">
  Don’t worry.<br><br>
  I won’t bomb your house.<br>
  Trust me.<br><br>
  I love you. ❤️
</div>
<button id="trustBtn">Okay… I trust you 🤍</button>
`;
document.getElementById("trustBtn").onclick = page1;

/* ===== PAGE 1 – Valentine ===== */
function page1() {
  card.innerHTML = `
    <img src="cat.png" class="val-img">
    <h1>Will you be my Valentine? 💘</h1>
    <p>your husband is asking you 💖</p>
    <div class="buttons">
      ${forcedNoStage < 2 ? `<button id="noBtn">No 😢</button>` : ""}
      ${forcedNoStage >= 2 ? `<button id="yesBtn">Yes 💕</button>` : ""}
    </div>
  `;

  if (forcedNoStage < 2) {
    document.getElementById("noBtn").onclick = pageDog1;
  }
  if (forcedNoStage >= 2) {
    document.getElementById("yesBtn").onclick = pageYes;
  }
}

/* ===== DOG PAGE 1 ===== */
function pageDog1() {
  forcedNoStage = 1;
  card.innerHTML = `
    <img src="randy1.jpg" class="val-img">
    <h1>ARE YOU SERIOUS?? 🐕</h1>
    <div class="memo">
      Hit YES not NO.
    </div>
    <button id="nextBtn">Click me</button>
  `;
  document.getElementById("nextBtn").onclick = pageDog2;
}

/* ===== DOG PAGE 2 ===== */
function pageDog2() {
  forcedNoStage = 2;
  card.innerHTML = `
    <img src="randy2.jpg" class="val-img">
    <h1>One last chance… 🐶</h1>
    <div class="memo">
      Are you sure about that?<br><br>
      I’m gonna give you one more chance.<br>
      Hit the button and then say YES.
    </div>
    <button id="nextBtn">Try again</button>
  `;
  document.getElementById("nextBtn").onclick = page1;
}

/* ===== PAGE YES ===== */
function pageYes() {
  card.innerHTML = `
    <img src="cat-love.gif" style="width:240px;"><br><br>
    <h1>
      YAAAY 💖<br>
      That’s my good girl 😌❤️<br>
      I love you forever 💕
    </h1>
    <button id="continueBtn">Continue →</button>
  `;
  music.play();
music.volume = 0.7;
  clearInterval(heartInterval);
  heartInterval = setInterval(createHeart, 90);
  document.getElementById("continueBtn").onclick = page2;
}

/* ===== PAGE 2 – Distance ===== */
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
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = page3;
}

/* ===== PAGE 3 – Missing ===== */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      I’m thinking about you right now.<br><br>
      Close your eyes and breathe.<br>
      I love you so much and you know I’m there.<br>
      You’re safe with me.<br><br>
      Distance can’t stop what’s real.<br>
      Even when I’m not next to you, my heart never leaves you.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = page4;
}

/* ===== PAGE 4 – Tap Heart ===== */
function page4() {
  let clicks = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:80px;cursor:pointer">❤️</div>
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
      I literally love everything about you — the way you talk, the way you smile, the way you look at me.<br><br>
      Even when we are on FaceTime and I’m doing something on my phone, I still notice the way you look at me.<br><br>
      I love your eyes, your face, your lips, your cheeks — even my mom calls you “my cheeks”.<br><br>
      She always says: “Are you talking to your cheeks?” and sometimes I even get jealous because she likes you 😂😂😂<br><br>
      She always tells me that I will love my wife more than her, and I laugh because I’m 27 and she never pushed me to marry.<br><br>
      And now… back to you.<br><br>
      i always keep thinking about uou and end up lauguing when u remeber things we laugh about i love the way you are so much even sometime you mind fuck our vibe ahahaha but that s you i wont complaint about that you are amazimg and the way you are .<br>
      It’s Valentine’s Day. I honestly wanted to buy you something because you deserve everything, but my budget is low.<br>
      I promise I’ll do it later.<br><br>
      I know there is a little kid inside you that needs love and care, and I’m truly trying to take care of you even from far away.<br><br>
      I love you so much — more than anything.<br>
      You are my world.<br><br>
      <strong>I love you so much ❤️</strong>
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageQuiet;
}

/* ===== PAGE QUIET ===== */
function pageQuiet() {
  card.innerHTML = `
    <h1>You don’t need to do anything 🤍</h1>
    <div class="memo">
      This page exists only to remind you<br>
      that you are loved without effort.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = page6;
}

/* ===== PAGE 6 – Choose ===== */
function page6() {
  card.innerHTML = `
    <h1>Choose what you need right now 💌</h1>
    <div class="choices">
      <button class="choice" data-msg="comfort">Comfort 🤍</button>
      <button class="choice" data-msg="love">Love ❤️</button>
      <button class="choice" data-msg="hope">Hope 🌟</button>
    </div>
    <div id="result" class="memo" style="display:none;"></div>
  `;
  const texts = {
    comfort:`I wish I could wrap you in my arms.`,
    love:`You are deeply loved.`,
    hope:`Everything will make sense one day.`
  };
  document.querySelectorAll(".choice").forEach(btn=>{
    btn.onclick=()=>{
      const box=document.getElementById("result");
      box.innerHTML=texts[btn.dataset.msg];
      box.style.display="block";
      box.insertAdjacentHTML("afterend",
        `<button class="mainBtn">Always you 🤍</button>`);
      document.querySelector(".mainBtn").onclick = page7;
    }
  });
}

/* ===== PAGE 7 ===== */
function page7() {
  card.innerHTML = `
    <h1>A promise 🤍</h1>
    <div class="memo">
      I will always choose you.<br>
      Even when it’s quiet.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageAppreciation;
}

/* ===== PAGE 8 ===== */
function pageAppreciation() {
  card.innerHTML = `
    <h1>Things I don’t say enough 🤍</h1>
    <div class="memo">
      I’m proud of you.<br><br>
      I admire your strength.<br><br>
      I’m thankful for you.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageFinal;
}

/* ===== FINAL ===== */
function pageFinal() {
  card.innerHTML = `
    <h1>Distance didn’t stop us ❤️</h1>
    <p style="color:#ff5f9e;font-size:18px">
      Happy Valentine Bunny, I love you 💖
    </p>
  `;
}

});
