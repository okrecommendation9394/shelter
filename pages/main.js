const mainBody=document.querySelector('.body')
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');
let layout = document.createElement('div');
layout.classList.add('layout');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector('.nav-menu').style.display='flex';
    document.querySelector('.nav-menu').style.width='285px';
    mainBody.appendChild(layout);

   /* hamburger.addEventListener('click',()=>{
        //  layout.classList.remove('layout');
          mainBody.removeChild(layout);
      })*/
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));
let arr=[];
fetch('pets.json').then(function(response){
    return response.json();
}).then(function (obj){
    console.log(obj);
    document.getElementById('katrine').addEventListener('click', ()=>{
        mainBody.appendChild(layout);
    })
}).catch(function (error){
    console.error('Error');
     console.error(error);
})
