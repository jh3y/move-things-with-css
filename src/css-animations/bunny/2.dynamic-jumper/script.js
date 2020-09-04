const INPUT = document.querySelector('input')
const BUNNY = document.querySelector('.bunny')
const UPDATE = (e) => {
  BUNNY.style.setProperty('--height', e.target.value)
}
INPUT.addEventListener('input', UPDATE)
