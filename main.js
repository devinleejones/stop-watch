var $myButton = document.querySelector('button')
var $count = document.querySelector('h3')

function changeDigit() {
  var elapsedTime = parseInt($count.textContent, 10)
  elapsedTime += 1
  $count.textContent = elapsedTime
}

function changeInterval() {
  setInterval(changeDigit, 1000)
}

$myButton.addEventListener('click', changeInterval)
