/**
 * Monday June 17ths: Events JS
 * Ebboni McKenzie
 */
console.log("Ebboni M")
//onclick event
//step 1: find and sav element thay we want to apply an event
let btn1 = document.querySelector(".btn1")
//step2: bound the click event to btn1
btn1.onclick = function(){ alert("Hey There!")}

//on mouse over
document.querySelector(".linkqcc").onmouseout = ()=>{
    alert ("Dont touch this!")
}


//change color div
//step1 collect and save elements
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor = document.querySelector(".btncolor")

//step2 bound and event to the btncolor
btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})

    let randomcolor = function(){
let redvalue = Math.floor(Math.random()*255)
let greenvalue = Math.floor(Math.random()*255)
let bluevalue = Math.floor(Math.random()*255)
return `rgb(${redvalue},${greenvalue},${bluevalue})`
   }
  



//collect three button

// add click to change color to orange

let colororange = document.querySelector(".colororange")
let btnorange = document.querySelector(".btnorange")

btnorange.addEventListener("click", function(){
    colororange.style.backgroundColor = "orange"})


//add event to change color to olive

let colorolive = document.querySelector(".colorolive")
let btnolive = document.querySelector(".btnolive")

btnolive.addEventListener("click", function(){
    colorolive.style.backgroundColor = "#808000"})


    //add event to change color to olive

let colorreset = document.querySelector(".colorreset")
let btnreset = document.querySelector(".btnreset")

btnreset.addEventListener("click", function(){
    colorreset.style.backgroundColor = "#ffffff"})

    /*Tuesday, June 18th*/
    /*Event object*/
    // collect button

    let btnpressme = document.querySelector(".btnpressme")
    btnpressme.addEventListener("click",function(e){
        //switch text content 'btnpressme' button from "Press me' to 'Button was pressed"
        if (e.target.textContent === "Press Me!") {
            e.target.textContent = "Button was pressed"
        }
        else {
            e.target.textContent = "Press Me!"
        }
        // toggle btwn class 'btnpressme' and 'btnactive'
        e.target.classList.toggle("btnactive")

    })

    //=======EVENT TO REMOVE ITEM FROM LIST ON CLICK========//

let fruitlist = document.querySelector("#fruitlist")
fruitlist.addEventListener("click",function(event){
  if(event.target.tagName.toLowerCase()==="li"){
    event.target.remove()
  }
})

/*==========prevent default of an event===Prevent goint to website when clicking on link*/

let visitqcc = document.querySelector(".visitqcc")
visitqcc.addEventListener("click",function(event){event.preventDefault()
    alert ("QCC website is down! Try later")
})

/*============================== SCROLL EVENTS===============================*/

let content = document.querySelector("#content")
let btnscrollright = document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click",function(){
window.scrollBy(100.0)
})

/****=======================slice photo gallery=====================================*/

let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

btnleft.addEventListener("click",function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click",function(){
    gallerycontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})

/*to top*/
const gotop =document.querySelector(".gotop")

window.addEventListener("scroll",function(){
let pxtop = window.scrollY;
if(pxtop>=300){
    gotop.style.display ="block"
}
else{gotop.style.display = "none"}
})