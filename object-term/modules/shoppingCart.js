//exporting modules
console.log('export module');

export const shippingCart = 10;
const cart = [];


 export const addToCart = function (product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to the cart`);
  }

