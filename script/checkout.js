import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProduct, loadProductsFetch } from "../data/products.js";
// import '../data/backend-practice.js';
// import '../data/cart-class.js'


//Promise is make our coder more flat not nested

// new Promise((resolve) => {    // Resolve is a in-built function
//   loadProduct(()=>{
//     resolve();
//   });
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// })


// async await is better way to handle asynchronous code
// async = makes a function to return a promise
// await = lets us wait for a promise to finish, before goinig to next line.
// await = lets us write asynchronous code like normal code.
async function loadPage() {
  console.log('load page');

  try {
    //throw 'error1';  // Manual error

    await loadProductsFetch(); 

    await new Promise((resolve) => {    // Resolve is a in-built function
      loadProduct(()=>{
        resolve();
      });
    });

  } catch (error) {
    console.log('Unexpected error i async. Please try again later. ');
  }
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
}
loadPage().then(() => {
  console.log('finish');
});



// loadProduct(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   renderCheckoutHeader();
// });