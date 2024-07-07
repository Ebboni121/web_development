const collectedname = document.querySelector(".collectedname")
const collectedchoice = document.querySelector(".collectedchoice")


collectedname.innerHTML = sessionStorage.getItem('name')
collectedchoice.innerHTML = sessionStorage.getItem('selection')