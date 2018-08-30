var $myButton = document.querySelector('button')
var $count = document.querySelector('h3')
var countTime = 0
var intervalID;

function changeDigit() {
  var elapsedTime = parseInt($count.textContent, 10)
  if (countTime === true) {
  elapsedTime += 1
  $count.textContent = elapsedTime
  }
}

function changeInterval() {
  countTime = !countTime
  clearInterval(intervalID)
  intervalID = setInterval(changeDigit, 1000)
}

$myButton.addEventListener('click', changeInterval)
