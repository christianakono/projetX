let navbar =document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');



}

let searchFrom =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}

let cartItem =document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
   

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    cartItem.classList.remove('active');

}

const btn=
document.querySelector('btn');
const notification =
document.querySelector('#notification');

btn.addEventListener('click', () =>{
    notification.classList.add('show')
})

let typed = new typed('.auto-typing',{
    Strings:['libre', 'vous', 'style'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
    fadeout:true,
    fadeoutClass: 'typed-fade-out',
    fadeoutDelay:500,
})
