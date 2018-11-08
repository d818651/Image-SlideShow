var timerId;
var currentImg = 0;
var imgSrs = "";

function getSrs() {
  var inputList = document.getElementById("inputList");
  var text = inputList.value + "\n";
  imgSrs = text.split("\n");
  currentImg = 0;
  return imgSrs.length - 1; //возвращаю количество строк =-1
}

function run() {

  if (getDelay() == -1 || getSrs() == -1) return;
  document.querySelector("h2").innerHTML = '<img class="img" id="img" alt="">'; // создаю новый элемент картинка
  timerId = setInterval(changeImg, getDelay()); // запускаю таймер
  changeImg(); // вызов чтобы моментально обновить картинку
  // inputList.hidden = true; // скрываю текст от изменения
}


function checkUrl(id) {

  imgSrs[id] = imgSrs[id].trim();
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
  var regexp = new RegExp(expression);
  if (regexp.test(imgSrs[id]) == true && imgSrs[id].indexOf(" ") == -1) return imgSrs[id];
  else {
    clearInterval(timerId);
    return false;
  }
}

function changeImg() {
  debugger;
  var img = document.getElementById("img");
  if (currentImg >= imgSrs.length - 1) currentImg = 0;
  img.src = checkUrl(currentImg);
  img.alt = "Image №"+(currentImg+1)+" " + imgSrs[currentImg].substring(imgSrs[currentImg].lastIndexOf("/")+1) + " has wrong URL";
  currentImg++; // тут пока некрасиво

}

function getDelay() {
  var val = document.getElementById("time").value;
  if (isNaN(val)) return -1;
  var time = +document.getElementById("time").value;
  return time * 1000;
}

function updateDelay() {
  clearInterval(timerId);
  if (timerId != null) run();
}