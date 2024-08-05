// Script for navigation bar
//when hamburger menu is clicked navbar is shown in mobile view
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');
//to check weather navbar is open or not .if open when we click on bar it should close
if(bar) {
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}
//to close the bar
if(close) {
    close.addEventListener('click',() =>{
        nav.classList.remove('active')
    })
}
