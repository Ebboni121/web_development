

let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let productcontainer = document.querySelector(".productcontainer")

btnleft.addEventListener("click",function(){
    productcontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })
})

btnright.addEventListener("click",function(){
    productcontainer.scrollBy({
        left: 500,
        behavior: "smooth"
    })
})



/**SHOPPING CART */
 //collect form/*/

 const formitem = document.querySelector(".formitem")
 const itemname = document.querySelector(".itemname")
 const itemdescription = document.querySelector(".itemdescription").textContent
 const saleprice=document.querySelector(".saleprice").textContent
 const imgitem = document.querySelector(".imgitem").getAttribute('src')



formitem.addEventListener("submit", function(){
    //collect quantity 
   const quantityinput = document.querySelector('.quantityinput').value
   //set data in sessionStorage
sessionStorage.setItem('quantityitem1',quantityinput)
sessionStorage.setItem('itemname',itemname)
sessionStorage.setItem('description_item1',itemdescription)
sessionStorage.setItem('saleprice',saleprice)
sessionStorage.setItem('item_image',imgitem)

})
