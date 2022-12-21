// const value = document.querySelector('#value')
//
// document.body.addEventListener('click', e => {
//     const eventDataAction = e.target.getAttribute('data-action')
//     if( eventDataAction === 'decrement'){
//         value.innerHTML <= 0 ? null : value.innerHTML = +value.innerHTML - 1
//     } else if ( eventDataAction === 'increment'){
//         value.innerHTML = +value.innerHTML + 1
//     }
// })


// =============================================> как в задании, через переменную counterValue
let counterValue = 0
const refs = {
    value: document.querySelector('#value'),
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
}
refs.increment.addEventListener('click', (e)=>{
    refs.value.innerText = counterValue += 1
});
refs.decrement.addEventListener('click', (e)=>{
    if(counterValue !== 0){
        refs.value.innerText = counterValue -= 1
    }
});
