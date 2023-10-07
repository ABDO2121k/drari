let  search=document.getElementById("serach-btn");
let searchB=document.querySelector(".search-bar-container")
let  formB=document.getElementById("form-close");
let  loginB=document.getElementById("login-btn");
let form=document.querySelector(".login-form-container")
let registerB=document.querySelector(".registerB")
let form2B=document.querySelector("#form2-close")
let form2=document.querySelector(".register-form-container")
let  loginB2=document.querySelector(".loginB");
let toggle1=document.querySelector("#menu-bar");
let nav=document.querySelector(".navbar")
let videoB=document.querySelectorAll(".vid-btn")

window.onscroll=function(){
    search.classList.remove("fa-times")
    searchB.classList.remove("active")
    toggle1.classList.remove("fa-times");
    nav.classList.remove("active");
}

search.onclick=function(){
search.classList.toggle("fa-times");
searchB.classList.toggle("active");
         }



loginB.onclick=function(){
    form.classList.add("active")
}
formB.onclick=function(){
    form.classList.remove("active")
}




//register toggle


registerB.onclick=function(){
    form2.classList.add("active")
}
form2B.onclick=function(){
    form2.classList.remove("active")
}
loginB2.onclick=function(){
    form2.classList.remove("active")
}

//menu toggle 


toggle1.onclick=function(){
    toggle1.classList.toggle("fa-times");
    nav.classList.toggle("active");
             }

//video 
videoB.forEach(btn=>{
    btn.onclick=function(){
        document.querySelector(".controls .clicked").classList.remove("clicked")
        btn.classList.add("clicked")
        let src=btn.getAttribute("data-src")
        document.querySelector(".video-container video").src=src

    }
})