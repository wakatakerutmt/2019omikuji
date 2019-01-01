var btn = document.getElementById('btn');
var left = document.getElementById('left');
var right = document.getElementById('right');

btn.addEventListener('click', function() {
  var results = ['矢沢永吉', '大吉', '小吉', '凶', '中吉'];
  var n = Math.floor(Math.random() * results.length);
  this.textContent = results[n];
  if(n === 0){
    this.style.color = "black";
    left.innerHTML = '<img src="img/1.jpg">';
    right.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oIGeygsGX2I?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }else{
    this.style.color = "white";
    left.innerHTML = '';
    right.innerHTML = '';
  }
});

btn.addEventListener('mousedown', function() {
  this.className = 'pushed';
});
btn.addEventListener('mouseup', function() {
  this.className = '';
});
