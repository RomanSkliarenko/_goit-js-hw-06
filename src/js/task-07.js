document.querySelector('#font-size-control').addEventListener('input', ({target})=>{
    document.querySelector('#text').style.fontSize = `${target.value}px`
})