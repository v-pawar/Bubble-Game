// multiple bubble logic
function makeBubble() {
  var clutter = " ";

  for (let a = 1; a <= 100; a++) {
    let ans = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${ans}</div>`;
  }
  document.getElementById("pbtm").innerHTML = clutter;
}

// timer function
let time = 60;
function runtime() {
  let stoptimer = setInterval(() => {
    if (time < 0) {
      clearInterval(stoptimer);
      document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1>`;
    } else {
      document.getElementById("timer").innerText = time;
      time--;
    }
  }, 1000);
}

// hit number function
let hit = 0;
function hitman() {
  hit = Math.floor(Math.random() * 10);
  document.getElementById("hit").innerText = hit;
}

// score function

var score = 0;
function incscore() {
  score += 10;
  document.getElementById("score").innerText = score;
}

// event listening event bubbling

document.getElementById("pbtm").addEventListener("click", function (details) {
  let clickednum = Number(details.target.textContent);
  if (clickednum === hit) {
    incscore();
    hitman();
    makeBubble();
  }
});

runtime();
hitman();
makeBubble();
