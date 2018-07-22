console.log('blink')
var blinkRate = 500;

var el = document.querySelector('#blink')
var on = true
el.style.color = newColorRGB()

newTimeout()

function newTimeout(){
  // var newTime = newInterval(blinkRate)
  var newTime = blinkRate

  setTimeout(() => {
  console.log('interval')
  if(on){
    el.style.display = "inherit"
    el.style.visibility = "visible"
    var newColor = newColorRGB()
    console.log(newColor)
    el.style.color = newColor
  } else {
    el.style.display = "none"
    el.style.visibility = "hidden"
  }
  on = !on
  newTimeout()
  }, newTime)
}

function newInterval(max){
  max = max || 1000
  return Math.random() * max
}

function newColorRGB(){
  var red = Math.random() * 255
  var green = Math.random() * 255
  var blue = Math.random() * 255
  return `rgb(${red},${green},${blue})`
}