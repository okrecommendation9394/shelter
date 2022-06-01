const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector('.nav-menu').style.display='flex';
    document.querySelector('.nav-menu').style.width='285px';

})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));