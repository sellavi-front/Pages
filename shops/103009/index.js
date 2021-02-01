import Requisites from '../../modules/Requisites/Requisites.js';
import {requsites, dataContact } from './utils/requsites.js'
import '../../fixes/js/FooterCopy/FooterCopy.js';
import '../../fixes/js/TranslateAboutUs/TranslateAboutUs.js'
import '../../templates/TemplateTypeTwo/TemplateTypeTwo.js';
import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';
// import SocIconsTypeOne from '../../components/SocialIconsTypeOne/SocialIconsTypeOne.js';
// import socIconsData from './utils/socIconsData.js';
import '../../fixes/js/ChangeAgreement/ChangeAgreement.js';

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

if (document.querySelector('.logo')) {
  const oldNavBar = document.querySelector('.nav.sf-menu');
  const newNavBar = oldNavBar.cloneNode(true);
  document.querySelector('.logo').insertAdjacentHTML('afterend', newNavBar.outerHTML);
  oldNavBar.remove()
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

if (document.querySelector('.header-header')) {
  document.querySelector('.navigation_black_screen').remove();
}