// Описаний у документації
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form")

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const inputValue = event.target.elements.delay.value
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
             if (event.target.elements.state.value === "fulfilled") {
                 iziToast.show({
    title: 'Hey',
    message: `✅ Fulfilled promise in ${inputValue}ms`,
            theme: 'dark',
            position: 'topCenter',
            color: 'black', 
    
});
        } else {
                 iziToast.show({
    title: 'Hey',
    message: `❌ Rejected promise in ${inputValue}ms`,
            theme: 'dark',
            position: 'topCenter',
            color: 'black', 
    
});
        }
        }, inputValue); 
    })
}