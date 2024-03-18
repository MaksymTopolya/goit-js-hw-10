// Описаний у документації
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")
form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    
    event.preventDefault()
    const delay= event.target.elements.delay.value

     promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (event.target.elements.state.value === "fulfilled") { 
            resolve(delay)
        } else {
            reject(delay)
        }
        }, delay); 
    }).then((delay) => {
    iziToast.show({
        title: 'Hey',
        message: `✅ Fulfilled promise in ${delay}ms`,
        theme: 'dark', 
        position: 'topCenter',
        color: 'black', 
});
})
    .catch((delay) => {
    iziToast.show({
        title: 'Hey',
        message: `❌ Rejected promise in ${delay}ms`,
        theme: 'dark',
        position: 'topCenter',
        color: 'black', 
    
                 });
    })

}




