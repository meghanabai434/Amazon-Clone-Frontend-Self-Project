const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn=document.querySelector('.control-next');

let n=0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display= 'none';
        
    }
    imgs[n].style.display= 'block'; 

}

changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeSlide();
})

/*kinda vatini scroll cheyyadaniki*/
/*
const scrollContainer = document.querySelectorAll('.products')
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltay;
    })
}*/

let hamb = document.querySelector('.hamburger');
let hamburg = document.querySelector('.ham-menu');
let cros = document.querySelector('.cross');
let imp = document.querySelector('.main-body');

hamburg.addEventListener('click', ()=>{
    hamb.classList.add('removed-ham');
    imp.classList.add('removed');

})

cros.addEventListener('click', ()=>{
    hamb.classList.remove('removed-ham');
    imp.classList.remove('removed');

})


/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id")
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close")


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
})