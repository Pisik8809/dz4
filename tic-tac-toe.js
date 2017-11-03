var count = setTimeout(function autoHod() {
  var comp = [];
  comp = document.getElementsByClassName('field');
  console.log(comp);
  (function getRandom() {
  var min = 0;
  var max = comp.length - 1;
  var rand = min + Math.floor(Math.random() * (max + 1 - min));
  console.log(rand);
  comp[rand].innerHTML += '<p>0</p>';
  comp[rand].setAttribute('class', 'comp');
}());
count = setTimeout(autoHod, 8000);
}, 0);
