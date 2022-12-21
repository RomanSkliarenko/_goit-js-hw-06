document.querySelector('#validation-input').addEventListener('blur',({target})=>{
    const dataLength = +target.getAttribute('data-length')
    const valueLength = target.value.length
    if (valueLength === 0) {
        target.classList.remove('invalid')
        target.classList.remove('valid')
    } else if (dataLength === valueLength) {
        target.classList.remove('invalid')
        target.classList.add('valid')
    } else {
        target.classList.remove('valid')
        target.classList.add('invalid')
    }
})