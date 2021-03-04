import '../../fixes/js/RemoveBlur/RemoveBlur.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
import '../../components/HeaderTypeTwo/HeaderTypeTwoV2.js';
import '../../components/PictureCategories/PictureCategories.js';
import Fixes from './fixes/fixes.js';
import AdvantagesTypeTwo from '../../components/AdvantagesTypeTwo/AdvantagesTypeTwo.js';
import { adv } from './utils/utils.js';
import { contactData } from './utils/utils.js';
import Footer from './blocks/footer.js';
import ProductPage from './blocks/product-page.js';
import icons from './utils/icons.js';
import changeLinks from './scripts/changeLinks.js';

let fixes = new Fixes();
let footer = new Footer();

fixes.deleteUnnecessaryClasses();
fixes.updateImgCategories();
fixes.insertTitleToCategories();
fixes.updateClasses();

footer.addIcons();

if (document.querySelector('.wrapper')) {
  const headerIcons = {
    cart: document.querySelector('body .header_widgets .header-cart i'),
    like: document.querySelector('body .header_widgets .header_wishlist i'),
  };

  headerIcons.cart.classList.remove('fa-shopping-cart', 'far');
  headerIcons.cart.insertAdjacentHTML('afterbegin', icons.cartBlack);
  headerIcons.like.classList.remove('far', 'fa-heart');
  headerIcons.like.insertAdjacentHTML('afterbegin', icons.like);

  let target = document.querySelector('#search_results');
  const config = {
    childList: true,
  };
  const callback = function (mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const btnSearchText = document.querySelector('#search_results > div > a > span');
        const num = btnSearchText.textContent.match(/\d/gi);
        btnSearchText.textContent = `Смотреть все (${num.join('')})`;
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(target, config);

  changeLinks();
}

/*
if (document.querySelector('.product-item')) {
  document.querySelectorAll('.product-item .add_to_cart button').forEach((btn) => {
    btn.querySelector('i').remove();
    btn.textContent = 'В корзину';
    btn.insertAdjacentHTML('afterbegin', icons.cartWhite);
  });
}
*/

/*if (document.querySelector('.product-product')) {
  const btnCart = document.querySelector('#button-cart');
  btnCart.querySelector('i').remove();
  btnCart.textContent = 'В корзину';
  btnCart.insertAdjacentHTML('afterbegin', icons.cartWhite);
}*/

if (document.querySelector('.common-home')) {
  // const customSection = document.querySelector('.custom_section')
  // // customSection.classList.add('container')
  // const map = new ContactsWithMap(customSection, 'beforeend', contactData)
  // map.render()

  let advantages = new AdvantagesTypeTwo(
    document.querySelector('#home > div.wrapper .homefeatured_category'),
    adv,
    'afterend',
  );
  advantages.render();

  // if(screen.width >= 993) {
  //   document.querySelector(".homefeatured_category").insertAdjacentHTML("afterend", `<div class='container'><img class='ft-img' style="width: 100%" src='https://res.cloudinary.com/sellavi-estarodubov/image/upload/v1613390702/sellavi/102305/Component_1_1_da26cx.png' alt='features' /></div>`)
  // }
}

if (document.querySelector('.product-product')) {
  let product = new ProductPage();
  product.renderColor();
  product.errorMessage();
}

if (document.querySelector('.checkout-checkout')) {
  document.querySelector('#payment-address-new > div:nth-child(3) > div > label').textContent =
    'Полный адрес (требуется)';
  document.querySelector(
    '#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.payment-method > div > div > div > label',
  ).textContent = 'ONLINE';
}

if (document.querySelector('.product-category')) {
  changeLinks();
}