const formRegister = document.querySelector(".form-register")
const inputUser = document.querySelector(".form-register input[name='userName']")
const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const passwordRegex = /^.{4,12}$/

document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", e => {
        e.preventDefault()
        enviarFormulario()
    });


})
