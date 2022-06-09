const mainBody=document.querySelector('.body')
const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

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
    //for katrine
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
    document.getElementById('woody').addEventListener('click', ()=>{
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

    //for sophia
    document.getElementById('sophia').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[1]['img']} alt=sophia>
        <div class='content'><h3>${obj[1]['name']}</h3>
        <div>${obj[1]['type']} - ${obj[1]['breed']}</div>
        <div>${obj[1]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[1]['age']}</li>
        <li><b>Inoculations:</b> ${obj[1]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[1]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[1]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for timmy
    document.getElementById('timmy').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[5]['img']} alt=timmy>
        <div class='content'><h3>${obj[5]['name']}</h3>
        <div>${obj[5]['type']} - ${obj[5]['breed']}</div>
        <div>${obj[5]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[5]['age']}</li>
        <li><b>Inoculations:</b> ${obj[5]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[5]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[5]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for charly
    document.getElementById('charly').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[7]['img']} alt=charly>
        <div class='content'><h3>${obj[7]['name']}</h3>
        <div>${obj[7]['type']} - ${obj[7]['breed']}</div>
        <div>${obj[7]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[7]['age']}</li>
        <li><b>Inoculations:</b> ${obj[7]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[7]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[7]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for scarlett
    document.getElementById('scarlett').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[3]['img']} alt=scarlett>
        <div class='content'><h3>${obj[3]['name']}</h3>
        <div>${obj[3]['type']} - ${obj[3]['breed']}</div>
        <div>${obj[3]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[3]['age']}</li>
        <li><b>Inoculations:</b> ${obj[3]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[3]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[3]['parasites']}</li>
        </ul></div>`
        window.appendChild(windowBtn);
        windowBtn.onclick=function(){
            mainBody.removeChild(window);
            mainBody.removeChild(overlay);
        }
    })

    //for freddie
    document.getElementById('freddie').addEventListener('click', ()=>{
        mainBody.appendChild(window);
        window.appendChild(windowElem);
        mainBody.appendChild(overlay);
        windowElem.innerHTML=`<img src=${obj[6]['img']} alt=freddie>
        <div class='content'><h3>${obj[6]['name']}</h3>
        <div>${obj[6]['type']} - ${obj[6]['breed']}</div>
        <div>${obj[6]['description']}</div>
        <ul>
        <li><b>Age:</b> ${obj[6]['age']}</li>
        <li><b>Inoculations:</b> ${obj[6]['inoculations']}</li>
        <li><b>Diseases:</b> ${obj[6]['diseases']}</li>
        <li><b>Parasites:</b> ${obj[6]['parasites']}</li>
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
//pagination
let numeration=document.getElementById('numeration_button');
let num=1;
numeration.innerHTML=Number(num);
let leftTwo=document.getElementById('pagination-left-two');
leftTwo.disabled=true;
leftTwo.classList.remove('pagination');
let leftOne=document.getElementById('pagination-left-one');
leftOne.disabled=true;
leftOne.classList.remove('pagination');
let rightOne=document.getElementById('active_button');
let rightTwo=document.getElementById('second_active_button');
rightOne.addEventListener('click', ()=>{
    num+=1;
    if(num>=6){rightOne.disabled=true
    rightOne.classList.remove('pagination')
    rightTwo.disabled=true
    rightTwo.classList.remove('pagination')}
    leftOne.disabled=false;
    leftTwo.disabled=false;
    leftTwo.classList.add('pagination');
    leftOne.classList.add('pagination');
    numeration.innerHTML=Number(num);
    
    document.getElementById('katrine').style.order= Math.ceil(Math.random()*5);
    document.getElementById('jennifer').style.order= Math.floor(Math.random()*3.5);
    document.getElementById('woody').style.order=Math.floor(Math.random()*4);
    document.getElementById('sophia').style.order=Math.ceil(Math.random()*4.5);
    document.getElementById('timmy').style.order=Math.ceil(Math.random() * 5);
    document.getElementById('charly').style.order=Math.floor(Math.random() * 3.5);
    document.getElementById('scarlett').style.order=Math.ceil(Math.random() * 4);
    document.getElementById('freddie').style.order=Math.ceil(Math.random() * 4.5);
})
rightTwo.addEventListener('click', ()=>{
    num+=(6-num);
    rightTwo.disabled=true
    rightOne.disabled=true
    rightOne.classList.remove('pagination')
    rightTwo.classList.remove('pagination')
    leftOne.disabled=false;
    leftTwo.disabled=false;
    leftTwo.classList.add('pagination');
    leftOne.classList.add('pagination');
    numeration.innerHTML=Number(num);

    document.getElementById('katrine').style.order= Math.ceil(Math.random()*5);
    document.getElementById('jennifer').style.order= Math.floor(Math.random()*3.5);
    document.getElementById('woody').style.order=Math.floor(Math.random()*4);
    document.getElementById('sophia').style.order=Math.ceil(Math.random()*4.5);
    document.getElementById('timmy').style.order=Math.ceil(Math.random() * 5);
    document.getElementById('charly').style.order=Math.floor(Math.random() * 3.5);
    document.getElementById('scarlett').style.order=Math.ceil(Math.random() * 4);
    document.getElementById('freddie').style.order=Math.ceil(Math.random() * 4.5);
})
leftTwo.addEventListener('click', ()=>{
    num-=(num-1);
    if(num<=1){leftOne.disabled=true
    leftTwo.disabled=true
    leftTwo.classList.remove('pagination');
    leftOne.classList.remove('pagination');
    rightTwo.disabled=false
    rightOne.disabled=false
    rightOne.classList.add('pagination')
    rightTwo.classList.add('pagination')}
    numeration.innerHTML=num;

    document.getElementById('katrine').style.order= 0;
    document.getElementById('jennifer').style.order= 0;
    document.getElementById('woody').style.order=0;
    document.getElementById('sophia').style.order=0;
    document.getElementById('timmy').style.order=0;
    document.getElementById('charly').style.order=0;
    document.getElementById('scarlett').style.order=0;
    document.getElementById('freddie').style.order=0;
})
leftOne.addEventListener('click', ()=>{
    num-=1;
    if(num<=1){leftOne.disabled=true
    leftTwo.disabled=true
    leftTwo.classList.remove('pagination');
    leftOne.classList.remove('pagination');
    rightTwo.disabled=false
    rightOne.disabled=false
    rightOne.classList.add('pagination')
    rightTwo.classList.add('pagination')
    document.getElementById('katrine').style.order= 0;
    document.getElementById('jennifer').style.order= 0;
    document.getElementById('woody').style.order=0;
    document.getElementById('sophia').style.order=0;
    document.getElementById('timmy').style.order=0;
    document.getElementById('charly').style.order=0;
    document.getElementById('scarlett').style.order=0;
    document.getElementById('freddie').style.order=0;}
    numeration.innerHTML=num;
    

    document.getElementById('katrine').style.order= Math.ceil(Math.random()*5);
    document.getElementById('jennifer').style.order= Math.floor(Math.random()*3.5);
    document.getElementById('woody').style.order=Math.floor(Math.random()*4);
    document.getElementById('sophia').style.order=Math.ceil(Math.random()*4.5);
    document.getElementById('timmy').style.order=Math.ceil(Math.random() * 5);
    document.getElementById('charly').style.order=Math.floor(Math.random() * 3.5);
    document.getElementById('scarlett').style.order=Math.ceil(Math.random() * 4);
    document.getElementById('freddie').style.order=Math.ceil(Math.random() * 4.5);
})

