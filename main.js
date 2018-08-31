var $myButton = document.querySelector('button')
var $count = document.querySelector('h3')
var countTime = false
var intervalID;

function changeDigit() {
  var elapsedTime = parseInt($count.textContent, 10)
  if (countTime === true) {
    elapsedTime += 1 //
    $count.textContent = elapsedTime
  }
}

function changeInterval() {
  countTime = !countTime //toggles between on and off through boolean
  clearInterval(intervalID) //stops the interval regardless if running or not
  intervalID = setInterval(changeDigit, 1000)
  //runs changeDigit() every 1 sec and sets result equlal to intervalID

  if (countTime === true) {
    $myButton.textContent = "Pause"
    $myButton.classList.toggle("newButtonColor")
  } else {
    $myButton.textContent = "Start"
    $myButton.classList.toggle("newButtonColor")
  }
}

$myButton.addEventListener('click', changeInterval)
