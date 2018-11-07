var time = 5;
var timerId;
var currentImg = 0;
var imgSrs;

function getSrs(){
  var inputList = document.getElementById('inputList');
  var text = inputList.value;
  imgSrs = text.split("\n");
  return imgSrs.length-1;
}

function run() {
  debugger;
  if (getDelay() == -1 || getSrs()==-1 ) return;
  document.querySelector("h2").innerHTML = "<img id=\"img\" alt=\"Image text\">"; // создаю новый элемент картинка
  timerId = setInterval(changeImg, getDelay());  
  changeImg();
  // inputList.hidden = true; // скрываю текст от изменения
}

function changeImg() {
   {
    var img = document.getElementById("img");
    img.src = imgSrs[currentImg];
    console.log(imgSrs[currentImg]);
    currentImg++;
    if (currentImg >= imgSrs.length - 1) currentImg = 0;
  }

}

function getDelay() {
  if (!isNaN(val)) return -1;
  var val = document.getElementById("time").value;
    time = +val;
    return time * 1000;
}