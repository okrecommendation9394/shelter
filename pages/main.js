const mainBody=document.querySelector('.body')
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');
let layout = document.createElement('div');
layout.classList.add('layout');

if(document.querySelector('.nav-menu').classList.contains('.active')){
    mainBody.style.overflow='hidden';
}
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.querySelector('.nav-menu').style.display='flex';
    document.querySelector('.nav-menu').style.width='285px';
    

    hamburger.addEventListener('click',()=>{
        //  layout.classList.remove('layout');
          
      })
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

//Carousel
const buttons = document.querySelectorAll('[data-carousel-button]')
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('I start to cry');
        const offset=button.dataset.carouselButton === 'next'? 1:-1;
        const slides=button
        .closest('[data-carousel]')
        .querySelector('[data-slides]');
        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex <0) newIndex = slides.children.length -1;
        if(newIndex>=slides.children.length) newIndex = 0;
        slides.children[newIndex].dataset.active =true;
        delete activeSlide.dataset.active;
    })
})

let arr=[];
fetch('pets.json').then(function(response){
    return response.json();
}).then(function (obj){
    console.log(obj);
    let window=document.createElement('div');
    let windowElem=document.createElement('div');
    window.classList.add('window');
    let windowBtn=document.createElement('button');
    windowBtn.classList.add('windowbtn');
    windowBtn.innerHTML=`X`;
    windowElem.classList.add('windowelem');
    let overlay=document.createElement('div');
    overlay.id='overlay';
    document.getElementById('katrine').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[4]['img']} alt=katrine>
        <div class='content'><h3>${obj[4]['name']}</h3>
        <div>${obj[4]['type']} - ${obj[4]['breed']}</div>
        <div>${obj[4]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[4]['age']}</li>
        <li><b>Inoculations:</b> ${obj[4]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[4]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[4]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for jennifer
    document.getElementById('jennifer').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[0]['img']} alt=jennifer>
        <div class='content'><h3>${obj[0]['name']}</h3>
        <div>${obj[0]['type']} - ${obj[0]['breed']}</div>
        <div>${obj[0]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[0]['age']}</li>
        <li><b>Inoculations:</b> ${obj[0]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[0]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[0]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for woody
    document.getElementById('removed').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[2]['img']} alt=woody>
        <div class='content'><h3>${obj[2]['name']}</h3>
        <div>${obj[2]['type']} - ${obj[2]['breed']}</div>
        <div>${obj[2]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[2]['age']}</li>
        <li><b>Inoculations:</b> ${obj[2]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[2]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[2]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })
}).catch(function (error){
    console.error('Error');
     console.error(error);
})
