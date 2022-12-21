const span = document.querySelector('#name-output')

document.querySelector('#name-input').addEventListener('input', (e)=>{
    e.target.value === '' ? span.innerHTML = 'Anonymous' : span.innerHTML = `${e.target.value}`
})




