// URL params
const params = new URLSearchParams(window.location.search);
const from = params.get("from") || "your husband";
const to = params.get("to") || "you baby girl";

document.getElementById("names").innerText = `${from} is asking ${to} 💖`;

const card = document.getElementById("card");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* NO BUTTON */
let yesScale = 1;
let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;
  noBtn.classList.add("shake");
setTimeout(() => noBtn.classList.remove("shake"), 300);

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
const hearts = ["💖","🌸","💕","🌹"];
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (14 + Math.random() * 12) + "px";
  h.style.animationDuration = (7 + Math.random() * 4) + "s";
  h.style.opacity = "0.8";
  document.getElementById("hearts-container").appendChild(h);
  setTimeout(() => h.remove(), 10000);
}
let heartInterval = setInterval(createHeart, 450);

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
}

/* PAGE 3 */
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

/* PAGE 5 – LONG MEMO */
function page5() {
  card.innerHTML = `
    <h1>From my heart 🤍</h1>
    <div class="memo">
    When I meet you I know that a new chapter of my life begins with you 
I never knew a sweet girl like you 
I literally love everything about you they way you talk they way you smile the way you looking at me like even if we are talking ft and I m doing something in my phone I saw the way you look at me I love your eyes you face you lips you cheeks even mom call you by “ my cheeks”
She is always saying are you talking to your cheeks  and even I know sometimes get jealous cuz mom like that 😂😂😂 she always telling that I m gonna love my wife more than her and i always laugh about that cuz I m 27 yo and she never told me to get marry just always asking me to find a girl like you make me happy and love the real who am I cuz she knew about my biggest broken heart happened to me and let back talking about you 
It a valentine day I want honestly to buy something cuz you deserve everything but low budget but I m gonna do it later ofc you need something that keep me in your mind ( even I know I m always there but …)  and yes I always knew there is a little kid inside you need love and caring i honestly trying to take care of you even I m far away 
I love you so much more than anything 
You are the world to me 
I m happy cuz I have you in my life and loving me 
I hope me meet soon and also I wish that we meet sooner maybe it gonna more perfect than that but it’s good now everything going well 
And I wish make you more happy and laugh more 
Cuz I love to see your laugh and hear it 
I love your voice 
I love your  smile 
I love your eyes 
I love your nose 
I love your head 
I love your hair 
I love your hands 
I love you so much ❤️
    </div>
    <button id="nextBtn">Next →</button>
  `;
  document.getElementById("nextBtn").onclick = pageChoices;
}

/* CHOICE PAGE */
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

  // Add click events
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

      // After user chooses, show final page automatically after short delay
      setTimeout(pageFinal, 2500);
    };
  });
}

/* FINAL PAGE */
function pageFinal() {
  card.innerHTML = `
    <h1>
      Distance didn’t stop us.<br>
      And it won’t stop us. ❤️
    </h1>
  `;
}
