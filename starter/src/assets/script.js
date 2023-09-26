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
  let theProduct
  for (let index = 0; index < products.length; index++) {
    if (productId === products[index].productId) {
      theProduct = products[index]
      break
    }
  }
  //I looked up the difinition of Array some, but the result of array some is True/False.
  //In here I need to locate the right productID rather than having True/False value.

  increaseQuantity(productId)
  if (cart.indexOf(theProduct) === -1) {
    cart.push(theProduct)
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  for (let index = 0; index < products.length; index++) {
    if (productId === products[index].productId) {
      products[index].quantity += 1
      break
    }
  }
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  //I can use the map function to go through the whole array,
  //however I looked up some information and found the map function cannot contain an if function.
  //I need the if function to locate the right productID
  for (let index = 0; index < products.length; index++) {
    if (productId === products[index].productId) {
      products[index].quantity -= 1
      if (products[index].quantity === 0) {
        removeProductFromCart(productId)
      }
      break
    }
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  let theProduct
  for (let index = 0; index < products.length; index++) {
    if (productId === products[index].productId) {
      theProduct = products[index]
      products[index].quantity = 0
      break
    }
  }
  cart = cart.filter(item => item !== theProduct);
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let totalprice = 0
  for (let index = 0; index < cart.length; index++) {
    totalprice += cart[index].quantity * cart[index].price;
  }
  return totalprice
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
