import '../../fixes/js/RemoveBlurAndAddBtn/RemoveBlurAndAddBtn.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
// import '../../fixes/js/ButtonContainerInProductCard/ButtonContainerInProductCard.js';
import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
// import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
// import socIconsData from './utils/socIconsData.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';
import icons from './utils/icons.js';

// if (document.querySelector('.header-wrapper')) {
//   document.querySelector('.fa-heart').innerHTML = icons.like;
//   document.querySelector('.fa-shopping-cart.far').innerHTML = icons.cart;
// }

// if (document.querySelector('.price_actions.d-flex.justify-content-between')) {
//   document.querySelector('.price_actions.d-flex.justify-content-between > div.buttons__container > div.add_to_cart > button > i').innerHTML = icons.cart;
//   document.querySelector('.price_actions.d-flex.justify-content-between .add_to_wishlist > button > i').innerHTML = icons.like;
  
//   let arrayOfCarts = document.querySelectorAll('.price_actions.d-flex.justify-content-between > div.buttons__container > div.add_to_cart > button > i');
//           let arrayOfHearts = document.querySelectorAll('.price_actions.d-flex.justify-content-between .add_to_wishlist > button > i');

//           for (let i = 0; i < arrayOfCarts.length; i++) {
//             arrayOfCarts[i].innerHTML = icons.cart;
//             arrayOfHearts[i].innerHTML = icons.like; 
//           }
// }


  // if (
  //   document.querySelector('body.product-category') ||
  //   document.querySelector('body.common-home .products')
  // ) {
  //   let target = document.querySelector('body div.products');
  //   const config = {
  //     childList: true,
  //   };
  //   const callback = function (mutationsList, observer) {
  //     for (let mutation of mutationsList) {
  //       if (mutation.type === 'childList') {
  //         let arrayOfCarts = document.querySelectorAll('.price_actions.d-flex.justify-content-between > div.buttons__container > div.add_to_cart > button > i');
  //         let arrayOfHearts = document.querySelectorAll('.price_actions.d-flex.justify-content-between .add_to_wishlist > button > i');

  //         for (let i = 0; i < arrayOfCarts.length; i++) {
  //           arrayOfCarts[i].innerHTML = icons.cart;
  //           arrayOfHearts[i].innerHTML = icons.like; 
  //         }
  //       }
  //     }
  //   };
  //   const observer = new MutationObserver(callback);
  //   observer.observe(target, config);
  // }




if (!location.pathname.includes('checkout')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.navigation_black_screen').remove();
}
  // if (document.querySelector('.header-wrapper')) {
//   document.querySelector('#home > div.wrapper.wrapper-closed > header > div.header-wrapper > div.container > ul > li.flexy.no_children > a').innerHTML = 'Статьи';
// }

if (document.querySelector('.product-product')) {
  document.querySelector('#home > div.wrapper.wrapper-closed > div.content-area > section > div > div > div:nth-child(2) > div.table_holder > table > tbody > tr > td.title').innerHTML = 'Артикул'
}

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div:nth-child(1) > div > div > div > div > div > div > h3 > span').insertAdjacentHTML('afterend', '<div class="info-after">для прочистки любой степени сложности</div>');
  document.querySelector('#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > h3 > span ').insertAdjacentHTML('afterend', '<div class="info-after">для прочистки любой степени сложности</div>');
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > section.page-section.homefeatured_category').insertAdjacentHTML('beforebegin', '<div class="info-info"><div class="container"><div class="chist"><span>У нас есть оборудование для прочистки :</span><div class="images-cat"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981545/Group_263_yqbfu2.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981548/Group_262_qvsvtl.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981550/Group_261_dcngmx.png"><img src="https://res.cloudinary.com/dtqqfmyqb/image/upload/v1610981552/Group_264_obwqzn.png"></div></div></div></div>');
}

if (document.querySelector('.common-home')) {
  document.querySelector('#home > div > div.content-area > div.info-info').insertAdjacentHTML('afterend', '<div class="container"><span>Каталог товаров</span></div>');
}

if (document.querySelector('.common-home')) {
  document.querySelector('#banner0 > div > div > div > div > div > div > div > div > div > p > a').innerHTML = 'Подробнее';
  document.querySelector('#banner0 > div > div > div:nth-child(2) > div > div > div > div > div > div > p > a').innerHTML = 'Подробнее';
}

