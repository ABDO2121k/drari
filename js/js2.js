let menu=document.querySelector("#menu-bars")
let header=document.querySelector("header")








menu.onclick=function(){
    menu.classList.toggle("fa-times")
    header.classList.toggle("active")
}
window.onscroll=function(){
    menu.classList.remove("fa-times")
    header.classList.remove("active")
}


let cursor1=document.querySelector(".cursor-1")
let cursor2=document.querySelector(".cursor-2")


window.onmousemove=(e)=>{
    cursor1.style.top= e.pageY+"px";
    cursor1.style.left= e.pageX+"px";
    cursor2.style.top= e.pageY+"px";
    cursor2.style.left= e.pageX+"px";
}


let links=document.querySelectorAll("a").forEach(links=>{
    links.onmouseenter=()=>{
        cursor1.classList.add("active")
        cursor2.classList.add("active")
    }
    links.onmouseleave=()=>{
        cursor1.classList.remove("active")
        cursor2.classList.remove("active")
    }
    
});










//Get slider Items ' Array.from[ES6 feature]
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"))

// Get  Number of Slides
var slidesCount = sliderImages.length
console.log(slidesCount)

//set Current Slide 
var CurrentSlide =1

// Slide Number Element
var SlideNumberElemnt = document.getElementById("slide-number")

//Previous and Next Buttons

var nextButton = document.getElementById("next")
var prevButton = document.getElementById("prev")

//Handle click on Previous and Next buttons

nextButton.onclick=nexSlide
prevButton.onclick=prevSlide


// Creat the Main UL Element 
paginationUL=document.createElement("ul")

//Set ID on Created UL Element
paginationUL.setAttribute("id","paginationUL")

for(let i = 1 ; i <= slidesCount ; i++){
    //Creat The LI
    paginationLI= document.createElement("li")
    
    //Set Item Content
    paginationLI.setAttribute("data-index",i)
    
    paginationLI.appendChild(document.createTextNode(i))

    paginationUL.appendChild(paginationLI)
}
document.getElementById("indicators").appendChild(paginationUL)

//Get new Created UL

let paginationCreatUl = document.getElementById("paginationUL")

//Get slider Items ' Array.from[ES6 feature]
var paginationBulltes = Array.from(document.querySelectorAll("#paginationUL li"))


//loop throuh All Bulltes itmes
for(let i = 0 ; i<paginationBulltes.length; i++){
    paginationBulltes[i].onclick=function(){

        CurrentSlide = parseInt(this.getAttribute('data-index'))
        TheChecker();
    }
   
}

//Trigger to TheChcker Function
TheChecker()


//Next slide function 
function nexSlide(){
    if (nextButton.classList.contains('disabled')){
        return false
    }else{
        CurrentSlide++
        TheChecker()
    }

}

//Previous slide function 
function prevSlide(){
    if (prevButton.classList.contains('disabled')){
        return false
    }else{
        CurrentSlide--;
        TheChecker();
    }
}

//Creat TheChcker
function TheChecker(){
    //Set the slide Number
     // remove all active Clases
    removeAllActive()
    //set Active on Current Slide
    sliderImages[CurrentSlide - 1].classList.add('active')

    //Set active class on current The li 
    paginationCreatUl.children[CurrentSlide -1].classList.add('active')
    
 // check if current  class From is the first

    if (CurrentSlide == 1){
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    }

    // check if current  class From is the last
    if(CurrentSlide == slidesCount){
        nextButton.classList.add('disabled')
    }else(
        nextButton.classList.remove('disabled')
    )


}

// Remove Alll Active Classes from Images and Pagination bullets

function removeAllActive(){
    //loop Thtough Images
    sliderImages.forEach((img) => {
        img.classList.remove('active')
    })
   paginationBulltes.forEach((bult) => {
      bult.classList.remove('active')
   })
}











































