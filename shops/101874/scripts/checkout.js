import pages from '../config/conditions.js';

if (pages.checkout) {
  const secondDelivery = document.querySelector("#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > div:nth-child(3) > div > div > label")
  secondDelivery.textContent = 'Другой способ';

  document.querySelectorAll('.register_block h2').forEach((h2,i) => {
    h2.textContent = h2.textContent.replace(/Шаг \d:/gi, '');;
  })
}