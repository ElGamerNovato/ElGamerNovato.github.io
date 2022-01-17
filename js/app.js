let moon=document.querySelector('#moon');
let stars=document.querySelector('#stars');
let mountains_behind=document.querySelector('#mountains_behind');
let text=document.querySelector('#text');
let btn= document.querySelector('#btn')
let mountains_front=document.querySelector('#mountains_front');
let header= document.querySelector('header')
window.addEventListener('scroll', function(){
    let value=window.scrollY;
    if(this.window.matchMedia("(min-width: 600px)").matches){
        if(value<=this.window.innerHeight-200){
            stars.style.left=value*0.25+'px';
            moon.style.top=value*1.25+'px';
            mountains_behind.style.top=value*0.5+'px';
            text.style.marginRight=value*3.5+'px';
            text.style.marginTop=value+'px'
            btn.style.marginTop=value+'px'
            header.style.top=value*0.8+'px'
    } 
    }else{
        if(value<=this.window.innerHeight){
            stars.style.left=value*0.15+'px';
            moon.style.top=value+'px';
            mountains_behind.style.top=value*0.1+'px';
            text.style.marginRight=value*2+'px';
            text.style.marginTop=value*0.5+'px'
            btn.style.marginTop=value+'px'
            header.style.top=value*0.5+'px'        
    }
}
console.log(`window: ${this.window.innerHeight}`)
console.log(`value: ${value}`)
})
