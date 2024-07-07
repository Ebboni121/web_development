//collect the elements
const price_display = document.querySelector('.price_display')
const quantity_display = document.querySelector('.quantity_display')
const total_display = document.querySelector('.total_display')
const itemimg_display = document.querySelector('.itemimg')
const itemdescription_display = document.querySelector('.itemdescription')

//get value for quantity and price per unit
const itemprice = sessionStorage.getItem('saleprice')
const quantityitem = sessionStorage.getItem('quantityitem1')
const itemimage = sessionStorage.getItem('item_image')
const itemdescription = sessionStorage.getItem('description_item1')

//calculate for the total price
const totalprice = (itemprice * quantityitem).toFixed(2)

/*print price,quantity and total
price_display.innerHTML = `$ ${itemprice}`
quantity_display.innerHTML = `${quantityitem}`
total_display.innerHTML = `$ ${totalprice}`*/




let image = document.createElement('img')
image.src = sessionStorage.getItem('item_image')
image.style.width = "60px"

itemimg_display.append(image)

//append product description
let product = document.createElement('p')
product.innerHTML = itemdescription
itemdescription_display.append(product)


//append price
let productprice = document.createElement('p')
productprice.innerHTML = itemprice
price_display.append(productprice)

//append quantity
let totalquantity = document.createElement('p')
totalquantity.innerHTML = quantityitem
quantity_display.append(totalquantity)


//append total price
let total =document.createElement('p')
total.innerHTML = totalprice
total_display.append(total)

