/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
products= [
  {
    name:"cherry",
    price:1,
    quantity:0,
    productId:4001,
    image:"images/cherry.jpg"
  },
  {
  name:"orange",
  price:2,
  quantity:0,
  productId:4002,
  image:"images/orange.jpg"
  },
  {
  name:"stawberry",
  price:3,
  quantity:0,
  productId:4003,
  image:"images/strawberry.jpg"
  }
]
console.log(this.products[0].productId)
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart = []
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let theproduct
  if (productId === products[0].productId) {
    theproduct = products[0]
  }else if (productId === products[1].productId){
    theproduct = products[1]
  }else if (productId === products[2].productId){
    theproduct = products[2]
  }

  increaseQuantity(productId)
  if (cart.indexOf(theproduct) === -1) {
    cart.push(theproduct)
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let theproduct
  if (productId === products[0].productId) {
    theproduct = products[0]
    products[0].quantity += 1
  }else if (productId === products[1].productId){
    theproduct = products[1]
    products[1].quantity += 1
  }else if (productId === products[2].productId){
    theproduct = products[2]
    products[2].quantity += 1
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  let theproduct
  if (productId === products[0].productId) {
    theproduct = products[0]
    products[0].quantity -= 1
    if (products[0].quantity === 0) {
      removeProductFromCart(productId)
    }
  }else if (productId === products[1].productId){
    theproduct = products[1]
    products[1].quantity -= 1
    if (products[1].quantity === 0) {
      removeProductFromCart(productId)
    }
  }else if (productId === products[2].productId){
    theproduct = products[2]
    products[2].quantity -= 1
    if (products[2].quantity === 0) {
      removeProductFromCart(productId)
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let theproduct
  if (productId === products[0].productId) {
    theproduct = products[0]
    products[0].quantity === 0
  }else if (productId === products[1].productId){
    theproduct = products[1]
    products[1].quantity === 0
  }else if (productId === products[2].productId){
    theproduct = products[2]
    products[2].quantity === 0
  }

  cart = cart.filter(item => item !== theproduct);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let totalprice
  for (let index = 0; index < cart.length; index++) {
    totalprice += cart[index].quantity * cart[index].price;
  }
  return Number(totalprice)
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.splice(0, cart.length)
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  return Number(amount - cartTotal())
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
