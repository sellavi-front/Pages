// import '../../fixes/fixes.js';

//import ChangeAgreement from '../../fixes/ChangeAgreement/ChangeAgreement.js';
import DeleteElements from '../../modules/DeleteElements/DeleteElements.js';
import BigBanner from '../../modules/BigBanner/BigBanner.js';
import DeleteClasses from '../../modules/DeleteClasses/DeleteClasses.js';
import Requisites from '../../modules/Requisites/Requisites.js';
import ButtonListInHeader from '../../modules/ButtonListInHeader/ButtonListInHeader.js';
import HorizontTitleDecription from '../../components/HorizontTitleDecription/HorizontTitleDecription.js';
import ContactsSimple from '../../components/ContactsSimple/ContactsSimple.js';

import '../../modules/ButtonContainerInProduct/ButtonContainerInProduct.js';

import requsites from './utils/requsites.js';

import '../../components/HeaderTypeOne/HeaderTypeOne.js';


const bootstrapClasses = [
  'col-lg-4',
  'col-xl-3',
  'mb-0',
  'mb-md-4',
  'col-12',
  'col-sm-12',
  'col-sm-6',
  'col-md-6',
  'col-md-3',
  'col-lg-6',
  'col-xl-4',
  'mb-4',
];

if (document.readyState == 'interactive' || document.readyState == 'loading') {
  document.querySelector('html').style.opacity = '0';
}
window.onload = () => {
  document.querySelector('html').style.opacity = '1';
};

if (document.querySelector('.wrapper')) {
  const headerWrapper = document.querySelector('.header-wrapper>div:first-child');
  const cartText = document.querySelector('#cart > span');
  const icoUser = document.querySelector('.icon-user');
  const headerSearch = document.querySelector('.header-search');
  //const buttonList = document.querySelector('.button__list');
  //const navigation = document.querySelector('.navigation-wrapper>div>.navigation');
  const headerLogo = headerWrapper.querySelector('.logo');
  const footerContentText = document.querySelectorAll('.footer_content_text');
  const footerWrapper = document.querySelector('.footer_content_wrapper');
  const footerWidgetsRow = document.querySelector('footer > .footer-widgets > div > .row');
  const footerWidgets = document.querySelector('footer > .footer-widgets > .container');
  const footerWidgetCol1 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(1)',
  );
  const footerWidgetCol2 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(2)',
  );
  const footerWidgetCol3 = document.querySelector(
    'footer > div.footer-widgets > div.container > div > div:nth-child(3)',
  );
  const footerWidgetCol2List = document.querySelector(
    'footer > .footer-widgets > .container > div > div:nth-child(2) > div > ul',
  );
  const footerMetaContainer = document.querySelector('.footer-meta>div');
  const cartLink = document.querySelector('#cart>i');

  const forDelete = [/*icoUser, */cartText, footerWidgetCol2, footerWidgetCol3, footerWidgetCol1];
  const contacts = {
    title: 'Наши контакты',
    phone: '+7(926)525-92-48',
    email: '1981market@mail.ru',
  };

  const buttonsInHeader = new ButtonListInHeader(headerWrapper);
  const deleteElements = new DeleteElements(forDelete);
  const deleteClassesFooter = new DeleteClasses(footerContentText, bootstrapClasses);
  const contactsSimple = new ContactsSimple(contacts, footerWidgetsRow);

  cartLink.insertAdjacentHTML(
    'beforebegin',
    '<img src="https://res.cloudinary.com/gz-company/image/upload/v1606402883/Miru/assets/icons/icons8-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D0%B0_1_1_gqdqiq.png" alt="cart">',
  );
  cartLink.remove();
  headerWrapper.classList.add('container-fluid');
  headerWrapper.classList.remove('container');

  footerMetaContainer.classList.add('container-fluid');
  footerMetaContainer.classList.remove('container');

  // headerLogo.insertAdjacentHTML('afterend', navigation.outerHTML);
  footerWrapper.insertAdjacentHTML('beforeend', footerWidgetCol2List.outerHTML);

  deleteClassesFooter.findAndDelete();
  buttonsInHeader.setTemplate(headerWrapper);
  contactsSimple.render();
  deleteElements.remove();

  //
