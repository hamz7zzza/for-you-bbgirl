document.addEventListener("DOMContentLoaded", () => {

const card = document.getElementById("card");

/* ===== PAGE 0 – Important ===== */
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

/* ===== PAGE 1 – Valentine ===== */
function page1() {
  card.innerHTML = `
    <img src="cat.png" class="val-img">
    <h1>Will you be my Valentine? 💘</h1>
    <p>your husband is asking you 💖</p>
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

    // Yes button يكبر كل مرة
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;

    // النصوص ديال No
    if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
    else if (noClicks === 2) noBtn.innerText = "Think again 😭";
    else if (noClicks === 3) noBtn.innerText = "Last chance 💔";
    else if (noClicks >= 4) noBtn.innerText = "There is no other way, just click Yes 💖";
  };

  yesBtn.onclick = page2;
}

/* ===== PAGE 2 – Distance Memo ===== */
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

/* ===== PAGE 3 – Missing Memo ===== */
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>
    <div class="memo">
      I’m thinking about you right now.<br><br>
      Close your eyes… I’m there.<br>
      You’re safe with me.<br>
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

/* ===== PAGE 5 – Long Memo ===== */
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
      It’s Valentine’s Day. I honestly wanted to buy you something because you deserve everything, but my budget is low.<br>
      I promise I’ll do it later. You deserve something that keeps me in your mind (even though I know I’m always there).<br><br>
      I know there is a little kid inside you that needs love and care, and I’m truly trying to take care of you even from far away.<br><br>
      I love you so much — more than anything.<br>
      You are my world.<br>
      I’m happy to have you in my life and to be loved by you.<br>
      I hope we meet soon.<br>
      I wish we met earlier — maybe it would have been more perfect, but what we have now is beautiful.<br><br>
      I want to make you happier, make you laugh more.<br>
      I love to see your laugh and hear it.<br><br>
      I love your voice.<br>
      I love your smile.<br>
      I love your eyes.<br>
      I love your nose.<br>
      I love your head.<br>
      I love your hair.<br>
      I love your hands.<br><br>
      <strong>I love you so much ❤️</strong>
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageQuiet;
}
function pageQuiet() {
  card.innerHTML = `
    <h1>You don’t need to do anything 🤍</h1>

    <div class="memo">
      You don’t need to click.<br><br>
      You don’t need to choose.<br><br>
      You don’t need to be strong right now.<br><br><br>

      This page exists only to remind you<br>
      that you are loved<br>
      without conditions,<br>
      without effort,<br>
      without distance.<br><br>

      If you feel tired, stay here.<br><br>
      I’m not asking for anything.<br><br>
      I’m just here.
    </div>

    <hr style="margin:30px 0;opacity:0.2">

    <div class="memo">
      I’m not trying to impress you.<br><br>
      I’m not trying to be romantic.<br><br>
      I’m not trying to be perfect.<br><br>
      I’m not trying to win you.<br><br><br>

      I already chose you.<br><br>
      Every day.<br><br>
      Even when it’s quiet.
    </div>

    <button id="nextBtn" style="margin-top:25px">Continue →</button>
  `;

  document.getElementById("nextBtn").onclick = page6;
}
/* ===== PAGE 6 – Choose Message ===== */
function page6() {
  card.innerHTML = `
    <h1>Choose what you need right now 💌</h1>
    <div class="choices">
      <button class="choice" data-msg="comfort">Comfort 🤍</button>
      <button class="choice" data-msg="love">Love ❤️</button>
      <button class="choice" data-msg="hope">Hope 🌟</button>
    </div>
    <div id="result" class="memo" style="display:none;margin-top:20px;"></div>
  `;
  const texts = {
    comfort:`I wish I could wrap you in my arms right now.<br><br>You don’t have to be strong.`,
    love:`You are deeply loved.<br><br>More than words. More than distance.`,
    hope:`Everything we’re waiting for will make sense one day.<br><br>This isn’t the end.`
  };
  document.querySelectorAll(".choice").forEach(btn=>{
    btn.onclick=()=>{
      const box=document.getElementById("result");
      box.innerHTML = texts[btn.dataset.msg];
      box.style.display="block";
      // Each choice gets its own "Always you" button
      box.insertAdjacentHTML("afterend",
        `<button class="mainBtn">Always you 🤍</button>`);
      document.querySelector(".mainBtn").onclick = page7;
    }
  });
}

/* ===== PAGE 7 – Final Choice ===== */
function page7() {
  card.innerHTML = `
    <h1>A promise 🤍</h1>
    <div class="memo">
      Even on days I’m tired.<br>
      Even on days I’m far.<br>
      Even on days life is heavy…<br><br>
      I will always choose you.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageAppreciation;
}

/* ===== PAGE 8 – Things I don’t say enough ===== */
function pageAppreciation() {
  card.innerHTML = `
    <h1>Things I don’t say enough 🤍</h1>
    <div class="memo">
      I’m proud of you.<br><br>
      I admire your strength.<br><br>
      I see your effort, even when no one does.<br><br>
      I’m thankful for you, more than you know.
    </div>
    <button id="nextBtn">Continue →</button>
  `;
  document.getElementById("nextBtn").onclick = pageFinal;
}

/* ===== FINAL PAGE ===== */
function pageFinal() {
  card.innerHTML = `
    <h1 style="font-size:26px">
      Distance didn’t stop us.<br>
      And it won’t stop us. ❤️
    </h1>
    <p style="margin-top:15px; font-size:18px; color:#ff5f9e;">
      Happy Valentine Bunny, I love you 💖 Muwah
    </p>
  `;
}

});
