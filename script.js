const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl ";

document.getElementById("names").innerText =
  `${from} is asking ${to} 💖`;

const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// NO button
let yesScale = 1;
let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;
noBtn.style.animation = "shake 0.3s";
setTimeout(() => noBtn.style.animation = "", 300);
  // YES keeps growing
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Change NO text
  if (noClicks === 1) {
    noBtn.innerText = "Are you sure? 🥺";
  } else if (noClicks === 2) {
    noBtn.innerText = "Think again 😭";
  } else if (noClicks === 3) {
    noBtn.innerText = "Last chance 💔";
  } else {
    noBtn.innerText = "Okay okay 😵";
  }

  // NO shrinks
  const scale = Math.max(0.5, 1 - noClicks * 0.1);
  noBtn.style.transform = `
    scale(${scale})
    translate(${Math.random()*300-150}px, ${Math.random()*200-100}px)
  `;
});

// HEARTS
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

// PAGE 2
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

  document.getElementById("continueBtn").onclick = page3;
});

// PAGE 3 – When you miss me
function page3() {
  card.innerHTML = `
    <h1>When you miss me… 💌</h1>

    <div class="memo">
      I’m thinking about you right now.<br><br>

      Close your eyes… I’m there.<br><br>

      You’re safe with me.<br><br>

      Distance can’t stop what’s real.<br><br>

      Even when I’m not next to you,
      my heart never leaves you.<br><br>

      Miss me softly… I’m already missing you.
    </div>

    <button id="nextBtn">Next step →</button>
  `;

  document.getElementById("nextBtn").onclick = page4;
}
// PAGE 4 – 5 clicks heart → memo
function page4() {
  let clicks = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:70px;cursor:pointer;">❤️</div>
    <p id="count"></p>
  `;

  document.getElementById("bigHeart").onclick = () => {
    clicks++;
    document.getElementById("count").innerText = `${clicks} / 5`;
    if (clicks === 5) page5();
  };
}

// PAGE 5 – MEMO
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

    <button id="endBtn">The end — click here</button>
  `;

  document.getElementById("endBtn").onclick = page6;
}
// PAGE 7 – If you're still here
function page7() {
  card.innerHTML = `
    <h1>If you’re still here… 🕊️</h1>

    <p style="margin-bottom:20px;color:#666;">
      That means you didn’t rush.<br>
      You stayed.
    </p>

    <button class="choice" data-msg="comfort">I need comfort 🤍</button>
    <button class="choice" data-msg="love">I need love 💕</button>
    <button class="choice" data-msg="hope">I need hope ✨</button>

    <div id="choiceResult" class="memo" style="margin-top:20px;display:none;"></div>

    <button id="continueBtn" style="display:none;">Continue →</button>
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
      document.getElementById("continueBtn").style.display = "block";
    };
  });

  document.getElementById("continueBtn").onclick = page6;
}
// FINAL
// PAGE 6
function page6() {
  card.innerHTML = `
    <h1>
      Distance didn’t stop us.<br>
      And it won’t stop us.<br><br>
      I love you so much, bunny 🐰💖
    </h1>

    <button onclick="page7()">One more thing…</button>
  `;
}
