const BUNNY = document.querySelector('.bunny')
const LABEL = document.querySelector('label')

const UPDATE = () => {
  BUNNY.style.animationName = 'none'
  const INTERVAL = Math.floor(Math.random() * 5000)
  setTimeout(() => {
    BUNNY.style.animationName = 'jump'
  }, INTERVAL)
  LABEL.innerText = `Jumping in ${(INTERVAL / 1000).toFixed(1)}s!`
}

BUNNY.addEventListener('animationend', UPDATE)
