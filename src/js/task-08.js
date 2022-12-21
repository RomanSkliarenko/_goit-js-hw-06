
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.target;

    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.target.reset();
}


// ==================================> 2 вариант через обьект и цикл

// function handleSubmit(event) {
//     event.preventDefault();
//     const user = {}
//     for (const key of Object.keys(event.target.elements)) {
//         if (!+key && +key !==0){
//             user[key]=event.target.elements[key].value
//         }
//     }
//     if (user.email === "" || user.password === "") {
//         return alert("Please fill in all the fields!");
//     }
//     console.log(`Login: ${user.email}, Password: ${user.password}`);
//     event.target.reset();
// }