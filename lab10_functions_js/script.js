/**
Ebboni McKenzie
//  June 15, function and object
*/

console.log("Ebboni McKenzie")
//========function to print something=========

function msg(){
    console.log("Hello World")
}
//========function to print numbers 1-3,inclusive=========

function printcount(){
    for (let x = 1; x<=3; x++){ console.log(x)}
}

//function that passes a name as argument--- MUST ENTER "" IN CALL TO PASS VARIABLE WHEN CALLING
function greeting(name){
console.log (`Welcome to JavaScript ${name}`);
}

//function that passes a multiple arguments--- MUST ENTER "" IN CALL TO PASS VARIABLE WHEN CALLING


function fullname(firstname, lastname){
    console.log (`Welcome to JS ${firstname} ${lastname[0]}`)}

    let firstname = "Ebb"
    let lastname = "McK"

    fullname(firstname, lastname)

//function without parameters but return value

function sumxy(){
    let x = 10
    let y = 2
    return x+y
    //anylines after the first return will not be executed
   
}

//function with parameters and returns a value
function sum(x,y){return x+y}

//calling sum()
let s = sum(5,10)
console.log (`the sum is ${s}`)

//calling function if number is positive

function checkpositive (number){
if (Number>0){
    return true}
else { return false}
}

//calling the function
let n = 2
let check = checkpositive(n)
console.log(`is number ${n} positive? ${checkpositive(n)}`)

///save function in variable
/*

function addition (num1,num2){
return num1+num2}
*/
const addition = function(num1,num2){
    return num1+num2
}

//regular variable function const product = function(num1,num2){rest num1 * num2}

const product = (num1,num2) => {return num*num2}


//ANONYMOUS FUNCTION
(
    function(){
        console.log("This is an anonymous function")
    }
)();

(
()=>{console.log("this is an anonymous function using arrow")}
)();


//object
//*real-world objects are all around us, they each have attributes and behvaiors that can describe
// attributes describe the features that an object can have
//behaviors describe the actions that ab object can perform

// car is the object
let car ={
    //attribute
    make:"jeep", year:2021, model:"wrangler",color:"orange", startmileage: 10, endmileage: 50,


//behaviors (methods,functions)
accelerate : function(){return this.model},
brake: function() {return this.make},
distancetravel: function(){return this.endmileage - this.startmileage}
}

//add a method "start" to car object
car.start = function(){
    return `${this.make} ${this.model} is running`
}

//add a property 'price'
car.price = 32000
