function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let divCount

function createBoxes(amount) {
  const size = 200
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div')
    div.classList.add('block')
    div.innerText = `${i + 1}`
    div.style.backgroundColor = `${getRandomHexColor()}`
    div.style.width = `${(i + 1) * 10 + size}px`
    div.style.height = `${(i + 1) * 10 + size}px`
    refs.boxes.append(div)
  }
}
function destroyBoxes() {
  document.querySelectorAll('.block').forEach( box => box.remove() )
}

const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
}

refs.input.addEventListener('input',(e)=> divCount = e.target.value)
refs.btnDestroy.addEventListener('click',destroyBoxesHandler)
refs.btnCreate.addEventListener('click', createBoxesHandler);



function destroyBoxesHandler() {
   destroyBoxes()
}
function createBoxesHandler() {
  destroyBoxes()
  createBoxes(divCount)
}

