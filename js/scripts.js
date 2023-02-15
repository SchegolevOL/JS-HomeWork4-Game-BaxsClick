let count = prompt("Введите количество ящиков: ");

let maxTime = maxTimeGame();




let contener = document.querySelector(".contener");
let contenerStyle = getComputedStyle(contener);
let time = document.querySelector("#time");
let countElement = document.querySelector("#count");
//let timeStule = getComputedStyle(time);

let timeMinute = Math.floor(maxTime / 60);
let timeSecond = maxTime % 60;

for (let i = 0; i < count; i++) {
  let div = document.createElement("div");
  div.className = "box";
  div.innerText = i + 1;
  div.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)},${random(
    0,
    255
  )})`;
  div.style.setProperty("left", `${random(100, window.innerWidth - 50)}px`);
  div.style.setProperty("top", `${random(100, window.innerHeight - 50)}px`);
  contener.appendChild(div);
}

let boxs = document.querySelectorAll(".box");

contener.addEventListener("click", (event) => {
  let div = event;
  console.log(div);
  if ((div = "div")) {
    console.log("ok");
    event.target.style.display = 'none';
    count--;
  }
});

//==================================================================================
let idTime = setInterval(() => {
  if (timeSecond == 0) {
    timeMinute--;
    timeSecond = 60;
  }
  timeSecond--;
  let sec = timeSecond < 10 ? `0${timeSecond}` : `${timeSecond}`;
  let min = timeMinute < 10 ? `0${timeMinute}` : `${timeMinute}`;
  time.innerText = "Time : " + min + " : " + sec;
  if (timeMinute * 60 + timeSecond == 0) {
    alert("Game Over");
    clear();
  }
}, 1000);

let idCount = setInterval(() => {
  countElement.innerText = `Count: ${count}`;
  if (count == 0) {
    alert("victory!!!!");
    clear();
  }
}, 100);

let idBox = setInterval(() => {
  for (const box of boxs) {
    box.style.setProperty("left", `${random(50, window.innerWidth - 50)}px`);
    box.style.setProperty("top", `${random(100, window.innerHeight - 50)}px`);
  }
}, 2000);

//==================================================================================
function random(min = 100, max = 500) {
  return Math.random() * (max - min) + min;
  //return window.crypto.getRandomValues(new Uint32Array(1))[0]%(max-min)+min
}
function clear() {
  clearInterval(idTime);
  clearInterval(idBox);
  clearInterval(idCount);
}
function maxTimeGame(){
  let t = prompt("Выберете время\n1-1:00\n2-1:30\n3-2:00");
  switch (t) {
    case "1":
      return 60;
      break;
    case "2":
      return 90;
      break;
    case "3":
      return 120;
      break;
  
    default:
      break;
  }
}