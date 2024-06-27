/* SURVEY FORM*/
//collect components

const myform = document.querySelector(".myform")

const displayresult = document.querySelector (".displayresult")

myform.addEventListener("submit", function(event){
    const username = document.querySelector("#firstname").value
    const fav_language = document.querySelector("input[name='fav_language']:checked").value
  


    /*======= TEST CODE TO SEE IF DATA WAS WORKING======
    displayresult.innerHTML = `username: ${username}`
    displayresult.innerHTML = `username: ${username} <br>Favortie Web language: ${fav_language}`
    */
   
//save data, user name and fav language
sessionStorage.setItem('firstname',username)
sessionStorage.setItem('selection',fav_language)
sessionStorage.setItem('product123',"Product Name")
})

/**SHOPPING CART */
 //collect form/*/

  const formitem1 = document.querySelector(".formitem1")
  const itemname = document.querySelector(".itemname")
  const itemdescription = document.querySelector(".itemdescription").textContent
  const saleprice=document.querySelector(".saleprice").textContent
  const imgitem1 = document.querySelector(".imgitem1").getAttribute('src')



formitem1.addEventListener("submit", function(){
     //collect quantity 
    const quantityinput = document.querySelector('.quantityinput').value
    //set data in sessionStorage
sessionStorage.setItem('quantityitem1',quantityinput)
sessionStorage.setItem('itemname',itemname)
sessionStorage.setItem('description_item1',itemdescription)
sessionStorage.setItem('saleprice',saleprice)
sessionStorage.setItem('item_image',imgitem1)

})

