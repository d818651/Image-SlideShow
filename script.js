var timerId;
var currentImg = 0;
var imgSrs;

function getSrs() {
  var inputList = document.getElementById("inputList");
  var text = inputList.value;
  imgSrs = text.split("\n");
  currentImg = 0;
  return imgSrs.length - 1; //возвращаю количество строк =-1
}

function run() {
  if (getDelay() == -1 || getSrs() == -1) return;
  document.querySelector("h2").innerHTML = '<img id="img" alt="Image text">'; // создаю новый элемент картинка
  timerId = setInterval(changeImg, getDelay()); // запускаю таймер
  changeImg(); // вызов чтобы моментально обновить картинку
  // inputList.hidden = true; // скрываю текст от изменения
}

function changeImg() {
    var img = document.getElementById("img");
    img.src = imgSrs[currentImg];
    currentImg++;                                                     // тут пока некрасиво
    if (currentImg >= imgSrs.length - 1) currentImg = 0;
}

function getDelay() {
  var val = document.getElementById("time").value;
  if (isNaN(val)) return -1;
  var time = +document.getElementById("time").value;
  return time * 1000;
}

function updateDelay(){
  clearInterval(timerId);
  run();
}