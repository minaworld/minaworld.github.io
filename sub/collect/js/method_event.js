// const step = document.querySelectorAll('.process-step li');
const method = document.querySelectorAll('.method-list li');
let vh = document.documentElement.clientHeight;  
let vh07 = vh * 0.7 ;  
let vh03 = vh * 0.3 ;  
let boxTop;
let boxBottom;

function methodEvent() {
    
    for ( i = 0; i < method.length; i++) {
        boxTop = method[i].getBoundingClientRect().top;
        boxBottom = method[i].getBoundingClientRect().bottom;
        
        if( boxTop < vh07 && boxBottom >= vh03) {
            method[i].classList.add("border-effect", "opacity");
            method[i].nextElementSibling.classList.add("on");
        } else {
            method[i].classList.remove("border-effect", "opacity");
            method[i].nextElementSibling.classList.remove("on");
        }
    }
}


let arrow;

for ( i = 0; i < method.length - 1; i++) {
    arrow = document.createElement('img');
    arrow.classList.add('arrow');
    arrow.setAttribute('src', '../../image/icon_arrow_thin.svg');
    method[i].after(arrow);
}


document.addEventListener("scroll", methodEvent);


