/*DISPLAY FORM 'displayhtml*/

const collectedname = document.querySelector(".collectedname")
const collectedlanguage = document.querySelector(".collectedlanguage")
//set the collected value in sessionstorage to each collected elements
collectedname.innerHTML = sessionStorage.getItem('firstname')
collectedlanguage.innerHTML = sessionStorage.getItem('selection')


