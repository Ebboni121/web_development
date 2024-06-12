console.log ("Student Name")
console.log ("===Example 1: if statment====")
let day = true

if (day){
    console.log ("Good Morning!")
}

console.log("====Example 2: if-else statment====")
let n1 = 8, n2 = 10

if(n1===n2){
    console.log ("They are equal")
}
else{
    console.log("They are different")
}

console.log ("====Example 3: multiway condition statement ====")
//check if number is positive,negative, or zero
let number = "%"
if (number>0) {
    console.log(`Number ${number} is positive`)
}
else if (number<0){
    console.log (`Number ${number} is negative`)
}
else if (number===0){
    console.log (`The number is zero`)
}
else{
    console.log (`${number}is undefined`)
}
console.log ("====Example 4: multiway condition statement in prompt function====")
////check user enters number, didnt enter anything, or pressed cancel


let n = prompt ("Enter a number: ")

if(n===null){
    console.log ("cancel button was pressed")
}
else if(n===""){
    console.log ("ok button was pressed")
}
else if(isNaN(n)){
    console.log (`${n} is a string`)
}
else {
    console.log (`${n} is a number`)
}

console.log ("====Example 5: nested conditional statement====")

// check if a password has at least 6+ characters and no space
let password = prompt ("Enter a password")

//to find the number of characters in a String, we use mention .length
 if(password.length>=6){
    console.log (`Password ${password} has ${password.length} characters`)
if (password.indexOf(" ")=== -1){
    console.log (`password ${password} DOESNT HAVE SPACE`)
}
else{
    console.log (`password ${password} HAS SPACE`)
}
 }
else{
    console.log(`password ${password} hass less than 6 characters`)



}
//========Exercise===========//


let value= -2
if(value>0){
    console.log(`value ${value} is positive`)
}
else if(value<0){
    console.log(`value ${value} is negative`)}

else if(value===0){
    console.log(`The value is zero`)
}
else {
    console.log(`value ${value} is undefined`)
}
console.log ("=========Example 6: list=================")

let colors = ["yellow", "olive", "green", "purple", "hotpink"]
// all list has an index number that starts with 0 (leftmost)
console.log (`the thirs color is ${colors[2]}`)

let selectcolor = prompt("example 6 select color using number")

switch (selectcolor) {

case '0':
    console.log (`Selected color = ${colors[0]}`)
    break
    case '1':
        console.log (`Selected color = ${colors[1]}`)
        break

  case '2':
        console.log (`Selected color = ${colors[2]}`)
        break


  case '3':
        console.log (`Selected color = ${colors[3]}`)
        break


  case '4':
        console.log (`Selected color = ${colors[4]}`)
        break
default:
        console.log ("color is not in the list")

}
console.log ("====example 7: string====")
let greeting = "Good evening"
console.log (`The seventh character is ${greeting [6]})`)