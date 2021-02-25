// import './utils/fixes.js';
// import './utils/accuring/accuring.js';
import pages from './config/conditions.js';

if (pages.checkout) {
  const paymentLabel = document.querySelector("#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > div > div > div > label");
  paymentLabel.textContent = 'Оплата банковским переводом';
}
