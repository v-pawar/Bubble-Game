var clutter = " ";

for (let a = 1; a <= 100; a++) {
  let ans = Math.floor(Math.random() * 10);

  clutter += `<div class="bubble">${ans}</div>`;
}

document.getElementById("pbtm").innerHTML = clutter;
