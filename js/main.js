let image1=document.querySelector(".img1");
let image2=document.querySelector(".img2");
let image3=document.querySelector(".img3");
let image4=document.querySelector(".img4");
let image5=document.querySelector(".img5");
let image6=document.querySelector(".img6");
let image7=document.querySelector(".img7");
let image8=document.querySelector(".img8");
let imgShow_wrap=document.querySelector(".imgShow_wrapOne");
let imgShow_wrap2=document.querySelector(".imgShow_wrapTwo");
let imgShow_wrap3=document.querySelector(".imgShow_wrapTre");
let imgShow_wrap4=document.querySelector(".imgShow_wrapFour");
let imgShow_wrap5=document.querySelector(".imgShow_wrapFive");
let imgShow_wrap6=document.querySelector(".imgShow_wrapSix");
let imgShow_wrap7=document.querySelector(".imgShow_wrapSeven");
let imgShow_wrap8=document.querySelector(".imgShow_wrapEight");
let showWrap=document.querySelector("showWrapOne");
let showWrap2=document.querySelector("showWrapTwo");
let showWrap3=document.querySelector("showWrapTre");
let showWrap4=document.querySelector("showWrapFour");
let showWrap5=document.querySelector("showWrapFive");
let showWrap6=document.querySelector("showWrapSix");
let showWrap7=document.querySelector("showWrapSeven");
let showWrap8=document.querySelector("showWrapEight");
let crossBtn=document.querySelector(".crossBtn");
let crossBtn2=document.querySelector(".crossBtn2");
let crossBtn3=document.querySelector(".crossBtn3");
let crossBtn4=document.querySelector(".crossBtn4");
let crossBtn5=document.querySelector(".crossBtn5");
let crossBtn6=document.querySelector(".crossBtn6");
let crossBtn7=document.querySelector(".crossBtn7");
let crossBtn8=document.querySelector(".crossBtn8");
let overlay=document.querySelector(".overlay");
let overlayShow=document.querySelector(".overlayShow")




let img1Func=()=>{
    imgShow_wrap.classList.add("showWrapOne");
    overlay.classList.add("overlayShow")
}
crossBtn.addEventListener("click",()=>{
    imgShow_wrap.classList.remove("showWrapOne");
    overlay.classList.remove("overlayShow")
})

let img2Func=()=>{
    imgShow_wrap2.classList.add("showWrapTwo");
    overlay.classList.add("overlayShow")
}
crossBtn2.addEventListener("click",()=>{
    imgShow_wrap2.classList.remove("showWrapTwo");
    overlay.classList.remove("overlayShow")
})
let img3Func=()=>{
    imgShow_wrap3.classList.add("showWrapTre");
    overlay.classList.add("overlayShow")
}
crossBtn3.addEventListener("click",()=>{
    imgShow_wrap3.classList.remove("showWrapTre");
    overlay.classList.remove("overlayShow")
})
let img4Func=()=>{
    imgShow_wrap4.classList.add("showWrapFour");
    overlay.classList.add("overlayShow")
}
crossBtn4.addEventListener("click",()=>{
    imgShow_wrap4.classList.remove("showWrapFour");
    overlay.classList.remove("overlayShow")
})
let img5Func=()=>{
    imgShow_wrap5.classList.add("showWrapFive");
    overlay.classList.add("overlayShow")
}
crossBtn5.addEventListener("click",()=>{
    imgShow_wrap5.classList.remove("showWrapFive");
    overlay.classList.remove("overlayShow")
})
let img6Func=()=>{
    imgShow_wrap6.classList.add("showWrapSix");
    overlay.classList.add("overlayShow")
}
crossBtn6.addEventListener("click",()=>{
    imgShow_wrap6.classList.remove("showWrapSix");
    overlay.classList.remove("overlayShow")
})
let img7Func=()=>{
    imgShow_wrap7.classList.add("showWrapSeven");
    overlay.classList.add("overlayShow")
}
crossBtn7.addEventListener("click",()=>{
    imgShow_wrap7.classList.remove("showWrapSeven");
    overlay.classList.remove("overlayShow")
})
let img8Func=()=>{
    imgShow_wrap8.classList.add("showWrapEight");
    overlay.classList.add("overlayShow")
}
crossBtn8.addEventListener("click",()=>{
    imgShow_wrap8.classList.remove("showWrapEight");
    overlay.classList.remove("overlayShow")
})