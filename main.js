var $myButton = document.querySelector('button')
var $watchNumber = document.querySelector('h3')
var currentTime = false
var intervalID;

function changeDigit() {
  var elapsedTime = parseInt($watchNumber.textContent, 10)
  if (currentTime === true) {
    elapsedTime += 1 //
    $watchNumber.textContent = elapsedTime
  }
}

function changeInterval() {
  currentTime = !currentTime
  clearInterval(intervalID)
  intervalID = setInterval(changeDigit, 1000)
  if (currentTime === true) {
    $myButton.textContent = "Pause"
    $myButton.classList.toggle("newButtonColor")
  } else {
    $myButton.textContent = "Start"
    $myButton.classList.toggle("newButtonColor")
  }
$myButton.addEventListener('click', changeInterval)
