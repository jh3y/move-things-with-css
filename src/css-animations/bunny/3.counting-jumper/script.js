const BUNNY = document.querySelector('.bunny')
const LABEL = document.querySelector('label')

let span = 0
const UPDATE = () => {
  span++
  LABEL.innerText = `Jumped ${span} times!`
}

BUNNY.addEventListener('animationiteration', UPDATE)
