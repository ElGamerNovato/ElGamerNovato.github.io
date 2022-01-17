let moon=document.querySelector('#moon');
let stars=document.querySelector('#stars');
let mountains_behind=document.querySelector('#mountains_behind');
let text=document.querySelector('#text');
let btn= document.querySelector('#btn')
let mountains_front=document.querySelector('#mountains_front');
window.addEventListener('scroll', function(){
    let value=window.scrollY;
    stars.style.left=value*0.25+'px';
    moon.style.top=value*1.25+'px';
    mountains_behind.style.top=value*0.5+'px';
    text.style.marginRight=value*3.5+'px';
    text.style.marginTop=value+'px'
    btn.style.marginTop=value+'px'
})