if (!location.pathname.includes('checkout')) {
  if (document.querySelector('.logo')) {
    const oldNavBar = document.querySelector('.nav.sf-menu');
    const newNavBar = oldNavBar.cloneNode(true);
    document.querySelector('.logo').insertAdjacentHTML('afterend', newNavBar.outerHTML);
    oldNavBar.remove()
  }
}

if (document.querySelector('.header-wrapper')) {
  if (screen.width < 480) {
    document.querySelector('#home > div > header > div.header-wrapper > div.container > div.logo').insertAdjacentHTML('beforebegin', '<div class="header-cart sticky" data-product-added-text="Product added to cart"><div class="cart-wrapper"><div class="fixed_logo" style="display: none"><a href="https://plumber-russia.ru/" role="link"><img src="https://cdn.sellavi.com/image/upload/c_fit,g_center,h_176,q_100,w_430/c_pad,h_176,w_430/v1610975455/ru/clients/103009/9efd6477632506587fe7e3674991edcc6e3a4873.webp" title="Plumber Russia" alt="Plumber Russia"></a></div><div class="dropdown cart_drop_down"><a tabindex="0" href="#" id="cart" data-toggle="dropdown" data-display="static" title="Перейти в корзину" aria-haspopup="true" aria-expanded="false" role="link"><span class="d-none d-lg-inline-block">Корзина</span><i class="fa-shopping-cart far"></i><span class="cart-qty-circle mobile d-block d-lg-none">0</span><span class="cart-qty-circle desktop d-none d-lg-block">0</span></a><div class="dropdown-menu dropdown-menu-right"><div class="cart-items"><div class="cart-items-inner overflow-hidden"><div class="col-12"><div class="cart-content"><div class="row cart-header"><div class="col-12"><p>Ваша корзина, 0 товар/ы</p></div></div><div class="row empty_cart"><div class="col-12"><p>Ваша корзина пуста</p></div></div></div></div></div></div></div></div></div></div>');
  }
}

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'beforeend', 'ИП Балинец Наталья Александровна');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Балинец Наталья Александровна', media);
  req.setTemplate();
}


if (location.href.includes('policy')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Балинец Наталья Александровна',
    document.querySelector('#content > div > div'),
  );
  req.setTemplate();
}

if (location.href.includes('pay-delivery')) {
  const req = new Requisites(
    requsites,
    'afterend',
    'ИП Балинец Наталья Александровна',
    document.querySelector('#content > div > div'),
    dataContact,
  );
  req.setTemplate();
}

// const footerContainer = document.querySelector('.footer-widgets>div>div');

// new SocIconsTypeOne(footerContainer, 'beforeend', socIconsData).render();

// if (document.querySelector('.footer-widgets')) {
//   document.querySelector('#home > div > footer > div.footer-widgets > div.container > div > div.soc-icons > div > div').insertAdjacentHTML('beforebegin', '<div class="title-socIcon">Мы в соцсетях</div>');
// }   

if (document.querySelector('.header-wrapper')) {
  document.querySelector('header > div.header-wrapper > div.container > ul > li.flexy.no_children > a').innerHTML = 'Статьи';
}

if (document.querySelector('.module-blog')) {
  document.querySelector('.wrapper.wrapper-closed > div > section.page-section.breadcrumbs.d-none.d-lg-block > div > ul > li:nth-child(2) > a').innerHTML = 'Статьи';
  document.querySelector('.wrapper.wrapper-closed > div > section.page-section.titles > div > div > h1').innerHTML = 'Статьи';
}

if (document.querySelector('.information-information-6988')) {
  document.querySelector('.information-information-6988 div.wrapper.wrapper-closed > div > section.page-section.breadcrumbs.d-none.d-lg-block > div > ul > li:nth-child(2) > a').innerText = 'Статьи';
}

if (document.querySelector('.checkout-checkout')) {
  document.querySelector('#home > div.content-area > section > div.flexwrap.checkout_form > div.register_block > div.form_checkout > div.seller-comments.form-group > label').innerHTML = 'Добавить комментарий';
}

if (document.querySelector('.common-home')) {
  if (screen.width < 480) {
    document.querySelector('.custom_section').insertAdjacentHTML('afterbegin', '<div class="container"><div class="mobSecondBanner"></div></div>')
  }
}