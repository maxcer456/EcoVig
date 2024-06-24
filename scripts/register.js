const formRegister = document.querySelector(".form-register")
const inputUser = document.querySelector(".form-register input[type='text']")
const inputEmail = document.querySelector(".form-register input[type='email']")
const inputPassword = document.querySelector(".form-register input[type='password']")
const alertError = document.querySelector(".alerta-error")
const alertExito = document.querySelector(".alerta-exito")

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
const passwordRegex = /^.{4,12}$/
const dnivalidar = /^[0-9]{8}$/

const estadoValidacionCampo = {
    userName : false,
    userEmail : false,
    userPassword : false
}


document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", e => {
        e.preventDefault()
        enviarFormulario()
    });
})

inputUser.addEventListener("input", e => {
    vlaidarcampo(userNameRegex,inputUser, "El usuario debe ser de 4 a 16 caracteres y solo puede contener letras, numeros, guion bajo y guion")
})

inputEmail.addEventListener("input", e => {
    vlaidarcampo(emailRegex,inputEmail, "El email debe ser de 4 a 16 caracteres y solo puede contener letras, numeros, guion bajo y guion")
})

inputPassword.addEventListener("input", e => {
    vlaidarcampo(passwordRegex,inputPassword, "La contraseña debe ser de 4 a 12 caracteres")
})

function vlaidarcampo(regularExpression, campo, mensaje) {
    const vlaidarcampo = regularExpression.test(campo.value);
    if (vlaidarcampo) {
        eliminarError(campo.parentElement.parentElement)
        estadoValidacionCampo[campo.name] = true
        campo.parentElement.classList.remove("error")
        return
    } else {
        estadoValidacionCampo[campo.name] = false
        MostrarError(campo.parentElement.parentElement, mensaje)
        campo.parentElement.classList.add("error")
    }
}

function MostrarError(referenia, mensaje) {
    eliminarError(referenia)
    const error = document.createElement("div")
    error.textContent = mensaje
    error.classList.add("alerta")
    referenia.appendChild(error)
}

function eliminarError() {
    const alerta = document.querySelector(".alerta")
    if (alerta) {
        alerta.remove()
    }
}



function enviarFormulario() {
    if (estadoValidacionCampo.userName && estadoValidacionCampo.userEmail && estadoValidacionCampo.userPassword) {
    alertExito.classList.add("alertaExito");
    alertError.classList.remove("alertaError");
     formRegister.reset();
     setTimeout(() => {
         alertExito.classList.remove("alertaExito");
     }, 3000);
     return;
}
    alertExito.classList.remove("alertaExito");
    alertError.classList.add("alertaError");
    
    setTimeout(() => {
        alertError.classList.remove("alertaError");
    }, 3000);
}
