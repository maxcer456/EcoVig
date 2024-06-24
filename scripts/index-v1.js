let menu = document.querySelector('#menu');
let abrirMenu = document.querySelector('#menu-lateral');
let cerrarMenu = document.querySelector('#cierre');

abrirMenu.addEventListener('click',()=>{
    menu.classList.add('nav-visibility');
})

cerrarMenu.addEventListener('click',()=>{
    menu.classList.remove('nav-visibility')
});

let abri = document.querySelector('#menu-izq');
let menuIzquierdo = document.querySelector('#menu-izquierdo');
let cerrar = document.querySelector('#salir');

abri.addEventListener('click', ()=>{
    menuIzquierdo.classList.add('aside-visibilty');
});

cerrar.addEventListener('click',()=>{
    menuIzquierdo.classList.remove('aside-visibilty');
})