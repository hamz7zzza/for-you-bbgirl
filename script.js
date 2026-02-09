document.addEventListener("DOMContentLoaded", () => {

const card = document.getElementById("card");

/* ===== FALLING ITEMS ===== */
const container = document.querySelector(".falling-container");
const items = ["❤️", "🤍", "🌸", "🌹"];
function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";
  el.innerText = items[Math.floor(Math.random()*items.length)];
  el.style.left = Math.random()*100 + "vw";
  el.style.fontSize = 16 + Math.random()*14 + "px";
  el.style.animationDuration = 5 + Math.random()*5 + "s";
  container.appendChild(el);
  setTimeout(() => el.remove(), 20000);
}
setInterval(createFallingItem, 400);

/* ===== PAGE 0 : IMPORTANT ===== */
card.innerHTML = `
  <h1>⚠️ Important</h1>
  <div class="memo center">
    Don’t worry.<br><br>
    I won’t bomb your house.<br>
    Trust me.<br><br>
    I love you ❤️
  </div>
  <button class="btn main" id="startBtn">Okay… I trust you 🤍</button>
`;
document.getElementById("startBtn").onclick = page1;

/* ===== PAGE 1 ===== */
function page1() {
  card.innerHTML = `
    <h1>Will you be my Valentine? 💘</h1>
    <img src="cat.png" class="val-img">
    <div class="memo center">I have something special to tell you…</div>
    <button class="btn main" id="yesBtn">Yes 💕</button>
    <button class="btn soft" id="noBtn">No 😢</button>
  `;
  const yes = document.getElementById("yesBtn");
  const no = document.getElementById("noBtn");
  let scale = 1;
  no.onclick = () => {
    scale += 0.3;
    yes.style.transform = `scale(${scale})`;
    if(scale>1.5) no.innerText="Are you sure? 🥺";
  };
  yes.onclick = page2;
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
    <button class="btn main">Continue my bunny 🐰</button>
  `;
  document.querySelector(".btn").onclick = page3;
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
    <button class="btn main">I love you ❤️</button>
  `;
  document.querySelector(".btn").onclick = page4;
}

/* ===== PAGE 4 ===== */
function page4() {
  let count = 0;
  card.innerHTML = `
    <h1>Tap the heart 5 times 💖</h1>
    <div id="bigHeart" style="font-size:80px;cursor:pointer">❤️</div>
    <p id="counter">0 / 5</p>
  `;
  document.getElementById("bigHeart").onclick = () => {
    count++;
    document.getElementById("counter").innerText = `${count} / 5`;
    if(count===5){
      card.innerHTML += `<button class="btn main">Next love 💕</button>`;
      document.querySelector(".btn").onclick = page5;
    }
  };
}

/* ===== PAGE 5 ===== */
function page5() {
  card.innerHTML = `
    <h1>From my heart 🤍</h1>
    <div class="memo">
      When I met you, I knew something quietly beautiful had begun.<br>
A new chapter of my life — one that starts with you.<br><br>

I never knew a girl could be this sweet.<br>
So gentle. So real.<br>
So you.<br><br>

I love everything about you —<br>
the way you talk,<br>
the way you smile,<br>
the way you look at me.<br><br>

Even when we’re on FaceTime and I’m distracted on my phone,<br>
I still notice your eyes watching me.<br>
That look… it stays with me.<br><br>

I love your eyes, your face, your lips, your cheeks.<br>
Even my mom calls you <i>“my cheeks”</i> 🤍<br><br>

She always laughs and says,<br>
“Are you talking to your cheeks again?”<br>
And honestly… sometimes I get a little jealous<br>
because she loves you too 😂😂😂<br><br>

She always tells me that one day I’ll love my wife more than her,<br>
and I laugh — because I’m 27,<br>
and she never pushed me to marry.<br><br>

She only wanted me to find someone like you.<br>
Someone who makes me happy.<br>
Someone who loves the real me.<br>
She knows about the biggest heartbreak of my life.<br><br>

And now… back to you 🤍<br><br>

It’s Valentine’s Day.<br>
I wanted to buy you something,<br>
because you deserve everything.<br>
My budget is low right now — but I promise, later.<br><br>

You deserve something that keeps me in your mind,<br>
even though I know… I’m already there 🤍<br><br>

I know there’s a little kid inside you<br>
who needs love, care, and warmth.<br>
And I’m truly trying to take care of you —<br>
even from far away.<br><br>

I love you more than anything.<br>
You are my world.<br><br>

I’m happy to have you in my life.<br>
Happy to be loved by you.<br>
I hope we meet soon.<br><br>

Sometimes I wish we met earlier —<br>
maybe it would’ve been even more perfect.<br>
But what we have now is beautiful,<br>
and everything is going well.<br><br>

I want to make you happier.<br>
I want to hear you laugh more.<br>
Because I love seeing your smile,<br>
and hearing your laugh.<br><br>

<span style="display:block;text-align:center;margin-top:20px;">
I love your voice.<br>
I love your smile.<br>
I love your eyes.<br>
I love your nose.<br>
I love your head.<br>
I love your hair.<br>
I love your hands.<br><br>

<strong>I love you so much ❤️</strong>
</span>
    </div>
    <button class="btn main">Continue ❤️</button>
  `;
  document.querySelector(".btn").onclick = page6;
}

/* ===== PAGE 6 ===== */
function page6() {
  card.innerHTML = `
    <h1>Choose what you need right now 💌</h1>
    <div class="choices">
      <button class="choice" data="comfort">Comfort 🤍</button>
      <button class="choice" data="love">Love ❤️</button>
      <button class="choice" data="hope">Hope 🌟</button>
    </div>
    <div id="result" class="memo hidden"></div>
  `;
  const texts = {
    comfort:`I wish I could wrap you in my arms right now.<br><br>You don’t have to be strong.`,
    love:`You are deeply loved.<br><br>More than words. More than distance.`,
    hope:`Everything we’re waiting for will make sense one day.<br><br>This isn’t the end.`
  };
  document.querySelectorAll(".choice").forEach(btn=>{
    btn.onclick=()=>{
      const box=document.getElementById("result");
      box.innerHTML=texts[btn.dataset];
      box.classList.remove("hidden");
      box.insertAdjacentHTML("afterend",
        `<button class="btn main">Always you 🤍</button>`);
      document.querySelector(".btn").onclick = page7;
    }
  });
}

/* ===== PAGE 7 ===== */
function page7() {
  card.innerHTML = `
    <h1>A promise 🤍</h1>
    <div class="memo">
      Even on hard days.<br>
      Even when I’m tired.<br>
      Even when we’re far…<br><br>
      I will always choose you.
    </div>
    <button class="btn main">Forever ❤️</button>
  `;
  document.querySelector(".btn").onclick = pageFinal;
}

/* ===== FINAL ===== */
function pageFinal() {
  card.innerHTML = `
    <h1>Distance didn’t stop us ❤️</h1>
    <div class="memo center">
      And it never will.<br><br>
      Happy Valentine’s Day 🤍
    </div>
  `;
}

});
