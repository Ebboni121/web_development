console.log("Ebboni M")
// select <div id="special">
let division = document.querySelector("#special")

//change CSS style,color, to collected division
division.style.color = "orange"
division.style.backgroundColor = "olive"

//select <span class="s3"> 20% 
let s3= document.querySelector(".s3")

////change CSS style,color and font size, to collected span
s3.style.color = ("magenta")
s3.style.fontSize = ("30px")

// selcte class=4 "OFF"
let s4 = document.querySelector(".s4")
s4.style.backgroundColor = "white"
s4.style.padding = "12px"

//change text content
s3.textContent = "50%"
s4.innerHTML = "off by <b><em>midnight</em></b>"


//className method
let span = document.querySelectorAll("#special span")

//assign the class name to one element in the list "spans"
span[1].className = ".changefontfamily"

//setAtrribute method
//find the first <h1> element and we are going to set the class 

let title = document.querySelector("h1")
title.setAttribute("class", "styletitle")


///remove a class name from element
//remove the calss'info" from <div calss="info>"
let divmoreinfo = document.querySelector(".moreinfo")
divmoreinfo.classList.remove("info")

//append a text after <div id="special">
let divspecial = document.querySelector("#special")
divspecial.append("NEW INFORMATION")

// spendChild to add a new <li> to <ul class="todo">
//step1 create <li> element

let newitem = document.createElement("li")
//set2 give content to the new <li>
let newlist = document.createTextNode("study study study")
//join the newlist into newitem.
newitem.appendChild(newlist)
//set 3 append child the newitem into document
//apeend the <ul class=todo">
let todolist = document.querySelector(".todo")
todolist.appendChild(newitem)

//remove an element using removeChild method
todolist.removeChild(todolist.children[2])

//remove an element using remove method
//select the element that youwant to remove and use the method remove
todolist.children[1].remove()