console.log("Ebboni McKenzie")
console.log("========Example 1: for loop as counter")
let i = 1;
for (i ; i<5 ;i++){
    console.log(`iteration = ${i}`)
}

console.log("========Example 2: for loop as decrement counter======")
//create a loop counter from 10 to 0 step 1
for (let n =10; n>=0 ; n--){
    console.log(`iteration = ${n}`);
}

console.log("========Example 3: condition inside the loop======")
//check how many even numbers are in btwn -5 and 5
let counter = 0
for (let m = -5; m<=5 ; m++){
    console.log(`iteration = ${m}`)
    if(m%2 === 0 && m !==0){
        counter++
    }
}
console.log(`there is/are ${counter} even numbers`)
console.log (`==========Example 4: while loop as a counter======"`)

let p = 0
while(p<=4){
    console.log(`iteration = ${p}`)
    p++
}
console.log (`==========Example 5: while loop application======"`)
//guess number game
const SECRET = 8

let guessnumber = parseInt(prompt (`Guess a number between 1 and 10`))
while(guessnumber !==SECRET){
guessnumber = parseInt(prompt (`Wrong! Try again`))
}
console.log(`Great Job! The number is ${SECRET}`)

console.log (`==========Example 6: while loop application======"`)
let colors = ["magneta", "olive","babyblue"]
let sizeofcolors = colors.length
let index = 0
while(index<sizeofcolors){
    console.log(colors[index])
    index++
}

console.log (`==========Example 7: while loop simulate a password login======"`)
//terminate loop after 3 attempts

const password = "youcandoit"
let userpassword = prompt("enter password")
let numberattempt = 0
while (userpassword !==password){
    userpassword = prompt("Enter a password again")
numberattempt++
if (numberattempt>2)
    console.log ("Aht Aht one more try!")
    { break}}
userpassword = prompt(`attempt = ${numberattempt}. Try again!`)


console.log ("Aht Aht Aht...No more tries!!")

console.log (`==========Example 7: do-while loop to simulate a withdraw from a bank account======"`)

//user has balance of $1000

let withdraw = 0
let balance = 1000
do{
withdraw = parseInt(prompt("How much do you want to withdraw?"))
if(withdraw<=balance){balance = balance - withdraw
break}

else {
    console.log("insufficient amount, try agian!")
}
}while(withdraw>balance)
console.log (`Your new balance is ${balance}`)


//simulate the collection of a pin number of 4digits
///ask the user to pick a transaction: view the balance, deposit, withdraw --> flow control (if,else if,else)
//ask the user if they want another transaction
//print results


const correctPIN = "8282"
let pin = prompt("Please enter your pin:")
numberattempt = 0 
while (pin !==correctPIN){
    pin = prompt("Try again")
numberattempt++
if (numberattempt>2){
    console.log ("Aht Aht one more try!")
    break}}

let transaction =  ("View balance, deposit, withdraw")
let withdrawmoney = 0
let balanceremaining = 5000
do{
withdraw = parseInt(prompt("How much do you want to withdraw?"))
if(withdrawmoney<=balanceremaining){balanceremaining = balanceremaining - withdrawmoney
break}

else {
    console.log("insufficient amount, try agian!")
}
}while(withdraw>balance)
console.log (`Your new balance is ${balance}`)

