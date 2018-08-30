var $myButton = document.querySelector('button')
var $count = document.querySelector('h3')

function changeDigit() {
  var addInterval = parseInt($count.textContent, 10)
  addInterval += 1
  $count.textContent = addInterval
  console.log(addInterval)
}

$myButton.addEventListener('click', changeDigit)