//  document.querySelector('.sidenav_search').remove();
  document.querySelector('header .header-wrapper > div .header-cart').remove();
  const containerHeader = document.querySelector('.header-wrapper>div');
  const logo = document.querySelector('.logo');

  containerHeader.insertAdjacentHTML('afterbegin', logo.outerHTML);
  logo.remove();

  // const logo2 = document.querySelector('.logo');
  // const sideNavList = document.querySelectorAll('.mobile_side_nav_menu>li');
  // logo2.insertAdjacentHTML('afterend', `<ul class="navigate-menu"></ul>`);

  const list = document.querySelector('.navigate-menu');
  // sideNavList.forEach((el) => list.insertAdjacentHTML('beforeend', el.outerHTML));
  const arrow = document.querySelectorAll('.navigate-menu > li > .arrow');

  arrow.forEach((el) => el.remove());
  const elList = document.querySelectorAll('.navigate-menu>li');
  elList.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      console.log(e.target);
      //              el.closest('header').style.cssText = 'background: rgba(0,0,0,.5); border-bottom: 5px solid white';
      el.querySelector('.panel-collapse').style.cssText =
        'display: block; background: rgba(0,0,0,.5);';
    });

    el.addEventListener('mouseleave', (e) => {
      el.querySelector('.panel-collapse').style.cssText = 'display: none; background: black;';
    });

  });

  const listt = document.querySelectorAll('.flexy .panel-collapse > ul > li > a');

  listt.forEach((el) => {
    const tr = el.textContent;
    const a = tr.slice(2);

    el.textContent = a;
  });
}



if (document.querySelector('.common-home')) {
  const pageSection = document.querySelector('.page-section>.container');
  const logo = document.querySelector('.logo > a > img');

  const objBanner = {
    title: 'Полезные продукты',
    link: 'https://store101470.sellavi.com/%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%8B/',
    linkContent: 'В КАТАЛОГЕ',
  };

  const titleAbout = 'Eco - Маркет';
  const descpSubtitle =
    'Десятилетия назад о "ноль отходов" задумывались только компании-производители. Сегодня "ноль отходов" - это стиль жизни, к которому присоединяются все больше и больше людей.';

  const horizontTitleDecription = new HorizontTitleDecription(
    titleAbout,
    descpSubtitle,
    pageSection,
  );
  const bigBanner = new BigBanner(document, objBanner);

  bigBanner.render();
  horizontTitleDecription.render();

  logo.setAttribute('src', 'https://res.cloudinary.com/dtqqfmyqb/image/upload/v1606729735/photo_2020-11-30_12-33-15_upfzhe.png');
}

if (document.querySelector('.product-item')) {
  const productItem = document.querySelectorAll('.product-item');

  const deleteClassesProd = new DeleteClasses(productItem, bootstrapClasses);

  deleteClassesProd.findAndDelete();
}

/* Реквиизиты */

if (location.href.includes('term-of-use')) {
  const req = new Requisites(requsites, 'afterbegin', 'ИП Аношин Дмитрий Андреевич');

  req.setTemplate();
}

if (location.href.includes('contact')) {
  const media = document.querySelector('.contact-info > .media-list > .media:last-child');

  const req = new Requisites(requsites, 'afterend', 'ИП Аношин Дмитрий Андреевич', media);
  req.setTemplate();
}

if (location.href === 'https://store101470.sellavi.com/?from_admin' && 'https://store101470.sellavi.com/') {
  console.log('test');
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="banner-title-button"><a href="https://store101470.sellavi.com/%D0%B4%D0%BB%D1%8F-%D0%B4%D0%BE%D0%BC%D0%B0/">товары</a></div>');
}

document.querySelector('a.btn').innerText = 'К ТОВАРАМ';
