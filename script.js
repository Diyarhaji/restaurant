// 1 Pre loadding
const preloading =document .querySelector("[data-preload]")
window.addEventListener("load",function(){
    preloading.classList.add("loaded");
    document.body.classList.add(".loaded")
})


// 2 slide show for mobile

const addEventonElement= function(element, eventType, callback){
    for(let i = 0, b = element.length; i < b; i++) {
        element[i].addEventListener(eventType, callback);
    }
}
const navbar=document.querySelector("[data-navebar]");
const navtogglers =document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector(".overlay");

const togglernavbar=function(){
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
}
addEventonElement(navtogglers, "click", togglernavbar)




//5 header back to top
const header=document.querySelector("[data-header]");
const backtotop=document.querySelector("[data-back-top-btn]");
// code 1
let lastScrollPos=0;
const hideheader=function(){
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }
  
    lastScrollPos = window.scrollY;
}


window.addEventListener("scroll", function(){
    if(window.scrollY  >= 50){
        header.classList.add("active")
        backtotop.classList.add("active")
        hideheader();
    }else{
        header.classList.remove("active")
        backtotop.classList.remove("active")
    }
})







            // 4 slide show           ************
    const heroslide=document.querySelector("[data-hero-slider]");
    const heroslideitem=document.querySelectorAll("[data-hero-slider-item]");
    const heroslideprevbtn =document.querySelector("[data-prev-btn]")
    const heroslidenextbtn =document.querySelector("[data-next-btn]")
    let currenslidepos=0;
    let lastactive=heroslideitem[0]

    const updataslidepos=function(){
        lastactive.classList.remove("active")
        heroslideitem[currenslidepos].classList.add("active")
        lastactive=heroslideitem[currenslidepos];
    }


    const slidenext=function(){
        if(currenslidepos >= heroslideitem.length -1){
            currenslidepos= 0;
        }else{
            currenslidepos++;
        }
        updataslidepos();
    }


    heroslidenextbtn.addEventListener("click" , slidenext)
    const slideprev=function(){
        if(currenslidepos <=0){
            currenslidepos = heroslideitem.length -1
        }else{
            currenslidepos--;
        }
        updataslidepos();
    }

    
    heroslideprevbtn.addEventListener("click", slideprev)
    let autoslide = function (){
        autoslideinterval = setInterval(function(){
            slidenext();
        },7000)
    }
    addEventonElement([heroslidenextbtn, heroslideprevbtn],"mouseover",function(){
        clearInterval(autoslideinterval)
    })
    addEventonElement([heroslidenextbtn, heroslideprevbtn],"mouseout", autoslide)
    window.addEventListener("load", autoslide)



    // 6*******FOLLOW MOUSE**********

    const parallaxItems = document.querySelectorAll("[data-parallax-item]");
    let x,y;

    window.addEventListener("mousemove", function(){
        x= (event.clientX / window.innerWidth * 10)-5
        y= (event.clientY / window.innerHeight * 10)-5
        x = x - (x * 2)
        y = y - (y * 2)

        for(let i=0 ,len=parallaxItems.length; i< len;i++){
            x = x * Number(parallaxItems[i].dataset.parallaxSpeed)
            y = y * Number(parallaxItems[i].dataset.parallaxSpeed)
            parallaxItems[i].style.transform=` translate3d(${x}px , ${y}px, 0px)`
        }
    })

