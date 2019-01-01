const btn = document.getElementById('btn')
const left = document.getElementById('left')
const right = document.getElementById('right')

btn.addEventListener('click', () => {
  const results = ['矢沢永吉', '大吉', '小吉', '凶', '中吉']
  const n = Math.floor(Math.random() * results.length)
  btn.textContent = results[n]
  if(n === 0){
    btn.style.color = "black"
    left.innerHTML = '<img src="img/1.jpg">'
    right.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/oIGeygsGX2I?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }else{
    btn.style.color = "white"
    left.innerHTML = ''
    right.innerHTML = ''
  }
})

btn.addEventListener('mousedown', () => {
  this.className = 'pushed'
})
btn.addEventListener('mouseup', () => {
  this.className = ''
})
