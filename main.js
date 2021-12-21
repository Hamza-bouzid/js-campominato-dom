const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const content = document.querySelector(".content");
let contenuto = "";
let count = 0;
let bombeArray = [];

function cellCount() {
  for (let i = 1; i <= count; i++) {
    contenuto += `
      <div class="box d-flex justify-content-center align-items-center" id="item-${i}">${i}</div>
      `;
  }
}

function pushInArray(number) {
  do {
    const controlloArray = Math.floor(Math.random() * number + 1);
    if (!bombeArray.includes(controlloArray)) {
      bombeArray.push(controlloArray);
    }
  } while (bombeArray.length < 16);
}

function active() {
  let box = document.querySelectorAll(".box");
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function () {
      this.classList.add("item-active");
    });
  }
}

easy.addEventListener("click", function (e) {
  content.classList.remove("normal", "hard");
  content.classList.add("animazione-griglia");
  contenuto = "";
  count = 100;
  cellCount();
  content.innerHTML = contenuto;
  active();
  pushInArray(count);
});

medium.addEventListener("click", function (e) {
  contenuto = "";
  content.classList.remove("hard");
  content.classList.add("normal", "animazione-griglia");
  count = 81;
  cellCount();
  content.innerHTML = contenuto;
  active();
  pushInArray(count);
});

hard.addEventListener("click", function (e) {
  contenuto = "";
  content.classList.remove("normal");
  content.classList.add("hard", "animazione-griglia");
  count = 49;
  cellCount();
  content.innerHTML = contenuto;
  active();
  pushInArray(count);
});
console.log(bombeArray);
