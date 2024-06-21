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
window.scrollBy(100,0)
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

/*Form Event
input event */
const myform= document.querySelector("#myform")
const greeting = document.querySelector(".greeting")
const greetingname = document.querySelector(".greeting p span")

myform.addEventListener("submit", function(event){
    //prevent the default form submission behavior
    event.preventDefault()
//start form validation, username
    const usernameinput = document.querySelector("#username")
// collect the input text
    const username = usernameinput.value
    //validation 1- make sure the user types a username before pressing submit
    if (username.trim()===""){alert
        ("Please Enter nsme")
        return;
    }
//if validation passed,you can submitthe data to the server
//greeting msg after validation
greetingname.innerHTML = username
greeting.style.display = "block"

usernameinput.value = ""

})
/*password validation*/

const passwordfield = document.querySelector("#passwordfield")
const submitbtn = document.querySelector(".submitbtn")

//collet the password error msg element
const passworderror = document.querySelector(".passworderror")
window.addEventListener("load", function(){
    submitbtn.disabled = true
    submitbtn.style.backgroundColor = "lightgray"
})

//check the length of the password
passwordfield.addEventListener("input", function(){
    let numbercharacter = passwordfield.value.length
    if(numbercharacter<8){
        passworderror.textContent = "password must be 8+ characters..."
    }
    else{
        passworderror.textContent = "Good"
        passworderror.style.color = "green"
        passwordfield.style.border = "solid 2px green"
        submitbtn.disabled = false
        submitbtn.style.backgroundColor = "pink"
    }
})

const commenterror = document.querySelector(".commenterror")

comment.addEventListener("input", function(){
    let numbercharacter = comment.value.length
    if(numbercharacter<50){
        commenterror.textContent = "comments must be between 50-100 character..."
    }
    else {(numbercharacter>100)
        commenterror.textContent = "comment too long!"
    }
   
})