var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var h1 = document.getElementById("h1");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var input = document.querySelector("input");
var target = document.querySelector("#target");

var p1score = 0;
var p2score = 0;
var winscore = 5;
var iswinscore = false;

b1.addEventListener("click", function () {
  if (!iswinscore) {
    p1score++;
    if (p1score === winscore) {
      iswinscore = true;
      p1.classList.add("winner");
      console.log("game over");
    }
    //console.log(p1score);
    p1.textContent = p1score;
  }
});
b2.addEventListener("click", function () {
  if (!iswinscore) {
    p2score++;
    if (p2score === winscore) {
      iswinscore = true;
      p2.classList.add("winner");

      console.log("game over");
    }

    console.log(p2score);
    p2.textContent = p2score;
  }
});
b3.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p1.classList.remove("winner");
  p2.classList.remove("winner");
  iswinscore = false;
});

num.addEventListener("change", function () {
  target.textContent = input.value;
  winscore = Number(input.value);
});
