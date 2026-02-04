import {cart} from '../../data/cart.js'
import { getProduct } from '../../data/products.js'
 
export function renderCheckoutHeader(){
  
  let totalItem = 0;
  let headerQuantityHtml ='';

  cart.forEach((cartItem) => {
    totalItem += cartItem.quantity;
  });

  headerQuantityHtml = `
    Checkout (<a class="return-to-home-link"
      href="amazon.html">${totalItem} items</a>)
  `;

  document.querySelector('.js-header-quantity').innerHTML = headerQuantityHtml;
}